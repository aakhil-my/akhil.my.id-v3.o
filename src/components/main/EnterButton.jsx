export default function EnterButton() {
  return (
    <a
      href="/about"
      className="page-next-floating"
      data-next-button
      data-main-enter-button
      data-skip-page-transition
    >
      <span>Enter</span>
    </a>
  );
}