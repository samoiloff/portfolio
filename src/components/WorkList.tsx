import { works } from '../data/works';
import { WorkCard } from './WorkCard';

export function WorkList() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">My Works</h2>
      <ul className="portfolio__list">
        {works.map((work) => (
          <WorkCard key={work.title} work={work} />
        ))}
      </ul>
    </section>
  );
}
