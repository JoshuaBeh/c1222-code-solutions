SELECT addresses.line1 as address,
       addresses.district,
       cities.name as city
  from cities
  join addresses using ("cityId");
