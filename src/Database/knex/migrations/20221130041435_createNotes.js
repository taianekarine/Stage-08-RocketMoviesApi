
exports.up = knex => knex.schema.createTable('createNotes', table => {
table.increments('id');
table.text('title');
table.text('description');
table.integer('rating');
table.integer('user_id').references('id').inTable('createUsers');
table.timestamp('created_at').default(knex.fn.now());
table.timestamp('updated_at').default(knex.fn.now());

});

exports.down = knex.schema.dropTable('createNotes');