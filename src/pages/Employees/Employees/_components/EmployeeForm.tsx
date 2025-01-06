import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormStepOne } from "./FormStepOne";
import { Switch } from "@/components/ui/switch";
import Steper from "./Steper";
import FormStepTwo from "./FormStepTwo";
import { useEmployeesContext } from "@/context/EmployeesProvider";
import { Employee } from "@/types";

const formSchema = z.object({
  name: z
    .string({ required_error: "Employee Name is Required" })
    .min(2, { message: "Employee Name must contain at least 2 character(s)" }),

  phone: z
    .string({ required_error: "Employee Phone is Required" })
    .regex(/^\d{11}$/, {
      message: "Employee Phone must contain exactly 11 digits",
    }),

  email: z
    .string({ required_error: "Employee Email is Required" })
    .email("Employee Email is not valid"),

  startDate: z.date({ required_error: "Employee Start Date is Required" }),

  role: z.string({ required_error: "Employee Role is Required" }),
});
const EmployeeForm = ({ onClose }: { onClose: (value: boolean) => void }) => {
  const [step, setStep] = useState(1);
  const [file, setFile] = useState<undefined | File>(undefined);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  });

  const prevStep = () => {
    setStep((prev) => (prev > 1 ? prev - 1 : 1));
  };
  const nextStep = () => {
    if (step === 1 && !form.formState.isValid) return form.trigger();
    setStep((prev) => (prev === 3 ? 3 : prev + 1));
  };
  const { handleAddEmployee } = useEmployeesContext();
  function onSubmit(values: any) {
    handleAddEmployee({ ...values, id: "4", active: true, imageUrl: "" });
    onClose(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-5 p-4 container mx-auto "
      >
        {step === 1 && <FormStepOne />}
        {step === 2 && (
          <FormStepTwo
            handleFile={(value: File | undefined) => setFile(value)}
          />
        )}
        {step === 3 && (
          <>
            <div>
              <h4 className="font-medium bg-[#F8F8F8]  py-3 rounded-lg mb-8">
                Summary
              </h4>
              <div className="grid grid-cols-2 items-center">
                <p className="text-[#747474] font-medium ">Employee</p>
                <div className="flex items-center gap-2 ">
                  <img
                    className="rounded-full h-7 w-7"
                    src={"../../../../../public/image/man.png"}
                    alt="name"
                  />

                  <span className="text-black leading-5">
                    {form.getValues("name")}
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 items-center">
                <p className="text-[#747474] font-medium ">Role</p>

                <p className="text-black leading-5">{form.getValues("role")}</p>
              </div>

              <div className="grid grid-cols-2 items-center">
                <p className="text-[#747474] font-medium ">E-mail</p>

                <p className="text-black leading-5">
                  {form.getValues("email")}
                </p>
              </div>

              <div className="grid grid-cols-2 items-center">
                <p className="text-[#747474] font-medium ">Phone</p>

                <p className="text-black leading-5">
                  {form.getValues("phone")}
                </p>
              </div>

              <div className="grid grid-cols-2 items-center">
                <div>
                  <h4 className="font-medium bg-[#F8F8F8]  py-3 rounded-lg mb-2">
                    Date
                  </h4>

                  <div className="grid grid-cols-2 items-center">
                    <p className="text-[#747474] font-medium ">Start Date</p>

                    <p className="text-black font-medium">
                      {form.getValues("startDate")?.toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium bg-[#F8F8F8]  py-3 rounded-lg mb-2">
                    Active
                  </h4>

                  <div className="grid grid-cols-2 items-center">
                    <p className="text-[#747474] font-medium ">Active</p>

                    <Switch value={1} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <div className="flex justify-between items-center mt-5">
          <div>
            {step > 1 && (
              <Button
                type="button"
                className="px-10 font-medium"
                variant="secondary"
                onClick={prevStep}
              >
                Back
              </Button>
            )}
          </div>
          <div>
            {step === 3 ? (
              <Button className="px-10 font-medium">Apply</Button>
            ) : (
              <Button
                type="button"
                className="px-10 font-medium"
                onClick={nextStep}
              >
                Next
              </Button>
            )}
          </div>
        </div>
      </form>
    </Form>
  );
};

export default EmployeeForm;
