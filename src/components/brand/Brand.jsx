import React from 'react';
import './brand.css';
import {google, slack, atlassian, dropbox, shopify} from './image-imports';

const Brand = () => {
  return (
    <div className='gpt3_brand section__padding'>
      <div>
        <img src={google} alt='google-image'/>
      </div>
      <div>
        <img src={slack} alt='slack-image'/>
      </div>
      <div>
        <img src={atlassian} alt='atlassian-image'/>
      </div>
      <div>
        <img src={dropbox} alt='dropbox-image'/>
      </div>
      <div>
        <img src={shopify} alt='shopify-image'/>
      </div>
    </div>
  );
};

export default Brand;
