-- 13)	find the order values greater than the average order value of 10th October 2012. Return ord_no, purch_amt, ord_date, cust_code, agent_code.

UPDATE ORDERS SET ORD_DATE="2012-10-10" WHERE ORD_NUM = "1003";

SELECT 
    ORD_NUM,
    ORD_AMOUNT AS "purch_amt",
    ORD_DATE,
    CUST_CODE,
    AGENT_CODE
FROM 
    ORDERS
WHERE 
    ORD_AMOUNT > (
        SELECT AVG(ORD_AMOUNT)
        FROM ORDERS
        WHERE ORD_DATE = '2012-10-10'
    );

+---------+-----------+------------+-----------+------------+
| ORD_NUM | purch_amt | ORD_DATE   | CUST_CODE | AGENT_CODE |
+---------+-----------+------------+-----------+------------+
|    1002 |   7000.00 | 2023-09-22 | C00001    | A003       |
|    1004 |   8000.00 | 2023-09-24 | C00025    | A011       |
|    1006 |   6500.00 | 2023-09-26 | C00015    | A003       |
|    1007 |   7500.00 | 2023-09-27 | C00002    | A008       |
|    1008 |   9000.00 | 2023-09-28 | C00018    | A005       |
|    1009 |   7200.00 | 2023-09-28 | C00009    | A012       |
|    1010 |   6800.00 | 2023-09-29 | C00010    | A009       |
|   10012 |   7000.00 | 2023-09-21 | C00020    | A008       |
+---------+-----------+------------+-----------+------------+
8 rows in set (0.00 sec)

