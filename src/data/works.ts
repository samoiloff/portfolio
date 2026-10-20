export type WorkLink = {
  label: string;
  href: string;
};

export type Work = {
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  tags: string[];
  secondaryLink?: WorkLink;
};

export const works: Work[] = [
  {
    title: 'Moonactive Playable. Clear The Path.',
    description:
      'PLayable ad project for Family Island Project. Cut trees and open the treasure chest.',
    href: 'html/preview_ClearThePath.html',
    image: 'assets/works/clearThePath.jpg',
    imageAlt: 'Portfolio Project. Clear The Path Playable.',
    tags: ['Typescript', 'Pixi.js', 'pixi-particles'],
  },
  {
    title: 'Moonactive Playable. Slide Merge.',
    description:
      'Playable ad for the Travel Town Project. Click to merge suitcases and fulfil tasks.',
    href: 'html/preview_Slidemerge.html',
    image: 'assets/works/preview_suitcase.jpg',
    imageAlt: 'Portfolio Project. Slide Merge Playable',
    tags: ['TypeScript', 'Pixi.js', 'Three.js', 'Cannon.js', 'GLTF', 'Cursor'],
  },
  {
    title: 'Moonactive Playable. Farm Optimization',
    description:
      'PLayable ad project for Family Island Project. Sell the goods and upgrade the farm.',
    href: 'html/preview_Cafe_Optimization.html',
    image: 'assets/works/preview_farm.jpg',
    imageAlt: 'Portfolio Project. Cafe Optimization.',
    tags: ['Typescript', 'Pixi.js', 'pixi-particles'],
  },
  {
    title: 'Moonactive Playable.Hole Cleanup',
    description:
      'Playable ad project for the Hole Project. Cleanup the grass and collect the items.',
    href: 'html/preview_HOL_CleanUp.html',
    image: 'assets/works/preview_hole.jpg',
    imageAlt: 'Portfolio Project. HOLE CleanUp.',
    tags: ['TypeScript', 'Three.js', 'Cannon.js', 'GLTF', 'Cursor'],
  },
  {
    title: 'Skywind Group Slot. Genie Megareel',
    description: 'Slot game for the Skywind Group. Expanded wilds, expanded reels, free spins and Aladdin-themed gameplay.',
    href: 'https://skywindgroup.com/en-US/game/sw_gemerenigael',
    image: 'assets/works/preview_genie.jpg',
    imageAlt: 'Portfolio Project. Genie Megareel.',
    tags: ['TypeScript', 'Pixi.js', 'Pixi-particles', 'Spine'],
  },
  {
    title: 'Skywind Group Slot. Lepry Bunny',
    description:
      'Leprechaun-themed slot with golden eggs, free spins, and cheerful bonus features.',
    href: 'https://casino.guru/free-casino-games/slots/lepry-bunny-slot-play-free',
    image: 'assets/works/preview_lepry_bunny.jpg',
    imageAlt: 'Portfolio Project. Lepry Bunny slot.',
    tags: ['TypeScript', 'Pixi.js', 'Spine'],
  },
  {
    title: 'Playtech Slot. Archer',
    description:
      'Archer slot for Playtech. All ways, split symbols, free spins, and Robin Hood–themed gameplay.',
    href: 'https://www.bigwinboard.com/archer-playtech-slot-review/',
    image: 'assets/works/preview_archer.jpg',
    imageAlt: 'Portfolio Project. Slot Archer by Playtech.',
    tags: ['TypeScript', 'Pixi.js'],
  },
  {
    title: 'For your fit',
    description: 'Nutrition and fitness website with recipies and calories calculator.',
    href: 'https://4yourfit.by/',
    image: 'assets/works/preview_4yourfit.jpg',
    imageAlt: 'Portfolio Project. For your fit.',
    tags: ['TypeScript', 'React.js', 'Next.js', 'Material UI'],
  },
];

export function assetUrl(path: string): string {
  return `${import.meta.env.BASE_URL}${path}`;
}
