import axios from 'axios'

axios.defaults.baseURL = 'https://www.themealdb.com/'

// ? Данные котегории

const allIngredients = () =>{
    return axios.get('api/json/v1/1/list.php?i=list')
}

const allMeals = () =>{
    return axios.get('api/json/v1/1/filter.php?i=salt')
}

const allRandomMeals = () =>{
    return axios.get('api/json/v1/1/filter.php?i=garlic')
}

const allInformationalsMeals = (id) =>{
    return axios.get(`api/json/v1/1/lookup.php?i=${id}`)
}
const postOrderProduct = (product) => {
    const token = 'YOUR_TELEGRAM_BOT_TOKEN';
    const chat_id = 'YOUR_CHAT_ID';
    const api_url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    const message = `<b>Новый Заказ</b>\n ФИО: ${product.name}\n Адрес: ${product.address}\n Телефон: ${product.phone}\n Название товара: ${product.title}`;
  
    return axios.post(api_url, {
      parse_mode: 'HTML',
      text: message,
      chat_id
    });
  };
  
  export const services = {
    allIngredients,
    allMeals,
    allRandomMeals,
    allInformationalsMeals,
    postOrderProduct
  };
  

