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
                                            {'Quantity: '}{product.quantity} <br />
                                            <h4>{product.quantity > 0 ? 'In Stock' : 'Out Of Stock!'}</h4>
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