import 'babel-polyfill';
import app from './app';

app.controller("Controller", function() {
  this.intro = 'Tis\' the freakin\' understandable (and bindable) "controller-as" scope!';
  this.nameLabel = "Name: ";
  this.nameValue = "";

  this.selectedBrand = null;
  this.selectedCar = null;

  this.carLabel = "Selected vehicle: ";
  this.vehicles = [
    {
      id: 0,
      brand: 'Chevrolet',
      model: ['Celta', 'Onix', 'Cruze']
    },
    {
      id: 1,
      brand: 'Fiat',
      model: ['Uno', 'Palio', 'Punto', 'Bravo']
    },
    {
      id: 2,
      brand: 'Ford',
      model: ['Ka', 'Fiesta', 'Focus']
    },
    {
      id: 3,
      brand: 'Volkswagen',
      model: ['Up', 'Gol', 'Fox', 'Golf']
    }
  ];
});
