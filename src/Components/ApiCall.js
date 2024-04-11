import React, {useState,useEffect } from 'react'


const ENDPOINT = "https://reqres.in/api/users"
function ApiCall() {
   const [userData, setUserData] = useState()

    useEffect(() => {
        fetch(ENDPOINT)
        .then((response) => {
            if (response.status === 200) {
                return response.json()
            }
            throw Error("Something went wrong...")
        })
        .then((data) => {
            setUserData(data)
        }).catch((_error) => {})
    }, [])

    if (!userData) {
        return null
    }



  return <div>
        {
            userData.data.map(element => {
                return <h1>{element.email}</h1>
            })
        }
    </div>
}

export default ApiCall