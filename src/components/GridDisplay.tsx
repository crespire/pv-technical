import { ThreadModel } from "../@types/thread";
import ThreadPreview from "./ThreadPreview";

function GridDisplay({threads}: {threads: ThreadModel[]}) {
  return (
    <main className="grid grid-cols-2 gap-1 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-3">
      { threads.map((thread, index) => {
        return <ThreadPreview key={index} thread={thread} />
      })}
    </main>
  );
}

export default GridDisplay;