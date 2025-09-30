import { UiButton, UiModal, UiTextArea, UiTextField } from "@/src/shared/ui";
import styles from "./create-post-form.module.scss";
import { useCreatePostForm } from "../model/use-create-post-form";
import { Icon } from "@/src/shared/ui/icons";
import { UiFileInput } from "@/src/shared/ui/ui-file-input/ui-file-input";

interface CreatePostFormProps {
  onClose: () => void;
  isVisible: boolean;
}
export function CreatePostForm({ isVisible, onClose }: CreatePostFormProps) {
  const {
    errors,
    handleSubmit,
    isSubmitting,
    register,
    isSubmitSuccessful,
    reset,
  } = useCreatePostForm();

  const onFormClose = () => {
    reset();
    onClose();
  };

  let content;

  if (isSubmitting) {
    content = (
      <div className={styles.loader}>
        <Icon icon="spinner" height={150} width={150} />
      </div>
    );
  } else if (isSubmitSuccessful) {
    content = (
      <div className={styles.success}>
        <p>Post is sent!</p>
        <UiButton fill onClick={onFormClose}>
          Close
        </UiButton>
      </div>
    );
  } else {
    content = (
      <>
        <div className={styles.title}>Create post</div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <UiTextField
              label="Title"
              inputProps={{
                placeholder: "Enter a title",
                ...register("title", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 3,
                    message: "Минимум 3 символа",
                  },
                  maxLength: {
                    value: 100,
                    message: "Превышен лимит в 100 символов",
                  },
                }),
              }}
              error={errors.title && errors.title.message}
            />
          </div>

          <div className={styles.field}>
            <UiTextArea
              label="Content"
              inputProps={{
                rows: 5,
                placeholder: "Enter content",
                ...register("body", {
                  required: "Поле обязательно для заполнения",
                  minLength: {
                    value: 10,
                    message: "Минимум 10 символов",
                  },
                  maxLength: {
                    value: 1000,
                    message: "Превышен лимит в 1000 символов",
                  },
                }),
              }}
              error={errors.body && errors.body.message}
            />
            <UiFileInput
              label="File"
              inputProps={{
                ...register("file", {
                  validate: {
                    lessThan10MB: (files) =>
                      files[0]?.size < 10 * 1024 * 1024 ||
                      "Максимальный размер файла 10MB",
                    acceptedFormats: (files) =>
                      ["image/jpeg", "image/png", "application/pdf"].includes(
                        files[0]?.type
                      ) || "Допустимые форматы: JPEG, PNG, PDF",
                  },
                }),
              }}
            />
          </div>

          <UiButton
            className={styles.submitBtn}
            type="submit"
            disabled={isSubmitting || !!errors.root}
            fill
          >
            {isSubmitting ? "Sending..." : "Create"}
          </UiButton>
        </form>
      </>
    );
  }
  return (
    <UiModal
      isVisible={isVisible}
      onClose={onFormClose}
      stylesButtonClose={styles.closeBtn}
    >
      <div className={styles.modal}>{content}</div>
    </UiModal>
  );
}
