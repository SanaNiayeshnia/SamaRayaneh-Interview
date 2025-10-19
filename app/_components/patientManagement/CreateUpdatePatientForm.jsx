"use client";

import Form from "../ui/form/Form";
import FormField from "../ui/form/FormField";
import DatePicker from "../ui/form/DatePicker";
import { Controller, useForm } from "react-hook-form";
import FormSelect from "../ui/form/FormSelect";

const isActiveOptions = [
  { label: "فعال", value: true },
  { label: "غیرفعال", value: false },
];

function CreateUpdatePatientForm({ patient = {} }) {
  console.log(patient);
  const isEditSession = Boolean(patient?.id);

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
          isActive: patient?.isActive,
        }
      : { name: "", email: "", dateOfBirth: new Date() },
  });

  function onSubmit(data) {
    console.log(data);
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
      {isEditSession && (
        <Controller
          control={control}
          name="isActive"
          rules={{
            validate: (value) => value ?? "پر کردن این فیلد الزامی است!",
          }}
          render={({ field }) => (
            <FormSelect
              labelId="isActive"
              label="وضعیت"
              options={isActiveOptions}
              value={field?.value}
              onChange={field?.onChange}
              //   error={errors?.isActive?.message}
            />
          )}
        />
      )}
    </Form>
  );
}

export default CreateUpdatePatientForm;
