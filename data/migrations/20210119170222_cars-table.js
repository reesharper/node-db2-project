
exports.up = function(knex) {
  return knex.schema.createTable('cars', table => {
    table.increments();
    table.float('VIN').notNullable();
    table.string('make', 128).notNullable();
    table.string('model', 128).notNullable();
    table.float('mileage').notNullable();
    table.boolean('clean')
    table.boolean('salvage')
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
