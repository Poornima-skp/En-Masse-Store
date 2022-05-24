const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Show extends React.Component {
    render() {
        const Product = this.props.product
        return (
            <DefaultLayout title="Show">
                <div>
                    <h2>{Product.name}</h2>
                    <img src={Product.image} alt="" />
                    <h3>{'Price: $'}{Product.price}</h3>
                    <h3>{'Quantity: '}{Product.quantity}</h3>
                    <h4>{Product.quantity > 0 ? 'In Stock' : 'Out Of Stock!'}</h4>
                </div>
            </DefaultLayout>


        )
    }
}

module.exports = Show;