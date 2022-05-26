const { render } = require('express/lib/response');
const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class New extends React.Component {
    render() {
        return (

            <DefaultLayout title="Create New Product">
                <div className="createPage">
                    <h2>Create New Product</h2>
                    <form action="/products" method='POST' className='form'>
                        <label htmlFor="name">Name: </label>
                        <input type="text" id="name" name="name" /> <br />

                        <label htmlFor="image">Image Address: </label>
                        <input type="url" name="image" id="image" /> <br />

                        <label htmlFor="price">Price: </label>
                        <input type="number" step="0.01" id="price" name="price" /><br />

                        <label htmlFor="quantity">Quantity: </label>
                        <input type="number" id="quantity" name="quantity" /> <br />

                        <label htmlFor="rating">Rating: </label>
                        <input type="number" min="0" max="10" id="rating" name="rating" /> <br />

                        <label htmlFor="reviews">Reviews: </label>
                        <input type="number" id="reviews" name="reviews" /> <br />

                        <input type="submit" name='' id ="submit" value="ADD New Product" />
                    </form>
                </div>
            </DefaultLayout>

        )
    }
}

module.exports = New;