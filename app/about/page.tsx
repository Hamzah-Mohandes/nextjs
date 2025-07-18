import React from 'react'
import axios from 'axios'
import { justForServer } from '../serverOnly'

export interface IgetProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

export interface Rating {
    rate: number;
    count: number;
}


async function About() {

    const result = await fetch('http://localhost:8000/products', {
        cache: "no-store",// was macht cache ? cache ist ein objekt das die daten speichert und wenn die daten nicht geaendert werden werden die daten nicht erneut geladen 

        next: {
            revalidate: 10,// time set for revalidate the data in seconds 
        }

    })

    const data = await result.json()
    console.log(data)

    justForServer()
    return (
        <div>
            <h1>About</h1>
            {data.map((product: IgetProduct) => (
                <div key={product.id} className='flex flex-col gap-2 border border-gray-500 p-2 rounded-lg  m-8'>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p className='text-red-500'> id : {product.id} </p>
                </div>
            ))}

        </div>
    )

}

export default About