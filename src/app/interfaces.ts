export interface Hotel {
    hotelName:string,
    priceAvg:number,
    stars:number
}

export interface GetHotel {
    hotelId:number;
    hotelName:string;
    priceAvg:string;
    stars:number
}