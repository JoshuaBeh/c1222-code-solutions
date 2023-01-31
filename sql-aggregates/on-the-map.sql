SELECT countries.name as country,
       count("cityId") as "#OfCities",
       "countryId"
  from cities
  join countries using ("countryId")
  group by ("countryId");
