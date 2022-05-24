const React = require('react');

class DefaultLayout extends React.Component{
    render() {

        return(
            <html lang='en'>
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css" />
                </head>
                <body>
                    <nav>  
                            <h1>EN - MASSE STORE</h1>
                    </nav>

                    {/* <h2>{this.props.title}</h2> */}
                    {this.props.children}

                </body>

            </html>
        )
    }
}

module.exports = DefaultLayout;