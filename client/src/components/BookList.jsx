import React, { useEffect, useState } from 'react'
import axios from 'axios'

function BookList() {
    const [books,setbooks] = useState([])


    useEffect(() => {
        const getItemList = async () => {
            try{
                const res = await axios.get('http://localhost:3004/api/books')
                setbooks(res.data)
              }
            catch(err){
                console.log(err)
            }
        }
        getItemList()
    },[]);

    
  return (
    <>
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>PublishDate</th>
                <th>Writer</th>
                <th>Country</th>
                <th>AddDate</th>
            </tr>
        </thead>
        <tbody>
            {
                books.map((item,index) => {
                    return (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.publishDate}</td>
                            <td>{item.writer.firstName} {item.writer.lastName} </td>
                            <td>{item.writer.country.name}</td>
                            <td>{item.addDate}</td>
                        </tr>
                    )
                })

            }
        </tbody>
    </table>
    </>
    )
}

export default BookList