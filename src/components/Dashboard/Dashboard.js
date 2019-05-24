import React from 'react'
import axios from 'axios'


function Dashboard (props){
    const {product_name, product_price, img_url, displayInventory} = props

   let deleteProduct = (product) => {
        axios.delete(`/api/product/${product_name}`)
        console.log(product)
        .then(response => {
            console.log(response.data)
        })
    }
    return (
    <div>{deleteProduct}</div>

    )
}

export default Dashboard