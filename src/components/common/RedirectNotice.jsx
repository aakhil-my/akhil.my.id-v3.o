export default function RedirectNotice({ seconds }) {
  return (
    <div className="redirect-notice" aria-live="polite">
      <div className="redirect-notice-top">
        <span className="symbol">&gt;</span>
        <span>auto redirect enabled</span>
      </div>

      <p>
        Akan kembali ke <strong>main page</strong> dalam{" "}
        <strong>{seconds} detik</strong>.
      </p>

      <div className="redirect-bar" aria-hidden="true">
        <span style={{ width: `${(seconds / 10) * 100}%` }}></span>
      </div>
    </div>
  );
}