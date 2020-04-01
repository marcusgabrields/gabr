import React from 'react';

import { FaLinkedin, FaGithub, FaTelegram } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

import './styles.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { categories } = this.props

    return (
      <div className='blog-top-section'>
        <div className='main-content'>
          <h2>gab<span>r</span></h2>
          <p>
            Um lugar para acolher os resultados das minhas catarses.
          </p>
        </div>
        <div className='sticky-bottom'>
          <div className='links'>
            <div className='links-container'>
              {
                Array.isArray(categories) && categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => this.props.handleCategory(category.slug)}
                    className='link'
                  >
                    { category.name }
                  </button>
                ))
              }
              <button
                onClick={ () => this.props.handleArticles()}
                className='link'
              >
                TODOS
              </button>
            </div>
          </div>
          <div className='social'>
            <span>QUER FALAR COMIGO?</span>
            <a
              className='link'
              href='https://web.telegram.org/#/im?p=@marcusgabrields'
              target='_blank'
            >
              <FaTelegram />
            </a>
            <a
              className='link'
              href='mailto:gabriel@gabr.me'
              target='_top'
            >
              <FiMail />
            </a>
            <a
              className='link'
              href='https://www.linkedin.com/in/marcus-gabriel-dantas/'
              target='_blank'
            >
              <FaLinkedin />
            </a>
            <a
              className='link'
              href='https://github.com/marcusgabrields'
              target='_blank'
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
