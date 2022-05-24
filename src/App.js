import React from 'react';
import Calculator from './components/Calculator';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <header className="title">
          <h1>Math Magicians</h1>
        </header>
        <Calculator />
      </div>
    );
  }
}

export default App;
