import project2 from '../assets/images/project2.svg';

const project2Data = {
  id: 2,
  image: project2,
  title: 'Project 2',
  description: 'This is a description for Project 2.',
  type: 'Type B',
  detail: [
    {
      header: 'The Loyalty Program for Lucifer Coffee Roasters',
      paragraphs: [
        'This was my third-semester project, spanning the entire semester. I collaborated with four other team members to create a loyalty program for Lucifer Coffee Roasters using NFC technology.',
        'The assignment was given by Team Liquid, a multi-regional professional esports organization that developed a loyalty program called Liquid+. Our task was to select a company or organization and design a loyalty program for them, aiming to inspire ideas they could implement into their own program.',
        'We chose a small coffee shop called Lucifer Coffee Roasters in Eindhoven. Additionally, we were required to establish a mock brand company and act as a branding agency.',
        'Our process involved visiting the coffee shop, talking to managers and clients to identify what was missing, and studying similar chains like Starbucks. This project took place during the COVID-19 pandemic, which required vaccination proof via a QR code to access the coffee place. However, QR codes were a controversial topic at the time, and there were significant riots in the center of Eindhoven where many local shops were vandalized. As a result, we chose to use NFC tags instead.',
        'According to the managers, most clients preferred visiting the shop in person for the experience and were not interested in online solutions. They also expressed concerns about QR codes due to recent controversies and riots. However, they were open to a combination of physical and online solutions, especially if they were more imaginative and tangible.',
        'As a result, we created "The Loyalties of Lucifer" loyalty program. Customers could earn points by buying certain items or performing specific tasks, such as visiting Lucifer Coffee establishments multiple times a day. We also added a gamification element. What set our program apart was the customizable trinkets with NFC tags, allowing customers to collect and spend points.',
        'My roles in this project included prototyping the loyalty program in Figma, front-end development, and working on the backend to implement the NFC tags into the program. I also worked on the database to support the loyalty system.'
      ]
    }
  ],
  video: 'https://www.youtube.com/embed/example_trailer_video_id',  // Update with the actual video link if available
  documents: [
    {
      name: 'Project 2 Design Document',
      url: '/path/to/project2-design-document.pdf'
    },
    {
      name: 'Project 2 Prototype',
      url: '/path/to/project2-prototype.zip'
    }
  ]
};

export default project2Data;
