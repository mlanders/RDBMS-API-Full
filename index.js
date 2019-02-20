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
		res.status(201).json({ message: 'Successfully updated the cohort', result });
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

const port = 3000;
server.listen(port, function() {
	console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
