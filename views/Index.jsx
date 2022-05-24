const React = require('react');

const DefaultLayout = require('./layout/DefaultLayout');

class Index extends React.Component{
    render() {
        console.log(this.props);
        const Product  = this.props.product;
        // const{ xyz } = this.props;

        // console.log(xyz);
        return(
           <DefaultLayout title = "Kitchen Products">
                <div>

                    <ul>
                        {/* {Product.map((product, i) => {
                            return (
                                <div>
                                    <h1><a href={`/products/${i}`}>{product.name}</a></h1><br />
                                    <a href={`/products/${i}`}><img src={product.image} alt="" /></a><br />
                                    {'Price: '}{product.price} <br />
                                    {'Quantity: '}{product.quantity} <br />
                                    {'Product Availability: '}{product.quantity > 0 ? 'In Stock' : 'Out Of Stock!'}
                                </div>
                            )
                        })} */}
                        {Product.map(product => {
                            return(
                                <li key ={product._id}>
                                    <h1><a href={`/products/${product._id}`}>{product.name}</a></h1><br />
                                    <a href={`/products/${product._id}`}><img src={product.image} alt="" /></a><br />
                                    {'Price: $'}{product.price} <br />
                                    {'Quantity: '}{product.quantity} <br />
                                    {'Product Availability: '}{product.quantity > 0 ? 'In Stock' : 'Out Of Stock!'}
                                </li>
                            )
                        })}
                    </ul>
                </div>
           </DefaultLayout>
        )
    }
}

module.exports = Index;