export default function ErrorActions() {
  return (
    <div className="actions">
      <a className="btn btn-primary" href="/main/">
        Back to Home
      </a>

      <a
        className="btn btn-secondary"
        href="#"
        onClick={(event) => {
          event.preventDefault();
          window.history.back();
        }}
      >
        Go Back
      </a>
    </div>
  );
}