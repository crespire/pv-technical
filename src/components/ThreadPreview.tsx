import { ThreadModel } from "../@types/thread";
import { useRef } from 'react';
import DOMPurify from 'dompurify';

function ThreadPreview({thread}: {thread: ThreadModel}) {
  const postCount = thread.posts.length;
  const articleRef = useRef<HTMLElement>(null);
  const showTooltip = () => {
    articleRef?.current?.setAttribute('title', `This thread has ${postCount} posts.`);
  };
  const removeTooltip = () => {
    articleRef?.current?.removeAttribute('title');
  };
  const cleanCom = (com:string) => {
    return {__html: DOMPurify.sanitize(com)};
  };

  return (
    <article
      ref={articleRef}
      onMouseOver={showTooltip}
      onMouseLeave={removeTooltip}
      className="h-36 max-h-36 w-full p-2 bg-inherit border border-solid \
                 border-slate-200 truncate transition ease-out \
                 duration-200 hover:-translate-y-2 hover:shadow-lg \ 
                 hover:z-100 hover:bg-slate-100 hover:border \
                 hover:border-solid hover:border-slate-400"
    >
      <section className="truncate">
        <span className="text-2xl">{thread.posts[0].semantic_url}</span>
      </section>
      <section
        dangerouslySetInnerHTML={cleanCom(thread.posts[0].com)}
        className="truncate"
      ></section>
    </article>
  );
}

export default ThreadPreview;