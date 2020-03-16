import React, { Component } from 'react';
import axios from 'axios';
import './MenuList.css';

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
    let arr = [];
    while(arr.length < this.props.numDrinksToGet) {
      let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php?api=1");
      arr.push({
        id: res.data.drinks[0].idDrink,
        name: res.data.drinks[0].strDrink,
        instructions: res.data.drinks[0].strInstructions,
        img: res.data.drinks[0].strDrinkThumb
        });
      };
    this.setState({
      drinks:arr 
    });
    console.log(arr);
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
          <div className="menu-list-item">
            <div className="menu-list-item-image">
              <img key={d.id} id={d.id} src={d.img} alt={d.name} 
                style={{width: 200 + 'px', height: 200 + 'px'}}/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}


export default MenuList;
