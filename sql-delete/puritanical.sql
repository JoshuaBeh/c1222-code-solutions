DELETE from films
  where rating != 'G'
returning *;
