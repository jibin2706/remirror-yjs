import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
} from '@nestjs/websockets';
import { Server } from 'ws';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { setupWSConnection } from 'y-websocket/bin/utils';

import { EditorService } from './editor.service';

@WebSocketGateway(8000, { path: 'yjs' })
export class EditorGateway implements OnGatewayConnection {
  @WebSocketServer()
  server: Server;

  constructor(private readonly editorService: EditorService) {}

  handleConnection(connection: WebSocket, request: Request) {
    console.log('connection request made');
    const docName = 'test';
    setupWSConnection(connection, request, { ...(docName && { docName }) });
  }
}
