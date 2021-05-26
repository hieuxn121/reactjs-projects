import React from 'react'
import ContailItem from './ContailItem'

const CocktailList = ({cocktails}) => {
    return (
        <section className = "section">
            <h2 className = "section-title">
                Cocktails
            </h2>
            <div className="cocktail-center">
                {cocktails.map((item)=>
                    <ContailItem 
                    key={item.idDrink}
                    image={item.strDrinkThumb}
                    name={item.strDrink}
                    info={item.strAlcoholic}
                    glass={item.glass}/>
                )}
            </div>
        </section>
    )
}

export default CocktailList
