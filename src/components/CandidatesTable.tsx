import type { Candidate } from "../types/index.ts";
import "./CandidatesTable.css";

type Props = { data: Candidate[] };

export function CandidatesTable({ data }: Props) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Status</th>
            <th>Experience (Years)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((c) => (
            <tr key={c.id || c.email}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.position}</td>
              <td>{c.status}</td>
              <td>{c.experienceYears}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
