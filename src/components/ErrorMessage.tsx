import "./ErrorMessage.css";

interface ErrorProps {
  message: string;
  onReload?: () => void;
}

export default function ErrorMessage({ message, onReload }: ErrorProps) {
  const handleReload = () => {
    if (onReload) onReload();
    else window.location.reload();
  };

  return (
    <div className="error-card" role="alert" aria-live="assertive">
      <div className="error-title">Something went wrong</div>
      <div className="error-message">{message}</div>
      <button type="button" className="error-reload-btn" onClick={handleReload}>
        Reload
      </button>
    </div>
  );
}
