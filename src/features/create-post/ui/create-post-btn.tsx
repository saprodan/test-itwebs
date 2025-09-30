"use-client";
import { UiButton } from "@/src/shared/ui";
import { useState } from "react";
import { CreatePostForm } from "./create-post-form";

export function CreatePostBtn({ className }: { className?: string }) {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <>
      <UiButton
        onClick={() => {
          setIsFormOpen(true);
        }}
        fill
        className={className}
      >
        Create post
      </UiButton>

      <CreatePostForm
        isVisible={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
        }}
      />
    </>
  );
}
