"use client";
import CommonHeading from "@/components/common-heading";
import RUForm from "@/components/RUForm/RUForm";
import RUInput from "@/components/RUForm/RUInput";
import Button from "@/components/ui/button";
import { MessageCircleIcon } from "lucide-react";
import { FieldValues } from "react-hook-form";

const ConversationPage = () => {
  const defaultValues = {
    prompt: "",
  };
  const handleFormSubmit = async (values: FieldValues) => {};
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
          // resolver={zodResolver(personalInfoSchema)}
          defaultValues={defaultValues}
        >
          <div className="col-span-12 lg:col-span-10">
            <RUInput type="text" name="prompt" />
          </div>
          <Button
            // disabled={prompt === "" || isLoading}
            className="disabled:cursor-not-allowed col-span-12 lg:col-span-2 w-full"
            type="submit"
          >
            Generate
            {/* {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating...
              </>
            ) : (
              <>Generate</>
            )} */}
          </Button>
        </RUForm>
      </div>
    </div>
  );
};

export default ConversationPage;
