import axios from 'axios'
import store from '@/store'

const baseDomain = process.env.BASE_URL
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL,
  headers: {
    // 'Authorization': `Bearer ${token}`
  }
})
