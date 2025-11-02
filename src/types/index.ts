export type Position =
  | "Frontend Developer"
  | "Backend Developer"
  | "Fullstack Developer"
  | "Product Manager";

export type Status = "New" | "Interview" | "Hired";

export type Candidate = {
  id: number;
  name: string;
  email: string;
  position: Position;
  status: Status;
  experienceYears: number;
};

export type Filters = {
  name: string;
  position: Position | "";
  status: Status | "";
  years: number | "";
};
