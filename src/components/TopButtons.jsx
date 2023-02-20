import React from 'react';

export const TopButtons = () => {

    const cities = [
        {
            id: 1,
            title: 'Astana'
        },
        {
            id: 2,
            title: 'Tokyo'
        },
        {
            id: 3,
            title: 'Paris'
        },
        {
            id: 4,
            title: 'Barcelona'
        },
        {
            id: 5,
            title: 'Sydney'
        }
    ]

    return (
        <div className={'flex items-center justify-around my-6'}>
            {cities.map(c => <button className={'text-white text-lg font-medium'} key={c.id}>{c.title}</button>)}
        </div>
    );
};

