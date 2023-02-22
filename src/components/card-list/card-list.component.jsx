import { Component } from 'react';
import './card-list.styles.css';

class CardList extends Component{
    render(){ // Only obne parent level component and rest are child component that means one total outer div
        // all other divs must be in this div
        //Destructuring
        // whenever props change components will re-render 
        const {monsters} = this.props;
        return (
            <div className='card-list'>
            {monsters.map((monster) =>{
                const {name, email, id} = monster;
                return(
                <div className='card-container' key={id}>
                    <img 
                    alt={`monster ${name}`} 
                    src={`https://robohash.org/${id}?set=set2$size=180x180`} />
                    {// The mosnter id chnages from 1 to anmy number changing the image of the monster based on their id
                    }
                    <h2>{name}</h2>
                    <p>{email}</p>
                </div>
        )})}
            </div>
        );
    }
}
    

export default CardList;