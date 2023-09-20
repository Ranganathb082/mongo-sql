-- Find details of all orders excluding those with ord_date equal to '2012-09-10' and agent_code higher than 5005 or purch_amt greater than 1000.Return ord_no, purch_amt, ord_date, cust_code and salesman_id.  


SELECT 
    ORD_NUM AS "ord_no",
    ORD_AMOUNT AS "purch_amt",
    ORD_DATE,
    CUST_CODE,
    AGENT_CODE AS "salesman_id"
FROM 
    ORDERS
WHERE 
    ORD_DATE != '2012-09-10'
    AND (AGENT_CODE <= 'A005' OR ORD_AMOUNT <= 1000.00);


+--------+-----------+------------+-----------+-------------+
| ord_no | purch_amt | ORD_DATE   | CUST_CODE | salesman_id |
+--------+-----------+------------+-----------+-------------+
|   1002 |   7000.00 | 2023-09-22 | C00001    | A003        |
|   1006 |   6500.00 | 2023-09-26 | C00015    | A003        |
|   1008 |   9000.00 | 2023-09-28 | C00018    | A005        |
|  10011 |   5500.00 | 2023-09-21 | C00013    | A003        |
+--------+-----------+------------+-----------+-------------+
4 rows in set (0.00 sec)