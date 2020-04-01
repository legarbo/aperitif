import React, { Component } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import './MenuList.css';
import DrinkImage from './DrinkImage';

ReactModal.setAppElement('#root')

class MenuList extends Component {
  static defaultProps = {
    numDrinksToGet: 12 
  };

  constructor(props) {
    super(props);
    this.state = { drinks: [], ingredients: [], showModal: false, selected: {}, loading: false };
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.getIngredients = this.getIngredients.bind(this);
    this.uniques = new Set();
  }

  componentDidMount() {
    this.getDrinks()
  }

  async getDrinks() {
    try {
      this.setState({loading: true});
      const arr = [];
      while(arr.length < this.props.numDrinksToGet) {
        let res = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php?api=1");
        let newDrink = res.data.drinks[0];
        if (!this.uniques.has(newDrink.idDrink)) {
          this.uniques.add(newDrink.idDrink);
          arr.push({
            id: res.data.drinks[0].idDrink,
            name: res.data.drinks[0].strDrink,
            img: res.data.drinks[0].strDrinkThumb
            });
        } else {
          console.log('FOUND DUPLICATE!');
          console.log(newDrink);
        }
      }
      this.setState({
        drinks: arr,
        loading: false
      });
    } catch (e) {
      alert(e);
    }
  }

  async getIngredients() {
    try {
    let constituents = []; 
    let constituent = '';
    const iD = this.state.selected.id;
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${iD}`);
      const chosen = res.data.drinks[0];
      let idx = 1;
    while (chosen[`strIngredient${idx}`] != null && chosen[`strMeasure${idx}`] != null) {
        constituent = chosen[`strMeasure${idx}`]  === null
          ? chosen[`strIngredient${idx}`] 
          : chosen[`strMeasure${idx}` ] + chosen[`strIngredient${idx}`]; 
          constituents.push(constituent);
        idx++;
    }
    this.setState({ ingredients: constituents, instructions: chosen.strInstructions })
    } catch(e) {
      console.log(e);
    }
  }

  handleOpenModal (d, e) {
    this.setState(state => ({
      showModal: !state.showModal,
      selected: d
    }));
  }

  handleCloseModal () {
    this.setState(state => ({
      showModal: !state.showModal,
      selected: {}
    }))
  }

  render() {
    if (this.state.loading) {
      return (
        <div className="MenuList-spinner">
          <i className="far fa-8x fas fa-cocktail fa-spin"></i>
          <h1 className="MenuList-title">Loading...</h1>
        </div>
      )
    }
    return (
      <div>
           <div className="menu-list">
             { this.state.drinks.map(d => (
               <div className="menu-list-item" key={d.id}>
                 <div className="menu-list-item-image">
                   <DrinkImage id={d.id} src={d.img} name={d.name} onClick={e => this.handleOpenModal(d, e)} />
                 </div>
               </div>
             ))}
           </div>
           <ReactModal isOpen={this.state.showModal} contentLabel="Drink chossen" onRequestClose={this.handleCloseModal} onAfterOpen={this.getIngredients}>
             <figure>
               <img src={this.state.selected.img} width="400" height="400" 
                 alt={this.state.selected.name} 
                 id={this.state.selected.id} />
             </figure>
             <h3>{this.state.selected.name}</h3>
               <ul>
                 {this.state.ingredients.map((i,index) => (
                   <li key={index}>{i}</li>
                 ))}
               </ul>
             <p>{this.state.instructions}</p>
             <button className="close" onClick={this.handleCloseModal} >Go Back</button>
           </ReactModal>
      </div>
    ) 
  }
}


export default MenuList;
