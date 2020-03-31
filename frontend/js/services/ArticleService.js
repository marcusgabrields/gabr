import api from './api';

class ArticleService {
  static list() {
    return api.get('/blog/articles/');
  }
}

export default ArticleService
