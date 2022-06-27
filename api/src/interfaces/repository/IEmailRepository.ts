/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable prettier/prettier */
import EmailModel from '../../model/EmailModel';
import { IRepository } from './IRepository';

export interface IEmailRepository extends IRepository<EmailModel> { }
