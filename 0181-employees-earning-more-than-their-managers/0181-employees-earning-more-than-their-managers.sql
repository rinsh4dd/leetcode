select e.name as Employee
From Employee e 
JOIN Employee m
ON e.managerid = m.id
where e.salary>m.salary