import { Route, Routes } from 'react-router-dom';

import { Header, Footer, SinglePage, Product, NotFound } from './components';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/posts/:id" element={<SinglePage />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
