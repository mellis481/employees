import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

export interface Employee {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
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
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      response.json().then((employees) => this.setState({ employees }));
    });
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
              <th scope="col">Name</th>
              <th scope="col">Username</th>
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
                  <td>{employee.name}</td>
                  <td>{employee.username}</td>
                  <td>{employee.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          <em>{this.props.name} using React</em>
        </p>
      </BrowserRouter>
    );
  }
}
