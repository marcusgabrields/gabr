import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './styles.scss';

const Header = () => (
  <section className='blog-top-section'>
    <div className='sticky-bottom'>
      <div className='links'>
        <div className='links-container'>
          <a className='link' href='#'>EM DESTAQUE</a>
          <a className='link' href='#'>EM DESTAQUE</a>
          <a className='link' href='#'>EM DESTAQUE</a>
        </div>
      </div>
      <div className='social'>
        <a className='link' href="#"><FaGithub /></a>
        <a className='link' href="#"><FaLinkedin /></a>
      </div>
    </div>
  </section>
)

export default Header
