-- 5)	calculate total purchase amount of all orders. Return total purchase amount.

SELECT SUM(ORD_AMOUNT) AS total_purchase_amount
FROM ORDERS;


+-----------------------+
| total_purchase_amount |
+-----------------------+
|              81000.00 |
+-----------------------+
1 row in set (0.00 sec)

-- 5000   +   7000   +   6000   +   8000   +   5500   +   6500   +   7500   +   9000   +   7200   +   6800   +   5500   +   7000 = 81000.0