import { IEmailRepository } from '../interfaces/repository/IEmailRepository';
import EmailModel from '../model/EmailModel';

class EmailRepository implements IEmailRepository {
  private emails: EmailModel[];

  constructor() {
    this.emails = [];
  }

  async createAsync(entity: EmailModel): Promise<EmailModel> {
    this.emails.push(entity);
    return Promise.resolve(entity);
  }

  async updateAsync(entity: EmailModel): Promise<EmailModel> {
    const index = this.emails.findIndex(({ id }) => id === entity.id);
    if (index !== -1) {
      this.emails.splice(index, 1, entity);
      return Promise.resolve(entity);
    }
    return Promise.reject(new Error('Email não encontrado.'));
  }

  async deleteAsync(entity: EmailModel): Promise<EmailModel> {
    const index = this.emails.indexOf(entity);
    if (index !== -1) {
      const deleted = this.emails.splice(index, 1);
      return Promise.resolve(deleted[0]);
    }
    return Promise.reject(new Error('Email não encontrado.'));
  }

  async listAsync(): Promise<EmailModel[]> {
    return Promise.resolve(this.emails);
  }

  async findAsync(id: number): Promise<EmailModel | null> {
    const found = this.emails.find(email => email.id === id);
    if (found !== undefined) {
      return Promise.resolve(found);
    }
    return Promise.resolve(null);
  }
}

export default EmailRepository;
