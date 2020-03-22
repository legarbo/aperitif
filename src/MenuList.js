import React, { Component } from 'react';
import axios from 'axios';
import './MenuList.css';
import DrinkImage from './DrinkImage';

class MenuList extends Component {
  static defaultProps = {
    numDrinksToGet: 12 
  };

  constructor(props) {
    super(props);
    this.state = { drinks: [], modalIsVisible: false };
    this.handleClick = this.handleClick.bind(this);
  }

  async componentDidMount() {
    const uniques = new Set();
    while(uniques.size < this.props.numDrinksToGet) {
      if (!uniques.has(this.state.drinks.id)) {
        let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php?api=1");
      uniques.add({
        id: res.data.drinks[0].idDrink,
        name: res.data.drinks[0].strDrink,
        instructions: res.data.drinks[0].strInstructions,
        img: res.data.drinks[0].strDrinkThumb
        });
      };
    }
    this.setState({
      drinks: Array.from(uniques) 
    });
    console.log(uniques);
  }

  handleClick() {
    this.setState(state => ({
      modalIsVisible: !state.modalIsVisible
    }));
  }

  render() {
    return (
      <div className="menu-list">
            { this.state.drinks.map(d => (
        <div className="menu-list-item" key={d.id}>
          <div className="menu-list-item-image">
              <DrinkImage
                id={d.id}
                src={d.img}
                name={d.name}
              />
           </div>
        </div>
            ))}
      </div>
    )
  }
}


export default MenuList;
