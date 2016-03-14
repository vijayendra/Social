from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    user = models.ForeignKey(User, unique=True, related_name='posts')
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=500)


class Comment(models.Model):
    user = models.ForeignKey(User, related_name='user_comments')
    post = models.ForeignKey('Post', related_name='comments')
    parent = models.ForeignKey('self', related_name='childs', null=True, default=None)
    description = models.CharField(max_length=500)
    
