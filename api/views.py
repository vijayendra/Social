from django.shortcuts import render

from rest_framework import viewsets, permissions
from rest_framework.decorators import detail_route, list_route

from django.contrib.auth.models import User
from forum.models import Post, Comment
from .serializers import UserSerializer, PostSerializer, CommentSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer

class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticated, )


