import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../services/data.service';
import { Vehicle } from '../models/data.model';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div id="container">
      <p>{{ intro }}</p>

      <section id="part1-basics">
        <input type="text" [(ngModel)]="nameValue" />
        <span>{{ nameLabel + nameValue }}</span>
      </section>

      <section id="part2-binding">
        <select [(ngModel)]="selectedBrand">
          @for (car of vehicles(); track car.id) {
            <option [ngValue]="car.id">{{ car.brand }}</option>
          }
        </select>

        <select [(ngModel)]="selectedCar">
          @for (model of currentModels(); track $index) {
            <option>{{ model }}</option>
          }
        </select>
      </section>
    </div>
  `,
  styles: `
    #container {
      display: block;
      width: 660px;
      margin: 2em auto 0;
      padding: 2em;
      background: #fff;
      box-shadow: 0em 0.2em 0.125em grey;
    }
    #container section {
      padding: 1em;
    }
  `,
})
export class FormPage implements OnInit {
  carLabel = '';
  currentModels = computed((): string[] => {
    const vb = this.vehicles().find((v) => v.id === this.selectedBrand);
    return vb ? vb.model : [];
  });
  intro = '';
  nameLabel = '';
  nameValue = '';
  selectedBrand: number | null = null;
  selectedCar: string | null = null;
  vehicles = signal<Vehicle[]>([]);

  dataService = inject(DataService);

  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      this.intro = data.intro;
      this.nameLabel = data.nameLabel;
      this.nameValue = data.nameValue;
      this.selectedBrand = data.selectedBrand;
      this.selectedCar = data.selectedCar;
      this.carLabel = data.carLabel;
      this.vehicles.set(data.vehicles);
    });
  }
}
