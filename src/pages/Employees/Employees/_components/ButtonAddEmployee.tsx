import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import EmployeeForm from "./EmployeeForm";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Plus } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const ButtonAddEmployee = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [open, setOpen] = useState(false);
  const handleCloseModal = (value: boolean) => {
    setOpen(value);
  };
  if (isMobile)
    return (
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button className="rounded-full h-12">
            <Plus size={16} /> New Employee
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-w-[425px] max-h-[80%]">
          <div className="overflow-y-auto">
            <DrawerHeader>
              <DrawerTitle className="font-medium text-[#2A2A2A] text-base leading-5">
                Add New employees
              </DrawerTitle>
              <DrawerDescription className="sr-only">
                Make changes to your employee here. Click save when you're done.
              </DrawerDescription>
            </DrawerHeader>
            <EmployeeForm onClose={handleCloseModal} />
            <DrawerFooter className="sr-only"></DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    );
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="rounded-full h-12 ">
          <Plus size={16} /> New Employee
        </Button>
      </DialogTrigger>
      <DialogContent className="px-0 max-h-[80%] overflow-y-auto">
        <div className="overflow-y-auto">
          <DialogHeader className="">
            <DialogTitle className="mb-3 px-7">Add New employees</DialogTitle>
            <Separator className="w-full" />
            <DialogDescription className="sr-only">
              Make changes to your employee here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <EmployeeForm onClose={handleCloseModal} />
          <DialogFooter className="sr-only"></DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ButtonAddEmployee;
