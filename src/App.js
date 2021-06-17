import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Employees from "./components/Employees";
import AddEmployee from "./components/AddEmployee";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddEmployee, setShowAddEmployee] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getEmployees = async () => {
      const employeesFromDB = await fetchEmployees();
      setEmployees(employeesFromDB);
    };

    getEmployees();
  }, []);

  // Fetch Employee
  // const fetchEmployees = async (id) => {
  //   const res = await fetch(`http://localhost:8080/employee/employee/${id}`);
  //   const data = await res.json();

  //   return data;
  // };

  // Fetch Employees
  const fetchEmployees = async () => {
    const res = await fetch("http://localhost:8080/employee/employees");
    const data = await res.json();

    return data;
  };

  // Add Employee
  const addEmployee = async (employee) => {
    const res = await fetch("http://localhost:8080/employee/add", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(employee),
    });

    const data = await res.json();

    setEmployees([...employees, data]);
  };

  // Delete Employee
  const deleteEmployee = async (id) => {
    await fetch(`http://localhost:8080/employee/delete/${id}`, {
      method: "DELETE",
    }); //backend

    setEmployees(employees.filter((employee) => employee.id !== id)); //frontend
  };

  return (
    <Router>
      <div className="container">
        <Header
          title="Employee Database"
          onAdd={() => setShowAddEmployee(!showAddEmployee)}
          showAdd={showAddEmployee}
        />

        <Route
          path="/"
          exact
          render={(props) => (
            <>
              {showAddEmployee && <AddEmployee onAdd={addEmployee} />}
              {employees.length > 0 ? (
                <Employees employees={employees} onDelete={deleteEmployee} />
              ) : (
                "You need to hire folks."
              )}
            </>
          )}
        />
        <Route path="/about" component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

// Hard-coded emps
// {
//   id: 1,
//   empName: "Danny",
//   empDesignation: "Janitor",
// },
// {
//   id: 2,
//   empName: "Daniel",
//   empDesignation: "CEO",
// },
// {
//   id: 3,
//   empName: "Cheng",
//   empDesignation: "Manager",
// },
