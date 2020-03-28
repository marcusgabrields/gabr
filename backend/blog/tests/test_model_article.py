from django.test import TestCase

from ..models import Article


class ArticleBasicTest(TestCase):

    def test_can_create_a_article(self):
        Article.objects.create(
            slug='my-first-blog-post',
            title='My first blog post',
            subtitle='My first blog post',
            content='My first blog post',
            publish_date='2020-12-10',
            reading_time=5.0,
            draft=False,
        )

        self.assertTrue(Article.objects.exists())
