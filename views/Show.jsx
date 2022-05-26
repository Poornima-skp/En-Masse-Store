const React = require('react');
const BuyerLayout = require('./layout/BuyerLayout');

class Show extends React.Component {
    render() {
        const Product = this.props.product
        return (

            <BuyerLayout title={`${Product.name}`}>
                <a href="/products" id='back'>Back</a>
                <div className='showPage'>

                    <div className="showPageImage grid">
                        <img src={Product.image} alt="" id="showPageImage" className='large' />
                    </div>

                    <div className="showProductDetails grid">
                        {/* <ul> */}
                        {/* <li><h2 className='showPageName'>{Product.name}</h2></li> */}

                        <li><h3 className='showPagePrice'>{'Price: $'}{Product.price}</h3></li>

                        <li><h4>{Product.quantity > 0
                            ? <div className='inStock'>In Stock</div> : <div className='outOfStock'>Out Of Stock!</div>}</h4></li>

                        <li><h4>Description:</h4>
                            {Product.productDescription}</li>



                        <li><h4>Images:</h4>
                            <div>
                                <img src={Product.image} alt="" className="imageIcon" />
                            </div>
                        </li>
                        
                    </div>

                    <div className="customerRequest grid">
                       
                        <li id='cartDisplay'><div><h4>Seller:</h4></div>
                            <div>{Product.sellerName}</div></li>

                        <li id='cartDisplay'><div><h4>Price:</h4></div>
                            <div>${Product.price}</div></li>
                            
                        {Product.quantity > 0 && (
                            <>
                                <li>
                                    <div id="cartDisplay">
                                        <div><h4>Qty:</h4></div>
                                        <div>
                                            <select value='qty' onChange={e => setQty(e.target.value)}>
                                                {
                                                    [...Array(Product.quantity).keys()].map(x => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    ))
                                                }
                                            </select>

                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <form action={`/products/${Product._id}/cart?_method=PUT`} method='POST'>
                                        <input type="submit" name='' id="submit" value="Add to Cart" className='addToCart' />
                                    </form>
                                </li>
                                
                            </>
                        )}
                        <li><h4>{Product.quantity > 0
                            ? '' : <div className='outOfStock'>Out Of Stock!</div>}</h4></li>

                        
                    </div>


                </div>
            </BuyerLayout >


        )
    }
}

module.exports = Show;