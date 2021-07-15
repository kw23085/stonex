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

    var remainingIntervals = function(collectedIntervals, desiredInterval) {
    
        const [ start, end ] = desiredInterval
        let intervalArray = Array(end - start + 1).fill(0)
        let result = []

        collectedIntervals.forEach( ([s, e], index) => {
 
            if (s > start && s < end) {
                for(let i = s - start; i <= e - start; i++) {
                    if(i > intervalArray.length - 1) break;
                    intervalArray[i] = 1;
                }
            }

        })

        

        let p1 = 0 
        let p2 = 0


        intervalArray.forEach( (item, index) => {
            
            if(item === 0 && intervalArray[index - 1] != 0) {
                p1 = index + 1
            } 
            else if (item === 1) {
                p2 = index + 1
                // if(intervalArray[index + 1] != 1)
                console.log(p1, index + 1)
            }

        })


        console.log(intervalArray)
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

