import React, { Component } from 'react';
import './App.css';
import Optimizer from './components/optimizer';
import Button from 'react-bootstrap/Button';

class App extends Component {

    constructor(props) {
      super(props);

      this.state = {
        startOptimizing: false
      };
    }
    
    render() {
      return (
          <div className="App">
              {!this.state.startOptimizing ? 
                <React.Fragment>
                  <header className="App-header">
                      Satisfactory Optimization Tool
                  </header>
                  <div>
                    <div className="d-grid gap-2">
                      <Button
                        variant='secondary'
                        size='lg'
                        onClick={() => this.setState({startOptimizing: true})}
                      >
                        Start Optimizing
                      </Button>
                    </div>
                  </div>
                </React.Fragment>
                :
                <Optimizer/>
              }
          </div>
      );
    }
}

export default App;
