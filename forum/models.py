from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    user = models.ForeignKey(User, related_name='posts')
    title = models.CharField(max_length=200)
    description = models.TextField()

    class Meta:
        get_latest_by = 'id'
        ordering = ('-id',)

    def __unicode__(self):
        return "<Post(%s): %s>" % (self.pk, self.title)


class Comment(models.Model):
    user = models.ForeignKey(User, related_name='user_comments')
    post = models.ForeignKey('Post', related_name='comments')
    parent = models.ForeignKey('self', related_name='childs', null=True, default=None)
    description = models.TextField()

    def __unicode__(self):
        return "<Comment(%s): %s>" % (self.pk, self.description)

    
