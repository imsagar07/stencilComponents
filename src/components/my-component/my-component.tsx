import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Prop() keyword: string = '';
  @State() filteredList: any = [];
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
    this.filterList();
  }

  @Watch('keyword')
  keywordChanged(newValue: string) {
    this.keyword = newValue;
    this.filterList();
  }

  filterList() {
    if (this.keyword && this.keyword.trim() !== '') {
      const lowercaseKeyword = this.keyword.trim().toLowerCase();
      this.filteredList = this._staticListData.filter(item =>
        item.firstName.toLowerCase().includes(lowercaseKeyword) ||
        item.lastName.toLowerCase().includes(lowercaseKeyword) ||
        item.role.toLowerCase().includes(lowercaseKeyword) ||
        item.age.toString().toLowerCase().includes(lowercaseKeyword)
      );
    } else {
      this.filteredList = this._staticListData.slice();
    }
  }

  render() {
    return <div class="outerDiv">
      {this.keyword ? ( 
        <div class="keywordText">You are searching for :: <b>{this.keyword}</b></div>
      ) : (
        <div></div>
      )}
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
          {this.filteredList.map((empData) =>
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

}
