from codecs import lookup
from rest_framework import serializers

from .models import Article


class ArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Article
        fields = '__all__'
        lookup_field = 'slug'
