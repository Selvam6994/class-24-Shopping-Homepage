import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './cartItems.jsx';
import Head from './header.jsx';
import Products from './products.jsx';
import Foot from './footer.jsx';
import Cart from './cartItems.jsx';
import Options from './navoptions';
import React, { useState } from 'react';
function App() {



    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [description,setDescription]=useState([{
        title: "Fancy Product", 
        id: 1,
        cost1: 40,
        cost2: 80,


    },
    {
        title: "Special Item",
        id: 2,
        isOffer: true,
        isEnable: true,
        isRated: true,
        cost1: 20,
        cost2: 18,
    },
    {
        title: "Sale Item",
        id: 3,
        isOffer: true,
        isEnable: true,
        cost1: 50,
        cost2: 25,
    },
    {
        title: "Popular Item",
        id: 4,
        isOffer: true,
        isRated: true,
        cost1: 80,
        cost2: 40,
    },
    {
        title: "Sale Item",
        id: 5,
        isOffer: true,
        isEnable: true,
        cost1: 50,
        cost2: 25,
    },
    {
        title: "Fancy Product",
        id: 6,
        cost1: 120,
        cost2: 280,
    },
    {
        title: "Special Item",
        id: 7,
        isOffer: true,
        isEnable: true,
        isRated: true,
        cost1: 20,
        cost2: 18,
    },
    {
        title: "Popular Item",
        id: 8,
        isOffer: true,
        isRated: true,
        cost1: 80,
        cost2: 40,
    }
]);
    let addToCart = (item) => {
        setCart([...cart, item])
        setTotal(total + item.cost2)
    }
    let removeFromCart = (item) => {
        let index = cart.findIndex((obj) => obj.id === item.id);
        cart.splice(index, 1);
        setCart([...cart]);
        setTotal(total - item.cost2)
    }
    return (
        <div className="App">
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container px-4 px-lg-5">
                    <a class="navbar-brand" href="#!">Shop in style</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <Options></Options>
                    </div>
                </div>
            </nav>
            <Head></Head>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-5 row-cols-xl-4 justify-content-center">
                                {
                                    description.map((item) => {
                                        return <Products cardTitle={item} cartItem={cart} handleAddToCart={addToCart}></Products>
                                    })
                                }
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <span><h1>My Cart</h1></span>
                            {
                                cart.length === 0 ? <div><h4>No items in the cart</h4></div> : <ol class="list-group list-group-numbered">
                                    {
                                        cart.map((item) => {
                                            return <Cart cartItems={item} removeFromCart={removeFromCart}></Cart>
                                        })
                                    }
                                </ol>
                            }
                            <div>
                                <h2>Total :${total}</h2>
                            </div>
                        </div>

                    </div>


                </div>
            </section>
            <Foot></Foot>
        </div>

    );
}

export default App;
