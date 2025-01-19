import { useEffect,useState } from 'react'
import React from 'react'
import TemplateCard from './TemplateCard'
import Templates from '@/app/(data)/Templates'

const TemplateSection = ({userSearchInput}) => {

  const [tempalateList, setTempalateList] = useState(Templates);

  
  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter(item =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase()) // Return true for matching items
      );
      setTempalateList(filterData);
    } 
    else {
      setTempalateList(Templates); // Reset to the full list when input is empty
    }
  }, [userSearchInput]);
  
  
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-10'>
      {tempalateList.map((item,idx)=>(
        // <h2>{item.aiPrompt}</h2>
        <TemplateCard key={idx}{...item}/>
      ))}
      
    </div>
  )
}

export default TemplateSection
