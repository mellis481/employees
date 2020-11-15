import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export interface Employee {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

interface ComponentState {
  employees: Employee[];
}

export default class Root extends React.Component<any, ComponentState> {
  constructor(props: ComponentState) {
    super(props);

    this.state = { employees: [] };
  }

  componentDidMount() {
    fetch("https://reqres.in/api/users").then((response) => {
      response.json().then((data) => this.setState({ employees: data.data }));
    });
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
  }

  render() {
    const { employees } = this.state;

    if (!employees.length) {
      return (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }

    return (
      <BrowserRouter basename="/">
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: Employee) => {
              return (
                <tr key={employee.id}>
                  <th>
                    <Link to={`/employees/${employee.id}`}>{employee.id}</Link>
                  </th>
                  <td>{employee.first_name}</td>
                  <td>{employee.last_name}</td>
                  <td>{employee.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <em>{this.props.name} using React</em>
      </BrowserRouter>
    );
  }
}
