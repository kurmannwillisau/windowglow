import { Injectable } from '@angular/core';
import { Expedition } from '../expedition';
import { EXPEDITIONLIST } from '../mock-expedition-list';

@Injectable({
  providedIn: 'root'
})
export class ExpeditionService {

  _selectedExpedition: Expedition;

  getExpeditions(): Expedition[] {
    return EXPEDITIONLIST;
  }

  setSelectedExpedition(expedition: Expedition): void {
    this._selectedExpedition = expedition;
  }

  getSelectedExpedition(): Expedition {
    return this._selectedExpedition;
  }

  constructor() { }
}
