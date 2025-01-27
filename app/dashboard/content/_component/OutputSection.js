"use client"
import React from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';

import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { LuCopy } from "react-icons/lu";
import { useRef } from 'react';
import { useEffect } from 'react';

const OutputSection = ({aiOutput}) => {

  const editorRef = useRef();

  useEffect(() => {
   
    const editorInsatnce = editorRef.current.getInstance();
    editorInsatnce.setMarkdown(aiOutput)
    
  }, [aiOutput])
  

  
  return (    
    <div className='bg-white shadow-lg border rounded-lg'>
      <div className='flex justify-between items-center p-5'>
        <h2 className='font-medium text-lg'>Your Result</h2>
        <Button onClick={()=>(navigator.clipboard.writeText(aiOutput))}> <LuCopy /> Copy </Button>
      </div>
       <Editor
       ref={editorRef}
    initialValue="Your result will appear here"
    // previewStyle="vertical"
    height="600px"
    initialEditType="wysiwyg"
    useCommandShortcut={true}
  />
    </div>
  )
}

export default OutputSection