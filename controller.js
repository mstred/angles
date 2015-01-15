app.controller("controller", function($scope) {
  $scope.intro = "Tis' the freakin' understandable (and bindable) $scope!";
  $scope.nameLabel = "Name: ";
  $scope.nameValue = "";

  $scope.selectedBrand = null;
  $scope.selectedCar = null;

  $scope.carLabel = "Selected vehicle: ";
  $scope.vehicles = [
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
