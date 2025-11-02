import { useState } from "react";
import { useFetchData } from "./hooks/useFetchData";
import Loading from "./components/Loading";
import ErrorMessage from "./components/ErrorMessage";
import EmptyState from "./components/EmptyState";
import { CandidatesTable } from "./components/CandidatesTable";
import Filters from "./components/Filters";
import { filterCandidates } from "./utils/filtering";
import type { Filters as FiltersType } from "./types";
import { useDebouncedValue } from "./hooks/useDebouncedValue";
import { DEFAULT_FILTERS } from "./constants/filters";

export default function App() {
  const [filters, setFilters] = useState<FiltersType>(DEFAULT_FILTERS);
  const { data, loading, error } = useFetchData();

  function handleFilterChange(updated: Partial<FiltersType>) {
    setFilters((prev) => ({ ...prev, ...updated }));
  }

  function handleResetFilters() {
    setFilters(DEFAULT_FILTERS);
  }

  const debouncedName = useDebouncedValue(filters.name, 350);
  const nameForFilter = filters.name.trim() === "" ? "" : debouncedName;

  const debouncedFilters: FiltersType = {
    ...filters,
    name: nameForFilter,
  };

  const filteredData = filterCandidates(data, debouncedFilters);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} />;
  if (!data || data.length === 0) return <EmptyState />;

  const canReset =
    filters.name !== DEFAULT_FILTERS.name ||
    filters.position !== DEFAULT_FILTERS.position ||
    filters.status !== DEFAULT_FILTERS.status ||
    filters.years !== DEFAULT_FILTERS.years;

  return (
    <div style={{ padding: 20 }}>
      <Filters
        filters={filters}
        onChange={handleFilterChange}
        onReset={handleResetFilters}
        canReset={canReset}
      />
      {filteredData.length === 0 ? (
        <EmptyState />
      ) : (
        <CandidatesTable data={filteredData} />
      )}
    </div>
  );
}
