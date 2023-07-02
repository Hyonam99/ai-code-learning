import React from 'react';
import './whatGPT3.css';
// eslint-disable-next-line import/no-unresolved
import Feature from '../../components/feature/Feature';

const WhatGPT3 = () => {
  return (
    <div className='gpt3_wgpt3 section__margin' id='wgpt3'>
      <div className='gpt3_wgpt3-feature'>
        <Feature
          title={'What is GPT-3'}
          text={`Lorem ipsum dolor sit, 
        amet consectetur adipisicing elit. Eaque ratione earum nulla 
        incidunt eius nihil neque expedita deserunt quos maiores. 
        Iure libero asperiores facere ipsam.`}
          render={'row'}
        />
      </div>
      <div className='gpt3_wgpt3-heading'>
        <h1 className='gradient__text'>
          The possibilities are beyond your imagination
        </h1>
        <p>Explore the library</p>
      </div>
      <div className='gpt3_wgpt3-container'>
        <div className='gpt3_features-container_feature'>
          <Feature
            title={'Chat-bots'}
            text={`Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aspernatur culpa saepe repudiandae 
          aperiam inventore vitae?`}
            render={'column'}
          />
        </div>
        <div className='gpt3_features-container_feature'>
          <Feature
            title={'Knowledge-Base'}
            text={`Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aspernatur culpa saepe repudiandae 
          aperiam inventore vitae?`}
            render={'column'}
          />
        </div>
        <div className='gpt3_features-container_feature'>
          <Feature
            title={'Education'}
            text={`Lorem ipsum dolor sit amet 
          consectetur adipisicing elit. Aspernatur culpa saepe repudiandae 
          aperiam inventore vitae?`}
            render={'column'}
          />
        </div>
      </div>
    </div>
  );
};

export default WhatGPT3;
