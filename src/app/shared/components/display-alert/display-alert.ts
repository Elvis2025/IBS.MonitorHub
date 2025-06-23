import { Component,EventEmitter, input, Input,Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Constants } from '../../utils/constants';

@Component({
  selector: 'app-display-alert',
  imports: [CommonModule],
  templateUrl: './display-alert.html',
  styleUrl: './display-alert.css',
  standalone: true
})
export class DisplayAlert {
  typeMessage = Constants.TypeMessage.Alert;
  @Input() message: string = 'ha ocurrido una exepción.';
  @Input() title: string = this.typeMessage.Title;
  @Input() backgroundColor: string = this.typeMessage.BackgroundColor;
  @Input() textColor: string = this.typeMessage.TextColor
  @Input() icon: string = this.typeMessage.Icon;
  @Input() acceptButton: string = 'Aceptar';
  @Input() cancelButton: string = 'Cancelar';
  @Input() showCancel: boolean = true;

  @Output() accept = new EventEmitter<void>();
  @Output() cancel = new EventEmitter<void>();

  onAccept(){
    console.log("onAccept")
    this.accept.emit();
  }

  onCancel(){
    console.log("onCancel")
    this.cancel.emit();
  }
}
