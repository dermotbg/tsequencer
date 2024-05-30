import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const KeyTrackController = ({
  keysActive,
  setKeysActive,
}: {
  keysActive: boolean;
  setKeysActive: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <div className="flex items-center space-x-2 pb-3 mt-4">
      <Switch
        id="keyTracking"
        name="keyTracking"
        onCheckedChange={() => setKeysActive(!keysActive)}
      />
      <Label htmlFor="keyTracking">Key Tracking</Label>
    </div>
  );
};
export default KeyTrackController;
