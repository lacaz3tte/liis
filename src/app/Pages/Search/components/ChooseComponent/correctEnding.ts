export const correctEnding = (value:number) => {
  if((10<value%100 && value%100<20) || (4<value%10 && value%10<11) || value%10===0){
    return ' отелей'
  }
  if(1<value%10 && value%10<5){
    return ' отеля'
  }
  return ' отель'
}