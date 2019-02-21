exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('students')
		.truncate()
		.then(function() {
			// Inserts seed entries
			return knex('students').insert([
				{ name: 'Frank', cohort_id: 1 },
				{ name: 'Walter', cohort_id: 1 },
				{ name: 'Sarah', cohort_id: 1 },
				{ name: 'Frank', cohort_id: 1 },
				{ name: 'Walter', cohort_id: 1 },
				{ name: 'Sarah', cohort_id: 1 },

				{ name: 'Frank', cohort_id: 1 },
				{ name: 'Walter', cohort_id: 1 },
				{ name: 'Sarah', cohort_id: 1 },
				{ name: 'Frank', cohort_id: 1 },
				{ name: 'Walter', cohort_id: 1 },
				{ name: 'Sarah', cohort_id: 1 },

				{ name: 'Frank', cohort_id: 2 },
				{ name: 'Walter', cohort_id: 2 },
				{ name: 'Sarah', cohort_id: 2 },
				{ name: 'Frank', cohort_id: 2 },
				{ name: 'Walter', cohort_id: 2 },
				{ name: 'Sarah', cohort_id: 2 },

				{ name: 'Frank', cohort_id: 4 },
				{ name: 'Walter', cohort_id: 4 },
				{ name: 'Sarah', cohort_id: 4 },
				{ name: 'Frank', cohort_id: 4 },
				{ name: 'Walter', cohort_id: 4 },
				{ name: 'Sarah', cohort_id: 4 },

				{ name: 'Frank', cohort_id: 5 },
				{ name: 'Walter', cohort_id: 5 },
				{ name: 'Sarah', cohort_id: 5 },
				{ name: 'Frank', cohort_id: 5 },
				{ name: 'Walter', cohort_id: 5 },
				{ name: 'Sarah', cohort_id: 5 },

				{ name: 'Frank', cohort_id: 6 },
				{ name: 'Walter', cohort_id: 6 },
				{ name: 'Sarah', cohort_id: 6 },
				{ name: 'Frank', cohort_id: 6 },
				{ name: 'Walter', cohort_id: 6 },
				{ name: 'Sarah', cohort_id: 6 },

				{ name: 'Frank', cohort_id: 7 },
				{ name: 'Walter', cohort_id: 7 },
				{ name: 'Sarah', cohort_id: 7 },
				{ name: 'Frank', cohort_id: 7 },
				{ name: 'Walter', cohort_id: 7 },
				{ name: 'Sarah', cohort_id: 7 },

				{ name: 'Frank', cohort_id: 8 },
				{ name: 'Walter', cohort_id: 8 },
				{ name: 'Sarah', cohort_id: 8 },
				{ name: 'Frank', cohort_id: 8 },
				{ name: 'Walter', cohort_id: 8 },
				{ name: 'Sarah', cohort_id: 8 },

				{ name: 'Frank', cohort_id: 9 },
				{ name: 'Walter', cohort_id: 9 },
				{ name: 'Sarah', cohort_id: 9 },
				{ name: 'Frank', cohort_id: 9 },
				{ name: 'Walter', cohort_id: 9 },
				{ name: 'Sarah', cohort_id: 9 },

				{ name: 'Frank', cohort_id: 70 },
				{ name: 'Walter', cohort_id: 10 },
				{ name: 'Sarah', cohort_id: 10 },
				{ name: 'Frank', cohort_id: 10 },
				{ name: 'Walter', cohort_id: 10 },
				{ name: 'Sarah', cohort_id: 10 },

				{ name: 'Frank', cohort_id: 11 },
				{ name: 'Walter', cohort_id: 11 },
				{ name: 'Sarah', cohort_id: 11 },
				{ name: 'Frank', cohort_id: 11 },
				{ name: 'Walter', cohort_id: 11 },
				{ name: 'Sarah', cohort_id: 11 },

				{ name: 'Frank', cohort_id: 12 },
				{ name: 'Walter', cohort_id: 12 },
				{ name: 'Sarah', cohort_id: 12 },
				{ name: 'Frank', cohort_id: 12 },
				{ name: 'Walter', cohort_id: 12 },
				{ name: 'Sarah', cohort_id: 12 },

				{ name: 'Frank', cohort_id: 13 },
				{ name: 'Walter', cohort_id: 13 },
				{ name: 'Sarah', cohort_id: 13 },
				{ name: 'Frank', cohort_id: 13 },
				{ name: 'Walter', cohort_id: 13 },
				{ name: 'Sarah', cohort_id: 13 },

				{ name: 'Frank', cohort_id: 14 },
				{ name: 'Walter', cohort_id: 14 },
				{ name: 'Sarah', cohort_id: 14 },
				{ name: 'Frank', cohort_id: 14 },
				{ name: 'Walter', cohort_id: 14 },
				{ name: 'Sarah', cohort_id: 14 },

				{ name: 'Frank', cohort_id: 15 },
				{ name: 'Walter', cohort_id: 15 },
				{ name: 'Sarah', cohort_id: 15 },
				{ name: 'Frank', cohort_id: 15 },
				{ name: 'Walter', cohort_id: 15 },
				{ name: 'Sarah', cohort_id: 15 },

				{ name: 'Frank', cohort_id: 16 },
				{ name: 'Walter', cohort_id: 16 },
				{ name: 'Sarah', cohort_id: 16 },
				{ name: 'Frank', cohort_id: 16 },
				{ name: 'Walter', cohort_id: 16 },
				{ name: 'Sarah', cohort_id: 16 },

				{ name: 'Frank', cohort_id: 17 },
				{ name: 'Walter', cohort_id: 17 },
				{ name: 'Sarah', cohort_id: 17 },
				{ name: 'Frank', cohort_id: 17 },
				{ name: 'Walter', cohort_id: 17 },
				{ name: 'Sarah', cohort_id: 17 },
			]);
		});
};
