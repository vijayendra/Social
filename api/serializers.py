from rest_framework import serializers

from django.contrib.auth.models import User
from forum.models import Post, Comment

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('url', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user
    
class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('url', 'id', 'user', 'title', 'description',)
        extra_kwargs = {'user': {'read_only': True}}

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('url', 'id', 'user', 'post', 'parent', 'description')
        extra_kwargs = {'user': {'read_only': True}}
