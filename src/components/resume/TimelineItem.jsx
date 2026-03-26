export default function TimelineItem({
  title,
  role,
  date,
  description,
  meta,
}) {
  return (
    <article className="timeline-item reveal">
      <div className="timeline-card">
        <div className="timeline-top">
          <div>
            <h3>{title}</h3>
            <div className="timeline-role">{role}</div>
          </div>
          <div className="timeline-date">{date}</div>
        </div>
        <p>{description}</p>
        <p className="timeline-meta">{meta}</p>
      </div>
    </article>
  );
}