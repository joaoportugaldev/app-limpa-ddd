import { Entidade, EntidadeProps } from "shared";

export interface AulaProps extends EntidadeProps {
  nome: string;
  duracao: number;
  videoURL: string;
  visivel: boolean;
  ordem: number;
}

export default class Aula extends Entidade<Aula, AulaProps> {
  constructor(readonly props: AulaProps) {
    super(props);
  }

  static nova(props: Partial<AulaProps>): Aula {
    return new Aula({
      ...props,
      visivel: props.visivel ?? true,
      duracao: props.duracao ?? 0,
      ordem: props.ordem ?? 0,
    } as AulaProps);
  }

  get nome(): string {
    return this.props.nome;
  }

  get duracao(): number {
    return this.props.duracao;
  }

  get videoURL(): string {
    return this.props.videoURL;
  }

  get visivel(): boolean {
    return this.props.visivel;
  }

  get ordem(): number {
    return this.props.ordem;
  }
}
