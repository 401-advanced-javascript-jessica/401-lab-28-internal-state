import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form/form';
import Text from './components/Text/text';

import './styles.css';


class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0,
            name: 'Jessica',
        }
    }


  render() {
    return (
        <React.Fragment>
      <Form name={this.state.name} count={this.state.count}/>
      <Text name={this.state.name} count={this.state.count}/>
      </React.Fragment>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
