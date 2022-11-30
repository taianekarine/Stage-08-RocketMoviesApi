
exports.up = knex => knex.schema.createTable('createTags', table => {
  table.increments('id');
  table.integer('note_id').references('id').inTable('createNotes').onDelete('CASCADE');
  table.integer('user_id').references('id').inTable('createUsers');
  table.integer('name').notNullable();
});

exports.down = knex => knex.schema.dropTable('createTags');
