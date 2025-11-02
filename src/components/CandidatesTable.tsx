import React from "react";
import type { Candidate } from "../types/index.ts";

type Props = { data: Candidate[] };

export function CandidatesTable({ data }: Props) {
  return (
    <table style={{ width: "100%", borderCollapse: "collapse" }}>
      <thead>
        <tr>
          <th style={th}>Name</th>
          <th style={th}>Email</th>
          <th style={th}>Position</th>
          <th style={th}>Status</th>
          <th style={th}>Experience (Years)</th>
        </tr>
      </thead>
      <tbody>
        {data.map((c, idx) => (
          <tr key={idx}>
            <td style={td}>{c.name}</td>
            <td style={td}>{c.email}</td>
            <td style={td}>{c.position}</td>
            <td style={td}>{c.status}</td>
            <td style={td}>{c.experienceYears}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const th: React.CSSProperties = {
  textAlign: "left",
  borderBottom: "1px solid #ddd",
  padding: 8,
};
const td: React.CSSProperties = {
  borderBottom: "1px solid #f1f1f1",
  padding: 8,
};
