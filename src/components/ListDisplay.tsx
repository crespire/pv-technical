import { ThreadModel } from "../@types/thread";
import ThreadPreview from "./ThreadPreview";

function ListDisplay({threads}: {threads: ThreadModel[]}) {
  
  return (
    <main className="flex flex-col">
      { threads.map((thread, index) => {
        return <ThreadPreview key={index} thread={thread} />
      })}
    </main>
  );
}

export default ListDisplay;