import React from 'react';

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
              <div className='lds-ripple'><div></div><div></div></div>
            </div>
          )
        }

        <div className='blog-articles-container'>
          {
            Array.isArray(articles) && articles.map((article) => (
              <article className='blog-card' key={ article.id }>
                <header className='header'>
                  <div
                    style={
                      article.photo === null ? {} : {
                        backgroundImage: `url('${ article.photo }')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }
                    }
                    className='header-image'></div>
                </header>
                <div className='body'>
                  <div className='title'>
                    <a className='link' href="#">{ article.title }</a>
                  </div>
                  <div className='sub-title'>
                    { article.subtitle }
                  </div>
                  <div className='avatar'>
                    <div
                      style={
                        article.author.avatar === null ? {} : {
                          backgroundImage: `url('${article.author.avatar}')`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }
                      }
                      className='image'></div>
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
