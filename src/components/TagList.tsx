type TagListProps = {
  tags: string[];
};

export function TagList({ tags }: TagListProps) {
  return (
    <ul className="portfolio__tags">
      {tags.map((tag) => (
        <li key={tag} className="portfolio__tag">
          {tag}
        </li>
      ))}
    </ul>
  );
}
