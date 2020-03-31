import React from 'react';

import Loader from 'react-loaders'

import './styles.scss';


class Content extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { articles, pageLoading } = this.props

    return (
      <>
        {
          pageLoading && (
            <div className='loader-wrapper'>
              <div class="lds-ripple"><div></div><div></div></div>
            </div>
          )
        }

        <div className='blog-articles-container'>
          {
            Array.isArray(articles) && articles.map((article) => (
              <article className='blog-card'>
                <header className='header'>
                  <div className='header-image'></div>
                </header>
                <div className='body'>
                  <div className='title'>
                    { article.title }
                  </div>
                  <div className='sub-title'>
                    { article.subtitle }
                  </div>
                  <div className='avatar'>
                    <div className='image'></div>
                    <div className='info-container'>
                      <span className='name'>
                        { article.author === null ? 'Anônimo' : article.author.name }
                      </span>
                      <span className='description'>
                        { article.publish_date } . { article.reading_time } min read
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))
          }
        </div>
      </>
    )
  }
}

export default Content
