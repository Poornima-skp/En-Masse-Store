const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class BuyerIndex extends React.Component {
    render() {
        const Product = this.props.product;
        return (

            <DefaultLayout title="Kitchen Products">
                <div className='addNewProduct'>
                    <a href="/products/new">ADD New Product</a>
                </div>

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
                                        </div>
                                    </div>

                                    <form action={`/products/vendor/${product._id}?_method=DELETE`} method='POST'>
                                        <input type="submit" value="DELETE" />
                                        <button>
                                            <a href={`/products/vendor/${product._id}/edit`}>{`Edit ${product.name}`}</a>
                                        </button>
                                    </form>

                                    <div id='availability'>
                                        {product.quantity > 0
                                            ? ''
                                            : <div className='outOfStock'>Out Of Stock!</div>
                                        }
                                    </div>


                                    {/* <div id='availability'>
                                        {product.quantity > 0
                                            ? <form action={`/products/${product._id}/buy`} method='POST' id="addItems" >
                                                <button id="buyItems">
                                                    <a href={`/products/${product._id}/buy`} id="buyText" >BUY</a>
                                                </button>
                                                <input type="submit" name='' id='addItemsToCart' value="Add to Cart" />

                                            </form>
                                            : 'Out Of Stock!'
                                        }
                                    </div> */}

                                </div>
                                <form action="/products" method='POST'>

                                </form>
                            </div>


                        )
                    })}
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = BuyerIndex;