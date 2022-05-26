const { render } = require('express/lib/response');
const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Edit extends React.Component {
    render() {
        const product = this.props.product;
        return (

            <DefaultLayout title="Create New Product">
                <div className="createPage">
                    <h2>Edit {product.name}</h2>
                    <form action={`/products/vendor/${product._id}?_method=PUT`} method='POST' className='form'>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" defaultValue={product.name} /> <br />

                        <label htmlFor="image">Image Address: </label>
                        <input type="url" name="image" defaultValue={product.image} id="image" /> <br />

                        <label htmlFor="price">Price: </label>
                        <input type="number" step="0.01" id="price" name="price" defaultValue={product.price}/><br />

                        <label htmlFor="quantity">Quantity: </label>
                        <input type="number" id="quantity" name="quantity" defaultValue={product.quantity} /> <br />

                        <label htmlFor="rating">Rating: </label>
                        <input type="number" step="0.01" min="0" max="10" id="rating" name="rating" defaultValue={product.rating} /> <br />

                        <label htmlFor="reviews">Reviews: </label>
                        <input type="number" id="reviews" name="reviews" defaultValue={product.reviews}/> <br />

                        <input type="submit" name='' id="submit" value={`Update ${product.name}`} />
                    </form>
                </div>
            </DefaultLayout>

        )
    }
}

module.exports = Edit;