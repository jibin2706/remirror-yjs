import { Module } from '@nestjs/common';
import { EditorService } from './editor.service';
import { EditorGateway } from './editor.gateway';

@Module({
  providers: [EditorGateway, EditorService],
})
export class EditorModule {}
