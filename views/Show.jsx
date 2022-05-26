const React = require('react');
const BuyerLayout = require('./layout/BuyerLayout');

class Show extends React.Component {
    render() {
        const Product = this.props.product
        return (
            <BuyerLayout>
                <div>
                    <h2>{Product.name}</h2>
                    <div className="showPageImage">
                        <img src={Product.image} alt="" id="showPageImage" />
                    </div>
                    <div className="showProductDetails">
                        <h3>{'Price: $'}{Product.price}</h3>
                        <h4>{Product.quantity > 0 ? 'In Stock' : 'Out Of Stock!'}</h4>
                    </div>
                    <div className="customerRequest">
                        <form action="/products/:id" method='POST'>
                            <button></button>
                        </form>
                    </div>
                    
                    
                </div>
            </BuyerLayout>


        )
    }
}

module.exports = Show;