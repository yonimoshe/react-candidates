import "./Loading.css";

export default function Loading() {
  return (
    <div className="loading-container" role="status" aria-live="polite">
      <div className="spinner" />
      <p className="loading-text">Loading data...</p>
    </div>
  );
}
