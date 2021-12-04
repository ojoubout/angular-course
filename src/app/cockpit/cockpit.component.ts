import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Server} from "../server/server.component";

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<Server>();

  serverName: string;
  serverContent: string;

  constructor() { }

  ngOnInit(): void {
  }

  addNewServer(type: Server.Type) {
    let server: Server = {
      name: this.serverName,
      content: this.serverContent,
      type: type
    };

    this.serverCreated.emit(server);
  }

}
