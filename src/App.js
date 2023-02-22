import { Component } from 'react';
// for class component we need to import component from react and then mke the class extend the component
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';



/*Order
 class will always run the constructor function first
 constructor just initializes the state
 The render runs need and it determines the intial UI is going to look like
 Next react DidMount runs
 then render method gets called again to update component
*/

// function App() { This is function method and below is class method
class App extends Component{
// Local only belongs to this component nd this cn be done using the constructor method
  constructor(){
    super();
    // You need to write super whenever there is constructor case

    this.state={// key value pair
      // This is usually used to perform operation on the HTML like giving values
      monsters: [
        // Make an array to stop repitition
        // {
        //   name: 'Linda',
        //   id: '12e1231e',
        // },
        // {
        //   name: 'Frank',
        //   id: '12ed2dacas',
        // },
        // {
        //   name: 'Jacky',
        //   id: '1231e'
        // }
        // Should't hardcode data
      ],  // empty list
      searchField:''
      // we have access to this anywhere in our component that's why we move it to state
    };
    console.log('constructor')
  }

  componentDidMount(){
    console.log('componentDidMount')
    // The moment your component gets renders that moment we want to get the data using 
    // api  call 
    // use fetch to get json using api
    fetch('https://jsonplaceholder.typicode.com/users')
    // this is a promise so that I can eventually have a value
      .then((response) => response.json())
      // after getting the data we call the .then method and response is what is being returned from .then
      // every .then that returns a value gonna return a promise
      .then((users)=> this.setState(()=>{
      // whatever is in the response.json is gonna get passes to this users as the argument
      return{monsters: users}
      },
      ()=>{
        console.log(this.state);
      } 
      ));
}
  // Since the function doersn't change so don't put it in the asyn function
  OnSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    // Used to lower case all values to compare lower case strings
    // 
    this.setState(()=>{
      // whenever setState is getting called your component gets re-rendered
      return {searchField};
      // this is used to return the value of the key
    })
  }

  // Have to add render to make class method
  render(){
  console.log('render');
  
  // Destructuring
  // Variables are getting initialized
  const {monsters, searchField}=this.state;
  const{OnSearchChange} = this;
  // this is done to get all the value from this.state and this and cast them to variables 
  
  // This whole component is used to filter the monsters
  const filteredMonsters = monsters.filter((monster) =>{
    return monster.name.toLocaleLowerCase().includes(searchField);
    //.includes returns true if the value matches any value in the array
  });// function is not being change so no need to keep in the asyn function

  return (
    // This returns html and this function tells what we want to render
    <div className="App">
      
      <SearchBox 
      className='monsters-search-box'
      OnChangeHandler={OnSearchChange} 
      placeholder ='search monsters'/>
      {/*<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
        <p>Hi {this.state.name.firstname} {this.state.name.lastname}, I work at {this.state.company}</p>  
        {//Whenever the react sees a curly braces then it knows the html wanna ccess the javascript variable
        }<button onClick={()=>{
          //passing by function in the following way helps ensure your object i up to date

          this.setState(
            () =>{
              // This is the function being passed
              return{
              name: {firstname: 'Tahseen', lastname: 'Ali'},
              };
            },
            () =>{
              // This is the call back function
              console.log(this.state);
              // This function is only going to run once all the state changes have been applied 
            }
          );
          // when state is a different object in memory then react rerender the component 
          // we do this using setState
          // This is help to modify the value of a key is the constructor
          // This set State will shallow merge the oject to our previous object and give us a new object
          // React sees the keys match so it updates the key's value 
        }}>Change Name</button>
      
        </header>
      */}
      {/*filteredMonsters.map((monsters)=> { // .map works with callbck function
        // React invokes every single element of the array
        // Gives access to every single function of the array
        return <div key={monsters.name}>
        {// This key is only for react to differentiate eat key: value pair with same key
        }
        <h1>{monsters.name}</h1>
        </div>;
      })*/
      }
      <CardList monsters = {filteredMonsters}/>
      {// we give this beacuse it's an anonymous function and we don't want to re-intialize
      // this filteredMonsters function over and over again 
      // Components need to be camel cased.
      // props are short form of properties liken type, className etc are props of input in the above code
      // since CardList is a component we made so we can pass it props by naming them whatever we want
      // Unlike input which is a javascript component o we can't name our props and just follow documentation
      }
    </div>
    );
  }
}

export default App;
