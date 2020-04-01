import React from 'react';

import Header from '../Header';
import Content from '../Content';

import { ArticleService, CategoryService } from '../../../services';

import './styles.scss';

class Blog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      articles: [],
      categories: [],
      pageLoading: true,
    }

    this.getArticles = this.getArticles.bind(this)
    this.getCategories = this.getCategories.bind(this)
    this.handleArticles = this.handleArticles.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
  }

  async componentDidMount() {
    this.getCategories()
    await this.getArticles()

    this.setState({ pageLoading: false })
  }

  async getArticles() {
    const { data } = await ArticleService.list()
    this.setState({ articles: data })
  }

  async getCategories() {
    const { data } = await CategoryService.list()
    this.setState({ categories: data })
  }

  async handleArticles() {
    this.setState({ pageLoading: true, articles: [] })
    await this.getArticles()
    this.setState({ pageLoading: false })
  }

  async handleCategory(slug) {
    this.setState({ pageLoading: true, articles: [] })
    const { data } = await CategoryService.getArticlesBySlug(slug)
    this.setState({ pageLoading: false, articles: data })
  }

  render() {
    const { articles, categories, pageLoading } = this.state;

    return (
      <>
        <section className='blog-top-wrapper'>
          <Header
            categories={ categories }
            handleArticles={ this.handleArticles }
            handleCategory={ this.handleCategory }
          />
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
