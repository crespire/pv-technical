import { ThreadModel } from "../@types/thread";

function ThreadPreview({thread}: {thread: ThreadModel}) {
  return (
    <article>
      <header>{ thread.posts[0].semantic_url}</header>
      <main>{ thread.posts[0].com }</main>
    </article>
  );
}

export default ThreadPreview;