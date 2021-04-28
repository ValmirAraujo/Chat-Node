import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService {
    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = getCustomRepository(UsersRepository);
    }
    async create(email: string) {

        //verificar se o usuario existe
        const userExists = await this.userRepository.findOne({
            email
        })

        // se existir retorna user
        if (userExists) {
            return userExists;
        }

        const user = this.userRepository.create({
            email
        })

        // se não existir salvar no DB
        await this.userRepository.save(user)

        return user;
    }

    async findByEmail(email: string) {
        const user = await this.userRepository.findOne({ email });

        return user;
    }

}

export { UsersService }