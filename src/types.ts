export interface NavLink {
    name: string;
    link: string;
    iconName: string;
}


export interface Currency {
    name: string;
    value: string;
}


export interface HotelSearchParams{
    city: string;
    checkInDate: string;
    checkOutDate: string;
    room: number;
    adult: number;
    children: number;
    desc: number;
    page: number | null;
    minRange: number | null;
    maxRange: number | null

}


export interface HotelForm {
    city: string;
    checkInDate: string;
    checkOutDate: string;
    room: number;
    adult: number;
    children: number;
}

export interface Error {
    fieldName: string;
    error: string;
}

export interface FlightForm {
    departureCity: string;
    arrivalCity: string;
    departureDate: string;
    returnDate: string;
    adult: number;
    children: number;
}


export interface City {
    cityName: string;
}


export interface Hotel {
    title: string;
    cityName: string;
    price: number;
    review: number | null;
    imageUrl: string;
    isBooked?: boolean;
    maxAdultPerson: number;
    maxChildren: number;
    maxChildrenAge: number;
    room: number;
}