import { useEffect, useState } from 'react';
import { ThreadModel } from '../@types/thread';
import GridDisplay from './GridDisplay';
import ListDisplay from './ListDisplay';
import ToggleSwitch from './ToggleSwitch';

function ThreadIndex() {
  const [threads, setThreads] = useState<ThreadModel[] | null>(null);
  const [gridDisplay, setGridDisplay] = useState(true);

  useEffect(() => {
    const getThreads = async () => {
      let data = null;
      let local = false;
      try {
        /**
         * Trying to access https://a.4cdn.org/po/2.json fails with error:
         * 
         * Cross-Origin Request Blocked: The Same Origin Policy disallows
         * reading the remote resource at https://a.4cdn.org/po/2.json.
         * (Reason: CORS header “Access-Control-Allow-Origin” does not
         * match “http://boards.4chan.org”).
         * 
         * I have worked around the CORS issue using a CORS proxy service. I
         * cannot guarantee this service stays up. In my testing, it allows the
         * client application to fetch the JSON from the server.
         * 
         * If this frontend were fetching from a backend I controlled, the
         * solution would be to configure the CORS Headers on the server side
         * to allow the frontend domain to make cross origin requests.
         */
        data = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent('https://a.4cdn.org/po/2.json')}`)
                      .then(response => response.json()); 
      } catch (err) {
        console.log('Got error: ', err);
        console.log('Loading local data from assets...');
        data = await import('../assets/data.json')
                      .then(response => response.threads);
        local = true;
      }
      local ? setThreads(data) : setThreads(JSON.parse(data.contents).threads);
    };

    getThreads();
  }, []);

  const toggleDisplay = () => {
    setGridDisplay(prev => !prev);
  }

  if (!threads) return <p>Loading...</p>;
  if (threads.length === 0) return <p>There was an error retrieving the data.</p>;

  return (
    <>
      <div className="w-full flex justify-center items-center"><ToggleSwitch on={gridDisplay} toggleDisplay={toggleDisplay} /></div>
      { gridDisplay
        ? <GridDisplay threads={threads} />
        : <ListDisplay threads={threads} />
      }
    </>
    
  );
}

export default ThreadIndex;

