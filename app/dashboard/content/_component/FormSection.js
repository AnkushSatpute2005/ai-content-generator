"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";
import React from "react";
import { Loader2Icon } from "lucide-react";

const FormSection = ({ selectedTemplate,userFormInput,loading }) => {

  const [formData, setFormData] = useState();

  const onSubmit = (e) => {    
    e.preventDefault(); //this protect you from unwanted reload or refresh by button
    userFormInput(formData);
  };


  const handelInputChange = (event) => {
    const {name,value} = event.target;
    setFormData({...formData,[name]:value})
  };


  return (
    <div className="p-5 shadow-lg border rounded-lg bg-white">
      <Image
        src={selectedTemplate?.icon}
        alt={selectedTemplate?.name}
        width={70}
        height={70}
      />
      <h2 className="font-bold text-2xl md-2 text-primary">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate.desc}</p>

      <form action="" className="mt-6" onSubmit={onSubmit}>
        {selectedTemplate.form.map((item, idx) => (
          <div key={idx} className="my-2 flex flex-col gap-2 mb-7">
            <label htmlFor="" className="font-bold">
              {item.label}
            </label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handelInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item.required}
                onChange={handelInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className="w-full py-6" disabled={loading}>
          {loading&&<Loader2Icon className="animate-spin"/>}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;
