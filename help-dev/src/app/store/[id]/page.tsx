import React from 'react'

interface IDainamicRouts {
    params: Promise<{ id: string }>;
    searchParams: Promise<{}>
}
async function DainamicRouts(props: IDainamicRouts) {
    const { id } = await props.params;
    console.log(props);
    console.log(id);
    return (
        <div className='background-gray-100 font-bold font-sans text-2xl text-center flex items-center justify-center h-screen back'>
            <h1>Dainamic Routs</h1>
        </div>
    )
}

export default DainamicRouts

