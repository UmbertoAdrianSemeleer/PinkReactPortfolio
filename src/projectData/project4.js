import project4 from '../assets/images/project4.svg';

const project4Data = {
  id: 4,
  image: project4,
  title: 'Project 4',
  description: 'This is a description for Project 4.',
  type: 'Type B',
  detail: [
    {
      header: 'The Beach',
      paragraphs: [
        'The Beach is a 2.5D shooting platformer game focused on implementing core mechanics. Players control Officer Dickson, tasked with containing a zombie outbreak. The gameplay involves avoiding crabs and killing zombies to progress. This project aimed to explore 2D and 2.5D game development within a limited timeframe.'
      ]
    }
  ],
  video: 'https://www.youtube.com/embed/example_trailer_video_id',
  documents: [
    {
      name: 'Project 4 Design Document',
      url: '/path/to/project4-design-document.pdf'
    },
    {
      name: 'Project 4 Game Demo',
      url: '/path/to/project4-game-demo.zip'
    }
  ]
};

export default project4Data;
