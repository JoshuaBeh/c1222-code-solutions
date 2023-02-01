SELECT sum("payments"."amount") as total, "firstName", "lastName"
  from customers
  join payments using ("customerId")
  group by "customerId"
  order by total desc;
