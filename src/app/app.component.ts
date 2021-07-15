import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  bill: any = '';
  numberOfPeople: any = '';
  selectedTip: any = '';
  tipAmount: number = 0;
  total: number = 0;
  activeButton: number = 0;

  tipValues = [
    { id: 1, value: 5, active: false },
    { id: 2, value: 10, active: false },
    { id: 3, value: 15, active: false },
    { id: 4, value: 25, active: false },
    { id: 5, value: 50, active: false },
  ];

  tipSelected(id: number) {
    let tip: any = this.tipValues.filter((e) => e.id === id);
    this.selectedTip = tip[0].value;

    if (this.bill && this.numberOfPeople) {
      this.tipAmount =
        (this.bill / this.numberOfPeople) * (this.selectedTip / 100);
      this.total = this.bill / this.numberOfPeople + this.tipAmount;
    }
  }

  reset() {
    this.bill = '';
    this.numberOfPeople = '';
    this.selectedTip = 0;
    this.tipAmount = 0;
    this.total = 0;
  }
}
