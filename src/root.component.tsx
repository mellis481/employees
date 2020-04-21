import React from "react";

export interface Employee {
  id: number;
  employee_name: string;
  employee_salary: number;
  employee_age: number;
  profile_image: string;
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
    fetch("http://dummy.restapiexample.com/api/v1/employees").then(
      (response) => {
        response.json().then((data) => this.setState({ employees: data.data }));
      }
    );
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
      <>
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee: Employee) => {
              return (
                <tr key={employee.id}>
                  <th>{employee.id}</th>
                  <td>{employee.employee_name}</td>
                  <td>{employee.employee_age}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <p>
          <em>{this.props.name} using React</em>
        </p>
      </>
    );
  }
}
