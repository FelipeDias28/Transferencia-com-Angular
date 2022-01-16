import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter();

  valor: number;
  destino: number;

  transferir() {
    console.log('Solicitada nova transferência!!!');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparCapos();
  }

  limparCapos() {
    this.valor = 0;
    this.destino = 0;
  }
}
