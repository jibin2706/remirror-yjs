import {
  WebSocketGateway,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsException,
  MessageBody,
  SubscribeMessage,
} from '@nestjs/websockets';
import { Server } from 'ws';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { setupWSConnection } from 'y-websocket/bin/utils';

import { EditorService } from './editor.service';

@WebSocketGateway(8000, { path: 'yjs' })
export class EditorGateway implements OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer()
  server: Server;

  constructor(private readonly editorService: EditorService) {}

  handleConnection(connection: WebSocket, request: Request) {
    const queryParams = new URLSearchParams(request.url.split('?')[1]);
    const docName = queryParams.get('docId');

    console.log('connection request, docId:', docName);

    if (!docName) {
      throw new WsException('invalid document id');
    }
    setupWSConnection(connection, request, { docName });
  }

  handleDisconnect(connection: WebSocket) {
    console.log('disconnected');
  }

  @SubscribeMessage(1)
  onOpenEvent(@MessageBody() data: any) {
    console.log(data);
  }

  @SubscribeMessage('auth')
  onAuthEvent(@MessageBody() data: any) {
    console.log(data);
  }
}
