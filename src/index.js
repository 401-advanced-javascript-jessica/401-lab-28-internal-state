import React from 'react';
import ReactDOM from 'react-dom';

import './styles.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name: 'Jessica',
        }
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
        <React.Fragment>
      <form onSubmit={this.handleSubmit}>
          <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
          />
          <button type="submit"> Update Name</button>
      </form>
        <div>
          <div>Name: {this.state.name} </div>
          <div># of Updates: {this.state.count} </div>
        </div>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
