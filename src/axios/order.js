import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-887bf.firebaseio.com/'
})

export default instance;