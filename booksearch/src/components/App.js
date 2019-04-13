import React from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';



class App extends React.Component {
  render(){
    return(
      <div className= "container">
        <SearchBar />
        <BookList />
        
      </div>
    ) 
  }
}

export default App;
