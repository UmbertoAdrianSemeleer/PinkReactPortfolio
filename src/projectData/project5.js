import project5 from '../assets/images/project5.svg';

const project5Data = {
  id: 5,
  image: project5,
  title: 'Project 5',
  description: 'This is a description for Project 5.',
  type: 'Type A',
  detail: [
    {
      header: 'The Sun Killer',
      paragraphs: [
        'This project was an introductory assignment in game design, aimed at familiarizing participants with fundamental game design concepts and the Unity platform. The result was a simple first-person shooter (FPS) game called "Sun Killer." In "Sun Killer," players take on the role of Pluto, seeking revenge against the Sun for burning his wife, Charon.'
      ]
    }
  ],
  video: 'https://www.youtube.com/embed/example_trailer_video_id',  // Update with the actual video link if available
  documents: [
    {
      name: 'Project 5 Design Document',
      url: '/path/to/project5-design-document.pdf'
    },
    {
      name: 'Project 5 Game Demo',
      url: '/path/to/project5-game-demo.zip'
    }
  ]
};

export default project5Data;
