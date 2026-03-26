import TimelineItem from "./TimelineItem";

export default function ResumeColumn({ command, title, items }) {
  return (
    <div className="resume-column reveal">
      <div className="column-header">
        <div>
          <div className="command-line">
            <span className="symbol">&gt;</span>
            <span>{command}</span>
          </div>
          <h2 className="column-title">{title}</h2>
        </div>
      </div>

      <div className="timeline">
        {items.map((item, index) => (
          <TimelineItem key={`${item.title}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
}