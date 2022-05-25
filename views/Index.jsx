const React = require('react');

const BuyerLayout = require('./layout/BuyerLayout');

class Index extends React.Component{
    render() {
        const Product  = this.props.product;
        return(
            
           <BuyerLayout title = "Kitchen Products">
                {/* <div className='addNewProduct'>
                    <a href="/products/new">ADD New Product</a>
                </div> */}
                
                
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
                                            ? <form action={`/products/${product._id}/buy`} method='POST' id ="addItems" >
                                                    <button id="buyItems">
                                                    <a href={`/products/buy`} id="buyText" >BUY</a>
                                                </button>
                                                <input type="submit" name='' id='addItemsToCart' value="Add to Cart" />

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
           </BuyerLayout>
        )
    }
}

module.exports = Index;