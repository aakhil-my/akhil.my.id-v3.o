export default function FloatingNextButton({ href, label, isVisible = false }) {
  return (
    <a
      href={href}
      className={`page-next-floating ${isVisible ? "is-visible" : ""}`}
      data-next-button
    >
      <span>{label}</span>
    </a>
  );
}