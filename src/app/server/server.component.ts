import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';



export class Server {
  name: string;
  content: string;
  type: Server.Type;
}

export namespace Server {
  export enum Type {
    SERVER,
    BLUEPRINT
  }
}

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  @Input() server: Server;
  @Output() deleteServer: EventEmitter<void> = new EventEmitter<void>();

  serverType = Server.Type;

  constructor(){
  }

  ngOnInit(): void {
  }

}
