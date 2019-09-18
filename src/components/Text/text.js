import React from 'react';

class Text extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name: this.props.name,
            count: this.props.count,
        }
    }

    render() {
        return (
            <div>
                <div>Name: {this.state.name} </div>
                <div># of Updates: {this.state.count} </div>
            </div>
        )
    }
}

export default Text;