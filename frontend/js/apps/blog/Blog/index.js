import React from 'react';

import Header from '../Header';
import Content from '../Content';

import { ArticleService } from '../../../services';

import './styles.scss';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      pageLoading: true,
    }
  }

  async componentDidMount() {
    const { data } = await ArticleService.list()
    this.setState({ articles: data, pageLoading: false })
  }

  render() {
    const { articles, pageLoading } = this.state;

    return (
      <>
        <section className='blog-top-wrapper'>
          <Header />
        </section>
        <section className='blog-content-wrapper'>
          <Content
            articles={ articles }
            pageLoading={ pageLoading }
          />
        </section>
      </>
    )
  }
}

export default Blog;
