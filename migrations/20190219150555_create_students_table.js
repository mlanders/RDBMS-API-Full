exports.up = function(knex, Promise) {
	return knex.schema.createTable('students', function(table) {
		table.increments();
		table.string('name');
		table.string('cohort_id').unsigned();
		table.foreign('cohort_id').references('cohorts.id');
		table.timestamps(true, true);
	});
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('cohorts');
};
