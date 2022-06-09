import React from 'react';
import Autosuggest from 'react-autosuggest';
import { Link } from 'react-router-dom';
import './index.css';
import Fuse from 'fuse.js';
import {villages} from "../../index";
// import villages from '../../villages'

let characters = villages.map(el =>({ ...el, keyFields: 'поселок ' + el.name}) )

const fuse = new Fuse(characters, {
  keys: [
    'keyFields'
  ],
  includeScore: true
});


// const results = fuse.search('мирный');
// let filter = results.map(el => ({...el.item}))


const languages = [
  {
    name: 'Сказка-5',
    uname: 'skazka-5',
  },
  {
    name: 'Шелест',
    uname: 'shelest',
  },
  {
    name: 'Мирный',
    uname: 'mirniy',
  },
  {
    name: 'Хомутово',
    uname: 'homutovo',
  },
  {
    name: 'Адмиральский',
    uname: 'admiralskiy',
  },
  {
    name: 'Реки',
    uname: 'reki',
  },
  {
    name: 'Игнатово',
    uname: 'ignatovo',
  },
  {
    name: 'Черничное',
    uname: 'chernichnoe',
  },
  {
    name: 'Пушкино Лайф',
    uname: 'pushkino-life',
  },
  {
    name: 'Лисичкин Луг',
    uname: 'lisichkin-lug',
  },
  {
    name: 'Гжельские узоры',
    uname: 'gjelskie-uzori',
  },
  {
    name: 'Грильяж',
    uname: 'grilyag',
  },
  {
    name: 'Земляничная поляна',
    uname: 'zemlynichnaya-polyana',
  },
  {
    name: 'Ильинское ИЖС',
    uname: 'ilinskoe-igs',
  },
  {
    name: 'Лесная сказка',
    uname: 'lesnaya-skazka',
  },
  {
    name: 'Матчино лайф',
    uname: 'matchino-life',
  },
  {
    name: 'Матчино парк',
    uname: 'matchino-park',
  },
  {
    name: 'Рэд',
    uname: 'red',
  },
  {
    name: 'Сказка 6',
    uname: 'skazka-6',
  },
  {
    name: 'Сонинский лес',
    uname: 'soninskiy-les',
  },
  {
    name: 'Степыгино',
    uname: 'stepigino',
  },
  {
    name: 'Степыгино ИЖС',
    uname: 'stepigino-igs',
  },
  {
    name: 'Фаворит',
    uname: 'favorit',
  },
  {
    name: 'Фишер',
    uname: 'fisher',
  },
  {
    name: 'Шишкино-3',
    uname: 'shishkino-3',
  },
  {
    name: 'Новая Володарка',
    uname: 'new-volodarka',
  },
  {
    name: 'Русавкино-Заречное',
    uname: 'rusavkino-zarechnoe',
  },
  {
    name: 'Флора Парк',
    uname: 'flora-park',
  },
  {
    name: 'Удино Парк',
    uname: 'udino-park',
  },
  {
    name: 'Южный парк',
    uname: 'south-park',
  },
  {
    name: 'Ртищево',
    uname: 'rtishevo',
  },
  {
    name: 'Благовещенское',
    uname: 'blagoveshenskoe',
  },
  {
    name: 'Горки лайф',
    uname: 'gorki-laif',
  },
  {
    name: 'Маслово',
    uname: 'maslovo',
  },
];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
  const escapedValue = escapeRegexCharacters(value.trim());
  
  if (escapedValue === '') {
    return [];
  }

  // const regex = new RegExp('^' + escapedValue, 'i');

  // const results = fuse.search(value);
  // let filter = results.map(el => ({...el.item}))
  // let filteredArrName = languages.filter(language => regex.test(language.name));

  const results = fuse.search(escapedValue);
  let filteredArrName = results.map(el => ({...el.item}))

  return filteredArrName
}

function getSuggestionValue(suggestion) {
  return suggestion.name;
}

function renderSuggestion(suggestion) {
  const uname = suggestion.uname
  return (
    <Link
      to={`/village/${uname}`}
    > 
    <span>{suggestion.name}</span>
    </Link>
  );
}

class SearchInput extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      suggestions: []
    };    
  }

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };
  
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value),
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: [],
      value: ''
    });
  };

  render() {
    const { value, suggestions } = this.state;

    const inputProps = {
      placeholder: "Поиск",
      value,
      onChange: this.onChange,

    };

    return (
          <Autosuggest
              suggestions={suggestions}
              onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
              onSuggestionsClearRequested={this.onSuggestionsClearRequested}
              getSuggestionValue={getSuggestionValue}
              renderSuggestion={renderSuggestion}
              inputProps={inputProps}
          />
    );
  }
}

export default SearchInput
