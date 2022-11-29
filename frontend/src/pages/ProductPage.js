import { useSearchParams, Link, useParams } from 'react-router-dom'
import Product from '../components/Product.js'
import { useCart, CartProvider } from 'react-use-cart'
import { useEffect } from 'react'
function ProductPage ({ products }) {
  const { setItems, addItem } = useCart()

  const { id } = useParams()

  const product = products ? products.find(product => `${product.id}` === id) : JSON.parse(localStorage.getItem('products'))

  function addToCart () {
    addItem(product, 1)
  }

  return (
    <div className='product-page'>
      <div className='product-card'>
        <div className='product-image'>
          <img src={product.image_url} alt='product image' height='100' width='100' />
        </div>
        <h2>{product.name}</h2>
        <p>Rs. {product.price}</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductPage
