import { Component, Prop, State, Watch, h } from '@stencil/core';

@Component({
  tag: 'filter-list',
  styleUrl: 'filterList.css',
  shadow: true,
})
export class filterListComponent {
  @Prop() keyword: string = '';
  
 

  render() {
    return <div class="outerDiv">
     
    </div>;
  }

}
