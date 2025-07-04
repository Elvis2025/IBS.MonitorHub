import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../../../core/models/Message';
import { TranslateModule} from '@ngx-translate/core';

@Component({
    selector: 'app-display-alert',
    imports: [CommonModule,TranslateModule],
    templateUrl: './display-alert.html',
    styleUrl: './display-alert.css',
    standalone: true,
})
export class DisplayAlert {
    @Input() msgInfo?: Message;
}
