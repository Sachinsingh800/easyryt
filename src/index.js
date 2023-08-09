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
import FullBlog from './Page/FullBlog/FullBlog';
import Error from './Page/Error/Error';
import { Link, useParams } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));




const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/Native-Mobile-App-Development",
    element: <FirstPage/>,
  },
  {
    path: "/Cross-Platform-App-Development",
    element: <CrossPlatformAppDevelopment/>,
  },
  {
    path: "/AboutUs",
    element: <AboutUs/>,
  },
  {
    path: "/Why-Choose-Us",
    element: <WhyChooseUs />,
  },
  {
    path: "/Blogs",
    element: <Blog />,
  },

  {
    path: "/Blog/:blogTitle",
    element: <FullBlog />,
  },
  {
    path: "/Contact-Us",
    element: <ContactUs />,
  },
  {
    path: "/Affiliate-Website",
    element: <AffiliateWebsite />,
  },
  {
    path: "/Android-Application-Development-Services",
    element: <AndroidApplicationDevelopmentServices />,
  },
  {
    path: "/Hybrid-Application-Development-Services",
    element: <HybridApplicationDevelopmentServices/>,
  },
  {
    path: "/Mobile-App-Development",
    element: <MobileAppDevelopment/>,
  },
  {
    path: "/App-Backend-Development",
    element: <AppBackendDevelopment />,
  },
  {
    path: "/Flutter-App-Development",
    element: <FlutterAppDevelopment />,
  },
  {
    path: "/React-Native-App-Development",
    element: <ReactNativeAppDevelopment/>,
  },
  {
    path: "/Mobile-App-Testingand-Testing-Quality-Assurance",
    element: <MobileAppTestingandTestingQualityAssurance />,
  },
  {
    path: "/IOS-Application-Development-Services",
    element: <IOSApplicationDevelopmentServices />,
  },
  {
    path: "/Search-Engine-Optimization",
    element: <SearchEngineOptimization/>,
  },
  {
    path: "/Pay-Per-Click-Advertising",
    element: <PayPerClickAdvertising  />,
  },
  {
    path: "/Social-Media-Advertising",
    element: <SocialMediaAdvertising />,
  },
  {
    path: "/Google-Advertising",
    element: <GoogleAdvertising />,
  },
  {
    path: "/Facebook-&-Instagram-Advertising",
    element: <FacebookInstagramAdvertising />,
  },
  {
    path: "/Content-Marketing",
    element: <ContentMarketing />,
  },
  {
    path: "/Social-Media-Marketing",
    element: <SocialMediaMarketing />,
  },
  {
    path: "/Email-Marketing",
    element: <EmailMarketing />,
  },
  {
    path: "/Analytics-and-Reporting",
    element: <AnalyticsandReporting />,
  },
  {
    path: "/Website-Traffic-Advertising",
    element: <WebsiteTrafficAdvertising />,
  },
  {
    path: "/E-Commerce-Advertising",
    element: <ECommerceAdvertising />,
  },
  {
    path: "/App-Install-Advertising",
    element: <AppInstallAdvertising />,
  },
  {
    path: "/Android-App-Advertising",
    element: <AndroidAppAdvertising />,
  },
  {
    path: "/IOS-App-Advertising",
    element: <IOSAppAdvertising/>,
  },
  {
    path: "/E-Commerce-Development",
    element: <ECommerceDevelopment />,
  },
  {
    path: "/FrontEnd-Development",
    element: <FrontEndDevelopment />,
  },
  {
    path: "/Backend-Development",
    element: <BackendDevelopment />,
  },
  {
    path: "/FullStack-Development-Services",
    element: <FullStackDevelopmentServices />,
  },
  {
    path: "/Blog-or-Personal-Website",
    element: <BlogorPersonalWebsite />,
  },
  {
    path: "/Business-Website",
    element: <BusinessWebsite/>,
  },
  {
    path: "/E-commerce-Website-Online-Store",
    element: <EcommerceWebsiteOnlineStore/>,
  },
  {
    path: "/Online-Courses",
    element: <OnlineCourses/>,
  },
  {
    path: "/Podcast-Website",
    element: <PodcastWebsite/>,
  },
  {
    path: "/Affiliate-Website",
    element: <AffiliateWebsite/>,
  },
  {
    path: "/JobBoard-Website",
    element: <JobBoardWebsite/>,
  },
  {
    path: "/Portfolio-Websites",
    element: <PortfolioWebsites/>,
  },
  {
    path: "/Travel-Website",
    element: <TravelWebsite/>,
  },
  {
    path: "/Fashion-Life-style-Website",
    element: <FashionLifestyleWebsite/>,
  },
  {
    path: "/Mobile-App-UIUX-Design-Services",
    element: <MobileAppUIUXDesignServices/>,
  },
  {
    path: "/Android-App-UIUX-Design-Services",
    element: <AndroidAppUIUXDesignServices/>,
  },
  {
    path: "/UIUX-Design-Services",
    element: <UIUXDesignServices/>,
  },
  {
    path: "/ISO-UIUX-Design-Services",
    element: <ISOUIUXDesignServices/>,
  },
  {
    path: "/Website-UIUX-Design-Services",
    element: <WebsiteUIUXDesignServices/>,
  },
  {
    path: "/ReactJs-Development",
    element: <ReactJsDevelopment/>,
  },
  {
    path: "/Nextjs-Development",
    element: <NextjsDevelopment/>,
  },
  {
    path: "/Vuejs-Development",
    element: <VuejsDevelopment/>,
  },
  {
    path: "/ReactNative-Development",
    element: <ReactNativeDevelopment/>,
  },
  {
    path: "/Angular-Dvelopment",
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
    path: "/API-Development",
    element: <APIDevelopment />,
  },
  {
    path: "/Database-Designand-Management",
    element: <DatabaseDesignandManagement />,
  },
  {
    path: "/Server-Architecture-and-Configuration",
    element: <ServerArchitectureandConfiguration />,
  },
  {
    path: "/Cloud-Services-Integration-SAP-Industry-Solutions",
    element: <CloudServicesIntegrationSAPIndustrySolutions/>,
  },
  {
    path: "/Backend-Framework-Development",
    element: <BackendFrameworkDevelopment/>,
  },
  {
    path: "/Web-Application-Development",
    element: <WebApplicationDevelopment />,
  },
  {
    path: "/Mobile-Backend-Development",
    element: <MobileBackendDevelopment/>,
  },
  {
    path: "/Real-TimeData-Processing",
    element: <RealTimeDataProcessing />,
  },
  {
    path: "/Performance-Optimization",
    element: <PerformanceOptimization />,
  },
  {
    path: "/Integration-with-Third-Party-Services",
    element: <IntegrationwithThirdPartyServices />,
  },
  {
    path: "/DevOps-and-Continuous-Integration",
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
    path: "/Google-Cloud",
    element: <GoogleCloud  />,
  },
  {
    path: "/PopupOption",
    element: <PopupOption  />,
  },
  {
    path: "/App-Development",
    element: <AppDevelopment  />,
  },
  {
    path: "/Cloud-Solutions",
    element: <CloudSolutions />,
  },
  {
    path: "/Digital-Marketing",
    element: <DigitalMarketing />,
  },
  {
    path: "/Website-Development",
    element: <WebsiteDevelopment />,
  },
  {
    path: "/Word-Press-Development",
    element: <WordPressDevelopment />,
  },
  {
    path: "/UIUX-Design",
    element: <UIUXDesign />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();










