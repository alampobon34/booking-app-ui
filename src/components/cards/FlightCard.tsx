import { Flight } from '@/types'
import React from 'react'
import Button from '../buttons/Button';
import Image from 'next/image';
import Link from 'next/link';

interface Prop {
  flight: Flight
}

const getDateFormat = (num: number) => {
  const date = new Date(num);
  // const dayOfWeek = DAYS[date.getDay()];
  const dayOfMonth = date.getDate();
  // const monthName = MONTHS[date.getMonth()];
  const year = date.getFullYear();
  // const fullDate = `${dayOfWeek}, ${dayOfMonth} ${monthName} ${year}`;
  // return fullDate;
};

const getTimeDifference = (MSTime: number) => {
  const seconds = Math.floor(MSTime / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const time = `${hours}h ${minutes % 60}m`;
  return time;
};

const FlightCard = ({ flight }: Prop) => {

  return (
    <div className="w-full flex flex-col md:flex-row items-center justify-between gap-2 bg-white rounded p-4 border mb-3">
      <div className="flex flex-col items-center justify-center gap-2 w-full md:w-[20%] border">
        <Image
          className="object-contain"
          src='/assets/01.jpg'
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
            date
            {/* {item.arrivalDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })} */}
          </p>
        </div>
        <p className="text-[14px] text-custom-black-600">
          date
          {/* {getDateFormat(
            new Date(item.arrivalDate).setDate(item.arrivalDate.getDate())
          )} */}
        </p>
      </div>

      <div className="flex items-center">
        <Image src="assets/icons/plane.svg" height={16} width={16} alt="" />
        <div>
          <p className="text-center text-[12px] text-custom-black-600">
            date
            {/* {getTimeDifference(
              new Date(item.departureDate).setDate(
                item.departureDate.getDate() + 20
              ) - new Date(item.arrivalDate).setDate(item.arrivalDate.getDate())
            )} */}
          </p>
          <p>------------------------------</p>
          <p className="text-center text-[12px] text-custom-black-600">1 Stop</p>
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
            date
            {/* {item.arrivalDate.toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
              hour12: false,
            })} */}
          </p>
        </div>
        <p className="text-[14px] text-custom-black-600">
          DDD
          {/* {getDateFormat(
            new Date(flight.arrivalDate).setDate(item.arrivalDate.getDate())
          )} */}
        </p>
      </div>

      <div className="flex flex-col justify-center items-center md:items-end h-full md:w-[15%] border">
        <p className="text-md mb-2 text-end md:text-center">
          BDT <span className='font-bold text-[20px]'>8200</span>
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