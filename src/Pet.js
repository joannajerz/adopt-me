import React from 'react';
import {ANIMALS} from "@frontendmasters/pet";

export default function Pet({ name, animal, breed }) {
    return (
        <div>
            <h1>{name}</h1>
            <h2>{animal}</h2>
            <h2>{breed}</h2>
        </div>
    )
};

