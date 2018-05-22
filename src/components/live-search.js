import React from 'react';

import SearchForm from './search-form';
import CharacterCount from './character-count';
import CharacterList from './character-list';

export default class LiveSearch extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      searchInput: '',
      characters: this.props.characters
    };
  }

  onSearchInputChange(searchInput){
    console.log(searchInput);
    let filteredCharacters = this.props.characters.filter(character => {
      let search = searchInput.toLowerCase();
      if (character.name.toLowerCase().includes(search)){
        return character;
      }
      else{
        return '';
      }
    });

    if (filteredCharacters){
      this.setState({
        searchInput,
        characters: filteredCharacters
      });
    }
  }

  render(){
    return (
        <div className="live-search">
            <SearchForm value={this.state.searchInput} onChange={searchInput => this.onSearchInputChange(searchInput)}/>
            <CharacterCount count={this.state.characters.length} />
            <CharacterList characters={this.state.characters} />
        </div>
    );
  }
}
