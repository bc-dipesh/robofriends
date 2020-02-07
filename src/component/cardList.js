import React from 'react';
import Card from './card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((user) => {
        let { key, id, name, email } = user;
        return <Card key={key} id={id} name={name} email={email} />;
    });
    return (
        <div>
            {cardComponent}
        </div>
    );
}

export default CardList;