import LinkCard from "./LinkCard";

export default function LinkGrid({ links }) {
  return (
    <div className="links">
      {links.map((link, index) => (
        <LinkCard key={`${link.title}-${index}`} {...link} />
      ))}
    </div>
  );
}