class EmailModel {
  public id: number;

  public email: string;

  public nome: string;

  constructor({ email, nome }: Omit<EmailModel, 'id'>) {
    this.id = 0;
    this.email = email;
    this.nome = nome;
  }
}

export default EmailModel;
