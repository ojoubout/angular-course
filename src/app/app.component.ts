import {Component} from '@angular/core';
import {Server} from "./server/server.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers: Server[] = [];
  ServerType = Server.Type;
  onNewServerCreated(server: Server) {
    console.log("New Item");
    this.servers.push(server);
  }

  deleteServer(index: number) {
    console.log("Delete: " + index);
    this.servers.splice(index, 1);
  }
}
