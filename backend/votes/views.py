from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Vote
from .serializers import VoteSerializer

@api_view(['GET'])
def get_votes(request):
    """Get all votes with counts"""
    votes = Vote.objects.all()
    serializer = VoteSerializer(votes, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def get_vote_counts(request):
    """Get vote statistics - counts of like and love"""
    like_count = Vote.objects.filter(vote_type='like').count()
    love_count = Vote.objects.filter(vote_type='love').count()
    total_count = Vote.objects.count()
    
    return Response({
        'like_count': like_count,
        'love_count': love_count,
        'total_count': total_count
    })

@api_view(['POST'])
def create_vote(request):
    """Create a new vote"""
    serializer = VoteSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)