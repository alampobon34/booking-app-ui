import { Flight } from '@/types'
import React from 'react'
import Button from '../buttons/Button';
import Image from 'next/image';
import Link from 'next/link';

interface Prop {
  flight: Flight
}


const getHourDifference = (time1: string, time2: string) => {
  let date1: any = new Date("1970-01-01T" + time1 + "Z");
  let date2: any = new Date("1970-01-01T" + time2 + "Z");
  let timeDiffMilliseconds = date2 - date1;
  let hours = Math.floor(timeDiffMilliseconds / 3600000);
  let minutes = Math.floor((timeDiffMilliseconds % 3600000) / 60000);
  let seconds = Math.floor((timeDiffMilliseconds % 60000) / 1000);
  return `${hours}h ${minutes}m`;
}

const FlightCard = ({ flight }: Prop) => {

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 bg-white rounded-xl p-4 border mb-3">
      <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[20%]">
        <Image
          className="object-contain"
          src={flight.imageUrl}
          height={60}
          width={60}
          alt=""
        />
        <h1 className="text-sm w-3/4 text-center font-semibold">{flight.airLinesName}</h1>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between w-full md:flex-col">
          <p className="text-[14px] text-custom-black-600">Departure</p>
          <p className="font-bold text-[14px] text-custom-black-900">
            {flight.departureTime}
          </p>
        </div>
        <p className="text-[14px] text-custom-black-600">
          {flight.departureDate}
        </p>
      </div>

      <div className="flex items-center">
        <Image src="assets/icons/plane.svg" height={16} width={16} alt="" />
        <div>
          <p className="text-center text-[12px] text-custom-black-600">
            {
              getHourDifference(flight.departureTime, flight.arrivalTime)
            }
          </p>
          <p>------------------------------</p>
          <p className="text-center text-[12px] text-custom-black-600">{flight.flightType}</p>
        </div>
        <Image
          src="assets/icons/plane-landing.svg"
          height={16}
          width={16}
          alt=""
        />
      </div>

      <div className="flex flex-col">
        <div className="flex justify-between w-full md:flex-col">
          <p className="text-[14px] text-custom-black-600">Arrive</p>
          <p className="font-bold text-[14px] text-custom-black-900">
            {flight.arrivalTime}
          </p>
        </div>
        <p className="text-[14px] text-custom-black-600">
          {flight.arrivalDate}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center md:items-end h-full md:w-[15%]">
        <p className="text-md mb-2 text-end md:text-center">
          BDT <span className='font-bold text-[20px]'>{flight.price}</span>
        </p>
        <Button
          name="Book Now"
          type='button'
        />
        <Link href="" className="text-[14px] underline text-custom-black-900 text-sm text-end mt-2 md:text-center">
          View Detail
        </Link>
      </div>
    </div>
  );

}

export default FlightCard