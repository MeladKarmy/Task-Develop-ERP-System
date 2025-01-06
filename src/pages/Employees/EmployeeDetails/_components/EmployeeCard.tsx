import { Switch } from "@/components/ui/switch";
import { Employee } from "@/types";

const EmployeeCard = ({ employee }: { employee: Employee | null }) => {
  return (
    <>
      <div className="space-y-4">
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

            <span className="text-black leading-5">{employee?.name}</span>
          </div>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p className="text-[#747474] font-medium ">Role</p>

          <p className="text-black leading-5">{employee?.role}</p>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p className="text-[#747474] font-medium ">E-mail</p>

          <p className="text-black leading-5">{employee?.email}</p>
        </div>

        <div className="grid grid-cols-2 items-center">
          <p className="text-[#747474] font-medium ">Phone</p>

          <p className="text-black leading-5">{employee?.phone}</p>
        </div>

        <div className="grid grid-cols-2 items-center">
          <div>
            <h4 className="font-medium bg-[#F8F8F8]  py-3 rounded-lg mb-2">
              Date
            </h4>

            <div className="grid grid-cols-2 items-center">
              <p className="text-[#747474] font-medium ">Start Date</p>

              <p className="text-black font-medium">
                {employee?.startDate
                  ? new Date(employee?.startDate).toLocaleDateString()
                  : ""}
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
  );
};

export default EmployeeCard;
