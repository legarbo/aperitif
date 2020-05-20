import React, { Component } from 'react';
import axios from 'axios';
import ReactModal from 'react-modal';
import MenuList from './MenuList';
import ReactModalContent from './ReactModalContent';

ReactModal.setAppElement('#root')

class AppHomePage extends Component {
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
    let idx = 1;
    const maxIdx = 15;
    const iD = this.state.selected.id;
    const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${iD}`);
    const chosen = res.data.drinks[0];
    while (idx <= maxIdx) {
      if (chosen[`strIngredient${idx}`]) {
          constituent = chosen[`strMeasure${idx}`] === null
          ? chosen[`strIngredient${idx}`]
          : chosen[`strMeasure${idx}`] + ' ' + chosen[`strIngredient${idx}`] 
          constituents.push(constituent);
        idx++;
      } else {
        idx++;
      }
    }
    this.setState({ingredients: constituents, instructions: chosen.strInstructions
      })
    } catch(e) {
      alert(e);
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
    return (
      <div>
        <MenuList 
          drinks={this.state.drinks} 
          isLoading={this.state.loading} 
          handleOpenModal={(d,e) => this.handleOpenModal(d, e)}
        />
        <ReactModal 
          isOpen={this.state.showModal} 
          contentLabel="Drink chossen" 
          onRequestClose={this.handleCloseModal} 
          onAfterOpen={this.getIngredients}
          className="Modal"
          overlayClassName="Overlay" 
          closeTimeoutMS={1500} 
        >
            <ReactModalContent 
              onClick={this.handleCloseModal}
              ingredients={this.state.ingredients} 
              imgSrc={this.state.selected.img}
              caption={this.state.selected.name}
              insts={this.state.instructions}
              id={this.state.selected.id}
            />
        </ReactModal>
      </div>
    ) 
  }
}

export default AppHomePage;
