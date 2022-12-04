import { ThreadModel } from "../@types/thread";
import ThreadPreview from "./ThreadPreview";

function ListDisplay({threads}: {threads: ThreadModel[]}) {
  
  return (
    <div className="flex flex-col gap-2 items-center w-full">
      { threads.map((thread, index) => {
        return <ThreadPreview key={index} thread={thread} />
      })}
    </div>
  );
}

export default ListDisplay;