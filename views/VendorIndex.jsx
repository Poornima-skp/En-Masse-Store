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
                                    <a id='productName' href={`/products/vendor/${product._id}/edit`}>{product.name}</a><br />
                                </div>

                                <div className="productImage">
                                    <a href={`/products/vendor/${product._id}/edit`}><img src={product.image} alt="" id='img' /></a>
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

                                    <form action={`/products/vendor/${product._id}?_method=DELETE`} method='POST'>
                                        <div className="delEdit">
                                            <input type="submit" value="DELETE" />
                                            <button>
                                                <a href={`/products/vendor/${product._id}/edit`}>{`Edit ${product.name}`}</a>
                                            </button>
                                        </div>
                                    </form>

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
            </DefaultLayout>
        )
    }
}

module.exports = BuyerIndex;