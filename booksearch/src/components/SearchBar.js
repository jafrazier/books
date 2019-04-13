import React from 'react';

class SearchBar extends React.Component {
  state = {term: ''};

  onFormSubmit = (event) => {
    event.preventDefault();
    
  }

  render() {
    return (
      <div className= "container">
        <form onSubmit={this.onFormSubmit} className="form">
          <div className="form-group">
            <input  
              className="form-control"
              type="text" 
              value={this.state.term}
              onChange={(e) => this.setState({term: e.target.value})}
              placeholder = "Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;


