from django.shortcuts import render
from django.views import View
from django.contrib import messages


class HomeView(View):
    def get(self, request):
        return render(request, 'home.html')

    def post(self, request):
        return render(request, 'home.html')
        # puppy_weight = request.POST.get('puppy_weight')
        # adult_weight = request.POST.get('adult_weight')
        # form_send = request.POST.get('calculate')

        # try:
        #     # calculate current RER - Resting Energy Requirement of the puppy
        #     puppy_weight = float(puppy_weight)
        #     adult_weight = float(adult_weight)
        #     if puppy_weight > 0:
        #         rer = int(70 * (puppy_weight ** 0.75))
        #
        #         # calculate the percentage of the adult dog weight
        #         if adult_weight > 0:
        #             percent_of_adult_dog_weight = puppy_weight * 100 / adult_weight
        #
        #             # calculate DER - Daily Energy Requirement  of the puppy
        #             if percent_of_adult_dog_weight <= 50:
        #                 der = 3 * rer
        #             elif 50 < percent_of_adult_dog_weight < 80:
        #                 der = 2.5 * rer
        #             elif 80 < percent_of_adult_dog_weight < 100:
        #                 der = 2 * rer
        #             else:
        #                 der = 1.8 * rer
        #
        #             der = int(der)
        #         else:
        #             messages.error(request, "Adult dog weight must be a number and must be greater than 0.")
        #             return render(request, 'home.html')
        #     else:
        #         messages.error(request, "Puppy weight must be a number and must be greater than 0.")
        #         return render(request, 'home.html')
        #
        # except ValueError:
        #     messages.error(request, "Puppy and adult dog weight must be a number and must be greater than 0.")
        #     return render(request, 'home.html')
        #
        # if form_send == 'send':
        #     percent_of_adult_dog_weight = int(percent_of_adult_dog_weight)
        #     context = {
        #         'percent_of_adult_dog_weight': f"Puppy reached <strong>{percent_of_adult_dog_weight}%</strong> of the "
        #                                        f"adult dog weight.",
        #         'rer': f"Resting energy requirement (RER) = {rer} kcal.",
        #         'der': f"Daily energy requirement (DER) = <strong>{der} kcal</strong>."
        #     }
        #     return render(request, 'home.html', context)
        # else:
        #     return render(request, 'home.html')
