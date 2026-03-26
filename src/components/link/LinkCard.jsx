export default function LinkCard({ title, sub, href, target = "_self" }) {
  const rel = target === "_blank" ? "noreferrer" : undefined;

  return (
    <a className="link-card reveal" href={href} target={target} rel={rel}>
      <span className="link-main">
        <span className="link-title">{title}</span>
        <span className="link-sub">{sub}</span>
      </span>
      <span className="link-icon">&gt;</span>
    </a>
  );
}