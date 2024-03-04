import Image from 'next/image'
import React from 'react'


interface Props {
    title: string,
    packages?: number,
    price?: number,
    image: string
}
const DestinationCard = ({ title, packages, price, image }: Props) => {
    return (
        <div className="w-full h-[350px] my-2 rounded-md md:w-80 md:h-[330px] inline-block mr-5">
            <div>
                <Image
                    className="w-full"
                    src={image}
                    height={320}
                    width={320}
                    alt=""
                    objectFit="container"
                />
            </div>
            <div className=" flex flex-col gap-2">
                <h1 className="text-lg font-bold text-custom-black-900 mt-2">{title}</h1>
                <div className="flex gap-1 items-center">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/icons/calender.svg"
                            alt="img"
                            width={16}
                            height={16}
                            objectFit="contain"
                        />
                        {packages}
                    </div>
                </div>
                <div className="flex">
                    <span>Starting from <b>BDT {price}/=</b></span>
                </div>
            </div>
        </div>
    )
}


export default DestinationCard;
