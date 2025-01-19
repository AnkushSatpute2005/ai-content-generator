"use client";
import { useParams } from "next/navigation";
import React from "react";
import FormSection from "../_component/FormSection";
import OutputSection from "../_component/OutputSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { chatSession } from "@/utils/AiModal";
import { useState } from "react";
// import { db } from "@/lib/db";

const CreateNewContent = () => {
  const { template_slug } = useParams();
  // console.log("template_slug:", template_slug);

  const selectedTemplate = Templates.find(
    (item) => item.slug === template_slug
  );
  // console.log("selectedTemplate:", selectedTemplate );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState('');

  const GenerateAiContent = async (formData) => {
    try {
      setLoading(true);
      const SelectedPrompt = selectedTemplate.aiPrompt;
      const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;
      const result = await chatSession.sendMessage(FinalAiPrompt);
      const responseAiText = result.response.text();
      setAiOutput(responseAiText);
    } catch (error) {
      console.error("Error generating AI content:", error);
    }

    setLoading(false);
  };

  const saveInDb= async() => {
    // const result = db.insert(UserSchema).Values
  }
  

  return (
    <div className="p-10">
      <Link href={"/dashboard"}>
        <Button>
          {" "}
          <IoMdArrowRoundBack /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v) => {
            GenerateAiContent(v);
          }}
          loading={loading}
        />

        <div className="col-span-2">
            <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
