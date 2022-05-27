const { render } = require('express/lib/response');
const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Edit extends React.Component {
    render() {
        const product = this.props.product;
        return (

            <DefaultLayout title="Create New Product">
                <div className="createPage">
                    <h2 id="editProductName">Edit {product.name}</h2>
                    <form action={`/products/${product._id}?_method=PUT`} method='POST' className='form'>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" defaultValue={product.name} /> <br />

                        <label htmlFor="image">Image Address: </label>
                        <input type="url" name="image" defaultValue={product.image} id="image" /> <br />

                        <label htmlFor="price">Price: </label>
                        <input type="number" step="0.01" id="price" name="price" defaultValue={product.price}/><br />

                        <label htmlFor="quantity">Quantity: </label>
                        <input type="number" id="quantity" name="quantity" defaultValue={product.quantity} /> <br />

                        <label htmlFor="productDescription">Description: </label>
                        <input type="text-Box" id="productDescription" name="productDescription" defaultValue={product.productDescription}/> <br />

                        <label htmlFor="sellerName">Seller Name: </label>
                        <input type="text" id="sellerName" name="sellerName" defaultValue={product.sellerName}/> <br />

                        <label htmlFor="rating">Rating: </label>
                        <input type="number" step="0.1" min="0" max="10" id="rating" name="rating" defaultValue={product.rating} /> <br />

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