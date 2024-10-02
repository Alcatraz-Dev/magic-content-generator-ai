"use client";
import React from "react";
import dynamic from "next/dynamic";
import { useMemo } from "react";
import "react-quill/dist/quill.snow.css";

function Editor({ value }: { value: string }) {
  const ReactQuill = useMemo(
    () =>
      dynamic(() => import("react-quill"), {
        ssr: false,
      }),
    []
  );
  return (
    <ReactQuill
    theme="snow"
    value={value}
     className="h-[350px] pb-16 px-5 py-5  whitespace-pre-wrap">

    </ReactQuill>
  );
}

export default Editor;
