const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout')

class Edit extends React.Component{
    render(){
        return(
            <DefaultLayout title = 'Edit Product'>
                <h1>Edit page</h1>
            </DefaultLayout>
        )
    }
}

module.exports = Edit;