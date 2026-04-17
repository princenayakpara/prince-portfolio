import { useState } from 'react';
import { ProjectBento } from '../components/ProjectBento';
import { projects } from '../data/projects';
import './extra.css';

const tabs: { id: string; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'games', label: 'Games' },
  { id: 'clones', label: 'Clones' },
  { id: 'fullstack', label: 'Full Stack' },
  { id: 'frontend', label: 'Frontend' },
];

export function Projects() {
  const [filter, setFilter] = useState('all');

  return (
    <main style={{ padding: '60px 0 80px' }}>
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">CASE STUDIES</span>
          <h1 className="section-title">All projects</h1>
        </div>
        <div className="proj-tabs">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`proj-tab ${filter === t.id ? 'active' : ''}`}
              onClick={() => setFilter(t.id)}
            >
              {t.label}
            </button>
          ))}
        </div>
        <div className="project-list" id="projectList">
          {projects.map((p) => {
            const show = filter === 'all' || p.categories.includes(filter);
            if (!show) return null;
            return (
              <div key={p.id} className="project-item" data-cat={p.categories.join(' ')}>
                <ProjectBento project={p} />
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
