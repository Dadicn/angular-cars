import { Component, OnInit } from '@angular/core';


export interface PeriodicElement {
  name: string;
  position: number;
  description: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Mercedes', description: 'A-klasa je automobil sa prednjim pogonom i standardno ima kontrolu proklizavanja (ASR).', symbol: 'Benz A-class'},
  {position: 2, name: 'BMW', description: 'BMW X5 je luksuzni crossover SUV srednje veličine koji proizvodi BMW.', symbol: 'X5'},
  {position: 3, name: 'Audi', description: 'Audi R8 je sportski automobil sa 2 sedišta i srednjim motorom.', symbol: 'R8'},
  {position: 4, name: 'Toyota', description: 'Toyota je lansirala petu generaciju Supre za 2020. godinu - prvu Supre u dve decenije.', symbol: 'Supra'},
  {position: 5, name: 'Hyundai', description: 'Hyundai Genesis je izvršna luksuzna limuzina pune veličine sa četvoro vrata, petoro putnika, zadnjim ili pogonom na sva četiri točka.', symbol: 'Genesis'},
  {position: 6, name: 'Volkswagen', description: 'Volkswagen Atlas je crossover SUV srednje veličine koji proizvodi nemački proizvođač automobila Volkswagen.', symbol: 'Atlas'},
  {position: 7, name: 'Opel', description: 'Opel Insignia je veliki porodični automobil D-segmenta.', symbol: 'Insignia'},
  {position: 8, name: 'Skoda', description: 'Škoda Superb nudi 1 benzinski motor u ponudi.', symbol: 'Superb'},
  {position: 9, name: 'Land Rover', description: 'Land Rover Range Rover (opšte poznat jednostavno kao Range Rover) je automobil 4x4.', symbol: 'Range Rover'},
  {position: 10, name: 'Dacia', description: 'Dačia Sandero je automobil B-segmenta (supermini).', symbol: 'Sandero'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
   
  displayedColumns: string[] = ['demo-position', 'demo-name', 'demo-description', 'demo-symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
