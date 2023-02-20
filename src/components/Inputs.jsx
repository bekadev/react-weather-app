import React from 'react';
import { UilSearch, UilMapMarker } from '@iconscout/react-unicons'

export const Inputs = () => {
    return (
        <div className={'flex flex-row justify-center my-6'}>
            <div className={'flex flex-row w-3/4 items-center justify-center space-x-4'}>
                <input type="text" placeholder={'Search for city...'} className={'text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase'}/>
                <UilSearch size={25} color={'white'} className={'cursor-pointer transition ease-out hover:scale-125'}/>
                <UilMapMarker size={25} color={'white'} className={'cursor-pointer transition ease-out hover:scale-125'}/>
                <div className={'flex flex-row w-1/4 items-center justify-center'}>
                    <button name={'metric'} className={'text-white font-light'}>°C</button>
                    <p className={'text-white text-xl mx-1'}>|</p>
                    <button name={'imperial'} className={'text-white font-light'}>°F</button>
                </div>
            </div>
        </div>
    );
};

