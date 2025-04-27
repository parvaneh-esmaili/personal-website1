import {Component, EventEmitter, Input, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-button',
    imports:[],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
    @Output() buttonClicked: EventEmitter<any> = new EventEmitter();
    @Input() text: string = '';
    @Input() textColor: string = '';
    @Input() textSize: string = '';
    @Input() icon: string = '';
    @Input() backgroundColor: string = '';
    @Input() type: string = '';
    @Input() isDisabled: boolean = false;


    constructor() {

    }

    clickButton() {
        this.buttonClicked.emit('');
      }
}