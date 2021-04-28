import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateSettings1619022457948 implements MigrationInterface {

    // é chamado quando o comando yarn typeorm migration:run é chamado no terminal
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "settings",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "username",
                        type: "varchar"
                    },
                    {
                        name: "chat",
                        type: "boolean",
                        default: true
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    },
                ]
            }))
    }

    // é chamado quando o comando yarn typeorm migration:revert é chamado no terminal
    // se no up cria aqui no down desfaz
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("settings");
    }

}
