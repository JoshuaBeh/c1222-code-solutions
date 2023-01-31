UPDATE films
  SET "rating"  = 'G'
  where "rating" = 'NC-17'
returning *;
