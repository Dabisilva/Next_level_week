import Knex from 'knex';

export async function up(Knex: Knex){
    return Knex.schema.createTable('favorite', table => {
        table.boolean('favorites')
        
        table.integer('user_id').notNullable()

        table.integer('teacher_id').notNullable()
    })
}

export async function down(Knex: Knex){
    return Knex.schema.dropTable('favorite')
}