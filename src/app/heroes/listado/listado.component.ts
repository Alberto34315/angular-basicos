import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Capitán América',
  ];
  heroesBorrados: string[] = [];
  hb: string = '';
  borrarHeroe() {
    this.hb = this.heroes.pop() || '';
    this.heroesBorrados.push(this.hb);
  }
}
