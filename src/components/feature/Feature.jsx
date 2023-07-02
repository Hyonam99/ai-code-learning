/* eslint-disable react/prop-types */
import React from 'react';
import './feature.css';

const Feature = ({title, text, render}) => {
  return (
    <div className={`gpt3_feature-container ${render}`}>
      <div className='gpt3_feature-container_title'>
        <div />
        <h1>{title}</h1>
      </div>
      <div className='gpt3_feature-container_text'>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Feature;
