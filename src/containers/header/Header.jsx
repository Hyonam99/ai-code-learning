import React from 'react';
import './header.css';
import People from '../../assets/people.png';
import Ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3_header section__padding gradient__bg' id='home'>
      <div className='gpt3_header-content'>
        <h1 className='gradient__text'>
          {`Let's Build Something Amazing With GPT-3 OpenAI`}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus ut aspernatur eligendi id molestias iure hic,
          explicabo neque cumque architecto ea quo recusandae quaerat minus,
          officia soluta! Cumque, quam exercitationem.
        </p>
        <div className='gpt3_header-content_input'>
          <input type='email' placeholder='Enter Your Email Address'/>
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3_header-content_people'>
          <img src={People} alt='people-image'/>
          <p>200 people requested access to this site in the past 24 hours</p>
        </div>
      </div>
      <div className='gpt3_header-image'>
        <img src={Ai} alt='ai-image'/>
      </div>
    </div>
  );
};

export default Header;
