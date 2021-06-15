import Header from "./components/Header";
import Employees from "./components/Employees";
import { useState } from "react";

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      empName: "Danny",
      empDesignation: "Janitor",
    },
    {
      id: 2,
      empName: "Daniel",
      empDesignation: "CEO",
    },
    {
      id: 3,
      empName: "Cheng",
      empDesignation: "Manager",
    },
  ]);

  return (
    <div>
      <div className="container-fluid">
        <Header title="Employee Database" />
        <Employees employees={employees} />
      </div>
    </div>
  );
}

export default App;
