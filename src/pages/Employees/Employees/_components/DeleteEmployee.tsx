import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useEmployeesContext } from "@/context/EmployeesProvider";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Employee } from "@/types";
import { Trash2 } from "lucide-react";
import { useState } from "react";

const DeleteEmployee = ({ employee }: { employee: Employee }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const { handleDeleteEmployee } = useEmployeesContext();
  const handleCloseModal = () => {
    setOpen(false);
  };
  if (isMobile)
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="!bg-transparent hover:text-destructive ">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_10_673)">
                <path
                  d="M21 4H17.9C17.6679 2.87141 17.0538 1.85735 16.1613 1.12872C15.2687 0.40009 14.1522 0.00145452 13 0L11 0C9.8478 0.00145452 8.73132 0.40009 7.83875 1.12872C6.94618 1.85735 6.3321 2.87141 6.1 4H3C2.73478 4 2.48043 4.10536 2.29289 4.29289C2.10536 4.48043 2 4.73478 2 5C2 5.26522 2.10536 5.51957 2.29289 5.70711C2.48043 5.89464 2.73478 6 3 6H4V19C4.00159 20.3256 4.52888 21.5964 5.46622 22.5338C6.40356 23.4711 7.67441 23.9984 9 24H15C16.3256 23.9984 17.5964 23.4711 18.5338 22.5338C19.4711 21.5964 19.9984 20.3256 20 19V6H21C21.2652 6 21.5196 5.89464 21.7071 5.70711C21.8946 5.51957 22 5.26522 22 5C22 4.73478 21.8946 4.48043 21.7071 4.29289C21.5196 4.10536 21.2652 4 21 4ZM11 2H13C13.6203 2.00076 14.2251 2.19338 14.7316 2.55144C15.2381 2.90951 15.6214 3.41549 15.829 4H8.171C8.37858 3.41549 8.7619 2.90951 9.26839 2.55144C9.77487 2.19338 10.3797 2.00076 11 2ZM18 19C18 19.7956 17.6839 20.5587 17.1213 21.1213C16.5587 21.6839 15.7956 22 15 22H9C8.20435 22 7.44129 21.6839 6.87868 21.1213C6.31607 20.5587 6 19.7956 6 19V6H18V19Z"
                  fill="#B8B8B8"
                />
                <path
                  d="M10 18C10.2652 18 10.5196 17.8946 10.7071 17.7071C10.8946 17.5196 11 17.2652 11 17V11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10C9.73478 10 9.48043 10.1054 9.29289 10.2929C9.10536 10.4804 9 10.7348 9 11V17C9 17.2652 9.10536 17.5196 9.29289 17.7071C9.48043 17.8946 9.73478 18 10 18Z"
                  fill="#B8B8B8"
                />
                <path
                  d="M14 18C14.2652 18 14.5196 17.8946 14.7071 17.7071C14.8946 17.5196 15 17.2652 15 17V11C15 10.7348 14.8946 10.4804 14.7071 10.2929C14.5196 10.1054 14.2652 10 14 10C13.7348 10 13.4804 10.1054 13.2929 10.2929C13.1054 10.4804 13 10.7348 13 11V17C13 17.2652 13.1054 17.5196 13.2929 17.7071C13.4804 17.8946 13.7348 18 14 18Z"
                  fill="#B8B8B8"
                />
              </g>
              <defs>
                <clipPath id="clip0_10_673">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle className="text-[#2A2A2A] text-xl font-bold mb-6 text-center leading-5 ">
              Delete employees
            </DrawerTitle>
            <DrawerDescription className="text-base text-center text-black font-medium">
              are You sure to delete{" "}
              <span className="text-primary">{employee.name}</span> from
              Employees
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="">
            <DrawerClose className="rounded-full border border-primary hover:border-primary text-base font-medium py-2 px-3">
              Cancel
            </DrawerClose>
            <Button
              variant="destructive"
              onClick={() => {
                handleDeleteEmployee(employee.id);
                handleCloseModal();
              }}
            >
              Delete
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="!bg-transparent hover:text-destructive group">
          <Trash2 className="group-hover:text-red-500 text-[#B8B8B8]" />
        </Button>
      </DialogTrigger>
      <DialogContent className="px-4">
        <DialogHeader>
          <DialogTitle className="text-[#2A2A2A] text-xl font-bold mb-6 text-center leading-5 ">
            Delete employees
          </DialogTitle>
          <DialogDescription className="text-base text-center text-black font-medium">
            are You sure to delete{" "}
            <span className="text-primary">{employee.name}</span> from Employees
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex justify-between items-center ">
          <DialogClose className="rounded-full flex-1 border border-primary hover:border-primary text-base font-medium py-2 px-3">
            Cancel
          </DialogClose>
          <Button
            variant="destructive"
            onClick={() => {
              handleDeleteEmployee(employee.id);
              handleCloseModal();
            }}
            className="flex-1"
          >
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteEmployee;
