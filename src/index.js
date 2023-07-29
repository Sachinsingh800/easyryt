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
import TravelWebsite from './Page/TravelWebsite/TravelWebsite';
import FashionLifestyleWebsite from './Page/FashionLifestyleWebsite/FashionLifestyleWebsite';
import MobileAppUIUXDesignServices from './Page/MobileAppUIUXDesignServices/MobileAppUIUXDesignServices';
import AndroidAppUIUXDesignServices from './Page/AndroidAppUIUXDesignServices/AndroidAppUIUXDesignServices';
import UIUXDesignServices from './Page/UIUXDesignServices/UIUXDesignServices';
import ISOUIUXDesignServices from './Page/ISOUIUXDesignServices/ISOUIUXDesignServices';
import WebsiteUIUXDesignServices from './Page/WebsiteUIUXDesignServices/WebsiteUIUXDesignServices';
import ReactJsDevelopment from './Page/ReactJsDevelopment/ReactJsDevelopment';
import NextjsDevelopment from './Page/NextjsDevelopment/NextjsDevelopment';
import VuejsDevelopment from './Page/VuejsDevelopment/VuejsDevelopment';
import ReactNativeDevelopment from './Page/ReactNativeDevelopment/ReactNativeDevelopment';
import AngularDvelopment from './Page/AngularDvelopment/AngularDvelopment';
import Nodejs from './Page/Nodejs/Nodejs';
import Laravel from './Page/Laravel/Laravel';
import Python from './Page/Python/Python';
import APIDevelopment from './Page/APIDevelopment/APIDevelopment';
import DatabaseDesignandManagement from './Page/DatabaseDesignandManagement/DatabaseDesignandManagement';
import ServerArchitectureandConfiguration from './Page/ServerArchitectureandConfiguration/ServerArchitectureandConfiguration';
import CloudServicesIntegrationSAPIndustrySolutions from './Page/CloudServicesIntegrationSAPIndustrySolutions/CloudServicesIntegrationSAPIndustrySolutions';
import BackendFrameworkDevelopment from './Page/BackendFrameworkDevelopment/BackendFrameworkDevelopment';
import WebApplicationDevelopment from './Page/WebApplicationDevelopment/WebApplicationDevelopment';
import MobileBackendDevelopment from './Page/MobileBackendDevelopment/MobileBackendDevelopment';
import RealTimeDataProcessing from './Page/RealTimeDataProcessing/PodcasRealTimeDataProcessingtWebsite';
import PerformanceOptimization from './Page/PerformanceOptimization/PerformanceOptimization';
import IntegrationwithThirdPartyServices from './Page/IntegrationwithThirdPartyServices/IntegrationwithThirdPartyServices';
import DevOpsandContinuousIntegration from './Page/DevOpsandContinuousIntegration/DevOpsandContinuousIntegration';
import Azure from './Page/Azure/Azure';
import Aws from './Page/Aws/Aws';
import GoogleCloud from './Page/GoogleCloud/GoogleCloud';
import PopupOption from './Component/PopupOption/PopupOption';
import AppDevelopment from './Page/AppDevelopment/AppDevelopment';
import CloudSolutions from './Page/CloudSolutions/CloudSolutions';
import DigitalMarketing from './Page/DigitalMarketing/DigitalMarketing';
import WebsiteDevelopment from './Page/WebsiteDevelopment/WebsiteDevelopment';
import WordPressDevelopment from './Page/WordPressDevelopment/WordPressDevelopment';
import UIUXDesign from './Page/UIUXDesign/UIUXDesign';

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
  {
    path: "/TravelWebsite",
    element: <TravelWebsite/>,
  },
  {
    path: "/FashionLifestyleWebsite",
    element: <FashionLifestyleWebsite/>,
  },
  {
    path: "/MobileAppUIUXDesignServices",
    element: <MobileAppUIUXDesignServices/>,
  },
  {
    path: "/AndroidAppUIUXDesignServices",
    element: <AndroidAppUIUXDesignServices/>,
  },
  {
    path: "/UIUXDesignServices",
    element: <UIUXDesignServices/>,
  },
  {
    path: "/ISOUIUXDesignServices",
    element: <ISOUIUXDesignServices/>,
  },
  {
    path: "/WebsiteUIUXDesignServices",
    element: <WebsiteUIUXDesignServices/>,
  },
  {
    path: "/ReactJsDevelopment",
    element: <ReactJsDevelopment/>,
  },
  {
    path: "/NextjsDevelopment",
    element: <NextjsDevelopment/>,
  },
  {
    path: "/VuejsDevelopment",
    element: <VuejsDevelopment/>,
  },
  {
    path: "/ReactNativeDevelopment",
    element: <ReactNativeDevelopment/>,
  },
  {
    path: "/AngularDvelopment",
    element: <AngularDvelopment/>,
  },
  {
    path: "/Nodejs",
    element: <Nodejs/>,
  },
  {
    path: "/Laravel",
    element: <Laravel/>,
  },
  {
    path: "/Python",
    element: <Python/>,
  },
  {
    path: "/APIDevelopment",
    element: <APIDevelopment />,
  },
  {
    path: "/DatabaseDesignandManagement",
    element: <DatabaseDesignandManagement />,
  },
  {
    path: "/ServerArchitectureandConfiguration",
    element: <ServerArchitectureandConfiguration />,
  },
  {
    path: "/CloudServicesIntegrationSAPIndustrySolutions",
    element: <CloudServicesIntegrationSAPIndustrySolutions/>,
  },
  {
    path: "/BackendFrameworkDevelopment",
    element: <BackendFrameworkDevelopment/>,
  },
  {
    path: "/WebApplicationDevelopment",
    element: <WebApplicationDevelopment />,
  },
  {
    path: "/MobileBackendDevelopment",
    element: <MobileBackendDevelopment/>,
  },
  {
    path: "/RealTimeDataProcessing",
    element: <RealTimeDataProcessing />,
  },
  {
    path: "/PerformanceOptimization",
    element: <PerformanceOptimization />,
  },
  {
    path: "/IntegrationwithThirdPartyServices",
    element: <IntegrationwithThirdPartyServices />,
  },
  {
    path: "/DevOpsandContinuousIntegration",
    element: <DevOpsandContinuousIntegration />,
  },
  {
    path: "/Azure",
    element: <Azure/>,
  },
  {
    path: "/Aws",
    element: <Aws  />,
  },
  {
    path: "/GoogleCloud",
    element: <GoogleCloud  />,
  },
  {
    path: "/PopupOption",
    element: <PopupOption  />,
  },
  {
    path: "/AppDevelopment",
    element: <AppDevelopment  />,
  },
  {
    path: "/CloudSolutions",
    element: <CloudSolutions />,
  },
  {
    path: "/DigitalMarketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/WebsiteDevelopment",
    element: <WebsiteDevelopment />,
  },
  {
    path: "/WordPressDevelopment",
    element: <WordPressDevelopment />,
  },
  {
    path: "/UIUXDesign",
    element: <UIUXDesign />,
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
