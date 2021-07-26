import './App.css';
import Coffees from './components/Coffees/Coffees';
import Hero from './components/Hero/Hero';
import Nav from './components/Nav/Nav';
import { useState } from 'react'
import coffeesData from './coffeesData';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import CoffeeDetails from './components/CoffeeDetails/CoffeeDetails';
import Cart from './components/Cart/Cart';
import Footer from './components/Footer/Footer';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

const stripePromise = loadStripe(`${process.env.PUBLISHABLE_KEY}`)

function App() {
  const [coffees, setCoffees] = useState(coffeesData)
  
  return (
    <Elements stripe={stripePromise}>
      <Router className="App">
        <Nav />
        <Route path='/' exact component={Hero} />
        <Route path='/' exact render={props => <Coffees coffees={coffees} /> }/>
        <Route path='/coffee/:id' render={props => <CoffeeDetails match={props.match} />} />
        <Route path='/cart' exact component={Cart} />
        <Footer />
      </Router>
    </Elements>
  );
}

export default App;
