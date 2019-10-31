import React,{ Component }from 'react';
import CardList from './components/card-list/card-list.component';
import Searchbox from './components/search-box/searchbox.component';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters : [],
      searchField : ''
    }
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => this.setState({ monsters : data }))
  }

  handleChange = (e) => {
     this.setState({
        searchField : e.target.value
     })
  }

  render() {
    const { monsters , searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => {
         return monster.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return (
      <div className ="App">
         <h1>Monster Rolodex</h1>
        <Searchbox placeholder="search monsters" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters} />
      </div>
    )
  }
}

export default App;