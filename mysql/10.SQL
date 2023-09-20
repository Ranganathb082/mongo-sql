-- 10)	find those agents who generated orders for their customers but are not located in the same city. Return ORD_NUM, cust_name, cust_code (orders table), agent_code (orders table).   


SELECT ORD_NUM, 
       (SELECT CUST_NAME FROM CUSTOMER WHERE CUST_CODE = ORDERS.CUST_CODE) AS cust_name,
       CUST_CODE,
       AGENT_CODE
FROM ORDERS
WHERE AGENT_CODE IN (SELECT AGENT_CODE FROM AGENTS WHERE WORKING_AREA != (SELECT WORKING_AREA FROM CUSTOMER WHERE CUST_CODE = ORDERS.CUST_CODE));

+---------+-----------+-----------+------------+
| ORD_NUM | cust_name | CUST_CODE | AGENT_CODE |
+---------+-----------+-----------+------------+
|    1001 | Holmes    | C00013    | A007       |
|    1002 | Micheal   | C00001    | A003       |
|    1009 | Ramesh    | C00009    | A012       |
+---------+-----------+-----------+------------+
3 rows in set (0.01 sec)