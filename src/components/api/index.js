import './index.css'
import React, { useEffect } from 'react'
import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})

function Api() {

    function fetchUsers() {
        axiosInstance.get('/todos')
        .then(res => {console.log(res)})
    }

    // useEffect(() => {
    //     fetchUsers()
    // }, [])

    return (
        <div className="api-user-container">

            <h1 className="api-user-title">USERS LIST</h1>

        </div>
    )
}

export default Api
