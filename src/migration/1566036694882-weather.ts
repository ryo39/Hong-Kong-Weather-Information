import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class weather1566036694882 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'weather',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment'
        },
        {
          name: 'coord',
          type: 'text',
          isNullable: true
        },
        {
          name: 'weather',
          type: 'text',
          isNullable: true
        },
        {
          name: 'base',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'main',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'visibility',
          type: 'int',
          isNullable: true
        },
        {
          name: 'wind',
          type: 'text',
          isNullable: true
        },
        {
          name: 'clouds',
          type: 'text',
          isNullable: true
        },
        {
          name: 'dt',
          type: 'int',
          isNullable: true
        },
        {
          name: 'sys',
          type: 'text',
          isNullable: true
        },
        {
          name: 'timezone',
          type: 'int',
          isNullable: true
        },
        {
          name: 'country_id',
          type: 'int',
          isNullable: true
        },
        {
          name: 'name',
          type: 'varchar',
          isNullable: true
        },
        {
          name: 'cod',
          type: 'int',
          isNullable: true
        }
      ]
    }), true)
  }

  public async down (queryRunner: QueryRunner): Promise<any> {
  }
}
