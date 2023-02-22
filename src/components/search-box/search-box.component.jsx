import { Component } from 'react';

import './search-box.styles.css';

class SearchBox extends Component{
render(){
    return(
    <input 
      className={`search-box ${this.props.className}`} 
      // search-box is a class as well as monster-search-box and we can target these classes to apply different css
      type='search' 
      placeholder= {this.props.placeholder}
      // place holder may change because we might be searchiong for different things
      onChange={this.props.OnChangeHandler} />
    )
    // This is a class for generic search-box, this component has been modified in App.js for specific monster search
}
}

export default SearchBox;