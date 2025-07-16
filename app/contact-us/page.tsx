'use client';

import { useEffect, useState } from 'react';

import React from 'react'
import axios from 'axios'

function ContactUs() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => {
            setProducts(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log(products);

    return (
        <div className='flex flex-col gap-2 m-8 pt-8'>
            <h1>ContactUs</h1>
            {products.map((product: any) => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <p>{product.price}</p>
                    <p>{product.description}</p>
                    <p>{product.category}</p>
                    <img src={product.image} alt="" />
                    <p>{product.rating.rate}</p>
                </div>
            ))}
        </div>
    )
}

export default ContactUs