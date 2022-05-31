const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');

class Landing extends React.Component {
    render() {
        return (
            <DefaultLayout title="Landing Page">
                <div className="client">
                    <div className="buyer">
                        <button type="submit" value="buy" name="action" id='clientAction' >
                            <a href={'/products'} id='buttonText'>Shopper</a>
                        </button>
                        <img src="https://images.unsplash.com/photo-1560858001-2a568c6ea1d7?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YnV5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500" alt="" id='landingPageImage'/>
                        
                    </div>

                    <div className="vendor">
                        <button type="submit" value="sell" name="action" id='clientAction'>
                            <a href={'/products/vendor'} id='buttonText'>Vendor</a>
                        </button>
                        <img src="https://images.unsplash.com/photo-1594969155368-f19485a9d88c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=60&raw_url=true&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c2VsbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500" alt="" id='landingPageImage'/>
                        
                    </div>
                </div>
            </DefaultLayout>
        )

    }
}

module.exports = Landing;