import React from 'react';
import './index.css';
import Header from './components/Header';
import { RouterProvider, createBrowserRouter, Outlet } from 'react-router-dom';
import Home from './components/Home';
import Error from './components/Error';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Form from './components/Form';
import BlogContainer from './components/BlogContainer';
import BlogPage from './components/BlogPage';

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'contact',
        element: <Contact />
      },
      {
        path: 'blog',
        element: <BlogContainer />,
      },
      {
        path: 'form',
        element: <Form />
      },
      {
        path: 'blog/:blogId',
        element: <BlogPage/>
      }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={appRouter} />
  );
}

export default App;
