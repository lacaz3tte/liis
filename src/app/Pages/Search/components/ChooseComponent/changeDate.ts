const months = ['января','февраля','мартя','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря']

export const changeDate = (value:string) =>{
  const values = value.split('-')
  return `${values[2]} ${months[Number(values[1])-1]} ${values[0]}`
}