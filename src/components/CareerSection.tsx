import { careerExperience } from '../data/career';
import { useFadeUpRef } from '../hooks/useFadeUpRef';

function CareerRow({
  period,
  title,
  detail,
  tag,
  isLast,
}: {
  period: string;
  title: string;
  detail: string;
  tag?: string;
  isLast: boolean;
}) {
  const ref = useFadeUpRef<HTMLDivElement>();
  return (
    <div ref={ref} className="career-row">
      <article className="career-card">
        {tag ? (
          <span className={`career-tag ${tag === 'Ongoing' ? 'career-tag--active' : ''}`}>{tag}</span>
        ) : null}
        <time className="career-period" dateTime={period}>
          {period}
        </time>
        <h3>{title}</h3>
        <p>{detail}</p>
      </article>
      <div className="career-rail" aria-hidden="true">
        <span className="career-dot" />
        {!isLast ? <span className="career-line" /> : null}
      </div>
    </div>
  );
}

export function CareerSection() {
  const items = [...careerExperience].reverse();

  return (
    <section className="career-section" id="career">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-eyebrow">EDUCATION</span>
          <h2 className="section-title">
            My career <span className="career-amp">&amp;</span> experience
          </h2>

        </div>
        <div className="career-track">
          {items.map((m, i) => (
            <CareerRow
              key={m.id}
              period={m.period}
              title={m.title}
              detail={m.detail}
              tag={m.tag}
              isLast={i === items.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
