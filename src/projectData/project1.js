import project1 from '../assets/images/project1.svg';

const project1Data = {
  id: 1,
  image: project1,
  title: 'The Future company',
  description: 'This is a description for Project 1.',
  type: 'Type A',
  detail: [
    {
      header: 'Simptel internship',
      paragraphs: [
        'Simptel, a software development company, specializes in Voice over Internet Protocol (VoIP) products tailored for business-to-business markets.'
      ]
    },
    {
      header: 'My Role and Responsibilities',
      paragraphs: [
        'As a UX designer, my main assignment was to design a comprehensive user experience and interface for vendors on a platform called “The Future Company.” This platform, developed by Simptel, is a marketplace where IT resellers and Managed Service Providers (MSPs) can purchase from various suppliers and sell their services. It seamlessly integrates VoIP technology with a customer management system, offering tools for vendors to manage customers, sell products, and track finances efficiently.'
      ]
    },
    {
      header: 'Challenges and Learning Experience',
      paragraphs: [
        'Initially, the transition to a UX design internship was challenging since I had prepared for a game design role. However, I saw this as an opportunity to step out of my comfort zone. Despite my limited experience with Figma, mobile design, and business concepts, I embraced the challenge. Simptel supported my growth by providing a Figma course and my colleagues shared valuable tips and tricks, helping me become proficient in Figma.',
        'Throughout the internship, I gained extensive knowledge about the VoIP business, online payments, white-label platforms, and Identity and Access Management (IAM) terminology. Working remotely with an international team, particularly with Simptel’s branch in India, was an enriching experience that taught me to navigate different time zones, cultures, and language barriers.'
      ]
    },
    {
      header: 'Achievements',
      paragraphs: [
        'Even though the platform was too large to complete during my internship, I managed to solve a major problem for the company. After careful research, I suggested using the Stripe API as an alternative to their in-house payment system. This idea made their process much easier and earned me the highest grade possible for my internship.',
        'Overall, my time at Simptel was an amazing experience that greatly improved my UX/UI design skills and gave me valuable insights into the industry.'
      ]
    }
  ],
  video: 'https://www.youtube.com/embed/example_video_id',
  documents: [
    {
      name: 'Project 1 Report',
      url: '/path/to/project1-report.pdf'
    },
    {
      name: 'Project 1 Design',
      url: '/path/to/project1-design.pdf'
    }
  ]
};

export default project1Data;
