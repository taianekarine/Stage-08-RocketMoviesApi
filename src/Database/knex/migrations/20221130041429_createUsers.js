exports.up = knex => knex.schema.createTable('createUsers', table => {
table.increments('id');
table.text('name');
table.text('email');
table.text('password');
table.text('avatar');
table.timestamp('created_at').default(knex.fn.now());
table.timestamp('updated_at').default(knex.fn.now());

});

exports.down = knex.schema.dropTable('createUsers');
