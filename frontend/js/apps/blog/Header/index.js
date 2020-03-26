import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';

import './styles.scss';

const Header = () => (
  <section className='blog-top-section'>
    <div className='main-content'>
      <h2>gab<span>r</span></h2>
      <p>
        Um lugar para acolher os resultados das minhas catarses.
      </p>
    </div>
    <div className='sticky-bottom'>
      <div className='links'>
        <div className='links-container'>
          <a className='link' href='#'>EM DESTAQUE</a>
          <a className='link' href='#'>PYTHON</a>
          <a className='link' href='#'>DJANGO</a>
          <a className='link' href='#'>REST FRAMEWORK</a>
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
