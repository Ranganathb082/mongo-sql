-- 6)	determine the number of customers who received at least one grade for their activity. 




SELECT COUNT(DISTINCT CUST_CODE) AS num_customers_with_grade
FROM CUSTOMER
WHERE GRADE IS NOT NULL;


+--------------------------+
| num_customers_with_grade |
+--------------------------+
|                       25 |
+--------------------------+
1 row in set (0.00 sec)

-- out of 26 customers ONLY Karl(C00023) has grade as null 
