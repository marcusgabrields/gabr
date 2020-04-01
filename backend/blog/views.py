from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from .serializers import ArticleSerializer, CategorySerializer
from .models import Article, Category


class ArticleViewSet(viewsets.ModelViewSet):

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = ArticleSerializer
    queryset = Article.objects.filter(draft=False)
    lookup_field = 'slug'

    def get_permissions(self):
        if self.action == 'list':
            permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [permissions.IsAuthenticated]

        return [permission() for permission in permission_classes]


class CategoryViewSet(viewsets.ModelViewSet):

    permission_classes = [permissions.IsAuthenticated]
    serializer_class = CategorySerializer
    queryset = Category.objects.all().order_by('priority')
    lookup_field = 'slug'

    def get_permissions(self):
        if self.action in ['list', 'retrive']:
            permission_classes = [permissions.IsAuthenticatedOrReadOnly]
        else:
            permission_classes = [permissions.IsAuthenticated]

        return [permission() for permission in permission_classes]

    def retrieve(self, request, slug=None):

        articles = Article.objects.filter(draft=False, categories__slug__in=[slug])
        serializer = ArticleSerializer(articles, many=True)

        return Response(serializer.data)
