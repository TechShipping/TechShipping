import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  produtos;
  datos;
  constructor() {}

  ngOnInit() {
    this.produtos = [
      {
        img: 'assets/images/audifonos.jpg',
        titulo: 'Cloud Stinger™',
        subtitulo: 'Comodidada ligera. Sonido potente.',
      },
      {
        img: 'assets/images/luz.jpg',
        titulo: 'Fury DDR4 RGB',
        subtitulo: 'Unleash your style. Unsleash your FURY.',
      },
      {
        img: 'assets/images/audifonoswhite.jpg',
        titulo: 'HyperX Cluoud Mix',
        subtitulo: 'Game and go.',
      },
      {
        img: 'assets/images/audifonos_hx.jpg',
        titulo: 'HyperX Cloud Alpha',
        subtitulo: 'More Chambers for Less Distrirtion',
      },
    ];

    this.datos = [
      {
        tipo: 'AUDIO',
        prod: ['Earbuds', 'Quadcast'],
      },
      {
        tipo: 'AURICULARES',
        prod: [
          'Cloud Revolver',
          'Cloud Series',
          'Cloud Stinger',
          'Cloud Alpha S',
          'Cloud Alpha',
          'CloudX Stinger',
          'CloudX Chat',
          'Cloud Stinger (inalámbricos)',
          'Cloud Orbit',
          'Cloud Flight S',
        ],
      },
      {
        tipo: 'ALIMENTACIÓN',
        prod: [
          'ChargePlay Duo',
          'ChargePlay Duo (Xbox)',
          'ChargePlay Quad',
          'ChargePlay Clutch',
          'ChargePlay Clutch para dispositivos móviles',
        ],
      },
      {
        tipo: 'ABOUT HP',
        prod: [
          'Acerca de nosotros',
          'Notas de prensa',
          'Privacidad',
          'Opciones de cookies y publicidad',
          'Contacte con HP',
        ],
      },
      {
        tipo: 'SOPORTE',
        prod: [
          'Donde Comprar',
          'Declaración de garantía limitada',
          'Contacto con el centro de asistencia técnico',
        ],
      },
      {
        tipo: 'TECLADOS',
        prod: [
          'Alloy Core RGB',
          'Alloy FPS Pro',
          'Alloy FPS RGB',
          'Alloy Origins Core',
          'Alloy Origins',
          'Alloy Elite',
          'Alloy Origins 60',
          'Alloy Elite 2',
          'Acesorios Teclado',
        ],
      },
      {
        tipo: 'RATONES',
        prod: ['Pulsefire FPS Pro', 'Pulsefire Surge', 'Pulsefire Core'],
      },
      {
        tipo: 'ALFOMBRILLAS DE RATÓN',
        prod: ['FURY Ultra', 'FURY S', 'FURY S Speed edition'],
      },
    ];
  }
}
