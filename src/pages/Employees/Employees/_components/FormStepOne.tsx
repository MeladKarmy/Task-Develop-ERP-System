import CustomCalender from "@/components/shared/form/CustomCalender";
import CustomInput from "@/components/shared/form/CustomInput";
import CustomSelect from "@/components/shared/form/CustomSelect";

export const FormStepOne = () => {
  return (
    <>
      <CustomInput fieldName="name" placeholder="Enter Name" label="Name" />
      
      <CustomCalender
        fieldName="startDate"
        placeholder="Enter Start Date"
        label="Start Date"
      />
      <CustomSelect
        fieldName="role"
        label="Role"
        placeholder="Select Role"
        items={["It", "ENG"]}
      />
      <CustomInput
        fieldName="email"
        placeholder="Enter E-mail"
        label="E-Mail"
      />
      <CustomInput
        fieldName="phone"
        placeholder="Enter Phone Number"
        label="Phone"
      />
    </>
  );
};
