import Knex from 'knex';

export async function up(Knex: Knex){
    return Knex.schema.createTable('register', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('secund_name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
    })
}

export async function down(Knex: Knex){
    return Knex.schema.dropTable('register')
}