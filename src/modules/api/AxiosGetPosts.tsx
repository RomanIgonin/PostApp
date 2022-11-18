import axios from 'axios';
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function AxiosGetPosts() {
    // const [posts, setPosts] = useState([])
    //
    // useEffect(() = > {
    //     axios
    //     .get('http://localhost:3001/posts')
    //         .then(response => {
    //             console.log(response.data)
    //             const data = response.data;
    //             return data;
    //         })
    //         .catch(error => {
    //             return console.error(error)
    //         })
    // }, [])
        axios
            .get('http://localhost:3001/posts')
            .then(response => {
                console.log(response.data)
                const data = response.data;
                return data;
            })
            .catch(error => {
                return console.error(error)
            })

}
