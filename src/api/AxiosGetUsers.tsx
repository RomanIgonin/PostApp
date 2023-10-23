import axios from 'axios';

export default function AxiosGetPosts() {
    axios
        .get('http://localhost:3001/users')
        .then(response => {
            console.log(response.data)
            return response.data
        })
        .catch(error => {
            return console.error(error)
        })
}
