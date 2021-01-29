import React, {Component} from 'react';
import loader from './images/loader.svg';

const Header = () => (
  <div className="header grid">
    <h1 className="title">Jiffy All Day Err Day</h1>
  </div>
);

const UserHint = ({loading, hintText}) => (
  <div className="user-hint">
    {loading ? <img src={loader} className="block mx-auto" /> : hintText}
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      hintText: '',
    };
  }

  handleChange = (event) => {
    // same thing as const value = event.target.value
    const {value} = event.target;
    // setting the new state for searchTerm
    this.setState((prevState) => ({
      // take our old props and spread them out
      ...prevState,
      // alternate: ...this.state,
      //overwrite the ones we want after
      searchTerm: value,
      hintText: value.length > 2 ? `Hit enter to search for ${value}` : '',
    }));
  };

  handleKeyPress = (event) => {
    const {value} = event.target;
    if (value.length > 2 && event.key === 'Enter') {
      alert(`search for ${value}`);
    }
  };

  render() {
    // just like const searchTerm = this.state.searchTerm
    const {searchTerm} = this.state;
    return (
      <div className="page">
        <Header />
        <div className="search grid">
          <input
            className="input grid-item"
            placeholder="Type something"
            onChange={this.handleChange}
            onKeyPress={this.handleKeyPress}
            value={searchTerm}
          />
        </div>
        <UserHint {...this.state} />
      </div>
    );
  }
}

export default App;
