import { Component } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank-app';

  constructor(private service: TransferenciaService){ // Permite Injetar uma instância Valida no Service

  }

  transferir($event) {
    this.service.adicionarTransferencia($event)
  }
}
