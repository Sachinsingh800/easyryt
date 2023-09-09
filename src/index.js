import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import your page components here
import PrivacyPolicy from './Page/PrivacyPolicy/PrivacyPolicy';
// import NativeAppDevelopment from './Page/FirstPage/NativeAppDevelopment';
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
import NativeAppDevelopment from './Page/FirstPage/NativeAppDevelopment ';
import { hydrate, render } from "react-dom";
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/Native-Mobile-App-Development" element={<NativeAppDevelopment />} />
      <Route path="/Cross-Platform-App-Development" element={<CrossPlatformAppDevelopment />} />
      <Route path="/About-Us" element={<AboutUs />} />
      <Route path="/Why-Choose-Us" element={<WhyChooseUs />} />
      <Route path="/Blogs" element={<Blog />} />
      <Route path="/Blog/:blogTitle" element={<FullBlog />} />
      <Route path="/Contact-Us" element={<ContactUs />} />
      <Route path="/Affiliate-Website" element={<AffiliateWebsite />} />
      <Route path="/Android-Application-Development-Services" element={<AndroidApplicationDevelopmentServices />} />
      <Route path="/Hybrid-Application-Development-Services" element={<HybridApplicationDevelopmentServices />} />
      <Route path="/Mobile-App-Development" element={<MobileAppDevelopment />} />
      <Route path="/App-Backend-Development" element={<AppBackendDevelopment />} />
      <Route path="/Flutter-App-Development" element={<FlutterAppDevelopment />} />
      <Route path="/React-Native-App-Development" element={<ReactNativeAppDevelopment />} />
      <Route path="/Mobile-App-Testingand-Testing-Quality-Assurance" element={<MobileAppTestingandTestingQualityAssurance />} />
      <Route path="/IOS-Application-Development-Services" element={<IOSApplicationDevelopmentServices />} />
      <Route path="/Search-Engine-Optimization" element={<SearchEngineOptimization />} />
      <Route path="/Pay-Per-Click-Advertising" element={<PayPerClickAdvertising />} />
      <Route path="/Social-Media-Advertising" element={<SocialMediaAdvertising />} />
      <Route path="/Google-Advertising" element={<GoogleAdvertising />} />
      <Route path="/Facebook-&-Instagram-Advertising" element={<FacebookInstagramAdvertising />} />
      <Route path="/Content-Marketing" element={<ContentMarketing />} />
      <Route path="/Social-Media-Marketing" element={<SocialMediaMarketing />} />
      <Route path="/Email-Marketing" element={<EmailMarketing />} />
      <Route path="/Analytics-and-Reporting" element={<AnalyticsandReporting />} />
      <Route path="/Website-Traffic-Advertising" element={<WebsiteTrafficAdvertising />} />
      <Route path="/E-Commerce-Advertising" element={<ECommerceAdvertising />} />
      <Route path="/App-Install-Advertising" element={<AppInstallAdvertising />} />
      <Route path="/Android-App-Advertising" element={<AndroidAppAdvertising />} />
      <Route path="/IOS-App-Advertising" element={<IOSAppAdvertising />} />
      <Route path="/E-Commerce-Development" element={<ECommerceDevelopment />} />
      <Route path="/FrontEnd-Development" element={<FrontEndDevelopment />} />
      <Route path="/Backend-Development" element={<BackendDevelopment />} />
      <Route path="/FullStack-Development-Services" element={<FullStackDevelopmentServices />} />
      <Route path="/Blog-or-Personal-Website" element={<BlogorPersonalWebsite />} />
      <Route path="/Business-Website" element={<BusinessWebsite />} />
      <Route path="/E-commerce-Website-Online-Store" element={<EcommerceWebsiteOnlineStore />} />
      <Route path="/Online-Courses" element={<OnlineCourses />} />
      <Route path="/Podcast-Website" element={<PodcastWebsite />} />
      <Route path="/JobBoard-Website" element={<JobBoardWebsite />} />
      <Route path="/Portfolio-Websites" element={<PortfolioWebsites />} />
      <Route path="/Travel-Website" element={<TravelWebsite />} />
      <Route path="/Fashion-Life-style-Website" element={<FashionLifestyleWebsite />} />
      <Route path="/Mobile-App-UIUX-Design-Services" element={<MobileAppUIUXDesignServices />} />
      <Route path="/Android-App-UIUX-Design-Services" element={<AndroidAppUIUXDesignServices />} />
      <Route path="/UIUX-Design-Services" element={<UIUXDesignServices />} />
      <Route path="/ISO-UIUX-Design-Services" element={<ISOUIUXDesignServices />} />
      <Route path="/Website-UIUX-Design-Services" element={<WebsiteUIUXDesignServices />} />
      <Route path="/ReactJs-Development" element={<ReactJsDevelopment />} />
      <Route path="/Nextjs-Development" element={<NextjsDevelopment />} />
      <Route path="/Vuejs-Development" element={<VuejsDevelopment />} />
      <Route path="/ReactNative-Development" element={<ReactNativeDevelopment />} />
      <Route path="/Angular-Dvelopment" element={<AngularDvelopment />} />
      <Route path="/Nodejs" element={<Nodejs />} />
      <Route path="/Laravel" element={<Laravel />} />
      <Route path="/Python" element={<Python />} />
      <Route path="/API-Development" element={<APIDevelopment />} />
      <Route path="/Database-Designand-Management" element={<DatabaseDesignandManagement />} />
      <Route path="/Server-Architecture-and-Configuration" element={<ServerArchitectureandConfiguration />} />
      <Route path="/Cloud-Services-Integration-SAP-Industry-Solutions" element={<CloudServicesIntegrationSAPIndustrySolutions />} />
      <Route path="/Backend-Framework-Development" element={<BackendFrameworkDevelopment />} />
      <Route path="/Web-Application-Development" element={<WebApplicationDevelopment />} />
      <Route path="/Mobile-Backend-Development" element={<MobileBackendDevelopment />} />
      <Route path="/Real-TimeData-Processing" element={<RealTimeDataProcessing />} />
      <Route path="/Performance-Optimization" element={<PerformanceOptimization />} />
      <Route path="/Integration-with-Third-Party-Services" element={<IntegrationwithThirdPartyServices />} />
      <Route path="/DevOps-and-Continuous-Integration" element={<DevOpsandContinuousIntegration />} />
      <Route path="/Azure" element={<Azure />} />
      <Route path="/Aws" element={<Aws />} />
      <Route path="/Google-Cloud" element={<GoogleCloud />} />
      <Route path="/PopupOption" element={<PopupOption />} />
      <Route path="/App-Development" element={<AppDevelopment />} />
      <Route path="/Cloud-Solutions" element={<CloudSolutions />} />
      <Route path="/Digital-Marketing" element={<DigitalMarketing />} />
      <Route path="/Website-Development" element={<WebsiteDevelopment />} />
      <Route path="/Word-Press-Development" element={<WordPressDevelopment />} />
      <Route path="/UIUX-Design" element={<UIUXDesign />} />
      <Route element={<Error />} />
    </Routes>
  </BrowserRouter>
);
if (rootElement.hasChildNodes()) {
  hydrate(AppRouter, rootElement);
} else {
  render(AppRouter, rootElement);
}

ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
