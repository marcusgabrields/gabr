import api from './api';

class CategoryService {
  static list() {
    return api.get('/blog/categories/');
  }

  static getArticlesBySlug(slug) {
    return api.get(`/blog/categories/${slug}/`)
  }
}

export default CategoryService
