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
      <div className="portfolio__item">
        <a
          className="portfolio__icon-link"
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
        </a>

        <div className="portfolio__content">
          <a
            className="portfolio__title-link"
            href={href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3 className="portfolio__name">{work.title}</h3>
          </a>
          <p className="portfolio__description">{work.description}</p>
          {work.secondaryLink && (
            <a
              className="portfolio__secondary-link"
              href={work.secondaryLink.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {work.secondaryLink.label}
            </a>
          )}
          <TagList tags={work.tags} />
        </div>
      </div>
    </li>
  );
}
