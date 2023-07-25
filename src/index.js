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
import AffiliateWebsite from './Page/AffiliateWebsite/AffiliateWebsite';
import AndroidApplicationDevelopmentServices from './Page/AndroidApplicationDevelopmentServices/AndroidApplicationDevelopmentServices';
import HybridApplicationDevelopmentServices from './Page/HybridApplicationDevelopmentServices/HybridApplicationDevelopmentServices';
import MobileAppDevelopment from './Page/MobileAppDevelopment/MobileAppDevelopment';
import AppBackendDevelopment from './Page/AppBackendDevelopment/AppBackendDevelopment';
import FlutterAppDevelopment from './Page/FlutterAppDevelopment/FlutterAppDevelopment';
import ReactNativeAppDevelopment from './Page/ReactNativeAppDevelopment/ReactNativeAppDevelopment';
import MobileAppTestingandTestingQualityAssurance from './Page/MobileAppTestingandTestingQualityAssurance/MobileAppTestingandTestingQualityAssurance';
import IOSApplicationDevelopmentServices from './Page/IOSApplicationDevelopmentServices/IOSApplicationDevelopmentServices';
import SearchEngineOptimization from './Page/SearchEngineOptimization/SearchEngineOptimization';
import PayPerClickAdvertising from './Page/PayPerClickAdvertising/PayPerClickAdvertising';
import SocialMediaAdvertising from './Page/SocialMediaAdvertising/SocialMediaAdvertising';
import GoogleAdvertising from './Page/GoogleAdvertising/GoogleAdvertising';
import FacebookInstagramAdvertising from './Page/Facebook&InstagramAdvertising/Facebook&InstagramAdvertising';
import ContentMarketing from './Page/ContentMarketing/ContentMarketing';
import SocialMediaMarketing from './Page/SocialMediaMarketing/SocialMediaMarketing';
import EmailMarketing from './Page/EmailMarketing/EmailMarketing';
import AnalyticsandReporting from './Page/AnalyticsandReporting/AnalyticsandReporting';
import WebsiteTrafficAdvertising from './Page/WebsiteTrafficAdvertising/WebsiteTrafficAdvertising';
import ECommerceAdvertising from './Page/ECommerceAdvertising/ECommerceAdvertising';
import AppInstallAdvertising from './Page/AppInstallAdvertising/AppInstallAdvertising';
import AndroidAppAdvertising from './Page/AndroidAppAdvertising/AndroidAppAdvertising';
import IOSAppAdvertising from './Page/IOSAppAdvertising/IOSAppAdvertising';
import ECommerceDevelopment from './Page/ECommerceDevelopment/ECommerceDevelopment';
import FrontEndDevelopment from './Page/FrontEndDevelopment/FrontEndDevelopment';
import BackendDevelopment from './Page/BackendDevelopment/BackendDevelopment';
import FullStackDevelopmentServices from './Page/FullStackDevelopmentServices/FullStackDevelopmentServices';
import BlogorPersonalWebsite from './Page/BlogorPersonalWebsite/BlogorPersonalWebsite';
import BusinessWebsite from './Page/BusinessWebsite/BusinessWebsite';
import EcommerceWebsiteOnlineStore from './Page/EcommerceWebsiteOnlineStore/EcommerceWebsiteOnlineStore';
import OnlineCourses from './Page/OnlineCourses/OnlineCourses';
import PodcastWebsite from './Page/PodcastWebsite/PodcastWebsite';
import JobBoardWebsite from './Page/JobBoardWebsite/JobBoardWebsite';
import PortfolioWebsites from './Page/PortfolioWebsites/PortfolioWebsites';

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
  {
    path: "/AffiliateWebsite",
    element: <AffiliateWebsite />,
  },
  {
    path: "/AndroidApplicationDevelopmentServices",
    element: <AndroidApplicationDevelopmentServices />,
  },
  {
    path: "/HybridApplicationDevelopmentServices",
    element: <HybridApplicationDevelopmentServices/>,
  },
  {
    path: "/MobileAppDevelopment",
    element: <MobileAppDevelopment/>,
  },
  {
    path: "/AppBackendDevelopment",
    element: <AppBackendDevelopment />,
  },
  {
    path: "/FlutterAppDevelopment",
    element: <FlutterAppDevelopment />,
  },
  {
    path: "/ReactNativeAppDevelopment",
    element: <ReactNativeAppDevelopment/>,
  },
  {
    path: "/MobileAppTestingandTestingQualityAssurance",
    element: <MobileAppTestingandTestingQualityAssurance />,
  },
  {
    path: "/IOSApplicationDevelopmentServices",
    element: <IOSApplicationDevelopmentServices />,
  },
  {
    path: "/SearchEngineOptimization",
    element: <SearchEngineOptimization/>,
  },
  {
    path: "/PayPerClickAdvertising",
    element: <PayPerClickAdvertising  />,
  },
  {
    path: "/SocialMediaAdvertising",
    element: <SocialMediaAdvertising />,
  },
  {
    path: "/GoogleAdvertising",
    element: <GoogleAdvertising />,
  },
  {
    path: "/Facebook&InstagramAdvertising",
    element: <FacebookInstagramAdvertising />,
  },
  {
    path: "/ContentMarketing",
    element: <ContentMarketing />,
  },
  {
    path: "/SocialMediaMarketing",
    element: <SocialMediaMarketing />,
  },
  {
    path: "/EmailMarketing",
    element: <EmailMarketing />,
  },
  {
    path: "/AnalyticsandReporting",
    element: <AnalyticsandReporting />,
  },
  {
    path: "/WebsiteTrafficAdvertising",
    element: <WebsiteTrafficAdvertising />,
  },
  {
    path: "/ECommerceAdvertising",
    element: <ECommerceAdvertising />,
  },
  {
    path: "/AppInstallAdvertising",
    element: <AppInstallAdvertising />,
  },
  {
    path: "/AndroidAppAdvertising",
    element: <AndroidAppAdvertising />,
  },
  {
    path: "/IOSAppAdvertising",
    element: <IOSAppAdvertising/>,
  },
  {
    path: "/ECommerceDevelopment",
    element: <ECommerceDevelopment />,
  },
  {
    path: "/FrontEndDevelopment",
    element: <FrontEndDevelopment />,
  },
  {
    path: "/BackendDevelopment",
    element: <BackendDevelopment />,
  },
  {
    path: "/FullStackDevelopmentServices",
    element: <FullStackDevelopmentServices />,
  },
  {
    path: "/BlogorPersonalWebsite",
    element: <BlogorPersonalWebsite />,
  },
  {
    path: "/BusinessWebsite",
    element: <BusinessWebsite/>,
  },
  {
    path: "/EcommerceWebsiteOnlineStore",
    element: <EcommerceWebsiteOnlineStore/>,
  },
  {
    path: "/OnlineCourses",
    element: <OnlineCourses/>,
  },
  {
    path: "/PodcastWebsite",
    element: <PodcastWebsite/>,
  },
  {
    path: "/AffiliateWebsite",
    element: <AffiliateWebsite/>,
  },
  {
    path: "/JobBoardWebsite",
    element: <JobBoardWebsite/>,
  },
  {
    path: "/PortfolioWebsites",
    element: <PortfolioWebsites/>,
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
