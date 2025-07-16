'use client';

import { useEffect, useState } from 'react';

import React from 'react'
import axios from 'axios'

function ContactUs() {
    const [products, setProducts] = useState<any>([]);

    useEffect(() => {
        axios.get('http://localhost:8000/products').then((res) => {
            setProducts(res.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    console.log(products);

    return (
        <div className='flex flex-col gap-2 m-8 pt-8 fixed top-0 w-full z-50'>
            <h1>ContactUs</h1>
            {products.map((product: any) => (
                <div className='flex ' key={product.id}>
                    <h2 className='text-xl font-bold m-4'>{product.title}</h2>
                    <p className='text-lg font-semibold'>{product.price}</p>
                </div>
            ))}
        </div>
    )
}

export default ContactUs