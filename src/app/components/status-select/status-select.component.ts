import { PetStatus } from './../../types/app.interfaces';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-status-select',
  templateUrl: './status-select.component.html',
  styleUrls: ['./status-select.component.scss'],
})
export class StatusSelectComponent {
  petStatus = PetStatus;
  @Input()
  title: string = 'Filter by:';

  @Input()
  selectedOption: PetStatus = PetStatus.Available;

  @Output()
  statusSelectChange = new EventEmitter<PetStatus>();

  constructor() {}

  selectStatus(status: PetStatus) {
    this.selectedOption = status;
    this.statusSelectChange.emit(status);
  }
}
