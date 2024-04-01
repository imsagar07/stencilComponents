import { Component, Prop, h } from '@stencil/core';
@Component({
  tag: 'filter-list',
  styleUrl: 'filterList.css',
  shadow: true,
})
export class filterListComponent {
  @Prop() keyword: string = '';
  render() {
    return <div class="outerDiv">
     <my-component keyword={this.keyword}></my-component>
    </div>;
  }

}
