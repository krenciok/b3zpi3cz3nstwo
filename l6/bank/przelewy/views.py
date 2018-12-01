from django.shortcuts import render
from .models import Transfer
from django.utils import timezone

# Create your views here.
def make_transfer(request):
    return render(request,'przelewy/make_transfer.html')
def data_confirmation(request):
    if request.method == 'POST':
        sender = request.user.username
        recipient = request.POST['recipient']
        amount = request.POST['amount']
        description = request.POST['description']
        context = {'sender':sender,'recipient':recipient,'amount':amount,'description':description}
        return render(request,'przelewy/data_confirmation.html',context)


def transfer_confirmation(request):
    if request.method == 'POST':
        sender = request.POST['sender']
        recipient = request.POST['recipient']
        description = request.POST['description']
        amount = request.POST['amount']
        date=timezone.now()

        Transfer.objects.create(
            sender=sender,
            recipient=recipient,
            amount=amount,
            description=description,
            created_date=date,
        )
        date2=date.strftime("%d-%m-%y %H:%M:%S")
        context = {'sender':sender,'recipient':recipient,'amount':amount,'date': date2}
        return render(request,'przelewy/transfer_confirmation.html',context)
def transfers(request):
        tr = Transfer.objects.filter(sender=request.user.username)
        tr2 = Transfer.objects.filter(recipient=request.user.username)
        return render(request,'przelewy/transfers.html',{'transfers_out':tr,'transfers_in':tr2})

