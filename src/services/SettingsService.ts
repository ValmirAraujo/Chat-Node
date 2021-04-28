import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface ISettingsCreate {
    chat: boolean;
    username: string;
}

class SettingsService {
    private settingsRepository: Repository<Setting>;

    constructor() {
        this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    // passar os parametro dentro de chaves se chama desestruturação
    async create({ chat, username }: ISettingsCreate) {

        // equivale a: select * from settings where username = "username" limit 1;
        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        const settings = this.settingsRepository.create({
            chat,
            username
        })

        //salva o horario em utc pq é o horario universal, deixa assim até saber em qual serve
        // a aplicação vai rodar
        await this.settingsRepository.save(settings);

        return settings;
    }

    async findByUsername(username: string) {
        const settings = await this.settingsRepository.findOne({
            username
        })

        return settings;
    }

    async update(username: string, chat: boolean) {
        await this.settingsRepository
            .createQueryBuilder()
            .update(Setting)
            .set({ chat })
            .where("username = :username", {
                username
            })
            .execute();
    }
}

export { SettingsService }