 import React, { Component } from 'react';
 import Hoc from './hoc'
 
 class ClickHover extends Component {
   render() {
       const {count,handleUpdate,name } = this.props
     return (
       <div style = {{textAlign:'center'}}>
         <button onMouseOver ={handleUpdate}>clicked {count} {name} items</button>
       </div>
     );
   }
 }
 
 export default Hoc(ClickHover,10) ;
 