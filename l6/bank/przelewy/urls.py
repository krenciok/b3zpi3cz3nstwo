from django.urls import path

from . import views


urlpatterns = [
    path('make_transfer/', views.make_transfer, name='make_transfer'),
    path('data_confirmation/', views.data_confirmation, name='data_confirmation'),
    path('transfer_confirmation/', views.transfer_confirmation, name='transfer_confirmation'),
    path('transfers/',views.transfers,name='transfers'),
]