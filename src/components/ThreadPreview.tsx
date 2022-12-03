import { ThreadModel } from "../@types/thread";
import { useRef } from 'react';
import DOMPurify from 'dompurify';

function ThreadPreview({thread}: {thread: ThreadModel}) {
  const postCount = thread.posts.length;
  const spanRef = useRef<HTMLElement>(null);
  const showTooltip = () => {
    spanRef?.current?.setAttribute('title', `This thread has ${postCount} posts.`);
  };
  const removeTooltip = () => {
    spanRef?.current?.removeAttribute('title');
  }
  const cleanCom = (com:string) => {
    return {__html: DOMPurify.sanitize(com)}
  }

  return (
    <article className="p-2">
      <header>
        <span ref={spanRef} className="text-2xl" onMouseOver={showTooltip} onMouseLeave={removeTooltip}>{ thread.posts[0].semantic_url}</span>
      </header>
      <main dangerouslySetInnerHTML={cleanCom(thread.posts[0].com)}></main>
    </article>
  );
}

export default ThreadPreview;