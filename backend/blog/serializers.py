from rest_framework import serializers

from perfil.serializers import PerfilSerializer
from .models import Article


class ArticleSerializer(serializers.ModelSerializer):

    author = PerfilSerializer()
    publish_date = serializers.DateField(format='%b %d, %Y')

    class Meta:
        model = Article
        lookup_field = 'slug'
        fields = ['slug', 'title', 'subtitle', 'publish_date', 'reading_time',
                  'author']
