import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { validateString } from "@/utils/typeChecking";

import type { InputFormType } from "@/components/NavBarContainer/types";

const TextInput = ({ setFormState, formTitle, type, id }: InputFormType) => {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <Label htmlFor={`${formTitle}`} className="text-right">
        {validateString(formTitle).charAt(0).toUpperCase() + validateString(formTitle).slice(1)}
      </Label>
      <Input
        id={id ? id : `${formTitle}`}
        defaultValue={formTitle == "username" ? "@username" : ""}
        type={type}
        className="col-span-3"
        onChange={(e) => setFormState(e.target.value)}
        required
      />
    </div>
  );
};

export default TextInput;
