-- 14)	find the sums of the amounts from the orders table, grouped by date, and eliminate all dates where the sum was not at least 1000.00 above the maximum order amount for that date.


SELECT 
    ORD_DATE,
    SUM(ORD_AMOUNT) AS TotalAmount
FROM 
    ORDERS
GROUP BY 
    ORD_DATE
HAVING 
    SUM(ORD_AMOUNT) >= (MAX(ORD_AMOUNT) + 1000.00);


+------------+-------------+
| ORD_DATE   | TotalAmount |
+------------+-------------+
| 2023-09-21 |    17500.00 |
| 2023-09-28 |    16200.00 |
+------------+-------------+
2 rows in set (0.00 sec)