-- 2)	retrieve the details of the agent whose names begin with any letter between 'A' and 'L' (not inclusive). Return agent_code, name, city, commission. 

SELECT AGENT_CODE, AGENT_NAME, WORKING_AREA, COMMISSION
FROM AGENTS
WHERE AGENT_NAME > 'A' AND AGENT_NAME < 'L';

+------------+------------+--------------+------------+
| AGENT_CODE | AGENT_NAME | WORKING_AREA | COMMISSION |
+------------+------------+--------------+------------+
| A003       | Alex       | London       |       0.13 |
| A004       | Ivan       | Torento      |       0.15 |
| A005       | Anderson   | Brisban      |       0.13 |
| A008       | Alford     | New York     |       0.12 |
| A009       | Benjamin   | Hampshair    |       0.11 |
+------------+------------+--------------+------------+
5 rows in set (0.00 sec)