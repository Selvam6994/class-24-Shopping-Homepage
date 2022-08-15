import StarRating from 'star-rating-react';
import cartItems from './cartItems'
function Products({ cardTitle, handleAddToCart, cartItem }) {
    return (
        <div className="col mb-5">
            <div className="card h-100">
                {cardTitle.isEnable ?
                    <div className="badge bg-dark text-white position-absolute"
                        style={{ top: "0.5rem", right: "0.5rem" }}>
                        Sale</div> : ``
                }

                <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">{cardTitle.title}</h5>
                        <div> {cardTitle.isRated ?
                            <StarRating
                                size={5}
                                value={5}
                                onChange={function (val) { console.log(val) }}
                            /> : ``
                        }
                        </div>
                        {cardTitle.isEnable ?
                            <span className="text-muted text-decoration-line-through">${cardTitle.cost1}</span> : ``
                        }
                        {cardTitle.isOffer ?
                            <span>${cardTitle.cost2}</span> : <span>${cardTitle.cost1}-${cardTitle.cost2}</span>
                        }
                    </div>
                </div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                        <button disabled={cartItem.some((obj) => obj.id === cardTitle.id)} onClick={() => handleAddToCart(cardTitle)} className="btn btn-outline-dark mt-auto" href="#">Add to Cart</button></div>
                </div>
            </div>
        </div>
    )


};
export default Products;