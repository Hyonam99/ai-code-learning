import React from 'react';
import {Article} from '../../components';
import {blog01, blog02, blog03, blog04, blog05} from './image-imports';
import './blog.css';

const Blog = () => {
  return (
    <div className='gpt3_blog section__padding' id='blog'>
      <div className='gpt3_blog-heading'>
        <h1 className='gradient__text'>
          A lot is happening, we can&apos;t keep calm
        </h1>
      </div>
      <div className='gpt3_blog-container'>
        <div className='gpt3_blog-container_groupA'>
          <Article imgUrl={blog01} date='Sep 06 23' title='Gpt3 and
            OpenAI is the future, let&apos;s explore'/>
        </div>
        <div className='gpt3_blog-container_groupB'>
          <Article imgUrl={blog02} date='Sep 06 23' title='Gpt3 and
            OpenAI is the future, let&apos;s explore'/>
          <Article imgUrl={blog03} date='Sep 06 23' title='Gpt3 and
            OpenAI is the future, let&apos;s explore'/>
          <Article imgUrl={blog04} date='Sep 06 23' title='Gpt3 and
            OpenAI is the future, let&apos;s explore'/>
          <Article imgUrl={blog05} date='Sep 06 23' title='Gpt3 and
            OpenAI is the future, let&apos;s explore'/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
