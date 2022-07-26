import axios from 'axios'

export default class AuthServices {
  static async register(data) {
    console.log('URL --', process.env.BACKEND_URL)
    const res = await axios(process.env.BACKEND_URL + '/auth/local/register', {
      method: 'POST',
      data,
    })
    return res
  }
}
