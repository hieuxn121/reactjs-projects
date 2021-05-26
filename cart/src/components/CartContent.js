import React from 'react'

const CartContent = ({listProducts, increAmount, decreAmount, deleteAll}) => {
    let totalAmount = 0;
    listProducts.forEach(item=>{
         totalAmount += item.amount * item.price
    })
    Number.parseFloat(totalAmount).toFixed(2)
    return (
        <section className = "cart-content">
            <header>YOUR BAG</header>
            {listProducts.length !== 0 ? 
            <div className = {listProducts.length !==0 ? "list-items": "list-item non-active"}>
                {listProducts.map((item,key) => (
                    <article key = {item.id} className={item.amount == 0 ? "cart-item non-active": "cart-item"}>
                    <img src={item.img} alt = "product"/>
                    <div>
                        <h4>{item.title}</h4>
                        <h4 className="item-price">${item.price}</h4>
                        <button className="remove-btn">remove</button>
                    </div>
                    <div>
                        <button className="amount-btn">
                        <i className="fas fa-arrow-up" onClick = {()=>increAmount(item.id)}></i>
                        </button>
                        <p className="amount">{item.amount}</p>
                        <button className = "amount-btn">
                        <i className="fas fa-arrow-down" onClick = {()=>decreAmount(item.id)
                        }></i>
                        </button>
                    </div>
                    </article>
                ))}
                <footer>
                    <hr/>
                    <div className="cart-total">
                        <h4>Total</h4>
                        <p>$ {totalAmount}</p>
                    </div>
                    <div className = "ewr">
                        <button className="btn btn-clear" onClick = {deleteAll}>
                            CLEAR CART
                        </button>
                    </div>
                </footer>
            </div>:
            <h4 style = {{textAlign: 'center', color: 'gray', marginTop: 30}}>is current empty</h4>
            }
        </section>
    )
}

export default CartContent
