import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-service',
  templateUrl: './practice-service.component.html',
  styleUrl: './practice-service.component.css'
})
export class PracticeServiceComponent {
 practiceServices = [
    { category: 'Well-man Check', services: ['Blood Pressure / ECG', 'Blood tests', 'Weight-loss / Diabetes', 'Cancer screening – Prostate/ Lung / Testes / Moles', 'Stress / Lifestyle / Depression', 'Fertility / Infertility', 'STI screening'] },
    { category: 'Well-woman Check', services: ['Cervical smears', 'Pre / Ante Natal care', 'Pregnancy testing', 'Menopause and Osteoporosis', 'Obesity / Weight Loss', 'Cervical Vaccination – Gardisil', 'STI screening'] },
    { category: 'Babies and Children', services: ['Immunisation Clinic', 'Development Check'] },
    { category: 'Cryotherapy', services: ['Removal of warts and verrucas', 'Removal of skin tags'] },
    { category: 'Other Services', services: ['Medicals – Insurance / Driving / Pre-employment / Legal', 'Travel Vaccinations', 'Tetanus Vaccinations', 'Blood and Urine testing', '24 hour Blood Pressure Monitoring', 'Ear syringing', 'Dressings', 'Suture removal', 'BP check'] }
  ];
}
