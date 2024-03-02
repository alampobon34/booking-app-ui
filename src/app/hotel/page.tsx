import React from 'react'

interface Props {
    searchParams: any
}
const page = ({ searchParams }: Props) => {
    console.log(searchParams);
    return (
        <div>
            <h1>{searchParams.city}</h1>
            <h1>{searchParams.checkInDate}</h1>
            <h1>{searchParams.checkOutDate}</h1>
            <h1>{searchParams.room}</h1>
            <h1>{searchParams.adult}</h1>
            <h1>{searchParams.children}</h1>
        </div>
    )
}

export default page