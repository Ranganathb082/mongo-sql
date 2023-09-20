-- find all orders executed by the salesperson and ordered by the customer whose grade is greater than or equal to 200. Compute purch_amt*commission as “Commission”. Return customer name, commission as “Commission%” and Commission.

UPDATE CUSTOMER SET GRADE=201 WHERE CUST_CODE = "C00025";

SELECT 
    C.CUST_NAME AS "Customer Name",
    (O.ORD_AMOUNT * A.COMMISSION) AS "Commission",
    (A.COMMISSION * 100) AS "Commission%"
FROM 
    ORDERS O, AGENTS A, CUSTOMER C
WHERE 
    O.AGENT_CODE = A.AGENT_CODE
    AND O.CUST_CODE = C.CUST_CODE
    AND C.GRADE >= 200;

+---------------+------------+-------------+
| Customer Name | Commission | Commission% |
+---------------+------------+-------------+
| Ravindran     |  1200.0000 |       15.00 |
+---------------+------------+-------------+
1 row in set (0.00 sec)