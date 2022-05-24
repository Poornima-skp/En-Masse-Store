const { render } = require('express/lib/response');
const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class New extends React.Component {
    render() {
        return(
            <DefaultLayout title = "Create New Product">
                <form action="/products" method='POST'>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" /> <br />

                    <label htmlFor="image">Image Address: </label>
                    <input type="url" name="image" id="image" /> <br />

                    <label htmlFor="price">Price: </label>
                    <input type="number" step="0.01" id="price" name="price" /><br />

                    <label htmlFor="quantity">Quantity: </label>
                    <input type="number" id="quantity" name="quantity" /> <br />
                    
                    <input type="submit" name='' value="Upload New Product" />
                </form>
            </DefaultLayout>
        )
    }    
}

module.exports = New;