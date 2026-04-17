import type { CSSProperties } from 'react';
import type { Project } from '../data/projects';

type ProjectBentoProps = {
  project: Project;
};

export function ProjectBento({ project }: ProjectBentoProps) {
  return (
    <div className="project-bento">
      {project.media === 'fallback' ? (
        <div
          className="project-card project-card--media project-card--media-fallback"
          style={
            {
              '--fallback-bg': project.fallbackBg,
            } as CSSProperties
          }
        >
          <span className="project-card-fallback-label">{project.fallbackLabel}</span>
        </div>
      ) : (
        <div className="project-card project-card--media">
          <img
            src={project.imageUrl}
            alt=""
            className="project-card-img"
            width={800}
            height={600}
          />
        </div>
      )}
      <div className="project-card project-card--detail">
        <div className="project-detail-top">
          <span className="project-num">{project.num}</span>
          <div className="project-meta-inline">
            <span className="project-type">{project.type}</span>
            <span className="project-date">{project.date}</span>
          </div>
        </div>
        <h3 className="project-name">{project.name}</h3>
        <p className="project-desc">{project.desc}</p>
        <div className="project-stack">
          {project.stack.map((s) => (
            <span key={s}>{s}</span>
          ))}
        </div>
        <div className="project-actions">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-action-btn proj-action-github"
            >
              GitHub
            </a>
          ) : (
            <span
              className="proj-action-btn proj-action-github proj-action-btn--disabled"
              title="Repo private or coming soon"
            >
              GitHub
            </span>
          )}
          {project.live && !project.liveDisabled ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-action-btn proj-action-live"
            >
              Live demo
            </a>
          ) : (
            <span
              className="proj-action-btn proj-action-live proj-action-btn--disabled"
              title="Demo coming soon"
            >
              Live demo
            </span>
          )}
          {project.postman && (
            <a
              href={project.postman}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-action-btn proj-action-postman"
            >
              Postman
            </a>
          )}
          {project.figma && (
            <a
              href={project.figma}
              target="_blank"
              rel="noopener noreferrer"
              className="proj-action-btn proj-action-figma"
            >
              Figma
            </a>
          )}
          <a
            href={project.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="proj-action-btn proj-action-yt"
          >
            YouTube
          </a>
        </div>
      </div>
    </div>
  );
}
