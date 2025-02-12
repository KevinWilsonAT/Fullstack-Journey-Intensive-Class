import React from 'react'
import SingleItem from './SingleItem'
import { Link } from 'react-router-dom'

const ItemList = ({ title, items, itemsArray, path, idPath }) => {
  return (
    <div className="item-list">
        <div className='item-list__header'>
            <h2>Popular {title}  </h2>
            <Link to={path} className='main__link'>Show all</Link>
        </div>

        <div className="item-list__container">
            {itemsArray
                .filter( ( currentValue, index) => index < items )
                .map(
                    (currentObject, index) => (
                        <SingleItem
                            idPath={idPath}
                            /*
                                id={currentObject.id}
                                name={currentObject.name}
                                image={currentObject.image}
                                banner={currentObject.banner}

                                can be simplified to: {...currentObject}
                            */
                            {...currentObject}
                            key={` ${title} - ${index} `}
                        />
                    )
                )
            }
        </div>
    </div>
  )
}

export default ItemList