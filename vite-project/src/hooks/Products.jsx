import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

const Products = () => {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')

  const getProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
    setProducts(response.data)
  }

  useEffect(() => {
    getProducts()
  }, [])

  const searchedProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h1>Products</h1>

      <input
        type="text"
        placeholder="Search product"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {searchedProducts.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <img src={product.image} alt={product.title} width="150" />
          <p>Price: ${product.price}</p>
          <Link to={`/products/${product.id}`}>View details</Link>
        </div>
      ))}
    </div>
  )
}

const ProductDetails = () => {
  const { id } = useParams()
  const [product, setProduct] = useState(null)

  const getProduct = async () => {
    const response = await axios.get(
      `https://fakestoreapi.com/products/${id}`
    )
    setProduct(response.data)
  }

  useEffect(() => {
    getProduct()
  }, [id])

  if (!product) {
    return <p>Loading product...</p>
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} width="200" />
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
      <p>Category: {product.category}</p>
    </div>
  )
}

export default Products
export { ProductDetails }
