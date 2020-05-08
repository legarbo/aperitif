import React from 'react';
import Spinner from './Spinner';
import DrinkImage from './DrinkImage';
import './MenuList.css';

const MenuList = ({ drinks, isLoading, handleOpenModal }) => {
  const renderLoading = () => <Spinner />;

  const renderDrinks = () => {
    return (
      <div className="menu-list">
        { drinks.map(d => (
          <DrinkImage
            key={d.id}
            id={d.id}
            src={d.img}
            name={d.name}
            onClick={e => handleOpenModal(d, e)}
          />
      ))}
    </div>
    )
  }
  return <>{isLoading ? renderLoading() : renderDrinks()}</>
}

export default MenuList;
