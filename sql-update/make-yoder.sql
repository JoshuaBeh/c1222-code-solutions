UPDATE actors
  SET "firstName" = 'Baby',
      "lastName"  = 'Yoda'
where "actorId" = 15
returning *;
