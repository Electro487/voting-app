from django.urls import path
from . import views

urlpatterns = [
    path('votes/', views.get_votes, name='get_votes'),
    path('votes/counts/', views.get_vote_counts, name='get_vote_counts'),
    path('votes/create/', views.create_vote, name='create_vote'),
]