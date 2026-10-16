import type { Work } from '../data/works';
import { WorkCard } from './WorkCard';

type WorkListProps = {
  items: Work[];
};

export function WorkList({ items }: WorkListProps) {
  return (
    <ul className="portfolio__list">
      {items.map((work, index) => (
        <WorkCard key={work.title} work={work} animationIndex={index} />
      ))}
    </ul>
  );
}
