import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  }
)
export class HeaderComponent{

  @Output() selectedTap = new EventEmitter<string>();

  tap(tap:string){
    this.selectedTap.emit(tap);
  }

}
