import type { Work } from './works';

export const labs: Work[] = [
  {
    title: 'MoonActive. Test task.',
    description:
      'Test assignment for Moonactive (03-2023). Position: Playable Ads developer.',
    href: 'https://samoiloff.github.io/moonactive-pages/',
    secondaryLink: {
      label: 'GitHub Repo',
      href: 'https://github.com/samoiloff/moonactive',
    },
    image: 'assets/works/moonactive.jpg',
    imageAlt: 'Laboratory project. Test task for MoonActive.',
    tags: ['TypeScript', 'Node.js', 'pixi.js'],
  },
  {
    title: 'Tripledot. Test task.',
    description:
      'Test assignment for Tripledot (08-2026). Position: Playable Ads developer.',
    href: 'html/wordscapes_preview.html',
    image: 'assets/works/tripledot.jpg',
    imageAlt: 'Laboratory project. Test task for Tripledot.',
    tags: ['TypeScript', 'Node.js', 'pixi.js'],
  },
];
