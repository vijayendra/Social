from django.test import TestCase

from django.contrib.auth.models import User

from forum.models import Post, Comment

class TestForum(TestCase):
    def setUp(self):
        self.john = User.objects.create(
            username='John',
            password='topsecret',
            email='john@mailinator.com',
            )
        self.bob = User.objects.create(
            username='Bob',
            password='topsecret',
            email='bob@mailinator.com',
            )
    def test_post(self):
        ## User do not have any posts, yet!
        self.assertEqual(self.john.posts.count(), 0)

        ## Lets post one comment
        post = Post.objects.create(
            user=self.john,
            title='My first post',
            description='My first description.',
            )
        self.assert_(post is not None)
        self.assertEqual(post.likes, 0)
        self.assertEqual(self.john.posts.count(), 1)

    def test_comment(self):
        post = Post.objects.create(
            user=self.john,
            title='My first post',
            description='My first description.',
            )
        ## post do not have any comments, yet!
        self.assertEqual(post.comments.count(), 0)
        comment = post.comments.create(
            user=self.bob,
            description='My first comment on first post',
            )
        self.assert_(comment is not None)
        self.assertEqual(comment.likes, 0)
        self.assertEqual(post.comments.count(), 1)
        self.assertEqual(self.bob.user_comments.count(), 1)
        
