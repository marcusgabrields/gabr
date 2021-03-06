from django.urls import include, path

from rest_framework import routers

from .views import ArticleViewSet, CategoryViewSet


router = routers.DefaultRouter()
router.register('articles', ArticleViewSet)
router.register('categories', CategoryViewSet)

urlpatterns = [
    path('', include(router.urls))
]
