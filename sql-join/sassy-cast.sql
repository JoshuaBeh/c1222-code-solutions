SELECT actors."firstName",
       actors."lastName"
  from actors
  inner join "castMembers" using ("actorId")
  inner join films using ("filmId")
  where films.title = 'Jersey Sassy';
