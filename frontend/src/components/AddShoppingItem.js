import React ,{ Component } from 'react';
import axios from 'axios';
export default class AddShoppingItem extends Component {
    constructor(){
       
           super();
       
       this.state = {
           name: '',
       }
    }
    

    handleChange (e) {
        this.setState({ name: e.target.value })
    }

handleSubmit(){
    const newShoppingItem = {
        name: this.state.name,

    }
    axios.post('/api/shopping-items',{ name: this.state.newShoppingItem })
    .then(res => {
        console.log(res);
       // console.log(res,data);
    })

};


 render (){

return(
    <div>
        <h4> Add Shopping Item</h4>
        <input onChange={(e) =>this.handleChange(e) } />
        <button onClick={() =>this.handleSubmit() }>Add Item</button>
    </div>
)
}
}