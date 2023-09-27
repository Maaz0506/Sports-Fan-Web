import{ useEffect, useState } from 'react';
// import { Card } from 'react-bootstrap';
import axios from "axios"

const News = () => {
  
  const [news,setNews]=useState([])
  
const options = {
    method: 'GET',
    url: 'https://cricbuzz-cricket.p.rapidapi.com/news/v1/index',
    headers: {
      'X-RapidAPI-Key': '683352a4e5msh1fd0bf5d197cfeep1fa887jsn54c414f1b212',
      'X-RapidAPI-Host': 'cricbuzz-cricket.p.rapidapi.com'
    }
  };
  useEffect(()=>{
    const handleNews=async()=>{
        try {
            const response = await axios.request(options);
            console.log(response.data);
            setNews(response.data)
        } catch (error) {
            console.error(error);
        }
    }

handleNews()
  },[])


  return (
    <><div className='flex gap-6'>
      {/* {news.length>=1?.map((item,index)=>(
        <Card style={{  margin: '10px' }} className='w-[22rem] ' key={index}>
      <Card.Img variant="top" src={book.books.image} className='h-[22rem]'  />
      <Card.Body className='h-full'>
        <Card.Text className='fst-italic md:text-lg  capitalize text-sm'>
          <strong  className='px-2  '>Title:</strong>{book.books.title}
          <br />
          <strong  className='px-2  '>Author:</strong>{book.books.author}
          <br />
          <strong className='px-2  '>Genre:</strong>{book.books.genre}
          <br />
          <strong className='px-2  '>Description:</strong>{book.books.description}
        </Card.Text>
      </Card.Body>
    </Card>
      ))} */}
    
    </div>
    </>
  )
}

export default News;
