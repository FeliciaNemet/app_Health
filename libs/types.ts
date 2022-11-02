export type ContractStatus = "DRAFT" | "ISSUED";

export interface Contract {
  id: string;
  status: ContractStatus;
  created_at: string; // It's an ISO 8601 formatted date and time
  renter: {
    first_name: string;
    last_name: string;
  };
  owner: {
    first_name: string;
    last_name: string;
  };
  asset: {
    value: number;
  };
}

export type CaseStatus = "RECEIVED" | "APPROVED" | "REJECTED";

export interface Case {
  id: string;
  contract_id: string;
  created_at: string; // It's an ISO 8601 formatted date and time
  status: CaseStatus;
  incident_date: string; // It's an ISO 8601 formatted date and time
  refund: number;
  refunded: number;
}
