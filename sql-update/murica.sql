UPDATE countries
  SET name = 'Murica'
  where name = 'United States'
returning *;
