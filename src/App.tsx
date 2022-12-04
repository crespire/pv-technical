import { Outlet } from 'react-router';
import Footer from './Footer';
import Header from './Header';

function App() {
  return (
    <div className="container mx-auto p-2 flex flex-col items-center">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
