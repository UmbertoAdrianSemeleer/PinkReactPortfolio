import React from 'react';
import './styles/AboutMe.css';
import myPhoto from './assets/images/myPhoto.jpg'; // Ensure this path is correct

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="my-photo-container">
          <img src={myPhoto} alt="My Face" className="my-photo" />
        </div>
        <h1>About Me</h1>
        <p>Hello there! I'm thrilled you’re here. I’m a passionate UX/UI designer, game designer, and product developer who believes in the power of technology to transform lives. My mission is to make health, education, and digital accessibility more engaging and enjoyable through gamification.</p>
        <p>My journey started on the sunny island of Aruba, where I first worked as an electrician and dabbled in real estate. Those experiences taught me a lot, but I craved more. So, I packed my bags and moved to the Netherlands to pursue my dream of becoming an industrial electrical engineer. I’ve always had a love for big machines and the intricate workings of industrial systems.</p>
        <p>During my studies, I stumbled upon programming and was instantly hooked. This newfound interest led me to switch gears and dive into the world of ICT at Fontys University of Applied Sciences. Here, I discovered the fascinating intersection of technology and design, and I haven’t looked back since.</p>
        <p>I’m passionate about creating solutions that not only solve problems but also bring joy to users. Whether it’s through designing intuitive interfaces, developing educational games, or crafting innovative products, my goal is to make technology accessible and fun for everyone.</p>
        <p>Thanks for stopping by my portfolio. I can’t wait to connect with you and see how we can create amazing experiences together!</p>
      </div>
    </div>
  );
};

export default AboutMe;
