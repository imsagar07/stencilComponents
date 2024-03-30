import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  _staticListData = [
    { firstName: 'Sagar', lastName: "Fale", age: 28, role: 'Software Engg' },
    { firstName: 'Rajat', lastName: "Patidar", age: 26, role: 'Accountant' },
    { firstName: 'Virat', lastName: "Kohli", age: 36, role: 'Cricketer' },
    { firstName: 'Rajesh', lastName: "Kalambe", age: 31, role: 'Software Engg' },
    { firstName: 'Prakash', lastName: "Wanjari", age: 37, role: 'Tester' },
    { firstName: 'Piyush', lastName: "Aglawe", age: 28, role: 'DBA Support' },
    { firstName: 'Mayur', lastName: "Kadu", age: 25, role: 'Digital Marketing' },
    { firstName: 'Mayank', lastName: "Zade", age: 28, role: 'Data Analyst' },
    { firstName: 'Kumar', lastName: "Sena", age: 28, role: 'Team Leader' },
    { firstName: 'Pritesh', lastName: "karankar", age: 28, role: 'Oracle Developer' },
  ]

  componentWillLoad() {
    this._staticListData;
  }

  render() {
    return <div class="outerDiv">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {this._staticListData.map((empData) =>
            <tr>
              <td>{empData?.firstName}</td>
              <td>{empData?.lastName}</td>
              <td>{empData?.age}</td>
              <td>{empData?.role}</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>;
  }

}
