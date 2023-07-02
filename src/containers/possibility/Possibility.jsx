import React from 'react';
import './possibility.css';
import possibilityImage from '../../assets/possibility.png';

const Possibility = () => {
  return (
    <div className='gpt3_possibility section__padding' id='possibility'>
      <div className='gpt3_possibility-image'>
        <img src={possibilityImage} alt='possibility-image'/>
      </div>
      <div className='gpt3_possibility-content'>
        <h4>request early access to get started</h4>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Unde tempora pariatur delectus aliquid voluptatibus voluptates
          quos harum dolor?
        </p>
        <h4>request early access to get started</h4>
      </div>
    </div>
  );
};

export default Possibility;
