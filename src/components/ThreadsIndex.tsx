import { useEffect, useState } from 'react';
import { ThreadModel } from '../@types/thread';

function ThreadIndex() {
  const [threads, setThreads] = useState<ThreadModel[] | null>(null);
  const [gridDisplay, setGridDisplay] = useState<boolean>(false);

  useEffect(() => {
    const getThreads = async () => {
      let data = null;
      try {
        data = await import('../assets/data.json')
                      .then(response => response.threads);
      } catch (err) {
        setThreads([]);
        console.log('Got error: ', err);        
      }
      setThreads(data);
    };

    getThreads();
  }, []);

  if (!threads) return <p>Loading...</p>;
  if (threads.length === 0) return <p>There was an error retrieving the data.</p>

  return (
    <p>We did it!</p>
  );
}

export default ThreadIndex;

