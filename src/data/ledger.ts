export type LedgerRow = {
  id: string;
  location: string;
  sector: string;
  status: "COMPLETE" | "INCOMPLETE";
  complexity: number;
};

export const ledgerRows: LedgerRow[] = [
  {
    id: "LDG-2041",
    location: "Singapore, SG",
    sector: "Finance / MAS",
    status: "COMPLETE",
    complexity: 72,
  },
  {
    id: "LDG-2042",
    location: "London, UK",
    sector: "Energy / FCA",
    status: "INCOMPLETE",
    complexity: 88,
  },
  {
    id: "LDG-2043",
    location: "São Paulo, BR",
    sector: "Agri / CBIO",
    status: "COMPLETE",
    complexity: 61,
  },
  {
    id: "LDG-2044",
    location: "Sydney, AU",
    sector: "RE / APRA",
    status: "INCOMPLETE",
    complexity: 94,
  },
];
