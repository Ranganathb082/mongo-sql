-- 3)	find all those customers who does not have any grade. Return customer_id, cust_name, city, grade, agent_code.

SELECT CUST_CODE, CUST_NAME, CUST_CITY, GRADE, AGENT_CODE
FROM CUSTOMER
WHERE GRADE IS NULL;


+-----------+-----------+-----------+-------+------------+
| CUST_CODE | CUST_NAME | CUST_CITY | GRADE | AGENT_CODE |
+-----------+-----------+-----------+-------+------------+
| C00026    | John Doe  | New York  |  NULL | A003       |
+-----------+-----------+-----------+-------+------------+
1 row in set (0.00 sec)