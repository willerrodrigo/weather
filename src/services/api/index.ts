import axios from 'axios'

import { BASE_URL } from 'constants/index'

export const api = axios.create({
  baseURL: BASE_URL
})
