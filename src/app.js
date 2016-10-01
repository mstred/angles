import 'babel-polyfill';
import {angular} from 'angular';
import {appCtrl} from './controller'

const app = angular.module('angles', []);

appCtrl();

export default app;