import axios from 'axios'
const url = 'https://localhost:5002/api/tuote'

const getAll = async () => {
    const response = await axios.get(url)
    return response.data
}

const getOne = async (id) => {
    const res = await axios.get(`${url}/${id}`)
    return res.data
}

const create = async data => {
    const response = await axios.post(url, data)
    return response.data
}

export default { getAll, getOne, create }