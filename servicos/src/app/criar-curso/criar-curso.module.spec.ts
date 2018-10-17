import { CriarCursoModule } from './criar-curso/criar-curso.module';

describe('CriarCursoModule', () => {
  let criarCursoModule: CriarCursoModule;

  beforeEach(() => {
    criarCursoModule = new CriarCursoModule();
  });

  it('should create an instance', () => {
    expect(criarCursoModule).toBeTruthy();
  });
});
