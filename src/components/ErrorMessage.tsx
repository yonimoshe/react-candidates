interface ErrorProps {
  message: string;
}

export default function ErrorMessage({ message }: ErrorProps) {
  return (
    <div style={{ textAlign: "center", padding: "2rem", color: "crimson" }}>
      <p>Error: {message}</p>
    </div>
  );
}
