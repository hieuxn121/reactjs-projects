import React from 'react'

const Categories = ({categories, filterMenu}) => {
    return (
        <div className="btn-container">
            {categories.map((item,key) => (
                <button key = {key} 
                className = "filter-btn" type="button"
                onClick = {() => filterMenu(item) }>
                    {item}
                </button>
            ))}
        </div>
    )
}

export default Categories
