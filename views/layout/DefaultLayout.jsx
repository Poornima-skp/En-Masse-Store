const React = require('react');

class DefaultLayout extends React.Component {
    render() {

        return (
            <html lang='en'>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                    <link rel="stylesheet" href="/css/nav.css" />
                    <link rel="stylesheet" href="/css/landingPage.css" />
                    <link rel="stylesheet" href="/css/index.css" />
                    <link rel="stylesheet" href="/css/newProductForm.css" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                </head>
                <body>
                    <nav>
                        <h1>EN - MASSE STORE</h1>
                        {/* <div className="links">

                            <div className="start">
                                <a href="/products">Home</a>
                            </div>
                            <div className="end">
                                <a href="cart">Cart</a>
                            </div>

                        </div> */}
                    </nav>

                    {/* <h2>{this.props.title}</h2> */}
                    {this.props.children}

                </body>

            </html>
        )
    }
}

module.exports = DefaultLayout;