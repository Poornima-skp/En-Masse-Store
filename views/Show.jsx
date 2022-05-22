const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Show extends React.Component{
    render() {
        const buyProduct = this.props.buyProduct
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