import React from 'react'
import axios from 'axios'

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

    const response = await axios.get('https://fakestoreapi.com/products')
    const data = response.data;
    console.log(data);

    return (
        <div>
            <h1>About</h1>
            {data.map((product: IgetProduct) => (
                <div className='flex flex-col gap-2 border border-gray-500 p-2 rounded-lg  m-8' key={product.id}>
                    <h2 className='text-xl font-bold m-4'>{product.title}</h2>
                    <p className='text-lg font-semibold'>{product.price}</p>
                    <p className='text-sm text-gray-500'>{product.description}</p>
                    <p className='text-sm text-gray-500'>{product.category}</p>
                    <img src={product.image} alt="" />
                    <p className='text-sm m-4 text-green-500'>{product.rating.rate}</p>

                </div>
            ))}
        </div>
    )

}

export default About