"use client";
import CommonHeading from "@/components/common-heading";
import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import Button from "@/components/ui/button";
import { ConversationFormSchema } from "@/validation/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { LucideLoader2, MessageCircleIcon } from "lucide-react";
import { useState } from "react";
import { FieldValues } from "react-hook-form";

const ConversationPage = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const defaultValues = {
    prompt: "",
  };
  const handleFormSubmit = async (values: FieldValues) => {
    console.log(values);
  };
  return (
    <div>
      <CommonHeading
        title="Conversation"
        bgColor=" bg-purple-200"
        iconColor=" text-purple-800"
        description="chat with amazing ai"
        icon={MessageCircleIcon}
      />
      <div className=" px-4 lg:px-6">
        <RUForm
          onSubmit={handleFormSubmit}
          resolver={zodResolver(ConversationFormSchema)}
          defaultValues={defaultValues}
        >
          <div className="col-span-12 lg:col-span-10">
            <RUInput type="text" name="prompt" />
          </div>
          <Button
            disabled={loading}
            className="disabled:cursor-not-allowed col-span-12 lg:col-span-2 w-full"
            type="submit"
          >
            {loading ? (
              <>
                <LucideLoader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>Generate</>
            )}
          </Button>
        </RUForm>
      </div>
      <div className=" space-y-4 mt-4 px-4 lg:px-6">Messages Content Here</div>
    </div>
  );
};

export default ConversationPage;
