const React = require('react');
const buyProduct = require('../models/buyProduct');
const DefaultLayout = require('./layout/DefaultLayout');

class Index extends React.Component{
    render() {
        const { buyProduct } = this.props;
        return(
           <DefaultLayout title = "Kitchen Products">
                <div>

                    <ul>
                        {buyProduct.map((product, i) => {
                            return (
                                <div>
                                    <h1><a href={`/products/${i}`}>{product.name}</a></h1><br />
                                    <a href={`/products/${i}`}><img src={product.image} alt="" /></a><br />
                                    {'Price: '}{product.price} <br />
                                    {'Quantity: '}{product.quantity} <br />
                                    {'Product Availability: '}{product.canBuy ? 'In Stock' : 'Out Of Stock!'}
                                </div>
                            )
                        })}
                    </ul>
                </div>
           </DefaultLayout>
        )
    }
}

module.exports = Index;