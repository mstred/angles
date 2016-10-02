import 'babel-polyfill';
import angular from 'angular';
import data from './data';

const app = angular.module('angles', []);

app.controller("controller", ($scope) => {
  $scope = angular.merge($scope, data);
});
