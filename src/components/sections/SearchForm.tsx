'use client'
import React, { useEffect, useState } from 'react'
import Radio from '../inputs/Radio'
import DateInput from '../inputs/DateInput';
import Label from '../inputs/Label';
import Button from '../buttons/Button';
import Input from '../inputs/Input';
import { FaChevronDown } from "react-icons/fa";
import { checkEmptyOrNullInput } from '../../utils/validation';
import { useRouter } from 'next/navigation';
import { City, Error, FlightForm, Hotel, HotelForm } from '@/types';
import axios from 'axios';
import { getListApiRequest } from '@/utils/axios';
import { MdKeyboardArrowDown } from "react-icons/md";
import ErrorTitle from '../titles/ErrorTitle';



const SearchForm = () => {
    const router = useRouter();
    const [cities, setCities] = useState<City[]>([]);
    const [hotelList, setHotelList] = useState<Hotel[]>([]);
    const [formType, setFormType] = useState<string>('hotel');
    const [toggleHotelSubForm, setToggleHotelSubForm] = useState<boolean>(false);
    const [toggleFlightSubForm, setToggleFlightSubForm] = useState<boolean>(false);
    const [hotelForm, setHotelForm] = useState<HotelForm>({
        city: '',
        checkInDate: '',
        checkOutDate: '',
        room: 1,
        adult: 1,
        children: 0
    });

    const [flightForm, setFlightForm] = useState<FlightForm>({
        departureCity: '',
        arrivalCity: '',
        departureDate: '',
        returnDate: '',
        adult: 1,
        children: 0
    });

    const [errors, setErrors] = useState<Error>();

    const handleFormType = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrors({ fieldName: '', error: '' });
        if (e.target.value === 'hotel') {
            setFlightForm({
                departureCity: '',
                arrivalCity: '',
                departureDate: '',
                returnDate: '',
                adult: 1,
                children: 0
            });
        } else {
            setHotelForm({
                city: '',
                checkInDate: '',
                checkOutDate: '',
                room: 1,
                adult: 1,
                children: 0
            })
        }
        setFormType(e.target.value);
    }

    const handleToggleHotelSubForm = () => {
        setToggleHotelSubForm(!toggleHotelSubForm);
    }

    const handleToggleFlightSubForm = () => {
        setToggleFlightSubForm(!toggleFlightSubForm);
    }

    const handleHotelForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setHotelForm({ ...hotelForm, [name]: value });
    }

    const handleFlightForm = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFlightForm({ ...flightForm, [name]: value });
    }

    useEffect(() => {
        async function getCityList() {
            try {
                const data: City[] = await getListApiRequest<City[]>('/city');
                setCities(data);
            } catch (error) {
                console.log(error);
            }
        }


        async function getHotelList() {
            try {
                const data: Hotel[] = await getListApiRequest<Hotel[]>('/hotel');
                setHotelList(data);
            } catch (error) {
                console.log(error);
            }

        }
        getCityList();
        getHotelList();
    }, [])

    const submitForm = (e: any) => {
        e.preventDefault();
        setErrors({ fieldName: '', error: '' });
        if (formType && formType === 'hotel') {
            if (checkEmptyOrNullInput(hotelForm.city)) {
                setErrors({ fieldName: 'city', error: 'City is required.' });
                return;
            }
            if (checkEmptyOrNullInput(hotelForm.checkInDate)) {
                setErrors({ fieldName: 'checkInDate', error: 'Check In Date is required.' });
                return;
            }
            if (checkEmptyOrNullInput(hotelForm.checkOutDate)) {
                setErrors({ fieldName: 'checkOutDate', error: 'Check Out Date is required.' });
                return;
            }
            const checkInDate = new Date(hotelForm.checkInDate);
            const checkOutDate = new Date(hotelForm.checkOutDate);
            if (checkInDate.getTime() > checkOutDate.getTime()) {
                setErrors({ fieldName: 'checkOutDate', error: 'Select a greater date than Check In Date.' });
                return;
            }
            router.push(`/hotel/?city=${hotelForm.city}&checkInDate=${hotelForm.checkInDate}&checkOutDate=${hotelForm.checkOutDate}&room=${hotelForm.room}&adult=${hotelForm.adult}&children=${hotelForm.children}&desc=${0}&page=${1}&minRange=${0}&maxRange=`);
            console.log('hotel form', hotelForm)
        } else if (formType && formType === 'flight') {
            if (checkEmptyOrNullInput(flightForm.departureCity)) {
                setErrors({ fieldName: 'departureCity', error: 'Departure City is required.' });
                return;
            }
            if (checkEmptyOrNullInput(flightForm.arrivalCity)) {
                setErrors({ fieldName: 'arrivalCity', error: 'Arrival City is required.' });
                return;
            }
            if (checkEmptyOrNullInput(flightForm.departureDate)) {
                setErrors({ fieldName: 'departureDate', error: 'Departure Date is required.' });
                return;
            }
            if (!checkEmptyOrNullInput(flightForm.returnDate)) {
                const departureDate = new Date(flightForm.departureDate);
                const returnDate = new Date(flightForm.returnDate);
                if (departureDate.getTime() > returnDate.getTime()) {
                    setErrors({ fieldName: 'returnDate', error: 'Must be greater than Departure.' });
                    return;
                }
            }
            router.push(`/flight/?departureCity=${flightForm.departureCity}&arrivalCity=${flightForm.arrivalCity}&departureDate=${flightForm.departureDate}&returnDate=${flightForm.returnDate}&adult=${flightForm.adult}&children=${flightForm.children}`);
            console.log('flight form', flightForm);
        }

    }

    return (
        <div className='bg-white rounded-xl p-5 w-[90%] mx-auto border flex flex-col gap-2'>
            <div className='flex items-center gap-3'>
                <Radio id='hotel' label='Hotel' name='formType' onChange={handleFormType} checked={formType === 'hotel'} value='hotel' />
                <Radio id='flight' label='Flight' name='formType' onChange={handleFormType} checked={formType === 'flight'} value='flight' />
            </div>
            {
                formType && formType === 'hotel' ?
                    <div className='flex flex-col'>
                        <form action="" method='POST' onSubmit={submitForm}>
                            <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
                                <div className='w-full md:w-1/4 border rounded-md px-2 py-1 bg-gray-100'>
                                    <div className='flex flex-col w-full gap-2'>
                                        <select className='w-full outline-none py-3 bg-transparent rounded-md' id='city' name='city' value={hotelForm.city} onChange={(e) => setHotelForm({ ...hotelForm, city: e.target.value })}>
                                            <option value="" selected>--select-city--</option>
                                            {
                                                cities && cities.map((city, index) => <option key={index} value={city.cityName.toLocaleLowerCase()}>{city.cityName}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='w-full md:w-1/4'>
                                    <div className='flex flex-col w-full border rounded-md py-1.5 px-2 bg-gray-100'>
                                        <DateInput value={hotelForm.checkInDate} placeholder='Check-in-date' id='check-in-date' name='checkInDate' onChange={handleHotelForm} />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/4 rounded-lg'>
                                    <div className='flex flex-col w-full border py-1.5 px-2 rounded-lg bg-gray-100'>
                                        <DateInput value={hotelForm.checkOutDate} placeholder='Check-out-date' id='check-Out-date' name='checkOutDate' onChange={handleHotelForm} />
                                    </div>
                                </div>

                                <div className='w-full md:w-1/4 border relative rounded-lg'>
                                    <div className='w-full flex flex-col py-1.5 px-2 bg-gray-100 cursor-pointer'>
                                        <div className='flex justify-between items-center' onClick={handleToggleHotelSubForm}>
                                            <input readOnly type='text' name='rooms-info' placeholder={`${hotelForm.room} rooms - ${hotelForm.adult} adults - ${hotelForm.children} children`} className='bg-gray-100 w-full outline-none py-2 ' />
                                            <span>
                                                <MdKeyboardArrowDown className='w-4 h-4 md:w-5 md:h-5' />
                                            </span>
                                        </div>
                                    </div>
                                    {
                                        toggleHotelSubForm && <div className='absolute top-[105%] w-full bg-white border rounded-md'>
                                            <div className='p-4 flex flex-col gap-2'>
                                                <div className='flex justify-between items-center'>
                                                    <h1>Rooms</h1>
                                                    <Input min={1} value={hotelForm.room} styles='w-[40%] pl-2 py-1 outline-none bg-gray-50 border rounded-md' name='room' type='number' placeholder='room' readonly={false} onChange={handleHotelForm} />
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <h1>Adults</h1>
                                                    <Input min={1} value={hotelForm.adult} styles='w-[40%] pl-2 py-1 outline-none bg-gray-50 border rounded-md' name='adult' type='number' placeholder='adult' readonly={false} onChange={handleHotelForm} />
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <h1>Children</h1>
                                                    <Input min={0} value={hotelForm.children} styles='w-[40%] pl-2 py-1 outline-none bg-gray-50 border rounded-md' name='children' type='number' placeholder='children' readonly={false} onChange={handleHotelForm} />
                                                </div>
                                                <div>
                                                    <Button onClick={handleToggleHotelSubForm} name='Submit' type='button' />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='w-1/4'>
                                    {
                                        errors?.fieldName === 'city' && <ErrorTitle error={errors.error} />
                                    }
                                </div>
                                <div className='w-1/4'>
                                    {
                                        errors?.fieldName === 'checkInDate' && <ErrorTitle error={errors.error} />
                                    }
                                </div>
                                <div className='w-1/4'>
                                    {
                                        errors?.fieldName === 'checkOutDate' && <ErrorTitle error={errors.error} />
                                    }
                                </div>
                                <div className='w-1/4'>
                                </div>
                            </div>
                            <div className='w-1/4 mx-auto mt-3 -mb-9 flex justify-center'>
                                <Button name='Search' type='submit' />
                            </div>
                        </form>
                    </div>
                    :
                    <div className='flex flex-col'>
                        <form action="" method='POST' onSubmit={submitForm}>
                            <div className='flex flex-col md:flex-row items-center justify-between gap-2'>
                                <div className='w-full md:w-1/2 border rounded-md px-2 py-1 bg-gray-100'>
                                    <div className='flex flex-col w-full gap-2'>
                                        <select className='w-full outline-none py-3 bg-transparent rounded-md' id='departureCity' name='departureCity' value={flightForm.departureCity} onChange={(e) => setFlightForm({ ...flightForm, departureCity: e.target.value })}>
                                            <option value="" selected>--departure-city--</option>
                                            {
                                                cities && cities.map((city, index) => <option key={index} value={city.cityName.toLocaleLowerCase()}>{city.cityName}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 border rounded-md px-2 py-1 bg-gray-100'>
                                    <div className='flex flex-col w-full gap-2'>
                                        <select className='w-full outline-none py-3 bg-transparent rounded-md' id='arrivalCity' name='arrivalCity' value={flightForm.arrivalCity} onChange={(e) => setFlightForm({ ...flightForm, arrivalCity: e.target.value })}>
                                            <option value="" selected>--arrival-city--</option>
                                            {
                                                cities && cities.map((city, index) => <option key={index} value={city.cityName.toLocaleLowerCase()}>{city.cityName}</option>)
                                            }
                                        </select>
                                    </div>
                                </div>

                                <div className='w-full md:w-1/2'>
                                    <div className='flex flex-col w-full border rounded-md py-1.5 px-2 bg-gray-100'>
                                        <DateInput value={flightForm.departureDate} placeholder='Departure Date' id='departureDate' name='departureDate' onChange={handleFlightForm} />
                                    </div>
                                </div>
                                <div className='w-full md:w-1/2 rounded-lg'>
                                    <div className='flex flex-col w-full border py-1.5 px-2 rounded-lg bg-gray-100'>
                                        <DateInput value={flightForm.returnDate ?? null} placeholder='Return Date' id='returnDate' name='returnDate' onChange={handleFlightForm} />
                                    </div>
                                </div>

                                <div className='w-full md:w-1/2 border relative rounded-lg'>
                                    <div className='w-full flex flex-col py-1.5 px-2 bg-gray-100 cursor-pointer'>
                                        <div className='flex justify-between items-center' onClick={handleToggleFlightSubForm}>
                                            <input readOnly type='text' name='rooms-info' placeholder={`${hotelForm.adult} adults - ${hotelForm.children} children`} className='bg-gray-100 w-full outline-none py-2 ' />
                                            <span><MdKeyboardArrowDown className='w-4 h-4 md:w-5 md:h-5' /></span>
                                        </div>
                                    </div>
                                    {
                                        toggleFlightSubForm && <div className='absolute top-[105%] w-full bg-white border rounded-md'>
                                            <div className='p-4 flex flex-col gap-2'>
                                                <div className='flex justify-between items-center'>
                                                    <h1>Adults</h1>
                                                    <Input min={1} value={hotelForm.adult} styles='w-[40%] pl-2 py-1 outline-none bg-gray-50 border rounded-md' name='adult' type='number' placeholder='adult' readonly={false} onChange={handleHotelForm} />
                                                </div>
                                                <div className='flex justify-between items-center'>
                                                    <h1>Children</h1>
                                                    <Input min={0} value={hotelForm.children} styles='w-[40%] pl-2 py-1 outline-none bg-gray-50 border rounded-md' name='children' type='number' placeholder='children' readonly={false} onChange={handleHotelForm} />
                                                </div>
                                                <div>
                                                    <Button onClick={handleToggleFlightSubForm} name='Submit' type='button' />
                                                </div>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>

                            <div className='flex items-center'>
                                <div className='w-1/2'>
                                    {
                                        errors?.fieldName === 'departureCity' && <ErrorTitle error={errors.error} />
                                    }
                                </div>
                                <div className='w-1/2'>
                                    {
                                        errors?.fieldName === 'arrivalCity' && <ErrorTitle error={errors.error} styles='ml-2' />
                                    }
                                </div>
                                <div className='w-1/2'>
                                    {
                                        errors?.fieldName === 'departureDate' && <ErrorTitle error={errors.error} styles='ml-4' />
                                    }
                                </div>
                                <div className='w-1/2'>
                                    {
                                        errors?.fieldName === 'returnDate' && <ErrorTitle error={errors.error} styles='ml-2' />
                                    }
                                </div>
                                <div className='w-1/2'>
                                </div>
                            </div>
                            <div className='w-1/4 mx-auto mt-3 -mb-9 flex justify-center'>
                                <Button name='Search' type='submit' />
                            </div>
                        </form>
                    </div>
            }
        </div>
    )
}

export default SearchForm