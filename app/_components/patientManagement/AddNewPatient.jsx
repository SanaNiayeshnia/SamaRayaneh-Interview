"use client";
import AddIcon from "@mui/icons-material/Add";
import Button from "../ui/Button";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import Form from "../ui/form/Form";
import FormField from "../ui/form/FormField";
import DatePicker from "../ui/form/DatePicker";
import { useForm, useWatch } from "react-hook-form";

function AddPatientForm({ form }) {
  const {
    register,
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
    setValue,
    trigger,
  } = useForm({
    defaultValues: { name: "", email: "", dateOfBirth: new Date() },
  });
  const watchedValues = useWatch({ control });

  function onSubmit() {}

  return (
    <Form
      id="createPatientForm"
      onSubmit={handleSubmit(onSubmit, undefined, { shouldFocusError: true })}
    >
      <FormField
        label="نام و نام خانوادگی"
        {...register("name", { required: "پر کردن این فیلد الزامی است!" })}
        error={errors?.name?.message}
      />
      <FormField
        label="ایمیل"
        {...register("email", {
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "ایمیل معتبر نمی‌باشد!",
          },
          required: "پر کردن این فیلد الزامی است!",
        })}
        error={errors?.email?.message}
      />
      <DatePicker
        label="تاریخ تولد"
        value={watchedValues?.dateOfBirth}
        onChange={(value) => setValue("dateOfBirth", value)}
        disableFuture
      />
    </Form>
  );
}

function AddNewPatient() {
  const { openModal } = useGlobalContext();

  function handleClickBtn() {
    openModal({
      title: "ایجاد بیمار جدید",
      content: <AddPatientForm />,
    });
  }

  return (
    <Button variant="primary" onClick={handleClickBtn}>
      <AddIcon />
    </Button>
  );
}

export default AddNewPatient;
