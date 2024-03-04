export interface NavLink {
    name: string;
    link: string;
    iconName: string;
}


export interface Currency {
    name: string;
    value: string;
}


export interface HotelSearchParams {
    city: string;
    checkInDate: string;
    checkOutDate: string;
    room: number;
    adult: number;
    children: number;
    desc: number;
    page: number | null;
    minRange: number | null;
    maxRange: number | null;
    ratings: number | null;

}

export interface FlightSearchParams {
    departureCity: string;
    arrivalCity: string;
    departureDate: string;
    returnDate: string | null;
    adult: number;
    children: number;
    desc: number;
    page: number | null;
    minRange: number | null;
    maxRange: number | null;
    airLinesName: string;
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
    id: number;
    cityName: string;
    value: string;
}


export interface Hotel {
    id: number;
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

export interface Flight {
    id: number;
    airLinesName: string;
    departureCity: string;
    departureDate: string;
    departureTime: string;
    arrivalCity: string;
    arrivalDate: string;
    arrivalTime: string;
    returnDate?: string | null;
    adult?: number;
    children?: number;
    flightType: string;
    imageUrl: string;
    price: number
}


export interface Pagination {
    status: number;
    total: number;
    from: number;
    to: number;
}