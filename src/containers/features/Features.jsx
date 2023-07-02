/* eslint-disable import/no-unresolved */
import React from 'react';
import './features.css';

import {featuresData} from '../../mocked-data/mocked-data';
import Feature from '../../components/feature/Feature';

const Features = () => {
  return (
    <div className='gpt3_features section__padding' id='features'>
      <div className='gpt3_features-heading'>
        <h1 className='gradient__text'>
          The future is now and you just need to realize it.<br />
          step into the future today !
        </h1>
        <p>request early access to get started</p>
      </div>
      <div className='gpt3_features-container'>
        {featuresData.map((item, index) =>
          <Feature
            title={item.title}
            text={item.text}
            render={'row'}
            key={item.title + index}
          />,
        )}
      </div>
    </div>
  );
};

export default Features;
