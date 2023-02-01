SELECT customers."firstName",
       customers."lastName"
  from customers
  inner join rentals using ("customerId")
  inner join inventory using ("inventoryId")
  inner join films using ("filmId")
  where films.title = 'Magic Mallrats';
