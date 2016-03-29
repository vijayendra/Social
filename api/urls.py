from django.conf.urls import url, include

from rest_framework import routers
from .views import (
    UserViewSet, PostViewSet, MyPostsList,
    OtherPostsList, MyCommentsList, OtherCommentsList,
    CommentOnPostViewSet, LoginView, LogoutView, RegisterView
    )

router = routers.DefaultRouter()
router.register(r'users', UserViewSet)
router.register(r'posts', PostViewSet)

urlpatterns = [
    url(r'', include(router.urls)),
    url(r'^posts/(?P<post>[^/.]+)/comments/$',
        CommentOnPostViewSet.as_view({'get': 'list',
                                      'post': 'create',
                                      }),
        name='comments-on-posts-list'
        ),
    url(r'^posts/(?P<post>[^/.]+)/comments/(?P<pk>[^/.]+)/$',
        CommentOnPostViewSet.as_view({'get': 'retrieve',
                                      'put': 'update',
                                      'delete': 'destroy',
                                      }),
        name='comments-on-posts-detail'),
    url(r'^my/posts/$', MyPostsList.as_view(), name='my-posts-list'),
    url(r'^my/comments/$', MyCommentsList.as_view(), name='my-posts-list'),
    url(r'^other/posts/$', OtherPostsList.as_view(), name='other-posts-list'),
    url(r'^other/comments/$', OtherCommentsList.as_view(), name='other-posts-list'),

    url(r'^login/$', LoginView.as_view(), name='login'),
    url(r'^logout/$', LogoutView.as_view(), name='logout'),
    url(r'^register/$', RegisterView.as_view(), name='logout'),
    ]

