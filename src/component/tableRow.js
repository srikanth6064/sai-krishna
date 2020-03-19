import React from 'react';

export default function TableRow(props) {
 
   return (
      <tr>
         <td>{props.data.email}</td>
         <td>{props.data.password}</td>
         <td><button onClick={() => props.update(props.data)}>update</button></td>
         <td><button onClick={()=>props.delete(props.data)}>delete</button></td>
      </tr>
   );
}