import { GetHotel } from "../../../../interfaces";

export const sortByReitUp = (hotelOne:GetHotel, hotelTwo:GetHotel,) => {
  if(hotelOne.stars < hotelTwo.stars){
    return 1
  }
  if(hotelOne.stars > hotelTwo.stars){
    return -1
  }
  return 0
}

export const sortByReitDown = (hotelOne:GetHotel, hotelTwo:GetHotel,) => {
  if(hotelOne.stars > hotelTwo.stars){
    return 1
  }
  if(hotelOne.stars < hotelTwo.stars){
    return -1
  }
  return 0
}

export const sortByPriceUp = (hotelOne:GetHotel, hotelTwo:GetHotel,) => {
  if(hotelOne.priceAvg < hotelTwo.priceAvg){
    return 1
  }
  if(hotelOne.priceAvg > hotelTwo.priceAvg){
    return -1
  }
  return 0
}

export const sortByPriceDown = (hotelOne:GetHotel, hotelTwo:GetHotel,) => {
  if(hotelOne.priceAvg > hotelTwo.priceAvg){
    return 1
  }
  if(hotelOne.priceAvg < hotelTwo.priceAvg){
    return -1
  }
  return 0
}