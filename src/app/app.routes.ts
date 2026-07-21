// import { Routes } from '@angular/router';
// import { FormPage } from './pages/form';

// export const routes: Routes = [
//   {
//     component: FormPage,
//     path: '',
//   },
// ];

import { Routes } from '@angular/router';
import { Home } from './pages/home';
import { About } from './pages/about';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'about',
    component: About,
  },
];
