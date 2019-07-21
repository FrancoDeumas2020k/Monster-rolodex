import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

let CardList = (props) => (
    <div className="cardList">
        {
            props.monsters.map(monster => <Card key={monster.id} monster = {monster}/>)
        }
    </div>
)

export default CardList;