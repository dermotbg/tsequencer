import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const KeyTrackController = ({
  keysActive,
  setKeysActive,
  disabled,
}: {
  keysActive: boolean;
  setKeysActive: React.Dispatch<React.SetStateAction<boolean>>;
  disabled: boolean;
}) => {
  return (
    <div className="flex items-center space-x-2 pb-3 mt-4">
      <Switch
        disabled={disabled}
        id="keyTracking"
        name="keyTracking"
        onCheckedChange={() => setKeysActive(!keysActive)}
      />
      <Label htmlFor="keyTracking">Key Tracking</Label>
    </div>
  );
};
export default KeyTrackController;
