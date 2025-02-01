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
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useSession, signIn, signOut } from "next-auth/react";
// import { UpdateCreditUsageContext } from "@/app/(context)/UpdateCreditUsageContext";
import { UpdateCreditContext } from "@/app/(context)/UpdateCreditUsageContext";


const CreateNewContent = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const { usage, setUsage } = useContext(TotalUsageContext);
//  const [useUpdateCreditUsageContext, setUseUpdateCreditUsageContext] = useState(UpdateCreditUsageContext)
const [updateCreditContext, setUpdateCreditContext] = useState(UpdateCreditContext)

  const { template_slug } = useParams();
  const selectedTemplate = Templates.find(
    (item) => item.slug === template_slug
  );

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState("");

  const GenerateAiContent = async (formData) => {
    if (usage >= 10000) {
      alert("Please Upgrade");
      router.push("/dashboard/billing");
      return;
    }
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
      const email = session.user?.email;
      await saveInDb(
        formData,
        responseAiText,
        selectedTemplate.slug,
        selectedTemplate.name,
        selectedTemplate.icon,
        email
      ); // Pass responseAiText directly here
    } catch (error) {
      console.error("Error generating AI content:", error);
    }

    setLoading(false);
    setUpdateCreditContext(Date.now());
    // console.log(Date.now())
  };

  const saveInDb = async (formData, aiOutput, slug, name, image, email) => {
    try {
      await fetch("/api/SaveOutput", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ aiOutput, formData, slug, name, image, email }),
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
