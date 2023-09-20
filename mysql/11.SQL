-- 11)	find those customers who are served by a salesperson and the salesperson earns commission in the range of 12% to 14% (Begin and end values are included.). Return cust_name AS "Customer", city AS "City". 
SELECT
  ORD_NUM,
  (
    SELECT
      CUST_NAME
    FROM
      CUSTOMER
    WHERE
      CUST_CODE = ORDERS.CUST_CODE
  ) AS cust_name,
  CUST_CODE,
  AGENT_CODE
FROM
  ORDERS
WHERE
  AGENT_CODE IN (
    SELECT
      AGENT_CODE
    FROM
      AGENTS
    WHERE
      WORKING_AREA != (
        SELECT
          WORKING_AREA
        FROM
          CUSTOMER
        WHERE
          CUST_CODE = ORDERS.CUST_CODE
      )
  );