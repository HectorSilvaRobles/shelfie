import React, {Component} from 'react'
import './form.css'
import axios from 'axios'

class Form extends Component{
    constructor(props){
        super(props)

        this.state = {
            name: '',
            price: 0,
            imgUrl: '',
            updatedInventory: []

        }
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangePrice = this.handleChangePrice.bind(this)
        this.handleChangeUrl = this.handleChangeUrl.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleClear = this.handleClear.bind(this)
    }

    handleChangeName(event){
        this.setState({
            name: event.target.value
        })
    }

    handleChangePrice(event){
        this.setState({
            price: event.target.value
        })
    }

    handleChangeUrl(event){
        this.setState({
            imgUrl: event.target.value
        })
    }

    handleSubmit(event){
        alert('New product has been added' + this.state.name + this.state.price + this.state.imgUrl)
        event.preventDefault()
    }

    handleClear(event){
        this.setState({
            name: '',
            price: 0,
            imgUrl: ''
        })
    }

    addProductToInventory(product) {
        console.log('hello')
        console.log(product)
        axios.post('/api/product', product).then(response => {
        console.log(response.data)
          this.setState({
              updatedInventory: response.data
          })
        })
      }

   
    render(){
        const {product_name, product_price, img_url, displayInventory} = this.props
        return (

        <div className='display'>
            <div className='product-display'>
                <img src={img_url}/>
                <header>
                    <h1>{product_name}</h1>
                    <h1>${product_price}</h1>
                </header>
            </div>

            <form className='form'>
                <img src={this.state.imgUrl} />
                <div className='input'>
                    Product Name: <input type='text' value={this.state.name} onChange={this.handleChangeName} />
                    Product Price: <input type='text' value={this.state.price} onChange={this.handleChangePrice} />
                    Product Img Url: <input type='text' value={this.state.imgUrl} onChange={this.handleChangeUrl} />
                </div>
                <div className='buttons'>
                    <input type='button' value='Cancel' onClick={this.handleClear} />
                    <input type='button' value='Add to Portfolio' onClick={() => this.addProductToInventory({name: this.state.name, price: this.state.price, img_url: this.state.imgUrl})} />
                </div>
            </form>
        </div>
        )
    }
    
}

export default Form