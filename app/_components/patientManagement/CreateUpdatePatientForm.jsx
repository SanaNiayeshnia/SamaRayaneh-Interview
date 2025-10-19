"use client";

import Form from "../ui/form/Form";
import FormField from "../ui/form/FormField";
import DatePicker from "../ui/form/DatePicker";
import { Controller, useForm } from "react-hook-form";
import { createPatientAction, updatePatientAction } from "@/app/_lib/actions";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";

function CreateUpdatePatientForm({ patient = {} }) {
  const isEditSession = Boolean(patient?.id);
  const { openToast, closeModal } = useGlobalContext();

  const {
    register,
    control,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm({
    defaultValues: isEditSession
      ? {
          name: patient?.name,
          email: patient?.email,
          dateOfBirth: patient.dateOfBirth
            ? new Date(patient.dateOfBirth.split("T")[0])
            : null,
        }
      : { name: "", email: "", dateOfBirth: new Date() },
  });

  async function onSubmit(data) {
    if (isEditSession) {
      const result = await updatePatientAction(data, patient.id);
      if (result?.isSuccessed) {
        openToast({
          text: `بیمار ${result?.result?.name} با موفقیت ویرایش شد.`,
          severity: "success",
        });
        closeModal();
      } else {
        openToast({
          text: `ویرایش بیمار ${result?.result?.name} با خطا مواجه شد!`,
          severity: "error",
        });
      }
    } else {
      const result = await createPatientAction(data);
      if (result?.isSuccessed) {
        openToast({
          text: `بیمار ${data?.name} با موفقیت ایجاد شد.`,
          severity: "success",
        });
        closeModal();
      } else {
        openToast({
          text: `ایجاد بیمار با خطا مواجه شد!`,
          severity: "error",
        });
      }
    }
  }

  return (
    <Form
      isPending={isSubmitting}
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
      <Controller
        control={control}
        name="dateOfBirth"
        render={({ field }) => (
          <DatePicker
            label="تاریخ تولد"
            value={field.value}
            onChange={field.onChange}
            disableFuture
          />
        )}
      />
    </Form>
  );
}

export default CreateUpdatePatientForm;
