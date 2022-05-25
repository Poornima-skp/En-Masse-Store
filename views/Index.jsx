const React = require('react');

const DefaultLayout = require('./layout/DefaultLayout');

class Index extends React.Component{
    render() {
        const Product  = this.props.product;
        return(
            
           <DefaultLayout title = "Kitchen Products">
                <div className='add'>
                    <a href="/products/new">ADD New Product</a>
                </div>
                <div class="productPage"> 
                     
                        {Product.map(product => {
                            return(
                                
                              
                                   
                                    <div key={product._id} class="product">

                                        <a id='productName' href={`/products/${product._id}`}>{product.name}</a><br />
                                        <a href={`/products/${product._id}`}><img src={product.image} alt="" /></a><br />
                                        <div className="productDetails">
                                            {'Price: $'}{product.price} <br />
                                            {'Quantity: '}{product.quantity} 
                                        <div id='availability'>
                                            {product.quantity > 0 
                                            ? <form action={`/products/${product._id}/buy`} method='POST' >
                                                <button>
                                                    <a href={`/products/buy`}>BUY</a>
                                                </button>
                                                <input type="submit" name='' id='add' value="Add to Cart" />

                                            </form> 
                                            : 'Out Of Stock!'
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

module.exports = Index;