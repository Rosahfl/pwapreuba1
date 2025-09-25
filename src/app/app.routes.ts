// app.routes.ts
import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Home } from './home/home';
import { Contact } from './contact/contact';
import { Button } from './button/button';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
        
      {
        path: '',
        component: Home,
        title: 'Inicio'
      },
      {
        path: 'about',
        component: Button,
        title: 'Acerca de'
      },
      {
        path: 'contact',
        component: Contact,
        title: 'Contacto'
      }
    ]
  },
  // RUTA WILDCARD (importante en producción)
  {
    path: '**',
    redirectTo: ''
  }
];
