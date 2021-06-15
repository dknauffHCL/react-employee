const Employees = ({ employees }) => {
  return (
    <>
      {employees.map((employee) => (
        <h3 key={employee.id}>{employee.empName}</h3>
      ))}
    </>
  );
};

export default Employees;
