const React = require('react');
const BuyerLayout = require('./layout/BuyerLayout');

class BuyerIndex extends React.Component {
    render() {
        const Product = this.props.product;
        return (

            <BuyerLayout title="Kitchen Products">
            
                <div class="productPage">

                    {Product.map(product => {
                        return (
                            <div key={product._id} class="product">

                                <div className="productName">
                                    <a id='productName' href={`/products/${product._id}`}>{product.name}</a><br />
                                </div>

                                <div className="productImage">
                                    <a href={`/products/${product._id}`}><img src={product.image} alt="" id='img' /></a>
                                </div>

                                <div className="productDetails">
                                    <div className="productInfo">

                                        <div className="price">
                                            {'Price: $'}{product.price}
                                        </div>

                                        <div className="quantity">
                                            {'Quantity: '}{product.quantity}
                                        </div>

                                        <div className="rating">
                                            <span>
                                                <i className={product.rating >= 1 
                                                    ? 'fa fa-star' 
                                                    : product.rating >= 0.5 
                                                    ? 'fa fa-star-half-o' 
                                                    : 'fa fa-star-o'}></i>
                                            </span>
                                            <span>
                                                <i className={product.rating >= 2 
                                                    ? 'fa fa-star' 
                                                    : product.rating >= 1.5 
                                                    ? 'fa fa-star-half-o' 
                                                    : 'fa fa-star-o'}></i>
                                            </span>
                                            <span>
                                                <i className={product.rating >= 3 
                                                    ? 'fa fa-star' 
                                                    : product.rating >= 2.5 
                                                    ? 'fa fa-star-half-o' 
                                                    : 'fa fa-star-o'}></i>
                                            </span>
                                            <span>
                                                <i className={product.rating >= 4 
                                                    ? 'fa fa-star' 
                                                    : product.rating >= 3.5 
                                                    ? 'fa fa-star-half-o' 
                                                    : 'fa fa-star-o'}></i>
                                            </span>
                                            <span>
                                                <i className={product.rating >= 5 
                                                    ? 'fa fa-star' 
                                                    : product.rating >= 4.5 
                                                    ? 'fa fa-star-half-o' 
                                                    : 'fa fa-star-o'}></i>
                                            </span>
                                            <span> {product.reviews} reviews </span>
                                        </div>
                                    </div>

                                    <div id='availability'>
                                        {product.quantity > 0
                                            ? ''
                                            : <div className='outOfStock'>Out Of Stock!</div>
                                        }
                                    </div>
                                </div>
                                <form action="/products" method='POST'>

                                </form>
                            </div>
                        )
                    })}
                </div>
            </BuyerLayout>
        )
    }
}

module.exports = BuyerIndex;