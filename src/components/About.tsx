function About() {
  return (
    <article className="max-w-prose my-4 leading-loose">
      This assignment was completed by Simmon Li. It implements:
      <ul className="list-disc list-inside">
        <li>Application reads data. As discussed, there were some <span className="font-mono bg-slate-100 px-1">CORS</span> issues trying to access the data from server. So the data is read from a local <span className="font-mono bg-slate-100 px-1">.json</span> file.
            While I was not able to retrieve data from the server for this project, I have done so in the past. Samples demonstrating remote data retrieval:
          <ul className="ml-4 list-[circle] list-inside">
            <li><a className="underline" href="https://github.com/crespire/buysell/blob/main/client/src/providers/AuthProvider.tsx">Fetch from server for multiple authentication actions</a></li>
            <li><a className="underline" href="https://github.com/crespire/js-memory-cards/blob/main/src/App.js#L12">Get Deck of Cards API response</a></li>
            <li><a className="underline" href="https://github.com/crespire/ts-auth-sample/blob/main/src/provider/AuthProvider.tsx#L61">Fetch user via Firebase SDK</a></li>
            <li><a className="underline" href="https://github.com/crespire/waldo/blob/main/client/src/components/ImageArea.js#L9">Check if click was on a character</a></li>
          </ul>
        </li>
        <li>
          Application supports displaying thread previews in list or grid format.
        </li>
        <li>
          Thread previews add and remove a tooltip displaying the number of posts per thread on hover.
        </li>
        <li>
          Thread preview utilizes fields from the first post as instructed. The <span className="font-mono bg-slate-100 px-1">post.com</span> property could contain HTML and is displayed as sanitized HTML.
        </li>
      </ul>
    </article>
  );
}

export default About;