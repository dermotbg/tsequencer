import type { LoadedSeqType } from "@/services/sequencerService";

import AlertDialogComponent from "@/components/UtilityComponents/AlertDialogComponent";
import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/UtilityComponents/LoadingSpinner";
import { TabsContent } from "@/components/ui/tabs";

import type { SequencerTabContentType } from "../TabsContainer";

const SequencerTabContent = ({ loadedSequences, deleteSeqHandler }: SequencerTabContentType) => {
  return (
    <TabsContent value="sequences">
      {!loadedSequences ? (
        <LoadingSpinner />
      ) : (
        <ul>
          {loadedSequences?.map((s: LoadedSeqType) => {
            return (
              <li className="p-2" key={s.id}>
                <div className="flex flex-row items-center justify-between">
                  <div className="px-2 font-mono font-semibold">{s.name}</div>
                  <AlertDialogComponent
                    title="Are you sure you want to delete this sequence?"
                    description={`You will not be able to recover ${s.name}`}
                    trigger={<Button variant={"destructive"}>Delete</Button>}
                    action={() => deleteSeqHandler(s.id)}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </TabsContent>
  );
};

export default SequencerTabContent;
