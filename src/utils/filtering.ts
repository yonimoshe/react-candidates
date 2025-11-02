import type { Candidate, Filters } from "../types";

export function filterCandidates(list: Candidate[], f: Filters): Candidate[] {
  const nameQuery = f.name.trim().toLowerCase();

  const hasName = nameQuery.length > 0;
  const hasPosition = f.position !== "";
  const hasStatus = f.status !== "";
  const hasYears = f.years !== "" && f.years !== null;

  return list.filter((c) => {
    if (hasName && !c.name.toLowerCase().includes(nameQuery)) return false;

    if (hasPosition && c.position !== f.position) return false;

    if (hasStatus && c.status !== f.status) return false;

    if (hasYears && c.experienceYears < Number(f.years)) return false;

    return true;
  });
}

export default filterCandidates;
