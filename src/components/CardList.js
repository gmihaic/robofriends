import React, {Component} from 'react';
import Card from './Card'

const CardList = ({robots}) => {    
    
    {/*const cardComponent = robots.map((user, idx) => {
        return (
            <Card 
                key={"kcard" + idx} 
                id={robots[idx].id} 
                name={robots[idx].name} 
                email={robots[idx].email} 
                /> 
            );
    });*/}

    /*if (true) {
        throw new Error("NOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!");
    }*/

    return (     
        <>  
            {/*
            <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} /> 
            <Card id={robots[1].id} name={robots[1].name} email={robots[1].email} /> 
            <Card id={robots[2].id} name={robots[2].name} email={robots[2].email} />    
            */}
            {/*
                {cardComponent}
            */ }
       
            {                
                robots.map((user, idx) => {
                    return (
                        <Card 
                            key={"kcard" + idx} 
                            id={robots[idx].id} 
                            name={robots[idx].name} 
                            email={robots[idx].email} 
                        />                         
                    );
                })
            }        

        </>
    );
}

export default CardList;