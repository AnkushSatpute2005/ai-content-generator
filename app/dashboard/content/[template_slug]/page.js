"use client";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import FormSection from "../_component/FormSection";
import OutputSection from "../_component/OutputSection";
import Templates from "@/app/(data)/Templates";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
import { chatSession } from "@/utils/AiModal";

const CreateNewContent = () => {
  const { template_slug } = useParams();
  const selectedTemplate = Templates.find(
    (item) => item.slug === template_slug
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const GenerateAiContent = async (formData) => {
    try {
      setLoading(true);

      // Combine the user input with the AI template
      const SelectedPrompt = selectedTemplate.aiPrompt;
      const FinalAiPrompt = JSON.stringify(formData) + ", " + SelectedPrompt;

      // Send the prompt to the AI model and get the response
      const result = await chatSession.sendMessage(FinalAiPrompt);
      const responseAiText = await result.response.text(); // Make sure this is async if needed

      // Set the AI output in state
      setAiOutput(responseAiText);

      // Save the output in the database
      await saveInDb(formData, responseAiText); // Pass responseAiText directly here

    } catch (error) {
      console.error("Error generating AI content:", error);
    }

    setLoading(false);
  };

  // const saveInDb = async (formData, aiOutput) => {
  //   try {
  //     await mongoose.connect('mongodb://localhost:27017/AiContentGenerator');

  //     const newData = new AiOutPut({
  //       aiOutput: aiOutput, // Save the AI output text
  //       formData: formData, // Save the form data sent by the user
  //     });

  //     await newData.save();
  //     console.log("AI output inserted successfully!");
  //     await mongoose.disconnect();
  //     console.log("Conection closed");
  //   } catch (error) {
  //     console.error("Error inserting AI output:", error);
  //   }
  // };

  const saveInDb = async (formData, aiOutput) => {
    try {
      await fetch("/api/SaveOutput", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ aiOutput,formData }),
      });
    } catch (error) {
      console.error("Error saving AI output:", error);
    }
  };
  

  return (
    <div className="p-10">
      <Link href="/dashboard">
        <Button>
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
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;
