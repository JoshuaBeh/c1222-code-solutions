UPDATE films
  SET "rating"  = 'G'
  where "rating" = 'NC-17';

SELECT * from films where "rating" = 'G';
