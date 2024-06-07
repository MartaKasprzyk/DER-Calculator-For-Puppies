from django.shortcuts import render
from django.views import View
from django.contrib import messages


class HomeView(View):
    def get(self, request):
        return render(request, 'home.html')

    def post(self, request):
        return render(request, 'home.html')

