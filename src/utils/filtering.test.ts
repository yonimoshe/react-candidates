import { describe, it, expect } from "vitest";
import { filterCandidates } from "./filtering";
import type { Candidate, Filters } from "../types";

const mockData: Candidate[] = [
  {
    id: 1,
    name: "Alice",
    email: "a@a.com",
    position: "Frontend Developer",
    status: "New",
    experienceYears: 2,
  },
  {
    id: 2,
    name: "Bob",
    email: "b@b.com",
    position: "Backend Developer",
    status: "Interview",
    experienceYears: 4,
  },
];

describe("filterCandidates", () => {
  it("returns all candidates when filters are empty", () => {
    const filters: Filters = { name: "", position: "", status: "", years: "" };
    const result = filterCandidates(mockData, filters);
    expect(result.length).toBe(2);
  });

  it("filters by name (case-insensitive)", () => {
    const filters: Filters = {
      name: "alice",
      position: "",
      status: "",
      years: "",
    };
    const result = filterCandidates(mockData, filters);
    expect(result).toEqual([mockData[0]]);
  });

  it("filters by position and status", () => {
    const filters: Filters = {
      name: "",
      position: "Backend Developer",
      status: "Interview",
      years: "",
    };
    const result = filterCandidates(mockData, filters);
    expect(result).toEqual([mockData[1]]);
  });

  it("filters by years of experience", () => {
    const filters: Filters = { name: "", position: "", status: "", years: 3 };
    const result = filterCandidates(mockData, filters);
    expect(result).toEqual([mockData[1]]);
  });
});
