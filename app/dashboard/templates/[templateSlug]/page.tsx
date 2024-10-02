"use client";
import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contentTemplates } from "@/lib/content-templet";
import { Label } from "@radix-ui/react-label";
import { IconLoader } from "@tabler/icons-react";
import { useState } from "react";
import Editor from "./_components/Editor";
import { generateAIContent } from "@/lib/gemini-ai";
import axios from "axios";
interface templateSlugProps {
  templateSlug: string;
}
function TemplatePage({ params }: { params: templateSlugProps }) {
  const [isLoading, setIsLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const selectedTemplate = contentTemplates.find(
    (item) => item.slug === params.templateSlug
  );
  if (!selectedTemplate) {
    return <div>Template not found.</div>;
  }
  const onSubmit = async (formData: FormData) => {
    setIsLoading(true);
    try {
      // Generate AI content
      const aiResponse = await generateAIContent(formData);

      // Send the AI generated content to your API
      const response = await axios.post("/api/", {
        title: formData.get("title"),
        description: aiResponse,
        templateUsed: selectedTemplate?.name,
      });
      setAiOutput(aiResponse);
      setIsLoading(false);
    } catch (error) {
      console.error("Error generating content or sending request:", error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="mx-5 py-2">
      <div className="flex flex-1">
        <div className="p-2 md:p-10 flex flex-col gap-2 flex-1 w-full h-full">
          <div className="flex gap-2">
            {[...new Array(1)].map((i) => (
              <div
                key={"first-array" + i}
                className="h-20 w-full  bg-gray-200 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 "
              >
                <div className="flex flex-row flex-1 px-2 gap-2  justify-between items-center mt-5 mx-2  ">
                  <h2 className="font-bold text-xl">
                    {selectedTemplate?.name}
                  </h2>
                  <ModeToggle />
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2 flex-1">
            <div className="h-full w-full bg-gray-200 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-700 ">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target as HTMLFormElement);
                  onSubmit(formData);
                }}
              >
              <div className="flex flex-col gap-4 p-5 mt-5 overflow-y-auto max-h-[500px]">
                  {selectedTemplate?.form.map((form, idx) => (
                    <div key={idx} className="max-h-[820px]">
                      <Label className="text-sm">{form?.label}</Label>
                      {form?.field === "input" ? (
                        <div className="mt-5 ">
                          <Input
                            name="title"
                            className="border-neutral-300 dark:border-neutral-800 focus:border-neutral-500 dark:focus:border-neutral-600"
                            required
                          />
                        </div>
                      ) : (
                        <div className="mt-5 ">
                          <Textarea
                            name="description"
                            className="border-neutral-300 dark:border-neutral-800 focus:border-neutral-500 dark:focus:border-neutral-600"
                            required
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="px-5">
                  <Button
                    className="my-5 flex justify-center items-center w-full "
                    type="submit"
                  >
                    {isLoading ? (
                      <IconLoader className="animate-spin" />
                    ) : (
                      "Generate Content"
                    )}
                  </Button>
                </div>
              </form>
              <div className="my-5 mx-2">
                <Editor value={isLoading ? "Generating..." : aiOutput} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplatePage;
