-- 4)	find the highest purchase amount ordered by each customer. Return CUST_CODE, maximum purchase amount


SELECT CUST_CODE, MAX(ORD_AMOUNT) AS maximum_purchase_amount
FROM ORDERS
GROUP BY CUST_CODE;


+-----------+-------------------------+
| CUST_CODE | maximum_purchase_amount |
+-----------+-------------------------+
| C00013    |                 5500.00 |
| C00001    |                 7000.00 |
| C00020    |                 7000.00 |
| C00025    |                 8000.00 |
| C00024    |                 5500.00 |
| C00015    |                 6500.00 |
| C00002    |                 7500.00 |
| C00018    |                 9000.00 |
| C00009    |                 7200.00 |
| C00010    |                 6800.00 |
+-----------+-------------------------+
10 rows in set (0.00 sec)