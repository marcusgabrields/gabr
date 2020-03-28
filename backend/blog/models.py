from django.db import models
from django.utils.translation import ugettext_lazy as _

from common.models import TimeStampedModel


class Article(TimeStampedModel):

    slug = models.SlugField(_('slug'), max_length=300)
    title = models.CharField(_('title'), max_length=255)
    subtitle = models.TextField(_('subtitle'))
    content = models.TextField(_('content'))
    publish_date = models.DateField(_('publish date'))
    reading_time = models.PositiveSmallIntegerField(_('reading time'))
    draft = models.BooleanField(_('draft'), default=True)

    def __str__(self):
        return self.title