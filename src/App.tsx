import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
