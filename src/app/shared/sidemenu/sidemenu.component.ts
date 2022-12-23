import { Component } from '@angular/core';

interface MenuIttem {
  texto: string;
  ruta: string;
}

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `,
  ],
})
export class SidemenuComponent {
  templateMenu: Array<MenuIttem> = [
    {
      texto: 'Básicos',
      ruta: './template/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './template/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './template/switches',
    },
  ];

  reactiveMenu: Array<MenuIttem> = [
    {
      texto: 'Básicos',
      ruta: './reactive/basicos',
    },
    {
      texto: 'Dinámicos',
      ruta: './reactive/dinamicos',
    },
    {
      texto: 'Switches',
      ruta: './reactive/switches',
    },
  ];
}
