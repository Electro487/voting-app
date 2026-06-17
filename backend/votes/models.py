from django.db import models

class Vote(models.Model):
    """Model to store user votes - can be 'like' or 'love'"""
    LIKE = 'like'
    LOVE = 'love'
    
    VOTE_CHOICES = [
        (LIKE, 'I like it'),
        (LOVE, 'I love it'),
    ]
    
    vote_type = models.CharField(
        max_length=10,
        choices=VOTE_CHOICES,
        default=LIKE
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.get_vote_type_display()} - {self.created_at}"
    
    class Meta:
        ordering = ['-created_at']
