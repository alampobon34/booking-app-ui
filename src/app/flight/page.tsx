import React from 'react'

interface Props {
    searchParams: any
}
const page = ({ searchParams }: Props) => {
    console.log(searchParams);
    return (
        <div>
            <h1>Flight search result page</h1>
            <h1>{searchParams.departureCity}</h1>
            <h1>{searchParams.arrivalCity}</h1>
            <h1>{searchParams.departureDate}</h1>
            <h1>{searchParams.returnDate}</h1>
            <h1>{searchParams.adult}</h1>
            <h1>{searchParams.children}</h1>
        </div>
    )
}

export default page