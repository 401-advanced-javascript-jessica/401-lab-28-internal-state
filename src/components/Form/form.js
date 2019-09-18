import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: 'Jessica',
            count: 0,
        };
    }

    handleChange = event => {
        this.setState({
            name: event.target.value,
        })
    };

    handleSubmit = event => {
        event.preventDefault();
        this.setState(previousState => ({
            count: previousState.count + 1,
            name: previousState.name,
        }));
    };

    render() {
        return (
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                    <button type="submit"> Update Name</button>
                </form>
        )
    }
}

export default Form;