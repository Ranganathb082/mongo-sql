-- 8)	find the highest order (purchase) amount by each customer on a particular order date. Filter the result by highest order (purchase) amount above 2000.00. Return CUST_CODE, order date and maximum purchase amount.

SELECT CUST_CODE, ORD_DATE, MAX(ORD_AMOUNT) AS max_purchase_amount
FROM ORDERS
GROUP BY CUST_CODE, ORD_DATE
HAVING MAX(ORD_AMOUNT) > 2000.00;


+-----------+------------+---------------------+
| CUST_CODE | ORD_DATE   | max_purchase_amount |
+-----------+------------+---------------------+
| C00013    | 2023-09-21 |             5500.00 |
| C00001    | 2023-09-22 |             7000.00 |
| C00020    | 2023-09-23 |             6000.00 |
| C00025    | 2023-09-24 |             8000.00 |
| C00024    | 2023-09-25 |             5500.00 |
| C00015    | 2023-09-26 |             6500.00 |
| C00002    | 2023-09-27 |             7500.00 |
| C00018    | 2023-09-28 |             9000.00 |
| C00009    | 2023-09-28 |             7200.00 |
| C00010    | 2023-09-29 |             6800.00 |
| C00020    | 2023-09-21 |             7000.00 |
+-----------+------------+---------------------+
11 rows in set (0.00 sec)