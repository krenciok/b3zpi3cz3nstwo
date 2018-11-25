from django.db import models
from django.utils import timezone

# Create your models here.
class Transfer(models.Model):
    sender = models.CharField(max_length=32)
    recipient = models.CharField(max_length=32)
    amount = models.DecimalField(max_digits=20, decimal_places=15)
    created_date = models.DateTimeField(default=timezone.now)
    def __str__(self):
        return '{} -> {}, {} zł {}.'.format(self.sender, self.recipient, self.amount, self.created_date.strftime("%d-%m-%y %H:%M:%S"))