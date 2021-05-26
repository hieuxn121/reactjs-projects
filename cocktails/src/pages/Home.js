import React,{Component} from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
class Home extends Component {
    state = {
        key: '',
        listCocktail:[],
        loading: true
    }
    componentDidMount(){
        fetch(`${url}${this.state.key}`)
        .then((respone)=>respone.json())
        .then((cocktailList)=>{
            let drinks = cocktailList.drinks
            this.setState({listCocktail: [...drinks]})
        })
        .catch(error=>console.log(error))
        .finally(()=>{
            this.setState({loading:false})
        })
    }
    handleSubmit(event) {
        event.preventDefault();
    }
    getKey = (e) => {
        const newValue = e.target.value
        this.setState({key:newValue})
        console.log(newValue)
        let newList = []
        this.state.listCocktail.forEach((ele)=>{
            if(ele.strDrink.toLowerCase().includes(newValue.toLowerCase()))
            newList.push(ele)
        })
        this.setState({listCocktail: [...newList]})
    }
    render(){
        if (this.state.loading) {
            return <p>Data is loading...</p>;
          }
        else{
        const {key,listCocktail} = this.state
        return (
            <>
                <SearchForm data = {key} getKey = {this.getKey} handleSubmit={this.handleSubmit}/>
                <CocktailList cocktails = {listCocktail}/>  
            </>
        )}
    }
}

export default Home
