"use client";

import React from 'react'
import { CardName } from './card';

const page = () => {

    const players = [{
        name: 'SWAGATRON',
        score: 0
    }, {
        name: 'FLAVA',
        score: 0
    }, {
        name: 'SUMMER GAY',
        score: 0
    }, {
        name: 'HATCH',
        score: 0
    }, {
        name: 'PF',
        score: 0
    }, {
        name: 'BITCHNEY',
        score: 0
    }, {
        name: 'KENNY',
        score: 0
    }, {
        name: 'VIVGIN',
        score: 0
    }, {
        name: 'GREG',
        score: 0
    }];

    const teams = [{
        name: 'SWAGATRON',
        score: 0
    }, {
        name: 'FLAVA',
        score: 0
    }, {
        name: 'SUMMER GAY',
        score: 0
    }, {
        name: 'HATCH',
        score: 0
    }];

  return (
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
        {players.map((player) => <CardName key={player.name} name={player.name} score={player.score}/>)}
    </div>
  )
}

export default page