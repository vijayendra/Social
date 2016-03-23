from rest_framework import permissions

class IsOwnerOrAuthenticated(permissions.BasePermission):
    def has_permission(self, request, view):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        if request.user.is_authenticated():
            return True
        return False
    
    def has_object_permission(self, request, view, obj):
        """
        Return `True` if permission is granted, `False` otherwise.
        """
        if not request.user.is_authenticated():
            return False
        if request.method in permissions.SAFE_METHODS:
            return True
        return obj.user == request.user


