from django.test import TestCase

from django.contrib.auth.models import User

from forum.models import Post, Comment

class TestForum(TestCase):
    def setUp(self):
        self.user = User.objects.create(
            username='John',
            password='topsecret',
            email='john@mailinator.com',
            )
    def test_post(self):
        post = Post.objects.create(
            user=self.user,
            title='My first post',
            description='My first description.',
            )
        self.assert_(post is not None)
        self.assertEqual(post.likes, 0)

    def test_comment(self):
        post = Post.objects.create(
            user=self.user,
            title='My first post',
            description='My first description.',
            )
        ## post do not have any comments, yet!
        self.assertEqual(post.comments.count(), 0)
        comment = post.comments.create(
            description='My first comment on first post',
            )
        self.assert_(comment is not None)
        self.assertEqual(comment.likes, 0)
        self.assertEqual(post.comments.count(), 1)
        
