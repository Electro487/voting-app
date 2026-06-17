from rest_framework import serializers
from .models import Vote

class VoteSerializer(serializers.ModelSerializer):
    """Serializer to convert Vote model to/from JSON"""
    class Meta:
        model = Vote
        fields = ['id', 'vote_type', 'created_at']
        read_only_fields = ['id', 'created_at']