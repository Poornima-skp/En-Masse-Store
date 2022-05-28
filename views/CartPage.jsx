const React = require('react');

const BuyerLayout = require('./layout/BuyerLayout');

class Cart extends React.Component {
    render() {
        const Product = this.props.product
        const Cart = this.props.cart

        console.log(Product)
        console.log(Cart)

        return (
            <BuyerLayout title='Your Cart'>
                <div className="selectedItems">
                    <div className="selctedProductName">
                        {Product.name}
                    </div>

                    <div className="selectedProductQuantity">
                        {Product.quantity}
                    </div>

                    <div className="selectedProductPrice">
                        {Product.price}
                    </div>

                    <div className="selectedProductTotalPrice">
                        {Product.quantity * Product.price}
                    </div>
                </div>

            </BuyerLayout>
        )
    }
}

module.exports = Cart;