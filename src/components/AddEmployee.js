import { useState } from "react";

const AddEmployee = ({ onAdd }) => {
  const [empName, setEmpName] = useState("");
  const [empDesignation, setEmpDesignation] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!empName) {
      alert("Please add an employee");
      return;
    }

    onAdd({ empName, empDesignation });

    setEmpName("");
    setEmpDesignation("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          value={empName}
          onChange={(e) => setEmpName(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label>Designation</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Designation"
          value={empDesignation}
          onChange={(e) => setEmpDesignation(e.target.value)}
        />
      </div>

      <input
        type="submit"
        value="Save Employee"
        className="btn btn-secondary btn-block"
      />
    </form>
  );
};

export default AddEmployee;
