const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Show extends React.Component{
    render() {
        const Product = this.props.Product
        return(
            <DefaultLayout title="Show">
                <div>
                    <h1>Show Page</h1>

                </div>
            </DefaultLayout>
            
            
        )
    }
}

module.exports = Show;