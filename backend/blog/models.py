from django.db import models
from django.utils.translation import ugettext_lazy as _

from common.models import TimeStampedModel


class Article(TimeStampedModel):

    slug = models.SlugField(_('slug'), max_length=300, unique=True)
    photo = models.URLField(_('photo'), null=True)
    title = models.CharField(_('title'), max_length=255)
    subtitle = models.TextField(_('subtitle'))
    content = models.TextField(_('content'))
    publish_date = models.DateField(_('publish date'))
    reading_time = models.PositiveSmallIntegerField(_('reading time'))
    draft = models.BooleanField(_('draft'), default=True)
    categories = models.ManyToManyField(
        'blog.Category',
        verbose_name=_('categories'),
    )
    author = models.ForeignKey(
        'perfil.Perfil',
        on_delete=models.SET_NULL,
        verbose_name=_('author'),
        null=True,
    )

    def __str__(self):
        return self.title


class Category(TimeStampedModel):

    FEATURED = 0
    HIGH = 1
    MEDIUM = 2
    LOW = 3
    PRIORITY_CHOICES = (
        (FEATURED, 'Featured'),
        (HIGH, 'High'),
        (MEDIUM, 'Medium'),
        (LOW, 'Low'),
    )

    slug = models.SlugField(_('slug'), max_length=50, unique=True)
    name = models.CharField(_('title'), max_length=30)
    priority = models.IntegerField(_('priority'), choices=PRIORITY_CHOICES)

    def __str__(self):
        return self.name
