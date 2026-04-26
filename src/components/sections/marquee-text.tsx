"use client";

import {
  useRef,
  useEffect,
  useLayoutEffect,
  useState,
  useMemo,
  useId,
  type FC,
  type PointerEvent as ReactPointerEvent,
} from "react";

interface LinearLoopProps {
  marqueeText?: string;
  speed?: number;
  className?: string;
  direction?: "left" | "right";
  interactive?: boolean;
}

const LinearLoop: FC<LinearLoopProps> = ({
  marqueeText = "",
  speed = 2,
  className,
  direction = "left",
  interactive = true,
}) => {
  const text = useMemo(() => {
    const hasTrailing = /\s|\u00A0$/.test(marqueeText);
    return (
      (hasTrailing ? marqueeText.replace(/\s+$/, "") : marqueeText) + "\u00A0"
    );
  }, [marqueeText]);

  const measureRef = useRef<SVGTextElement | null>(null);
  const tspansRef = useRef<(SVGTSpanElement | null)[]>([]);
  const pathRef = useRef<SVGPathElement | null>(null);
  const frameRef = useRef<number | undefined>(undefined);

  const [pathLength, setPathLength] = useState(0);
  const [spacing, setSpacing] = useState(0);

  const uid = useId();
  const pathId = `linear-path-${uid.replace(/:/g, "")}`;

  const pathD = "M-100,80 L1540,80";

  const dragRef = useRef(false);
  const lastXRef = useRef(0);
  const dirRef = useRef<"left" | "right">(direction);
  const velRef = useRef(0);

  useEffect(() => {
    dirRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (measureRef.current) {
      setSpacing(measureRef.current.getComputedTextLength());
    }
  }, [text, className]);

  useLayoutEffect(() => {
    if (pathRef.current) {
      setPathLength(pathRef.current.getTotalLength());
    }
  }, []);

  useEffect(() => {
    if (!spacing) return;

    const step = () => {
      tspansRef.current.forEach((t) => {
        if (!t) return;
        let x = parseFloat(t.getAttribute("x") || "0");

        if (!dragRef.current) {
          const delta =
            dirRef.current === "right" ? Math.abs(speed) : -Math.abs(speed);
          x += delta;
        }

        const totalWidth = tspansRef.current.length * spacing;
        if (x < -spacing) {
          x = x + totalWidth;
        }
        if (x > totalWidth - spacing) {
          x = x - totalWidth;
        }

        t.setAttribute("x", x.toString());
      });
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);

    return () => {
      if (frameRef.current !== undefined) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [spacing, speed]);

  const repeats =
    pathLength && spacing ? Math.ceil(pathLength / spacing) + 2 : 0;
  const ready = pathLength > 0 && spacing > 0;

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    dragRef.current = true;
    lastXRef.current = e.clientX;
    velRef.current = 0;
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!interactive || !dragRef.current) return;
    const dx = e.clientX - lastXRef.current;
    lastXRef.current = e.clientX;
    velRef.current = dx;

    tspansRef.current.forEach((t) => {
      if (!t) return;
      let x = parseFloat(t.getAttribute("x") || "0");
      x += dx;

      const totalWidth = tspansRef.current.length * spacing;
      if (x < -spacing) {
        x = x + totalWidth;
      }
      if (x > totalWidth - spacing) {
        x = x - totalWidth;
      }

      t.setAttribute("x", x.toString());
    });
  };

  const endDrag = () => {
    if (!interactive) return;
    dragRef.current = false;
    if (Math.abs(velRef.current) > 1) {
      dirRef.current = velRef.current > 0 ? "right" : "left";
    }
  };

  const cursorStyle = interactive
    ? dragRef.current
      ? "grabbing"
      : "grab"
    : "auto";

  return (
    <div
      className="touch-pan-y"
      style={{ visibility: ready ? "visible" : "hidden", cursor: cursorStyle }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onPointerLeave={endDrag}
    >
      <svg
        className="block w-full select-none overflow-visible text-2xl font-bold uppercase leading-none tracking-[0.2em] sm:text-3xl md:text-4xl"
        viewBox="0 0 1440 120"
        aria-hidden
      >
        <text
          ref={measureRef}
          xmlSpace="preserve"
          style={{ visibility: "hidden", opacity: 0, pointerEvents: "none" }}
        >
          {text}
        </text>
        <defs>
          <path
            ref={pathRef}
            id={pathId}
            d={pathD}
            fill="none"
            stroke="transparent"
          />
        </defs>
        {ready && (
          <text xmlSpace="preserve" className={className ?? "fill-current"}>
            <textPath href={`#${pathId}`} xmlSpace="preserve">
              {Array.from({ length: repeats }).map((_, i) => (
                <tspan
                  key={i}
                  x={i * spacing}
                  ref={(el) => {
                    tspansRef.current[i] = el;
                  }}
                >
                  {text}
                </tspan>
              ))}
            </textPath>
          </text>
        )}
      </svg>
    </div>
  );
};

const DEFAULT_COPY =
  "TNFD-ready disclosure · Nature-risk materiality · LEAP & scenario analysis · Audit trails · Enterprise governance · ";

export function MarqueeText() {
  return (
    <section
      className="relative border-y border-white/10 bg-[#020617]/90 py-8 backdrop-blur-sm"
      aria-label="Product highlights"
    >
      <div className="mx-auto w-full max-w-[100vw] overflow-hidden px-0 font-sans">
        <LinearLoop
          marqueeText={DEFAULT_COPY}
          speed={1.1}
          direction="left"
          interactive
          className="fill-zinc-400"
        />
      </div>
    </section>
  );
}
