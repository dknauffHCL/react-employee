import { FaTimes } from "react-icons/fa";

const Employee = ({ employee, onDelete }) => {
  return (
    <div className="employee bg-light">
      <h3>
        {employee.empName}{" "}
        <FaTimes
          style={{ color: "red", cursor: "pointer", fontSize: "16px" }}
          onClick={() => onDelete(employee.id)}
        />
      </h3>
      <p>{employee.empDesignation}</p>
    </div>
  );
};

export default Employee;
