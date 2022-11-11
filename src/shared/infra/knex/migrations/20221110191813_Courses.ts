import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('courses', tableBuilder => {
    tableBuilder.string('id').primary();
    tableBuilder.string('name').unique().notNullable();
    tableBuilder.string('description').notNullable();
    tableBuilder.string('category_id').notNullable();
    tableBuilder
      .foreign('category_id', 'course_category')
      .references('id')
      .inTable('category')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    tableBuilder
      .dateTime('created_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
    tableBuilder
      .dateTime('updated_at')
      .notNullable()
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'));
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('courses');
}
