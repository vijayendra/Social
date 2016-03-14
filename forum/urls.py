from django.conf.urls import url, include

from .serializers import register

router = register()

urlpatterns = [
  url(r'^', include(router.urls)),
  ]
