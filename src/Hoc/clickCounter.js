import React from  'react';
import Hoc from './hoc'

class Counter extends React.Component{
    
    render(){
        const {count,handleUpdate ,name}=this.props;
        // console.log(this.props)
        return(
            <div style = {{textAlign:'center'}}>
                
              <button onClick ={handleUpdate}>clicked {count} items {name}</button>  
             
            </div>

        )
    }
}
export default Hoc(Counter,5)