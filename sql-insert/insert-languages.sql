insert into languages ("name")
values ('HTML'),
       ('CSS'),
       ('JavaScript');
SELECT * from languages where "name" = 'HTML' or "name" = 'CSS' or "name" = 'JavaScript';
