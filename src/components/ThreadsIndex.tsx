import { useEffect, useState } from 'react';
import { ThreadModel } from '../@types/thread';
import GridDisplay from './GridDisplay';
import ListDisplay from './ListDisplay';

function ThreadIndex() {
  const [threads, setThreads] = useState<ThreadModel[] | null>(null);
  const [gridDisplay, setGridDisplay] = useState(false);

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

  const toggleDisplay = () => {
    setGridDisplay(prev => !prev);
  }

  if (!threads) return <p>Loading...</p>;
  if (threads.length === 0) return <p>There was an error retrieving the data.</p>;

  return (
    <>
      <input type="checkbox" id="grid" name="grid" checked={gridDisplay} onChange={toggleDisplay} />
      <label htmlFor="grid">Grid</label>
      { gridDisplay ? <p>Grid</p> : <p>List</p> }
      { gridDisplay
        ? <GridDisplay threads={threads} />
        : <ListDisplay threads={threads} />
      }
    </>
    
  );
}

export default ThreadIndex;

