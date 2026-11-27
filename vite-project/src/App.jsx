import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import Students from './components/students'
import Count from './hooks/count'
import Register from './hooks/Register'
import Users from './hooks/Users'
import Products, { ProductDetails } from './hooks/Products'
import { Button } from './components/ui/button'
import Parents from './components/ui/Parents'

const Components = () => {
  return (
    <div>
      <Students name="John" age={20} />
      <Count />
      <Register />
      <Users />
      <Parents />
    </div>
  )
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Components />
    </div>
  )
}

const About = () => {
  const showMessage = (buttonName) => {
    alert(`${buttonName} button clicked`)
  }

  return (
    <div>
      <h1>About</h1>
      <div className="about-buttons">
        <Button onClick={() => showMessage('Default')}>Default</Button>
        <Button variant="secondary" onClick={() => showMessage('Secondary')}>
          Secondary
        </Button>
        <Button variant="outline" onClick={() => showMessage('Outline')}>
          Outline
        </Button>
        <Button variant="ghost" onClick={() => showMessage('Ghost')}>
          Ghost
        </Button>
        <Button
          variant="destructive"
          onClick={() => showMessage('Destructive')}
        >
          Delete
        </Button>
        <Button variant="link" onClick={() => showMessage('Link')}>
          Learn more
        </Button>
      </div>
      <Components />
    </div>
  )
}

const Contact = () => {
  return (
    <div>
      <h1>Contact</h1>
      <Components />
    </div>
  )
}

const Service = () => {
  return (
    <div>
      <h1>Service</h1>
      <Components />
    </div>
  )
}

const App = () => {
  return (
    <div>
      <nav className="navigation">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/service">Service</Link>
        <Link to="/products">Products</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  )
}

export default App
