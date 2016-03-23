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
    user = UserSerializer(read_only=True, required=False)

    class Meta:
        model = Post
        fields = ('url', 'id', 'user', 'title', 'description',)
        read_only_fields = ('id', )

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(PostSerializer, self).get_validation_exclusions()
        return exclusions + ['user']

class CommentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True, required=False)

    class Meta:
        model = Comment
        fields = ('id', 'user', 'post', 'parent', 'description')
        read_only_fields = ('post',)

    def get_validation_exclusions(self, *args, **kwargs):
        exclusions = super(CommentSerializer, self).get_validation_exclusions()
        return exclusions + ['user']
