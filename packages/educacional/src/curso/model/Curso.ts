import { Entidade, EntidadeProps } from "shared";
import Aula, { AulaProps } from "./Aula";

export interface CursoProps extends EntidadeProps {
  nome: string;
  nivel: string;
  instrutores: string[];
  aulas: AulaProps[];
}

export default class Curso extends Entidade<Curso, CursoProps> {
    constructor(readonly props: CursoProps) {
        super(props);
    }
    
    static novo(props: Partial<CursoProps>): Curso {
        return new Curso({
        ...props,
        aulas: props.aulas?.map((aula) => Aula.nova(aula)) ?? [],
        } as CursoProps);
    }
    
    get nome(): string {
        return this.props.nome;
    }
    
    get nivel(): string {
        return this.props.nivel;
    }
    
    get instrutores(): string[] {
        return this.props.instrutores;
    }
    
    get aulas(): Aula[] {
        return this.props.aulas.map((aula) => new Aula(aula));
    }
}
