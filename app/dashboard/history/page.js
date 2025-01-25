"use client"
import dbConnect from '@/lib/db';
// import connectToDatabase from '@/lib/db';
import AiOutput from '@/lib/models/AiOutput';
// import AiOutput from '../../lib/models/AiOutput';
import React from 'react'
import { useEffect,useState} from 'react';
// import mongoose from 'mongoose';

const History = () => {
  const [data, setData] = useState([])
    useEffect(() => {
      console.log(data)
      }, [data]);


      const getData = async () => {
        try {
          await dbConnect();
        
          const items = await AiOutput.find({}); 
          
          const titles = items.map(item => item.formData.title);

          // console.log(titles);
          setData({...data,titles})
          // setData(titles)
          // console.log(titles)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      getData();

  return (
    <div>
      {data.map((title,idx)=>(
        <li key={idx}>{title}</li>
      ))}
    </div>
  );
};

export default History;
