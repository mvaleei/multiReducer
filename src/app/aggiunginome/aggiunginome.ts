import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-aggiunginome',
  imports: [
    FormsModule
  ],
  templateUrl: './aggiunginome.html',
  styleUrl: './aggiunginome.css',
})
export class Aggiunginome {


  nomeInserito: string = ""

}
