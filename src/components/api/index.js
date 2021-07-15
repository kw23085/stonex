import './index.css'
import React, { useEffect } from 'react'
import axios from 'axios'


function Api() {

    // const axiosInstance = axios.create({
    //     baseURL: 'https://random-data-api.com/api'
    // })

    // async function fetchUsers(size) {
    //     axiosInstance.get(`/users/random_user?size=${size}`)
    //     .then(res => {console.log(res.data)})
    // }

    // useEffect(() => {
    //     fetchUsers(10)
    // }, [])


    var collectedIntervals = [[10,15], [3,4], [7,9]]
    var desiredInterval = [1,12]
    var result = []

    var remainingIntervals = function(collectedIntervals, desiredInterval) {
    
        // Sorting collected intervals
        const sortedCollectedIntervals = collectedIntervals.sort(
            ([s1, e1], [s2, e3]) => s1 - s2
        )

        const [start, end] = desiredInterval

        // Head
        if(start < sortedCollectedIntervals[0][0]) {
            result.push([start, sortedCollectedIntervals[0][0]])
        }

        // Intervals
        let previousEnd

        for(let i = 0; i < sortedCollectedIntervals.length; i++) {
            
        }



        console.log(sortedCollectedIntervals)
        console.log(result)

    };

    remainingIntervals(collectedIntervals, desiredInterval)

    return (
        <div className="api-user-container">

           <h1 className="api-user-title">USERS LIST</h1>

        </div>
    )
}

export default Api

