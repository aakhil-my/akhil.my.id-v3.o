export default function ProjectCard({
  path,
  title,
  description,
  tags,
  liveDemo,
  github,
  detail,
}) {
  return (
    <article className="project-card reveal">
      <div className="project-head">
        <div className="panel-dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="project-path">{path}</div>
      </div>

      <div className="project-body">
        <h2 className="project-title">{title}</h2>
        <p className="project-desc">{description}</p>

        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={`${tag}-${index}`} className="tag">
              {tag}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a className="link-button" href={liveDemo}>
            Live Demo
          </a>
          <a className="link-button" href={github}>
            GitHub
          </a>
          <a className="link-button" href={detail}>
            Detail
          </a>
        </div>
      </div>
    </article>
  );
}