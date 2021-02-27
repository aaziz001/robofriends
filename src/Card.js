import React from 'react'

export const Card = ({id, name, email}) => {
    return (
        <div className = 'bg-light-green dib br3 pa3 ma2 grow'>
            <img src = {`https://robohash.org/${id}.png?size=200x200`} alt = "Robot"/>
            <div className = 'card-body'>
                <h2>{name}</h2>
                <p>{email}</p>                
            </div>
        </div>
    )
}
