const express = require('express');
const app = express();

app.use(express.json());

const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
    select "gradeId",
           "name",
           "course",
           "score",
           "createdAt"
      from "grades"
     where "gradeId" = $1
  `;
  const params = [gradeId];
  db.query(sql, params)
    .then((result) => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({
          error: `Cannot find grade with "gradeId" ${gradeId}`
        });
        return;
      }
      res.json(grade);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.get('/api/grades', (req, res, next) => {
  const sql = `select *
               from "grades"
               `;
  db.query(sql)
    .then((result) => {
      const data = result.rows;
      res.json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.post('/api/grades', (req, res, next) => {
  const sql = `insert into "grades" ("name", "course", "score")
               values ($1, $2, $3)
               returning *
               `;
  const params = [req.body.name, req.body.course, req.body.score];
  if (params[0] === undefined || params[1] === undefined || params[2] === undefined) {
    res.status(400).json({ error: 'all fields are required' });
    return;
  } else if (req.body.score < 0 || req.body.score > 100 || !Number.isInteger(req.body.score)) {
    res.status(400).json({ error: 'score is required to be a number between 0 and 100' });
    return;
  }
  db.query(sql, params)
    .then((result) => {
      const obj = { name: params[0], course: params[1], score: params[2] };
      result.rows.push(obj);
      const data = result.rows[0];
      res.status(201).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error occurred.'
      });
    });
});

app.listen(3000, (err) => {
  if (err) {
    console.error('Something went wrong', err);
  }
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000');
});
