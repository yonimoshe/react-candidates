import type { Filters, Position, Status } from "../types";

type FiltersProps = {
  filters: Filters;
  onChange: (updated: Partial<Filters>) => void;
  onReset: () => void;
  canReset: boolean;
};

export default function Filters({
  filters,
  onChange,
  onReset,
  canReset,
}: FiltersProps) {
  const { name, position, status, years } = filters;

  const isPositionEnabled = !!name.trim();
  const isStatusEnabled = !!position;
  const isYearsEnabled = true;

  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "1.5rem",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      {/* Name filter */}
      <input
        type="text"
        placeholder="Search by name"
        value={name}
        onChange={(e) => onChange({ name: e.target.value })}
      />

      {/* Position filter */}
      <select
        value={position}
        onChange={(e) => onChange({ position: e.target.value as Position })}
        disabled={!isPositionEnabled}
      >
        <option value="">Select Position</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Fullstack Developer">Fullstack Developer</option>
        <option value="Product Manager">Product Manager</option>
      </select>

      {/* Status filter */}
      <select
        value={status}
        onChange={(e) => onChange({ status: e.target.value as Status })}
        disabled={!isStatusEnabled}
      >
        <option value="">Select Status</option>
        <option value="New">New</option>
        <option value="Interview">Interview</option>
        <option value="Hired">Hired</option>
      </select>

      {/* Years of Experience */}
      <input
        type="number"
        placeholder="Min years"
        value={years}
        min="0"
        onChange={(e) =>
          onChange({ years: e.target.value ? Number(e.target.value) : "" })
        }
        disabled={!isYearsEnabled}
        style={{ width: "100px" }}
      />

      {/* Reset */}
      <button
        type="button"
        onClick={onReset}
        disabled={!canReset}
        aria-label="Reset filters"
        title="Reset filters"
        style={{
          padding: "0.5rem 0.9rem",
          borderRadius: 999,
          border: "1px solid #ddd",
          marginLeft: "auto",
          background: "#fafafa",
          cursor: canReset ? "pointer" : "not-allowed",
          opacity: canReset ? 1 : 0.5,
        }}
      >
        Reset
      </button>
    </div>
  );
}
