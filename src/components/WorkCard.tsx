import type { Work } from '../data/works';
import { assetUrl } from '../data/works';
import { TagList } from './TagList';

type WorkCardProps = {
  work: Work;
};

export function WorkCard({ work }: WorkCardProps) {
  const href = work.href.startsWith('http') ? work.href : assetUrl(work.href);

  return (
    <li>
      <a
        className="portfolio__item"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="portfolio__icon"
          src={assetUrl(work.image)}
          alt={work.imageAlt}
          width={120}
          height={120}
        />
        <div className="portfolio__content">
          <h3 className="portfolio__name">{work.title}</h3>
          <p className="portfolio__description">{work.description}</p>
          <TagList tags={work.tags} />
        </div>
      </a>
    </li>
  );
}
