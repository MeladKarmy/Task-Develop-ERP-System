import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useFormContext } from "react-hook-form";

type CustomInput = {
  handleFile: (value: File | undefined) => void;
};

const FormStepTwo = ({ handleFile }: CustomInput) => {
  const form = useFormContext();
  const { isSubmitting } = form.formState;

  const [preview, setPreview] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setPreview(URL.createObjectURL(file));
      setFileName(file.name);
      handleFile(file);
    }
  };

  return (
    <>
      <label
        className={cn(
          "text-start text-sm capitalize text-secondary-900",
          isSubmitting && "opacity-50"
        )}
      >
        Add image
      </label>

      <label>
        <div className="border-dashed border-[#B8B8B8] border rounded-xl p-3 flex gap-4">
          {preview ? (
            <>
              <img
                src={preview}
                alt="Preview"
                className="w-44 aspect-video rounded-xl object-cover "
              />
              <div className="">
                <p className="w-full">{fileName}</p>{" "}
                <div className="flex flex-1 justify-between items-center">
                  <button className="flex focus-visible:outline-none items-center gap-2 focus:outline-none focus-visible:border-none hover:border-none focus:border-none">
                    <svg
                      width="12"
                      height="14"
                      viewBox="0 0 12 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.6866 3.35449L9.68657 5.35449C9.64024 5.40102 9.58518 5.43793 9.52455 5.46312C9.46391 5.48831 9.3989 5.50127 9.33324 5.50127C9.26758 5.50127 9.20257 5.48831 9.14194 5.46312C9.0813 5.43793 9.02624 5.40102 8.97991 5.35449C8.93345 5.30806 8.89659 5.25293 8.87144 5.19224C8.84629 5.13156 8.83335 5.06651 8.83335 5.00083C8.83335 4.93514 8.84629 4.87009 8.87144 4.80941C8.89659 4.74873 8.93345 4.69359 8.97991 4.64716L10.1266 3.50049H1.99991C1.54058 3.50049 1.16658 3.87449 1.16658 4.33383V6.33316C1.16658 6.46577 1.1139 6.59295 1.02013 6.68671C0.926361 6.78048 0.799184 6.83316 0.666575 6.83316C0.533967 6.83316 0.40679 6.78048 0.313022 6.68671C0.219254 6.59295 0.166575 6.46577 0.166575 6.33316V4.33383C0.166929 3.8477 0.360196 3.38159 0.703937 3.03785C1.04768 2.69411 1.51379 2.50085 1.99991 2.50049H10.1259L8.97924 1.35383C8.88544 1.26003 8.83275 1.13281 8.83275 1.00016C8.83275 0.867509 8.88544 0.740292 8.97924 0.646494C9.07304 0.552695 9.20026 0.5 9.33291 0.5C9.46556 0.5 9.59278 0.552695 9.68657 0.646494L11.6866 2.64649C11.733 2.69293 11.7699 2.74806 11.795 2.80874C11.8202 2.86943 11.8331 2.93447 11.8331 3.00016C11.8331 3.06585 11.8202 3.13089 11.795 3.19158C11.7699 3.25226 11.733 3.30806 11.6866 3.35449ZM10.6659 7.16716C10.5333 7.16716 10.4061 7.21984 10.3124 7.31361C10.2186 7.40737 10.1659 7.53455 10.1659 7.66716V9.66649C10.1659 10.1258 9.79191 10.4998 9.33257 10.4998H1.87324L3.01991 9.35316C3.11371 9.25936 3.1664 9.13214 3.1664 8.99949C3.1664 8.86684 3.11371 8.73962 3.01991 8.64583C2.92611 8.55203 2.79889 8.49933 2.66624 8.49933C2.53359 8.49933 2.40637 8.55203 2.31258 8.64583L0.312575 10.6458C0.266112 10.6923 0.229254 10.7474 0.204106 10.8081C0.178959 10.8688 0.166016 10.9338 0.166016 10.9995C0.166016 11.0652 0.178959 11.1302 0.204106 11.1909C0.229254 11.2516 0.266112 11.3067 0.312575 11.3532L2.31258 13.3532C2.35891 13.3997 2.41397 13.4366 2.4746 13.4618C2.53524 13.487 2.60025 13.4999 2.66591 13.4999C2.73157 13.4999 2.79658 13.487 2.85721 13.4618C2.91785 13.4366 2.97291 13.3997 3.01924 13.3532C3.06571 13.3067 3.10256 13.2516 3.12771 13.1909C3.15286 13.1302 3.1658 13.0652 3.1658 12.9995C3.1658 12.9338 3.15286 12.8688 3.12771 12.8081C3.10256 12.7474 3.06571 12.6923 3.01924 12.6458L1.87258 11.4992H9.33191C9.81803 11.4988 10.2841 11.3055 10.6279 10.9618C10.9716 10.6181 11.1649 10.1519 11.1652 9.66583V7.66649C11.1652 7.53388 11.1126 7.40671 11.0188 7.31294C10.925 7.21917 10.7978 7.16649 10.6652 7.16649L10.6659 7.16716Z"
                        fill="#026980"
                      />
                    </svg>
                    Change
                  </button>
                  <button
                    className="flex focus-visible:outline-none items-center gap-2 focus:outline-none focus-visible:border-none hover:border-none focus:border-none"
                    onClick={() => {
                      setPreview(null);
                      setFileName(null);
                      handleFile(undefined);
                    }}
                  >
                    <svg
                      width="14"
                      height="16"
                      viewBox="0 0 14 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.707 1.293C11.0985 1.6835 11.0985 2.3165 10.707 2.707L4.707 8.707C4.3165 9.0975 3.6835 9.0975 3.293 8.707C2.9025 8.3165 2.9025 7.6835 3.293 7.293L9.293 1.293C9.6835 0.9025 10.3165 0.9025 10.707 1.293ZM3.707 1.293C4.0985 1.6835 4.0985 2.3165 3.707 2.707L9.707 8.707C10.0975 9.0975 9.6835 9.0975 9.293 8.707C8.9025 8.3165 8.9025 7.6835 9.293 7.293L3.293 1.293C2.9025 0.9025 2.3165 0.9025 1.707 1.293C1.3165 1.6835 1.3165 2.3165 1.707 2.707L7.707 8.707C8.0975 9.0975 8.3165 9.0975 8.707 8.707L14.707 2.707C15.0985 2.3165 15.0985 1.6835 14.707 1.293C14.3165 0.9025 13.6835 0.9025 13.293 1.293L7.293 7.293C6.9025 7.6835 6.3165 7.6835 5.707 7.293C5.3165 6.9025 5.3165 6.3165 5.707 5.707L11.707 0.707C12.0985 0.3165 12.3165 0.3165 12.707 0.707C13.0985 1.0975 13.0985 1.7305 12.707 2.121L6.707 8.121C6.3165 8.5115 5.6835 8.5115 5.293 8.121L3.707 7.707C3.3165 7.3165 3.3165 6.6835 3.707 6.293C4.0985 5.9025 4.3165 5.9025 4.707 6.293L10.707 12.293C11.0985 12.6835 11.0985 13.3165 10.707 13.707C10.3165 14.0975 9.6835 14.0975 9.293 13.707L3.293 7.707C2.9025 7.3165 2.9025 6.6835 3.293 6.293C3.6835 5.9025 4.3165 5.9025 4.707 6.293L10.707 12.293C11.0985 12.6835 11.0985 13.3165 10.707 13.707C10.3165 14.0975 9.6835 14.0975 9.293 13.707L3.293 7.707C2.9025 7.3165 2.9025 6.6835 3.293 6.293C3.6835 5.9025 4.3165 5.9025 4.707 6.293Z"
                        fill="#A7A7A7"
                      />
                    </svg>
                    Remove
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="w-full bg-secondary-200 flex flex-col items-center justify-center cursor-pointer">
              <svg
                className="mb-3"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16 28C16 28.7373 15.4027 29.3333 14.6667 29.3333H6.66667C2.99067 29.3333 0 26.3427 0 22.6667V6.66667C0 2.99067 2.99067 0 6.66667 0H22.6667C26.3427 0 29.3333 2.99067 29.3333 6.66667V14.6667C29.3333 15.404 28.736 16 28 16C27.264 16 26.6667 15.404 26.6667 14.6667V6.66667C26.6667 4.46133 24.872 2.66667 22.6667 2.66667H6.66667C4.46133 2.66667 2.66667 4.46133 2.66667 6.66667V15.9453L6.41067 12.2013C8.45333 10.1573 11.7773 10.1573 13.8213 12.2013L20.9427 19.3227C21.464 19.844 21.464 20.6867 20.9427 21.208C20.6827 21.468 20.3413 21.5987 20 21.5987C19.6587 21.5987 19.3173 21.468 19.0573 21.208L11.936 14.0867C10.9333 13.0853 9.30133 13.084 8.296 14.0867L2.66667 19.716V22.6667C2.66667 24.872 4.46133 26.6667 6.66667 26.6667H14.6667C15.4027 26.6667 16 27.2627 16 28ZM20 4.66667C22.2053 4.66667 24 6.46133 24 8.66667C24 10.872 22.2053 12.6667 20 12.6667C17.7947 12.6667 16 10.872 16 8.66667C16 6.46133 17.7947 4.66667 20 4.66667ZM20 7.33333C19.2653 7.33333 18.6667 7.93067 18.6667 8.66667C18.6667 9.40267 19.2653 10 20 10C20.7347 10 21.3333 9.40267 21.3333 8.66667C21.3333 7.93067 20.7347 7.33333 20 7.33333ZM30.6667 24H26.6667V20C26.6667 19.2627 26.0693 18.6667 25.3333 18.6667C24.5973 18.6667 24 19.2627 24 20V24H20C19.264 24 18.6667 24.596 18.6667 25.3333C18.6667 26.0707 19.264 26.6667 20 26.6667H24V30.6667C24 31.404 24.5973 32 25.3333 32C26.0693 32 26.6667 31.404 26.6667 30.6667V26.6667H30.6667C31.4027 26.6667 32 26.0707 32 25.3333C32 24.596 31.4027 24 30.6667 24Z"
                  fill="#026980"
                />
              </svg>
              <h4 className="rounded-full px-3 py-2 text-white bg-primary flex items-center justify-center ">
                <Plus /> Add image
              </h4>
            </div>
          )}
          <Input
            className="sr-only"
            type="file"
            disabled={isSubmitting}
            accept="image/*"
            onChange={handleFileChange}
          />
        </div>
      </label>
    </>
  );
};

export default FormStepTwo;
