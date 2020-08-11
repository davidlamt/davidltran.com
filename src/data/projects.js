import AntFinderPreviewImage from './images/antfinder.png';
import TailEndVisualizerPreviewImage from './images/tail-end-visualizer.png';
import TheTrueCostPreviewImage from './images/the-true-cost.png';

const projects = [
  {
    title: 'Tail End Visualizer',
    description: 'A visualization tool for how much time you have left.',
    image: TailEndVisualizerPreviewImage,
    alt: 'Screenshot of the Tail End Visualizer application',
    tags: ['react', 'typescript'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/davidlamt/tail-end-visualizer',
      },
      {
        name: 'Live',
        url: 'https://davidlamt.github.io/tail-end-visualizer/',
      },
    ],
  },
  {
    title: 'The True Cost',
    description:
      'Tool for you to lament the true cost of common monthly expenses.',
    image: TheTrueCostPreviewImage,
    alt: 'Screenshot of The True Cost application',
    tags: ['react', 'typescript'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/davidlamt/the-true-cost',
      },
      {
        name: 'Live',
        url: 'https://davidlamt.github.io/the-true-cost/',
      },
    ],
  },
  {
    title: 'AntFinder',
    description:
      'An organized marketplace for UCI students to advertise and purchase various goods.',
    image: AntFinderPreviewImage,
    alt: 'Screenshot of the AntFinder application',
    tags: ['express', 'mongodb', 'node', 'react', 'redux'],
    links: [
      {
        name: 'GitHub',
        url: 'https://github.com/davidlamt/antfinder-api',
      },
      {
        name: 'Live',
        url: 'https://antfinder.herokuapp.com/',
      },
    ],
  },
];

export default projects;
