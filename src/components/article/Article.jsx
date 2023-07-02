/* eslint-disable react/prop-types */
import React from 'react';
import './article.css';

const Article = ({imgUrl, date, title}) => {
  return (
    <div className='gpt3_blog-article'>
      <div className='gpt3_blog-article-image'>
        <img src={imgUrl} alt='blog-article'/>
      </div>
      <div className='gpt3_blog-article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};

export default Article;
