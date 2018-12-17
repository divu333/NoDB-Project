import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import AddShoppingItem from './components/AddShoppingItem' ;

class App extends Component {
  constructor(){
    super()
    this.state ={
      shoppingItems :[]
    }
  }

 /* getShoppingItems() {
  return axios.get('/api/shopping-items').then(res =>res.data);
   
  }*/

  componentDidMount(){

     axios.get('/api/shopping-items').then((res) => {
      console.log(res.data, 'this is getting data')
    // this.getShoppingItems().then(shoppingItems => {

      this.setState({
      shoppingItems : res.data
       })

   }) 
}
  render() {

    let shoppingList = this.state.shoppingItems.map((name, i) => {
    return (
       <li key={i}> {name} </li>

 
    )

    })


      return (
      <div className="App">
        <h1> Shopping List </h1>
        {shoppingList}
        Add Item: <input type ="text" onChange={(e) =>{this.setState({ newItem : e.target.value },() => {console.log(this.state.newItem)})}}   />
        {AddShoppingItem}
        </div>
    );
  }
}

export default App;


