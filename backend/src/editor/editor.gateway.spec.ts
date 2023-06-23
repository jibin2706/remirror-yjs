import { Test, TestingModule } from '@nestjs/testing';
import { EditorGateway } from './editor.gateway';
import { EditorService } from './editor.service';

describe('EditorGateway', () => {
  let gateway: EditorGateway;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EditorGateway, EditorService],
    }).compile();

    gateway = module.get<EditorGateway>(EditorGateway);
  });

  it('should be defined', () => {
    expect(gateway).toBeDefined();
  });
});
