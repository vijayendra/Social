from django.shortcuts import render, get_object_or_404

from rest_framework import viewsets, permissions, generics
from rest_framework.decorators import detail_route, list_route

from django.contrib.auth.models import User
from forum.models import Post, Comment
from .serializers import UserSerializer, PostSerializer, CommentSerializer
from .permissions import IsOwnerOrAuthenticated

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = (IsOwnerOrAuthenticated, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class CommentViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsOwnerOrAuthenticated, )

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)


class MyPostsList(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = (IsOwnerOrAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        return user.posts.all()

class OtherPostsList(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        return Post.objects.exclude(user=user)

class MyCommentsList(generics.ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = (IsOwnerOrAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        return Comment.objects.filter(user=user)

class OtherCommentsList(generics.ListAPIView):
    serializer_class = CommentSerializer
    permission_classes = (permissions.IsAuthenticated, )

    def get_queryset(self):
        user = self.request.user
        return Comment.objects.exclude(user=user)

class CommentOnPostViewSet(viewsets.ModelViewSet):
    queryset = Comment.objects.all()
    serializer_class = CommentSerializer
    permission_classes = (IsOwnerOrAuthenticated, )

    def perform_create(self, serializer):
        post = generics.get_object_or_404(Post, pk=self.kwargs['post'])
        serializer.save(user=self.request.user, post=post)

    def get_queryset(self):
        return Comment.objects.filter(post__pk=self.kwargs["post"])

