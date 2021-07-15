import './index.css'
import React, { useEffect } from 'react'
import axios from 'axios'


function Api() {

    const axiosInstance = axios.create({
        baseURL: 'https://random-data-api.com/api'
    })

    async function fetchUsers(size) {
        axiosInstance.get(`/users/random_user?size=${size}`)
        .then(res => {console.log(res.data)})
    }

    useEffect(() => {
        fetchUsers(10)
    }, [])


    return (
        <div className="api-user-container">

           <h1 className="api-user-title">USERS LIST</h1>

        </div>
    )
}

export default Api

