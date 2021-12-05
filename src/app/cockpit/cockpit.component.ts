import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Server} from "../server/server.component";
import Type = Server.Type;
@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();
  serverType = Server.Type;
  @ViewChild("serverContent", {static: true}) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  addNewServer(serverName: string, serverContent: string, type: Type) {
    let server: Server = {
      name: serverName,
      content: this.serverContentInput.nativeElement.value,
      type: type
    };

    if (server.name && server.content) {
      this.serverCreated.emit(server);
    }
  }

}
