import { ThreadModel } from "../@types/thread";
import ThreadPreview from "./ThreadPreview";

function GridDisplay({threads}: {threads: ThreadModel[]}) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4">
      { threads.map((thread, index) => {
        return <ThreadPreview key={index} thread={thread} />
      })}
    </div>
  );
}

export default GridDisplay;