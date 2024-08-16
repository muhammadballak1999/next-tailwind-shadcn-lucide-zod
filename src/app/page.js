"use client"

import { useRef, useState } from "react";
import { FirstSection } from "@/components/sections/FirstSection";
import { SecondSection } from "@/components/sections/SecondSection";
import { ThirdSection } from "@/components/sections/ThirdSection";
import { Button } from "@/components/ui/button";


export default function Home() {
  const firstSectionRef = useRef(null);
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const validate = () => {
    firstSectionRef.current.click();
  }

  const submit = () => {
    setConfirmSubmit(true);
  }

  const closeSuccessPopup = () => {
    setConfirmSubmit(false);
  }

  return (
    <main className="flex min-h-screen flex-col p-8">
      <p className="font-bold text-3xl">Add Product</p>
      <div className="flex sections-container gap-5">
        <FirstSection ref={firstSectionRef} onSubmit={submit} />
        <SecondSection />
        <ThirdSection />
      </div>
      <div className="flex gap-2 justify-end mt-5">
        <Button variant="outline">Cancel</Button>
        <Button onClick={validate}>Create Product</Button>
      </div>
      { confirmSubmit ? 
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-md text-center">
            <p className="text-green-500 text-lg font-semibold mb-4">
              Data Successfully Saved!
            </p>
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={closeSuccessPopup}
            >
              Close
            </button>
          </div>
        </div>
      : <></> }
    </main>
  );
}
