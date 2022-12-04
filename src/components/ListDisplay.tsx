import { ThreadModel } from "../@types/thread";
import ThreadPreview from "./ThreadPreview";

function ListDisplay({threads}: {threads: ThreadModel[]}) {
  
  return (
    <div
      className="flex flex-col gap-2 items-center max-w-xs \
                 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg \
                 xl:max-w-screen-xl 2xl:max-w-screen-2xl"
    >
      { threads.map((thread, index) => {
        return <ThreadPreview key={index} thread={thread} />
      })}
    </div>
  );
}

export default ListDisplay;