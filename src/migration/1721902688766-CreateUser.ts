import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUser1721902688766 implements MigrationInterface {
    name = 'CreateUser1721902688766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "abstract_entity" ("id" SERIAL NOT NULL, CONSTRAINT "PK_55bf07336ea469593601bccfe9a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "listing" ("id" SERIAL NOT NULL, "description" character varying NOT NULL, "rating" integer NOT NULL, CONSTRAINT "PK_381d45ebb8692362c156d6b87d7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "public" boolean NOT NULL DEFAULT true, "listingId" integer, CONSTRAINT "REL_d989034b34992567ecb91ea60a" UNIQUE ("listingId"), CONSTRAINT "PK_d3c0c71f23e7adcf952a1d13423" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "item_comment" ("id" SERIAL NOT NULL, "content" character varying NOT NULL DEFAULT 'Chúng tôi ủng hộ ban', "itemId" integer, CONSTRAINT "PK_3bdf85904e05c2f668f196d99d3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "item" ADD CONSTRAINT "FK_d989034b34992567ecb91ea60a5" FOREIGN KEY ("listingId") REFERENCES "listing"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "item_comment" ADD CONSTRAINT "FK_f535a98783f451d29185ed9385c" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item_comment" DROP CONSTRAINT "FK_f535a98783f451d29185ed9385c"`);
        await queryRunner.query(`ALTER TABLE "item" DROP CONSTRAINT "FK_d989034b34992567ecb91ea60a5"`);
        await queryRunner.query(`DROP TABLE "item_comment"`);
        await queryRunner.query(`DROP TABLE "item"`);
        await queryRunner.query(`DROP TABLE "listing"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "abstract_entity"`);
    }

}
