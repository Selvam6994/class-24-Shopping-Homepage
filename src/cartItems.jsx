
function Cart({ cartItems,removeFromCart}) {

    return (
        <div>
            <li class="list-group-item d-flex justify-content-between align-items-start">
                <div class="ms-2 me-auto">
                    <div class="fw-bold">{cartItems.title}</div>
                    ${cartItems.cost2}
                    
 
                </div>
                <button onClick={()=>removeFromCart(cartItems)} class="badge bg-danger rounded-pill">X</button>
            </li>
        </div>


    );



};
export default Cart;