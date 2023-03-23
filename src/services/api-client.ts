import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {        
        key: '3f8e198b9a8e44cfa904d5cfc522e116'
    }
})