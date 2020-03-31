from django.db import models
from django.utils.translation import ugettext_lazy as _

from common.models import TimeStampedModel


class Perfil(TimeStampedModel):

    user = models.OneToOneField(
        'users.User',
        on_delete=models.CASCADE,
        primary_key=True,
        verbose_name=_('user'),
    )
    name = models.CharField(_('name'), max_length=255)
    avatar = models.URLField(_('avatar'), null=True)

    def __str__(self):
        return self.name
