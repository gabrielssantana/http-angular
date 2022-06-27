import { IEmailRepository } from '../../interfaces/repository/IEmailRepository';

class UpdateEmailService {
  private emailRepository;

  constructor(emailRepository: IEmailRepository) {
    this.emailRepository = emailRepository;
  }
}

export default UpdateEmailService;
