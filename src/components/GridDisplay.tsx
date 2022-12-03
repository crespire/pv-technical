import { ThreadModel } from "../@types/thread";
import ThreadPreview from "./ThreadPreview";

function GridDisplay({threads}: {threads: ThreadModel[]}) {
  return (
    <main className="grid grid-cols-2 gap-1">
      { threads.map((thread, index) => {
        return <ThreadPreview key={index} thread={thread} />
      })}
    </main>
  );
}

export default GridDisplay;