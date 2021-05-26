import React from 'react'

const SearchForm = ({data,getKey,handleSubmit}) => {
    return (
        <section className = "section search">
            <form className = "search-form" onSubmit={handleSubmit}>
                <div className = "form-control">
                    <label htmlFor="name">Search Your Favorite Cocktail</label>
                    <input 
                    type="text" 
                    name="id"
                    value = {data}
                    onChange = {(e) => getKey(e)} />
                </div>
            </form>
        </section>
    )
}

export default SearchForm
