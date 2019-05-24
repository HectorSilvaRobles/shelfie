import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props)

    this.state = {
      inventory: [
        {
          name: '',
          price: 0,
          imgUrl: ''
        }
      ]
    }
    this.displayInventory = this.displayInventory.bind(this)
  }

   componentDidMount(){
    this.displayInventory();
  }

  displayInventory() {
    axios.get('/api/inventory').then(response => {
      this.setState({
        inventory: response.data
      })
    })
    .catch(err => console.log('error'))
  }


  render(){
    const {inventory} = this.state
    console.log(this.state)


    let mappedInventoryForForm = inventory.map(element => {
      return(
        <Form 
          product_name = {element.name}
          product_price = {element.price}
          img_url = {element.imgUrl}
          displayInventory={this.displayInventory}
        />
      )
    })

    let mappedInventoryForDashboard = inventory.map(element => {
      return (
        <Dashboard 
          product_name= {element.name}
          product_price = {element.price}
          img_url = {element.imgUrl}
          displayInventory={this.displayInventory}
        />
      )
    })
    return (
      <div>
        <Form />
        <div>{mappedInventoryForDashboard}</div>
      </div>
    )
  }
}

export default App
