import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import FirstPage from './Page/FirstPage/FirstPage';
import CrossPlatformAppDevelopment from './Page/CrossPlatformAppDevelopment/CrossPlatformAppDevelopment';
import AboutUs from './Page/AboutUs/AboutUs';
import WhyChooseUs from './Page/WhyChooseUs/WhyChooseUs';
import Blog from './Page/Blog/Blog';
import FullBlog from './Page/FullBlog/FullBlog';
import FullBlog2 from './Page/FullBlog2/FullBlog2';
import ContactUs from './Page/ContactUs/ContactUs';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/FirstPage",
    element: <FirstPage/>,
  },
  {
    path: "/CrossPlatformAppDevelopment",
    element: <CrossPlatformAppDevelopment/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/WhyChooseUs",
    element: <WhyChooseUs />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
  {
    path: "/FullBlog",
    element: <FullBlog />,
  },
  {
    path: "/FullBlog2",
    element: <FullBlog2 />,
  },
  {
    path: "/ContactUs",
    element: <ContactUs />,
  },
]);
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
