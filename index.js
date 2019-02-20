const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const morgan = require('morgan');
const knexConfig = require('./knexfile');
const server = express();

const db = knex(knexConfig.development);

server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));

server.get('/api/cohorts', async (req, res) => {
	try {
		const result = await db('cohorts');
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

server.get('/api/cohorts/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const cohortCheck = await db('cohorts').where('id', id);
		if (cohortCheck.length) {
			const result = await db('cohorts').where('id', id);
			res.status(200).json(result);
		} else {
			res.status(440).json({ message: 'Unable to find a cohort with that ID' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

server.get('/api/cohorts/:id/students', async (req, res) => {
	try {
		const { id } = req.params;
		const cohortCheck = await db('cohorts').where('id', id);
		if (cohortCheck.length) {
			const result = await db('students').where('cohort_id', id);
			res.status(200).json(result);
		} else {
			res.status(404).json({ message: 'Unable to find a cohort with that ID' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

server.post('/api/cohorts', async (req, res) => {
	try {
		const { name } = req.body;
		if (!name) {
			res.status(404).json({ message: 'Please include the name' });
		} else {
			const result = await db('cohorts').insert({ name });
			res.status(201).json({ message: 'Successfully added the cohort', result });
		}
	} catch (error) {
		res.status(500).json({ message: 'Unable to add the cohort' });
	}
});

server.put('/api/cohorts/:id', async (req, res) => {
	try {
		const { name } = req.body;
		const { id } = req.params;
		const result = await db('cohorts')
			.where('id', id)
			.update({ name });
		res.status(200).json({ message: 'Successfully updated the cohort', result });
	} catch (error) {
		res.status(500).json({ message: 'Unable to update the cohort' });
	}
});

server.delete('/api/cohorts/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const result = await db('cohorts')
			.where('id', id)
			.del();
		res.status(201).json({ message: 'Successfully deleted the cohort', result });
	} catch (error) {
		res.status(500).json({ message: 'Unable to delete the cohort' });
	}
});

/// ***** STRETCH *****
server.get('/api/students', async (req, res) => {
	try {
		const result = await db('students');
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json(error);
	}
});

server.get('/api/students/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const studentCheck = await db('students').where('id', id);
		if (studentCheck.length) {
			const result = await db('students').where('id', id);
			res.status(200).json(result);
		} else {
			res.status(440).json({ message: 'Unable to find a student with that ID' });
		}
	} catch (error) {
		res.status(500).json(error);
	}
});

server.post('/api/students', async (req, res) => {
	try {
		const { name, cohort_id } = req.body;
		if (!name) {
			res.status(404).json({ message: 'Please include both name and cohort ID' });
		} else {
			const result = await db('students').insert({ name, cohort_id });
			res.status(201).json({ message: 'Successfully added the student', result });
		}
	} catch (error) {
		res.status(500).json({ message: 'Unable to add the student' });
	}
});

server.put('/api/students/:id', async (req, res) => {
	try {
		const { name, cohort_id } = req.body;
		const { id } = req.params;
		const studentCheck = await db('students').where('id', id);
		if (studentCheck.length) {
			const result = await db('students')
				.where('id', id)
				.update({ name, cohort_id });
			res.status(200).json({ message: 'Successfully updated the student', result });
		} else {
			res.status(404).json({ message: 'Unable to update the student record' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Unable to update the student' });
	}
});

server.delete('/api/students/:id', async (req, res) => {
	try {
		const { id } = req.params;
		const studentCheck = await db('students').where('id', id);
		if (studentCheck.length) {
			const result = await db('students')
				.where('id', id)
				.del();
			res.status(204).json({ message: 'Successfully deleted the student', result });
		} else {
			res.status(404).json({ message: 'Unable to find a student with that ID' });
		}
	} catch (error) {
		res.status(500).json({ message: 'Unable to delete the student' });
	}
});

const port = 3000;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
