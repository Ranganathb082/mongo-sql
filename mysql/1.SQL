
-- 1.	find agents who receive commissions between 0.12 and 0.14 
-- (begin and end values are included). Return agent_Code, name, city, and commission.  


SELECT AGENT_CODE, AGENT_NAME, WORKING_AREA, COMMISSION
FROM AGENTS
WHERE COMMISSION BETWEEN 0.12 AND 0.14;


+------------+------------+--------------+------------+
| AGENT_CODE | AGENT_NAME | WORKING_AREA | COMMISSION |
+------------+------------+--------------+------------+
| A001       | Subbarao   | Bangalore    |       0.14 |
| A003       | Alex       | London       |       0.13 |
| A005       | Anderson   | Brisban      |       0.13 |
| A008       | Alford     | New York     |       0.12 |
| A010       | Santakumar | Chennai      |       0.14 |
| A012       | Lucida     | San Jose     |       0.12 |
+------------+------------+--------------+------------+


