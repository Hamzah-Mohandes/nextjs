import React from 'react'

interface IProductProps {
    params: Promise<{ id: string }>,
    searchParams: Promise<{}>;
}


async function Product(props: IProductProps) {
    const { id } = await props.params;
    console.log(id)
    return (

        <div>Product {id}</div>
    )
}
// dynamic route
export default Product