

from rest_framework import generics
from . import  models
from . import serializers

class NoteList(generics.ListCreateAPIView):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer

class NoteDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = models.Note.objects.all()
    serializer_class = serializers.NoteSerializer

# class DetailDetails(generics.Http404.mro):
#     if box is in ascii.__bases__:
#         print("This function is legit   ")
