
-- 9)	count all the orders generated on '2012-08-17'. Return number of orders.

SELECT COUNT(*) AS number_of_orders
FROM ORDERS
WHERE ORD_DATE = '2012-08-17';


+------------------+
| number_of_orders |
+------------------+
|                0 |
+------------------+
1 row in set (0.00 sec)





