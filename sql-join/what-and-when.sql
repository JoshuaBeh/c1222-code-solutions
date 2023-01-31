SELECT films.title,
       genres.name as genre,
       films."releaseYear"
  from genres
  inner join "filmGenre" using ("genreId")
  inner join films using ("filmId");
