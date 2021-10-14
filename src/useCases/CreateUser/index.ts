import { CreateUserController } from './CreateUserController';
import { CreateUserUseCase } from './CreateUserUseCase';
import { MailtrapMailProvider } from '../../providers/implementations/MailtrapMailProvider';
import { PostgresUsersRepository } from './../../repositories/implementations/PostgresUsersRepository';
const mailtrapProvider = new MailtrapMailProvider();
const postgresUsersRepository = new PostgresUsersRepository();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository,
    mailtrapProvider
);

const createUserController = new CreateUserController(
    createUserUseCase
);

export {createUserUseCase, createUserController}