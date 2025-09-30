import { createPost } from "@/src/shared/api";
import { useForm } from "react-hook-form";

interface FormData {
  title: string;
  body: string;
  file: FileList;
}

export const useCreatePostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const onSubmit = async (data: FormData) => {
    try {
      await createPost({
        userId: 1,
        title: data.title,
        body: data.body,
        file: data.file[0],
      });
      reset();
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
    }
  };

  return {
    register,
    handleSubmit: handleSubmit(onSubmit),
    errors,
    isSubmitting,
    isSubmitSuccessful,
    reset,
  };
};
