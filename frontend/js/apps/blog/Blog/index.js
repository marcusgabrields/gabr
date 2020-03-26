import React from 'react';

import Header from '../Header';
import Content from '../Content';

import './styles.scss';

const Blog = () => (
  <>
    <section className='blog-top-wrapper'>
      <Header />
    </section>
    <section className='blog-content-wrapper'>
      <Content />
    </section>
  </>
)

export default Blog
