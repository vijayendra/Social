from pprint import pprint

from django.test import TestCase, Client
from django.core.urlresolvers import reverse

from django.contrib.auth.models import User

from rest_framework.test import APIRequestFactory, APIClient

from forum.models import Post

class BaseClass(TestCase):
    def setUp(self):
        self.password = 'topsecret'
        self.john = User.objects.create(
            username='John',
            email='john@mailinator.com',
            )
        self.john.is_superuser = True
        self.bob = User.objects.create(
            username='Bob',
            email='bob@mailinator.com',
            )
        self.john.set_password(self.password)
        self.john.save()
        self.bob.set_password(self.password)
        self.bob.save()
        self.factory = APIRequestFactory()

class TestForum(BaseClass):
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
        
class TestUserApi(BaseClass):
        
    def test_get_users(self):
        client = APIClient()
        response = client.get(reverse('user-list'))
        self.assertEqual(response.status_code, 200)
        data = response.json()
        self.assertEqual(len(data), 2)
        
    def test_post_users_without_login(self):
        client = APIClient()
        request_data = dict(
            username='Tom',
            password='topsecret',
            email='tom@mailinator.com',
            )
        response = client.post(reverse('user-list'), request_data)
        self.assertEqual(response.status_code, 403)

    def test_post_users_with_login(self):
        client = APIClient()
        client.login(username='John', password=self.password)
        request_data = dict(
            username='Tom',
            password='topsecret',
            email='tom@mailinator.com',
            )
        response = client.post(reverse('user-list'), request_data, format='json')
        self.assertEqual(response.status_code, 201)
        response = client.get(reverse('user-list'))
        data = response.json()
        self.assertEqual(len(data), 3)

    def test_delete_users_with_login(self):
        client = APIClient()
        client.login(username='John', password=self.password)
        request_data = dict(
            username='Bob',
            )
        response = client.delete(reverse('user-detail', kwargs={'pk': self.bob.pk}), request_data, format='json')
        self.assertEqual(response.status_code, 204)
        response = client.get(reverse('user-list'))
        data = response.json()
        self.assertEqual(len(data), 1)
        

    
