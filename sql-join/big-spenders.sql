SELECT payments.amount as payments,
       customers."firstName",
       customers."lastName"
  from payments
  join customers using ("customerId")
  order by payments desc LIMIT 10;
