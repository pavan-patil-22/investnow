# Project Context

You are helping with an existing software project.

## Instructions

1. First understand the project architecture before answering.
2. Do not modify unrelated files.
3. Reuse the existing project structure and coding style.
4. Make only the minimum required changes.
5. Mention every file that needs to be modified.
6. If additional files are required, ask only for those files.

---

## Project Structure

```text
├── README.md
├── package.json
├── public
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src
│   ├── AdminLayout
│   │   └── AdminLayout.jsx
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── Guestlayout
│   │   ├── GuestFotter.jsx
│   │   ├── GuestNavbar.jsx
│   │   ├── Guestlayout.jsx
│   │   ├── HeroSection.jsx
│   │   ├── Home.jsx
│   │   ├── LaserFlow.css
│   │   ├── LaserFlow.jsx
│   │   ├── SwissScene.jsx
│   │   └── swissHero.css
│   ├── api.js
│   ├── components
│   │   ├── CTASection.jsx
│   │   ├── LaserFlow.css
│   │   ├── LaserFlow.jsx
│   │   ├── PageHero.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── ScrollToTop.jsx
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── AboutUs.jsx
│   │   ├── AdminDashboard.jsx
│   │   ├── AdminForgotPassword.jsx
│   │   ├── AdminLogin.jsx
│   │   ├── AdminRegister.jsx
│   │   ├── ChalukyaDevelopers.jsx
│   │   ├── ContactUs.jsx
│   │   ├── CustomerSupport.jsx
│   │   ├── FinancialGoals.jsx
│   │   ├── ManageAboutUs.jsx
│   │   ├── ManageChalukya.jsx
│   │   ├── ManageEnquiries.jsx
│   │   ├── ManageFinancialGoals.jsx
│   │   ├── PrivacyPolicy.jsx
│   │   ├── RegulatoryInformation.jsx
│   │   ├── RiskDisclosures.jsx
│   │   ├── ServiceManage.jsx
│   │   ├── Services.jsx
│   │   ├── TermsConditions.jsx
│   │   ├── TransparencyDisclosures.jsx
│   │   └── TrustCompliance.jsx
│   ├── reportWebVitals.js
│   └── setupTests.js
└── tailwind.config.js
```

===============================================================================
FILE: package.json
===============================================================================

```json
{
  "name": "client",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@react-three/drei": "^10.7.9",
    "@react-three/fiber": "^9.8.1",
    "@testing-library/dom": "^10.4.2",
    "@testing-library/jest-dom": "^6.9.1",
    "@testing-library/react": "^16.3.3",
    "@testing-library/user-event": "^13.5.0",
    "framer-motion": "^13.4.2",
    "gsap": "^3.15.0",
    "lenis": "^1.3.26",
    "lucide-react": "^1.55.0",
    "react": "^19.3.0",
    "react-dom": "^19.3.0",
    "react-icons": "^5.7.0",
    "react-router-dom": "^7.18.4",
    "react-scripts": "5.0.1",
    "three": "^0.186.1",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}
```

===============================================================================
FILE: public/index.html
===============================================================================

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    -->
    <!-- Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" />
    <!-- Google Fonts: Fraunces (Serif) & Inter (Sans-serif) -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
    <title>INVESTNOW Financial Services Pvt. Ltd.</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
    <!--
      This HTML file is a template.
      If you open it directly in the browser, you will see an empty page.

      You can add webfonts, meta tags, or analytics to this file.
      The build step will place the bundled scripts into the <body> tag.

      To begin the development, run `npm start` or `yarn start`.
      To create a production bundle, use `npm run build` or `yarn build`.
    -->
  </body>
</html>
```

===============================================================================
FILE: public/manifest.json
===============================================================================

```json
{
  "short_name": "React App",
  "name": "Create React App Sample",
  "icons": [
    {
      "src": "favicon.ico",
      "sizes": "64x64 32x32 24x24 16x16",
      "type": "image/x-icon"
    },
    {
      "src": "logo192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "logo512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

===============================================================================
FILE: public/robots.txt
===============================================================================

```text
# https://www.robotstxt.org/robotstxt.html
User-agent: *
Disallow:
```

===============================================================================
FILE: README.md
===============================================================================

```md
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
```

===============================================================================
FILE: src/AdminLayout/AdminLayout.jsx
===============================================================================

```jsx
import { useState, useEffect } from 'react';
import { Outlet, useLocation, Link, useNavigate } from 'react-router-dom';
import {
  FaBars,
  FaEnvelope,
  FaHome,
  FaChevronLeft,
  FaChevronRight,
  FaSignOutAlt,
  FaUserCircle,
  FaInfoCircle,
  FaBullseye,
  FaMapMarkedAlt
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const AdminNavbar = ({ isCollapsed, setIsCollapsed, isMobile, setIsMobileOpen, isMobileOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminUser");
    navigate("/investnowlogin");
  };

  const navItems = [
    { name: 'Dashboard', path: '/admin', icon: <FaHome /> },
    { name: 'Manage About', path: '/admin/manage-about', icon: <FaInfoCircle /> },
    { name: 'Manage Financial Goals', path: '/admin/manage-financial-goals', icon: <FaBullseye /> },
    { name: 'Manage Chalukya', path: '/admin/manage-chalukya', icon: <FaMapMarkedAlt /> },
    { name: 'Guest Messages', path: '/admin/guest-messages', icon: <FaEnvelope /> },
    { name: 'Manage Services', path: '/admin/manage-services', icon: <FaEnvelope /> },
    
  ];

  return (
    <>
      <motion.div
        className="admin-sidebar"
        initial={{ x: isMobile ? -300 : 0 }}
        animate={{ 
          x: isMobile && !isMobileOpen ? -300 : 0,
          width: isCollapsed && !isMobile ? 80 : 250
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        <div className="logo-container">
          <div className="logo-wrapper">
            <img
              src="/logo.png"
              alt="INVESTNOW Logo"
              className="logo"
              style={{ background: "#FFFFFF", padding: "3px", borderRadius: "50%", border: "1.5px solid #D4AF37", objectFit: "contain" }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/logo.jpeg";
              }}
            />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span 
                  className="logo-text"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  INVESTNOW
                  <span className="logo-subtext">Financial Services</span>
                </motion.span>
              )}
            </AnimatePresence>
          </div>
          {/* {!isMobile && (
            <motion.div 
              className="toggle-btn" 
              onClick={() => setIsCollapsed(!isCollapsed)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
            </motion.div>
          )} */}
        </div>

        <div className="nav-items">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              onClick={() => isMobile && setIsMobileOpen(false)}
            >
              <div className="nav-icon">{item.icon}</div>
              <AnimatePresence>
                {!isCollapsed && (
                  <motion.span 
                    className="nav-text"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: 'auto' }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.span>
                )}
              </AnimatePresence>
              {location.pathname === item.path && (
                <motion.div 
                  className="active-indicator"
                  layoutId="activeIndicator"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 35 }}
                />
              )}
            </Link>
          ))}
        </div>

        <div className="sidebar-footer">
          <a href="#logout" onClick={handleLogout} className="logout-btn">
            <FaSignOutAlt />
            <AnimatePresence>
              {!isCollapsed && (
                <motion.span 
                  className="logout-text"
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  Logout
                </motion.span>
              )}
            </AnimatePresence>
          </a>
        </div>
      </motion.div>

      {isMobile && isMobileOpen && (
        <div className="sidebar-overlay" onClick={() => setIsMobileOpen(false)}></div>
      )}
    </>
  );
};

const TopBar = ({ isMobile, setIsMobileOpen, isMobileOpen, isCollapsed, setIsCollapsed }) => {
  return (
    <div className="top-bar">
      <div className="top-bar-left">
        {isMobile ? (
          <button className="menu-toggle" onClick={() => setIsMobileOpen(!isMobileOpen)}>
            <FaBars />
          </button>
        ) : (
          <button className="menu-toggle" onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
          </button>
        )}
        <h1 className="page-title">Admin Dashboard</h1>
      </div>
      
      <div className="top-bar-right">
        {/* <button className="notification-btn">
          <FaBell />
          <span className="notification-badge">3</span>
        </button> */}
        
        <div className="user-menu">
          <div className="user-avatar">
            <FaUserCircle />
          </div>
          <div className="user-details">
            {/* <span className="user-name">Principal</span> */}
            <span className="user-role">Administrator</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const AdminLayout = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1024;
      setIsMobile(isNowMobile);
      
      if (isNowMobile) {
        setIsCollapsed(false);
      } else {
        setIsMobileOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="admin-layout">
      <AdminNavbar 
        isCollapsed={isCollapsed} 
        setIsCollapsed={setIsCollapsed}
        isMobile={isMobile}
        setIsMobileOpen={setIsMobileOpen}
        isMobileOpen={isMobileOpen}
      />
      
      <div className="main-content" style={{ marginLeft: isMobile ? 0 : (isCollapsed ? '80px' : '250px') }}>
        <TopBar 
          isMobile={isMobile} 
          setIsMobileOpen={setIsMobileOpen} 
          isMobileOpen={isMobileOpen}
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        
        <div className="content-wrapper">
          <Outlet />
        </div>
      </div>

      <style jsx>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background-color: #F5F8F6;
          position: relative;
        }

        .admin-sidebar {
          height: 100vh;
          background: linear-gradient(180deg, #073B2A 0%, #0B6045 100%);
          color: white;
          position: fixed;
          left: 0;
          top: 0;
          z-index: 1000;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
        }

        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }

        @media (min-width: 1024px) {
          .sidebar-overlay {
            display: none;
          }
        }

        .logo-container {
          padding: 20px 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          min-height: 80px;
        }

        .logo-wrapper {
          display: flex;
          align-items: center;
          gap: 12px;
          overflow: hidden;
        }

        .logo {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
          background: transparent;
          border: 1.5px solid #D4AF37;
        }

        .logo-text {
          font-size: 16px;
          font-weight: bold;
          white-space: nowrap;
          display: flex;
          flex-direction: column;
          line-height: 1.2;
          overflow: hidden;
          color: #D4AF37;
        }

        .logo-subtext {
          font-size: 11px;
          color: #F5F8F6;
          font-weight: normal;
        }

        .toggle-btn {
          color: #cbd5e0;
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
        }

        .toggle-btn:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.2);
        }

        .nav-items {
          padding: 15px 10px;
          overflow-y: auto;
          flex: 1;
        }

        .nav-item {
          display: flex;
          align-items: center;
          padding: 12px 15px;
          margin-bottom: 5px;
          border-radius: 8px;
          color: #E2E6EB;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          white-space: nowrap;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.08);
          color: #D4AF37;
        }

        .nav-item.active {
          background: rgba(212, 175, 55, 0.15);
          color: #D4AF37;
        }

        .nav-icon {
          min-width: 30px;
          font-size: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1;
          flex-shrink: 0;
        }

        .nav-text {
          margin-left: 12px;
          white-space: nowrap;
          overflow: hidden;
          z-index: 1;
        }

        .active-indicator {
          position: absolute;
          top: 0;
          left: 0;
          bottom: 0;
          width: 4px;
          background: #D4AF37;
          border-radius: 0 4px 4px 0;
        }

        .sidebar-footer {
          padding: 15px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .logout-btn {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          border-radius: 8px;
          color: #cbd5e0;
          text-decoration: none;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.05);
          white-space: nowrap;
          overflow: hidden;
        }

        .logout-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
        }

        .logout-text {
          margin-left: 12px;
          overflow: hidden;
        }

        .top-bar {
          height: 70px;
          background: #fff;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 25px;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .top-bar-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }

        .menu-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: none;
          background: #edf2f7;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .menu-toggle:hover {
          background: #e2e8f0;
        }

        .page-title {
          font-size: 20px;
          font-weight: 600;
          color: #2d3748;
        }

        .top-bar-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .notification-btn {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 8px;
          border: none;
          background: #edf2f7;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .notification-btn:hover {
          background: #e2e8f0;
        }

        .notification-badge {
          position: absolute;
          top: -5px;
          right: -5px;
          background: #e53e3e;
          color: white;
          font-size: 10px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .user-menu {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #edf2f7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          color: #4a5568;
        }

        .user-details {
          display: flex;
          flex-direction: column;
        }

        .user-details .user-name {
          font-weight: 600;
          font-size: 14px;
        }

        .user-details .user-role {
          font-size: 12px;
          color: #718096;
        }

        .main-content {
          flex: 1;
          transition: margin-left 0.3s ease;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .content-wrapper {
          flex: 1;
          padding: 25px;
        }

        @media (max-width: 1023px) {
          .top-bar {
            padding: 0 15px;
          }
          
          .content-wrapper {
            padding: 15px;
          }
          
          .user-details {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .page-title {
            font-size: 18px;
          }
        }

        @media (max-width: 480px) {
          .top-bar {
            height: 60px;
          }
          
          .content-wrapper {
            padding: 10px;
          }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;
```

===============================================================================
FILE: src/api.js
===============================================================================

```js
// const API_BASE_URL = (process.env.REACT_APP_API_URL || "http://localhost:7000").replace(/\/+$/, "");

const API_BASE_URL = (process.env.REACT_APP_API_URL || "https://investnow-faf0.onrender.com").replace(/\/+$/, "");



export const apiUrl = (path) => `${API_BASE_URL}/${path.replace(/^\/+/, "")}`;
```

===============================================================================
FILE: src/App.css
===============================================================================

```css
.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
```

===============================================================================
FILE: src/App.js
===============================================================================

```js
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// Layouts & Shared
import GuestLayout from "./Guestlayout/Guestlayout";
import Home from "./Guestlayout/Home";

// Pages
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import FinancialGoals from "./pages/FinancialGoals";
import CustomerSupport from "./pages/CustomerSupport";
import ContactUs from "./pages/ContactUs";
import TrustCompliance from "./pages/TrustCompliance";
import RegulatoryInformation from "./pages/RegulatoryInformation";
import RiskDisclosures from "./pages/RiskDisclosures";
import TransparencyDisclosures from "./pages/TransparencyDisclosures";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ChalukyaDevelopers from "./pages/ChalukyaDevelopers";

// Admin & Auth
import AdminLayout from "./AdminLayout/AdminLayout";
import AdminLogin from "./pages/AdminLogin";
import AdminRegister from "./pages/AdminRegister";
import AdminForgotPassword from "./pages/AdminForgotPassword";
import AdminDashboard from "./pages/AdminDashboard";
import ManageAboutUs from "./pages/ManageAboutUs";
import ManageFinancialGoals from "./pages/ManageFinancialGoals";
import ManageChalukya from "./pages/ManageChalukya";
import ManageEnquiries from "./pages/ManageEnquiries";
import ProtectedRoute from "./components/ProtectedRoute";
import ServiceManage from "./pages/ServiceManage";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Public Guest Layout Routes */}
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="services" element={<Services />} />
          <Route path="financial-goals" element={<FinancialGoals />} />
          <Route path="customer-support" element={<CustomerSupport />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="trust-compliance" element={<TrustCompliance />} />
          <Route path="regulatory-information" element={<RegulatoryInformation />} />
          <Route path="risk-disclosures" element={<RiskDisclosures />} />
          <Route path="transparency" element={<TransparencyDisclosures />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-and-conditions" element={<TermsConditions />} />
          <Route path="chalukya-developers" element={<ChalukyaDevelopers />} />
        </Route>

        {/* Admin Auth Public Routes */}
        <Route path="/investnowlogin" element={<AdminLogin />} />
        <Route path="/investnowregi" element={<AdminRegister />} />
        <Route path="/investnowforgotpassword" element={<AdminForgotPassword />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="about" element={<ManageAboutUs />} />
            <Route path="manage-about" element={<ManageAboutUs />} />
            <Route path="services" element={<ServiceManage />} />
            <Route path="manage-services" element={<ServiceManage />} />
            <Route path="financial-goals" element={<ManageFinancialGoals />} />
            <Route path="manage-financial-goals" element={<ManageFinancialGoals />} />
            <Route path="chalukya" element={<ManageChalukya />} />
            <Route path="manage-chalukya" element={<ManageChalukya />} />
            <Route path="enquiries" element={<ManageEnquiries />} />
            <Route path="guest-messages" element={<ManageEnquiries />} />
          </Route>
          <Route path="/Principal" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="manage-about" element={<ManageAboutUs />} />
            <Route path="manage-financial-goals" element={<ManageFinancialGoals />} />
            <Route path="manage-chalukya" element={<ManageChalukya />} />
            <Route path="guest-messages" element={<ManageEnquiries />} />
            <Route path="*" element={<AdminDashboard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
```

===============================================================================
FILE: src/App.test.js
===============================================================================

```js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
```

===============================================================================
FILE: src/components/CTASection.jsx
===============================================================================

```jsx
import React from "react";
import { Link } from "react-router-dom";

const CTASection = ({
  title = "Let's Build Your Financial Roadmap",
  subtitle = "Talk to our dedicated financial consultants to create a clear, goal-oriented wealth strategy.",
  primaryBtnText = "Contact Us",
  primaryBtnLink = "/contact",
  secondaryBtnText = "Explore Services",
  secondaryBtnLink = "/services",
}) => {
  return (
    <section className="cta-banner-wrapper">
      <style>{`
        .cta-banner-wrapper {
          background-color: var(--ivory);
          color: var(--text);
          padding: 70px 5%;
          text-align: center;
          position: relative;
          border-top: 1px solid var(--hairline);
          border-bottom: 1px solid var(--hairline);
        }

        .cta-banner-container {
          max-width: 850px;
          margin: 0 auto;
        }

        .cta-banner-kicker {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: 14px;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .cta-banner-kicker::before,
        .cta-banner-kicker::after {
          content: "";
          display: inline-block;
          width: 24px;
          height: 1px;
          background-color: var(--accent);
        }

        .cta-banner-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 36px;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 14px;
          letter-spacing: -0.01em;
          line-height: 1.25;
        }

        .cta-banner-subtitle {
          font-size: 16px;
          color: var(--muted);
          margin-bottom: 32px;
          line-height: 1.65;
        }

        .cta-btn-group {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .btn-heritage-primary {
          background-color: var(--primary);
          color: var(--ivory);
          padding: 14px 32px;
          border-radius: 3px;
          font-size: 15px;
          font-weight: 600;
          border: 1px solid var(--primary);
          cursor: pointer;
          transition: background-color 0.2s ease, border-color 0.2s ease;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .btn-heritage-primary:hover {
          background-color: var(--secondary);
          border-color: var(--secondary);
          color: var(--ivory);
        }

        .btn-heritage-outline {
          background-color: transparent;
          color: var(--primary);
          border: 1px solid var(--primary);
          padding: 14px 30px;
          border-radius: 3px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          text-decoration: none;
        }

        .btn-heritage-outline:hover {
          background-color: var(--gold-wash);
          border-color: var(--accent);
          color: var(--primary);
        }

        @media (max-width: 768px) {
          .cta-banner-wrapper {
            padding: 50px 5%;
          }
          .cta-banner-title {
            font-size: 26px;
          }
          .cta-banner-subtitle {
            font-size: 15px;
          }
          .btn-heritage-primary, .btn-heritage-outline {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="cta-banner-container">
        <div className="cta-banner-kicker">Wealth Growth & Protection</div>
        <h2 className="cta-banner-title">{title}</h2>
        <p className="cta-banner-subtitle">{subtitle}</p>
        <div className="cta-btn-group">
          <Link to={primaryBtnLink} className="btn-heritage-primary">
            {primaryBtnText}
          </Link>
          {secondaryBtnText && (
            <Link to={secondaryBtnLink} className="btn-heritage-outline">
              {secondaryBtnText}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
```

===============================================================================
FILE: src/components/LaserFlow.css
===============================================================================

```css
﻿.laser-flow-container {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.laser-flow-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}

```

===============================================================================
FILE: src/components/LaserFlow.jsx
===============================================================================

```jsx
﻿'use client';

import { useEffect, useRef } from 'react';

import './LaserFlow.css';

const VERTEX = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;
out vec4 outColor;
uniform vec2 uResolution;
uniform float uDpr;
uniform float uScale;
uniform float uTime;
uniform float uBeamX;
uniform vec4 uSurface;
uniform float uRadius;
uniform vec3 uIntro;
uniform vec4 uPour;
uniform vec2 uRun;
uniform vec4 uLens;
uniform sampler2D uReveal;
uniform vec4 uRevealMap;
uniform vec2 uRevealInfo;
uniform float uAtmosphere;
uniform vec4 uAmount;
uniform vec4 uShape;
uniform vec4 uExtra;
uniform float uTheme;
uniform vec3 uTint[16];

#define BEAM uTint[0]
#define LEFT uTint[1]
#define RIGHT uTint[2]
#define CYAN uTint[3]
#define PINK uTint[4]
#define LILAC uTint[5]
#define SKY uTint[6]
#define PURPLE uTint[7]
#define DEEP uTint[8]
#define MIST uTint[9]
#define NAVY uTint[10]
#define WARM uTint[11]
#define EMBER uTint[12]
#define WHITE uTint[13]
#define HAZE uTint[14]
#define LAVENDER uTint[15]

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

float sq(float x) {
  return x * x;
}

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

vec3 spill(float e, float fall, float strength, float front, float t, out vec3 glow) {
  glow = vec3(0.0);
  if (strength < 0.0005) return vec3(0.0);
  float f = max(fall, 0.0);
  float d = max(e, 0.0);
  float u = d / (6.0 + 0.28 * f);
  float start = smoothstep(-6.0, 12.0, fall);
  float fade = exp(-sq(max(f - 125.0, 0.0) / 40.0));
  float streak = 0.88 + 0.24 * noise(vec2(u * 6.0, f / 22.0 - t * 1.7));
  float bright = pow(strength, 1.5);
  float soft = sqrt(strength);
  float warmth = smoothstep(90.0, 130.0, f);
  vec3 coreK = mix(WHITE, WARM, warmth * exp(-d / 9.0));
  float core = mix(9.0, 2.6, warmth) * exp(-sq(d / (3.5 + 0.04 * f))) * exp(-sq(max(f - 130.0, 0.0) / 38.0));
  float wall = 24.0 * exp(-sq(d / 1.1)) * exp(-sq(max(f - 100.0, 0.0) / 30.0));
  float bandCenter = 0.7 - 0.3 * smoothstep(30.0, 110.0, f);
  float offset = u - bandCenter;
  float decay = (1.05 - bandCenter) / 1.31;
  float profile = offset < 0.0 ? exp(-sq(offset / 0.3)) : exp(-offset / decay);
  profile *= 1.0 - smoothstep(1.0, 1.4, u);
  vec3 bandA = mix(CYAN, PINK, smoothstep(50.0, 75.0, f));
  bandA = mix(bandA, LILAC, smoothstep(100.0, 125.0, f));
  vec3 bandB = mix(SKY, PURPLE, smoothstep(50.0, 75.0, f));
  vec3 fanK = mix(bandA, bandB, smoothstep(0.06, 0.18, offset));
  fanK = mix(fanK, DEEP, smoothstep(0.22, 0.42, offset));
  vec3 thread = WHITE * wall * bright + coreK * core * streak * bright;
  glow += fanK * 4.5 * profile * fade * streak * bright;
  glow += MIST * 0.7 * exp(-max(u - 1.0, 0.0) / 0.9) * smoothstep(0.7, 1.2, u) * fade * soft;
  glow += EMBER * 0.35 * exp(-sq((f - 165.0) / 22.0)) * exp(-d / 25.0) * bright;
  float lag = u * (6.0 + 0.28 * f) * 0.35;
  float reveal = 1.0 - smoothstep(front - 70.0, front + 8.0, f + lag);
  glow *= start * reveal;
  return thread * start * reveal;
}

vec3 easeLight(vec3 light, float amount) {
  return -log(max(1.0 - amount * (1.0 - exp(-light)), vec3(0.0001)));
}

void main() {
  vec2 frag = vec2(gl_FragCoord.x, uResolution.y * uDpr - gl_FragCoord.y) / uDpr;
  vec2 p = frag / uScale;
  float t = uTime;
  float bx = uBeamX / uScale;
  float sl = uSurface.x / uScale;
  float sy = uSurface.y / uScale;
  float sr = uSurface.z / uScale;
  float sb = uSurface.w / uScale;
  float radius = uRadius / uScale;
  float dx = p.x - bx;
  float adx = abs(dx);
  float h = sy - p.y;
  float hp = max(h, 0.0);
  float above = smoothstep(-0.5, 0.5, h);
  float side = smoothstep(-24.0, 24.0, dx);
  vec3 sideK = mix(mix(LAVENDER, LEFT, smoothstep(40.0, 140.0, adx)), RIGHT, side);
  float beamWidth = uShape.x;
  float flare = uShape.y;
  float spread = 250.0 * uShape.z;
  float reachL = max(bx - sl, 1.0);
  float reachR = max(sr - bx, 1.0);
  float reach = dx < 0.0 ? reachL : reachR;
  float layerLen = clamp(0.29 * reach, 20.0, 100.0) * sqrt(uShape.z);
  float run = uRun.x;
  float runMask = 1.0 - smoothstep(run - 34.0, run + 6.0, adx);
  float bead = exp(-sq((adx - run + 16.0) / (18.0 + 0.04 * run))) * uRun.y;
  float flowMask = (1.0 - smoothstep(0.75 * spread, 1.1 * spread, adx)) * runMask;
  float edgeMask = (1.0 - smoothstep(0.8 * spread, 1.25 * spread, adx)) * runMask;
  float bloom = uIntro.y;
  vec2 center = vec2((sl + sr) * 0.5, (sy + sb) * 0.5);
  vec2 halfSize = vec2((sr - sl) * 0.5, (sb - sy) * 0.5);
  float sd = roundBox(p - center, halfSize, radius);
  float outline = max(sd, 0.0);
  float below = max(p.y - sy - radius, 0.0);
  float hug = smoothstep(-0.5, 0.5, sd) * exp(-sq(below / 14.0));
  float hugWide = smoothstep(-0.5, 0.5, sd) * exp(-sq(below / 40.0));

  vec3 col = vec3(0.0);

  float breathe = 1.0 + uExtra.x * (0.12 * sin(t * 1.5708) + 0.08 * (noise(vec2(t * 0.5, 3.0)) - 0.5));

  float front = uIntro.x / uScale;
  float drop = smoothstep(front + 10.0, front - 110.0, p.y);
  float falling = 1.0 - smoothstep(sy - 24.0, sy, front);
  float top = mix(0.3, 1.0, smoothstep(0.0, 0.3 * sy, p.y));
  float beamCore = 24.0 * exp(-adx / (2.0 * beamWidth));
  float beamHalo = 1.3 * exp(-adx / (6.0 * beamWidth)) + 0.3 * exp(-adx / (22.0 * beamWidth));
  vec3 haloK = mix(BEAM, sideK, exp(-hp / 80.0));
  col += (BEAM * beamCore + haloK * beamHalo) * top * above * drop;
  float head = exp(-sq((p.y - front) / 24.0)) * falling;
  col += mix(WHITE, BEAM, 0.35) * head * (7.0 * exp(-adx / (2.6 * beamWidth)) + 1.0 * exp(-adx / (14.0 * beamWidth)));

  float psi = adx * (outline + 1.0);
  float rise = max(hp - 17.9 * flare, 0.0);
  float skirtAmp = 16.6 * (exp(-sq(rise / (11.8 * flare))) + 0.3 * exp(-rise / (60.0 * flare)));
  float skirtSpread = mix(134.0, 155.0, side) * breathe * flare * flare * mix(0.35, 1.0, min(bloom, 1.0)) * max(bloom, 1.0);
  float skirt = skirtAmp * exp(-psi / skirtSpread) * exp(-sq(adx / (max(layerLen, 60.0 * sqrt(uShape.z)) * 1.48))) * hug;
  col += sideK * skirt * flowMask * min(bloom, 1.0);

  float layer = 12.0 * exp(-adx / layerLen) * exp(-outline / (0.19 * layerLen)) * (1.0 + 0.4 * bead);
  col += sideK * layer * hug * flowMask * min(bloom, 1.0);
  float washMask = smoothstep(sl - 60.0, sl + 6.0, p.x) * (1.0 - smoothstep(sr - 6.0, sr + 45.0, p.x));
  float wash = 1.4 * exp(-adx / 100.0) * exp(-outline / 30.0);
  col += mix(BEAM, sideK, 0.25) * wash * hugWide * washMask * flowMask * min(bloom, 1.0);
  float highWash = 0.7 * exp(-adx / 140.0) * exp(-outline / 60.0);
  col += mix(BEAM, NAVY, 0.5) * highWash * hugWide * washMask * runMask * min(bloom, 1.0);

  float sideSign = dx < 0.0 ? 0.0 : 1.0;
  float along = 0.5 * log((hp + 1.0) / (adx + 1.0));
  float lineScale = 6.0;
  float lp = log(max(psi, 1.0) / (120.0 * flare * flare)) * lineScale;
  float lineIndex = floor(lp) + sideSign * 97.0;
  float wobble = 0.22 * (noise(vec2(lineIndex * 3.7, t * 0.4 + along)) - 0.5);
  float lf = fract(lp + wobble) - 0.5;
  float gradient = lineScale * length(vec2(hp + 1.0, adx)) / max(psi, 1.0) / uScale;
  float halfWidth = max(0.35 * gradient, 0.0001);
  float drawWidth = max(halfWidth, 0.6 * gradient);
  float lineShape = exp(-lf * lf / (drawWidth * drawWidth)) * (halfWidth / drawWidth);
  float lineOn = step(0.3, hash(vec2(lineIndex, 1.3)));
  float lineFlow = smoothstep(0.25, 0.85, noise(vec2(lineIndex * 5.3 + 2.0, along * 3.0 + t * 1.1)));
  float flareArea = 120.0 * flare * flare;
  float lineEnvelope = smoothstep(0.85 * flareArea, 1.4 * flareArea, psi) * (1.0 - smoothstep(3.2 * flareArea, 7.5 * flareArea, psi));
  lineEnvelope *= exp(-adx / (layerLen * 1.5)) * hug * flowMask * (1.0 - smoothstep(35.0 * flare, 80.0 * flare, hp));
  float lineBright = mix(0.35, 1.0, hash(vec2(lineIndex, 4.0)));
  col += mix(sideK, WHITE, 0.6) * lineShape * lineOn * lineFlow * lineEnvelope * lineBright * 2.6 * uAmount.w * min(bloom, 1.0);

  float edgeGlow = 22.8 * exp(-sq(adx / (150.0 * uShape.z))) * edgeMask * (1.0 + 0.9 * bead);
  float onTop = 1.0 - smoothstep(sy + radius, sy + radius + 10.0, p.y);
  float edgeLine = (exp(-sq(max(sd, 0.0) / 0.9)) + 0.12 * exp(-max(sd, 0.0) / 3.0)) * edgeGlow * onTop;
  col += mix(sideK, WHITE, 0.6) * edgeLine * min(bloom, 1.0);

  float pour = uShape.w;
  float baseline = exp(-sq(130.0 / 150.0));
  float strengthR = exp(-sq(reachR / (150.0 * uShape.z))) * (1.0 - smoothstep(0.8 * spread, 1.25 * spread, reachR)) / baseline * pour;
  float strengthL = exp(-sq(reachL / (150.0 * uShape.z))) * (1.0 - smoothstep(0.8 * spread, 1.25 * spread, reachL)) / baseline * pour;
  float fallY = p.y - sy - 0.3 * radius;
  float rightHalf = smoothstep(center.x - 4.0, center.x + 4.0, p.x);
  float haloR = exp(-length(p - vec2(sr - 0.3 * radius, sy + 0.3 * radius)) / 40.0) * sqrt(strengthR);
  float haloL = exp(-length(p - vec2(sl + 0.3 * radius, sy + 0.3 * radius)) / 40.0) * sqrt(strengthL);
  vec3 glowR;
  vec3 glowL;
  col += spill(sd, fallY, strengthR, uPour.y, t, glowR) * rightHalf;
  col += spill(sd, fallY, strengthL, uPour.x, t, glowL) * (1.0 - rightHalf);
  col += easeLight(glowR * rightHalf + NAVY * 0.9 * haloR, uPour.w);
  col += easeLight(glowL * (1.0 - rightHalf) + NAVY * 0.9 * haloL, uPour.z);

  vec2 toLens = frag - uLens.xy;
  float lens = exp(-dot(toLens, toLens) / sq(uLens.z)) * uLens.w;
  col *= 1.0 + 0.35 * lens * hug;
  float fogAmount = uAmount.y * uAtmosphere;
  float near = exp(-adx / 150.0);
  float envelope = near * (0.3 + 0.4 * exp(-hp / 50.0) + 1.2 * exp(-p.y / 120.0));
  if (fogAmount > 0.001 && h > -2.0 && envelope * max(0.25, 6.0 * exp(-adx / 50.0)) > 0.002) {
    vec2 fq = vec2(dx / 1.7, h) / 85.0 + vec2(t * 0.012, -t * 0.03) + uExtra.zw;
    vec2 fw = vec2(fbm(fq * 1.3 + vec2(1.7, 9.2) + t * 0.03), fbm(fq * 1.3 + vec2(8.3, 2.8) - t * 0.025));
    float cloud = fbm(fq + 1.4 * fw);
    float density = smoothstep(0.5, 0.78, cloud);
    float lit = exp(-adx / 50.0);
    float fogMask = smoothstep(-2.0, 20.0, h);
    float reached = smoothstep(front + 80.0, front - 40.0, p.y);
    vec3 fog = (HAZE * 0.45 + BEAM * 6.0 * lit * reached) * density * envelope * fogMask;
    float surfaceLit = exp(-adx / (layerLen * 1.3)) * exp(-outline / 28.0) * hugWide * flowMask * washMask * min(bloom, 1.0);
    fog += sideK * 2.2 * surfaceLit * (smoothstep(0.38, 0.72, cloud) - 0.35) * fogMask;
    float smoke = smoothstep(0.3, 0.75, cloud);
    fog += BEAM * 0.35 * exp(-adx / (22.0 * beamWidth)) * (0.35 + 0.9 * smoke) * fogMask * top * drop;
    col += fog * fogAmount * (1.0 + 1.2 * lens) * mix(1.0, 0.45, uTheme);
  }

  if (uRevealInfo.y > 0.001 && uLens.w > 0.002) {
    vec2 toReveal = frag - uLens.xy;
    float reveal = exp(-dot(toReveal, toReveal) / sq(uRevealInfo.x)) * uLens.w;
    vec2 uv = frag * uRevealMap.xy + uRevealMap.zw;
    float onImage = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    vec4 ui = texture(uReveal, uv);
    float ink = max(ui.r, max(ui.g, ui.b)) * onImage;
    float lit = clamp(col.b * 0.9, 0.0, 1.0) * (1.0 - smoothstep(0.9, 2.2, col.b));
    float clearance = smoothstep(60.0 * sqrt(beamWidth), 150.0 * sqrt(beamWidth), adx);
    col += mix(BEAM, WHITE, 0.4) * ink * reveal * lit * clearance * uRevealInfo.y * 2.2;
  }

  float haze = col.b;
  float dotGrid = 1.0 - smoothstep(0.16, 0.32, length(fract(frag / 3.0) - 0.5));
  col += BEAM * dotGrid * clamp(haze, 0.0, 1.5) * (1.0 - smoothstep(1.5, 4.0, haze)) * (0.18 + 0.3 * lens) * uExtra.y;
  if (lens > 0.002) {
    vec2 drift = frag - vec2(0.0, t * 14.0);
    vec2 sparkCell = floor(drift / 7.0);
    vec2 sparkPos = (sparkCell + 0.2 + 0.6 * vec2(hash(sparkCell + 5.1), hash(sparkCell + 2.3))) * 7.0;
    float sparkDist = length(drift - sparkPos);
    float sparkOn = step(0.8, hash(sparkCell + 8.8));
    float sparkTwinkle = 0.5 + 0.5 * sin(t * 5.0 + hash(sparkCell + 3.7) * 6.283);
    col += WHITE * exp(-sparkDist * sparkDist / 0.35) * sparkOn * sparkTwinkle * lens * clamp(haze * 1.5, 0.0, 1.0) * 1.6 * uAmount.z;
  }

  float dustAmount = uAmount.z;
  if (dustAmount > 0.001) {
    float dustLp = log(max(psi, 1.0) / (120.0 * flare * flare)) * 2.2;
    vec2 flowCell = vec2(dustLp / 1.1, (along + t * 0.22) / 0.06);
    vec2 cellId = floor(flowCell) + vec2(sideSign * 131.0, 0.0);
    vec2 cellJitter = vec2(hash(cellId + 1.7), hash(cellId + 8.3));
    vec2 particleFlow = (floor(flowCell) + 0.1 + cellJitter * 0.8) * vec2(1.1, 0.06);
    float particlePsi = 120.0 * flare * flare * exp(particleFlow.x / 2.2);
    float particleAlong = particleFlow.y - t * 0.22;
    float particleX = sqrt(particlePsi * exp(-2.0 * particleAlong)) - 1.0;
    float particleH = sqrt(particlePsi * exp(2.0 * particleAlong)) - 1.0;
    float particleDist = length(vec2(adx - particleX, hp - particleH)) * uScale;
    float particleOn = step(0.62, hash(cellId + 3.1));
    float particleTwinkle = 0.5 + 0.5 * sin(t * 5.0 + hash(cellId + 9.2) * 6.283);
    float dustZone = exp(-sq(log(max(psi, 1.0) / (200.0 * flare * flare)) / 0.55)) * hug * flowMask * smoothstep(0.0, 6.0, outline);
    col += WHITE * exp(-particleDist * particleDist / 0.3) * particleOn * particleTwinkle * dustZone * 3.0 * dustAmount * min(bloom, 1.0);

    vec2 glitterCell = vec2(dx / 3.0, (p.y - t * 26.0) / 9.0);
    vec2 glitterId = floor(glitterCell);
    vec2 glitterJitter = vec2(hash(glitterId + 4.4), hash(glitterId + 2.9));
    vec2 glitterPos = (glitterId + 0.15 + glitterJitter * 0.7) * vec2(3.0, 9.0);
    float glitterDist = length(vec2(dx, p.y - t * 26.0) - glitterPos) * uScale;
    float glitterOn = step(0.7, hash(glitterId + 6.6));
    float glitterTwinkle = 0.5 + 0.5 * sin(t * 6.0 + hash(glitterId + 1.1) * 6.283);
    float glitterZone = exp(-adx / (5.0 * beamWidth)) * smoothstep(1.5, 4.0, adx / beamWidth) * above * smoothstep(25.0, 70.0, hp) * top * drop;
    col += WHITE * exp(-glitterDist * glitterDist / 0.25) * glitterOn * glitterTwinkle * glitterZone * 2.2 * dustAmount * uAtmosphere;
  }

  col *= uAmount.x * (1.0 + uIntro.z * 0.9 * exp(-length(vec2(dx, h * 1.6)) / 70.0));
  col *= smoothstep(-0.75, 0.25, sd * uScale);

  vec3 emit = 1.0 - exp(-col * mix(1.0, 0.6, uTheme));
  float peak = max(emit.r, max(emit.g, emit.b));
  if (uTheme > 0.5) {
    float low = min(emit.r, min(emit.g, emit.b));
    float chroma = peak - low;
    vec3 hue = (emit - low) / max(chroma, 0.0001);
    float alpha = clamp(pow(chroma, 1.35) * 1.3, 0.0, 1.0) * 0.9;
    outColor = vec4((hue * 0.82 + 0.06) * alpha, alpha);
  } else {
    outColor = vec4(emit, peak);
  }
}`;

const TINTS = [
  [0, 1],
  [-11.5, 0.77],
  [9.5, 0.95],
  [-53.5, 0.79],
  [39.5, 0.77],
  [16, 0.81],
  [-16.3, 0.92],
  [13.3, 0.96],
  [3, 1.01],
  [1, 0.68],
  [1, 1.15],
  [142.5, 0.51],
  [113.6, 0.28],
  [-7.5, 0.13],
  [-2.7, 0.32],
  [7.5, 0.81]
];

const BASE_SATURATION = 0.78;
const MAX_RENDER_DIM = 2048;
const INTRO_DROP = 1.25;
const INTRO_END = 5;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const easeOut = x => 1 - Math.pow(1 - clamp(x, 0, 1), 3);
const spring = time => {
  const omega = 8;
  const zeta = 0.62;
  const damped = omega * Math.sqrt(1 - zeta * zeta);
  return (
    1 - Math.exp(-zeta * omega * time) * (Math.cos(damped * time) + ((zeta * omega) / damped) * Math.sin(damped * time))
  );
};

const toHsv = ([r, g, b]) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;
  if (delta > 0) {
    if (max === r) hue = ((g - b) / delta) % 6;
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
  }
  return [(hue * 60 + 360) % 360, max > 0 ? delta / max : 0];
};

const fromHsv = (hue, saturation) => {
  const h = (((hue % 360) + 360) % 360) / 60;
  const c = saturation;
  const x = c * (1 - Math.abs((h % 2) - 1));
  const m = 1 - c;
  const [r, g, b] =
    h < 1 ? [c, x, 0] : h < 2 ? [x, c, 0] : h < 3 ? [0, c, x] : h < 4 ? [0, x, c] : h < 5 ? [x, 0, c] : [c, 0, x];
  return [r + m, g + m, b + m];
};

const buildTints = rgb => {
  const [hue, saturation] = toHsv(rgb);
  const strength = saturation / BASE_SATURATION;
  const data = new Float32Array(TINTS.length * 3);
  TINTS.forEach(([shift, scale], index) => {
    data.set(fromHsv(hue + shift, clamp(BASE_SATURATION * scale * strength, 0, 1)), index * 3);
  });
  return data;
};

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
};

const link = (gl, vertexSource, fragmentSource) => {
  const vertex = compile(gl, gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (gl.getProgramParameter(program, gl.LINK_STATUS)) return program;
  gl.deleteProgram(program);
  return null;
};

const locate = (gl, program, names) => {
  const result = {};
  for (const name of names) result[name] = gl.getUniformLocation(program, name);
  return result;
};

export const LaserFlow = ({
  surfaceRef,
  beamPosition = 0.6,
  surfaceLevel = 1,
  color = '#3847ff',
  intensity = 1.8,
  beamWidth = 1.5,
  flare = 1.5,
  spread = 1.5,
  spill = 1,
  fog = 0.2,
  dust = 1.6,
  streaks = 1.5,
  dots = 1,
  pulse = 1.5,
  speed = 1.5,
  seed = 3,
  mouseInteraction = true,
  revealImage,
  revealRadius = 220,
  revealOpacity = 0.6,
  intro = true,
  theme = 'dark',
  paused = false,
  dpr,
  ...rest
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const wakeRef = useRef(null);
  const settings = {
    surfaceRef,
    beamPosition: clamp(beamPosition, 0, 1),
    surfaceLevel: clamp(surfaceLevel, 0, 1),
    color: String(color),
    intensity: Math.max(0, intensity),
    beamWidth: clamp(beamWidth, 0.2, 5),
    flare: clamp(flare, 0.2, 4),
    spread: clamp(spread, 0.1, 4),
    spill: Math.max(0, spill),
    fog: Math.max(0, fog),
    dust: Math.max(0, dust),
    streaks: Math.max(0, streaks),
    dots: Math.max(0, dots),
    pulse: Math.max(0, pulse),
    speed,
    seed,
    mouseInteraction,
    revealImage,
    revealRadius: Math.max(1, revealRadius),
    revealOpacity: clamp(revealOpacity, 0, 1),
    intro,
    theme,
    paused,
    dpr
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const gl = canvas?.getContext('webgl2', {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false
    });
    if (!container || !canvas || !gl) return undefined;

    const program = link(gl, VERTEX, FRAGMENT);
    if (!program) return undefined;

    const uniforms = locate(gl, program, [
      'uResolution',
      'uDpr',
      'uScale',
      'uTime',
      'uBeamX',
      'uSurface',
      'uRadius',
      'uIntro',
      'uPour',
      'uRun',
      'uLens',
      'uReveal',
      'uRevealMap',
      'uRevealInfo',
      'uAtmosphere',
      'uAmount',
      'uShape',
      'uExtra',
      'uTheme',
      'uTint'
    ]);

    const vao = gl.createVertexArray();
    const buffer = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const positionLocation = gl.getAttribLocation(program, 'aPosition');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    const revealTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, revealTexture);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 0, 0]));
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const probe = document.createElement('canvas');
    probe.width = 1;
    probe.height = 1;
    const probeContext = probe.getContext('2d', { willReadFrequently: true });
    const reduce = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
    const state = {
      time: 0,
      introTime: settingsRef.current.intro && !reduce ? 0 : INTRO_END,
      width: 1,
      height: 1,
      ratio: 1,
      colorKey: '',
      tints: buildTints([0.22, 0.28, 1]),
      observed: null,
      pointer: { x: 0, y: 0, inside: false },
      lens: { x: 0, y: 0, vx: 0, vy: 0, strength: 0, placed: false },
      reveal: { src: '', ready: false, width: 1, height: 1, image: null }
    };
    let raf = 0;
    let last = 0;
    let visible = true;
    let alive = true;

    const toRgb = value => {
      if (!probeContext) return [0.22, 0.28, 1];
      probeContext.clearRect(0, 0, 1, 1);
      probeContext.fillStyle = '#3847ff';
      probeContext.fillStyle = value;
      probeContext.fillRect(0, 0, 1, 1);
      const [r, g, b] = probeContext.getImageData(0, 0, 1, 1).data;
      return [r / 255, g / 255, b / 255];
    };

    const resolveColor = s => {
      if (s.color === state.colorKey) return;
      state.colorKey = s.color;
      state.tints = buildTints(toRgb(s.color));
    };

    const resolveReveal = s => {
      const src = s.revealImage ? String(s.revealImage) : '';
      const reveal = state.reveal;
      if (src === reveal.src) return;
      reveal.src = src;
      reveal.ready = false;
      if (reveal.image) reveal.image.onload = null;
      if (!src) return;
      const image = new Image();
      image.crossOrigin = 'anonymous';
      image.decoding = 'async';
      image.onload = () => {
        if (!alive || reveal.src !== src) return;
        const width = image.naturalWidth || image.width || 1;
        const height = image.naturalHeight || image.height || 1;
        const scale = Math.min(1, 2048 / Math.max(width, height));
        const sheet = document.createElement('canvas');
        sheet.width = Math.max(1, Math.round(width * scale));
        sheet.height = Math.max(1, Math.round(height * scale));
        sheet.getContext('2d')?.drawImage(image, 0, 0, sheet.width, sheet.height);
        gl.bindTexture(gl.TEXTURE_2D, revealTexture);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, sheet);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        reveal.width = sheet.width;
        reveal.height = sheet.height;
        reveal.ready = true;
        wakeRef.current?.();
      };
      image.src = src;
      reveal.image = image;
    };

    const measure = (s, width, height) => {
      const element = s.surfaceRef?.current ?? null;
      if (element !== state.observed) {
        if (state.observed) resizeObserver.unobserve(state.observed);
        if (element) resizeObserver.observe(element);
        state.observed = element;
      }
      if (element) {
        const box = container.getBoundingClientRect();
        const rect = element.getBoundingClientRect();
        if (rect.width > 0) {
          const computed = getComputedStyle(element);
          const radius = Math.max(
            parseFloat(computed.borderTopLeftRadius) || 0,
            parseFloat(computed.borderTopRightRadius) || 0
          );
          return {
            left: rect.left - box.left,
            top: rect.top - box.top,
            right: rect.right - box.left,
            bottom: rect.bottom - box.top,
            radius: Math.min(radius, rect.width / 2, rect.height / 2),
            real: true
          };
        }
      }
      return {
        left: -width * 2,
        top: s.surfaceLevel * height,
        right: width * 3,
        bottom: height * 3,
        radius: 0,
        real: false
      };
    };

    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const s = settingsRef.current;
      const baseDpr = Math.min(s.dpr || window.devicePixelRatio || 1, 2);
      const longest = Math.max(width, height) * baseDpr;
      const ratio = longest > MAX_RENDER_DIM ? (baseDpr * MAX_RENDER_DIM) / longest : baseDpr;
      const pixelWidth = Math.max(1, Math.round(width * ratio));
      const pixelHeight = Math.max(1, Math.round(height * ratio));
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      state.width = width;
      state.height = height;
      state.ratio = canvas.width / width;
      render();
    };

    const render = () => {
      const s = settingsRef.current;
      resolveColor(s);
      const { width, height } = state;
      const scale = Math.max(0.2, Math.min(width / 585, height / 507));
      let surface = measure(s, width, height);
      let beamX = s.beamPosition * width;
      if (surface.real) {
        const margin = surface.radius + 6;
        if (beamX >= surface.left && beamX <= surface.right) {
          beamX = clamp(beamX, surface.left + margin, surface.right - margin);
        } else {
          surface = { left: -width * 2, top: height, right: width * 3, bottom: height * 3, radius: 0, real: false };
        }
      }
      const startY = -0.15 * height;
      const span = surface.top - startY + 0.3 * height;
      const it = state.introTime;
      const settled = it >= INTRO_END;
      const front = settled ? surface.top + 0.3 * height : startY + span * Math.pow(clamp(it / INTRO_DROP, 0, 1), 1.3);
      const impact = INTRO_DROP * Math.pow(Math.max(0, surface.top - startY) / span, 1 / 1.3);
      const tau = it - impact;
      const bloom = settled ? 1 : tau <= 0 ? 0 : spring(tau);
      const flash = settled || tau <= 0 ? 0 : Math.exp(-tau / 0.35) * (1 - Math.exp(-tau / 0.05));
      const runRange = s.spread * 250 * 1.3 + 80;
      const runFront = settled ? 100000 : tau <= 0 ? -40 : runRange * (1 - Math.exp(-1.15 * tau));
      const beadStrength = settled || tau <= 0 ? 0 : Math.exp(-1.15 * tau) * (1 - Math.exp(-tau / 0.08));
      const pour = reach => {
        if (settled) return [1000, 1];
        if (tau <= 0) return [-reach, 0];
        const target = Math.min(reach, runRange * 0.97);
        const arrival = -Math.log(1 - target / runRange) / 1.15;
        const elapsed = tau - arrival;
        const ease = clamp((elapsed + 0.15) / 0.8, 0, 1);
        const fill = ease * ease * ease * (ease * (ease * 6 - 15) + 10);
        if (elapsed <= 0) return [runFront - target, fill];
        const speed = 1.15 * (runRange - target);
        return [speed * elapsed + 260 * elapsed * elapsed, fill];
      };
      const [frontL, fillL] = pour((beamX - surface.left) / scale);
      const [frontR, fillR] = pour((surface.right - beamX) / scale);
      const atmosphere = settled
        ? 1
        : tau <= 0
          ? 0.3 * easeOut(it / INTRO_DROP)
          : 0.3 + 0.7 * (1 - Math.exp(-1.3 * tau));
      const seedValue = Number(s.seed) || 0;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(uniforms.uResolution, width, height);
      gl.uniform1f(uniforms.uDpr, state.ratio);
      gl.uniform1f(uniforms.uScale, scale);
      gl.uniform1f(uniforms.uTime, state.time);
      gl.uniform1f(uniforms.uBeamX, beamX);
      gl.uniform4f(uniforms.uSurface, surface.left, surface.top, surface.right, surface.bottom);
      gl.uniform1f(uniforms.uRadius, surface.radius);
      gl.uniform3f(uniforms.uIntro, front, bloom, flash);
      gl.uniform4f(uniforms.uPour, frontL, frontR, fillL, fillR);
      gl.uniform2f(uniforms.uRun, runFront, beadStrength);
      gl.uniform4f(uniforms.uLens, state.lens.x, state.lens.y, 95 * scale, state.lens.strength);
      resolveReveal(s);
      const { reveal } = state;
      const cover = Math.max(width / reveal.width, height / reveal.height);
      const coverWidth = reveal.width * cover;
      const coverHeight = reveal.height * cover;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, revealTexture);
      gl.uniform1i(uniforms.uReveal, 0);
      gl.uniform4f(
        uniforms.uRevealMap,
        1 / coverWidth,
        1 / coverHeight,
        (coverWidth - width) / 2 / coverWidth,
        (coverHeight - height) / 2 / coverHeight
      );
      gl.uniform2f(uniforms.uRevealInfo, s.revealRadius, reveal.ready ? s.revealOpacity : 0);
      gl.uniform1f(uniforms.uAtmosphere, atmosphere);
      gl.uniform4f(uniforms.uAmount, s.intensity, s.fog, s.dust, s.streaks);
      gl.uniform4f(uniforms.uShape, s.beamWidth, s.flare, s.spread, s.spill);
      gl.uniform4f(uniforms.uExtra, s.pulse, s.dots, 34.34 + seedValue * 7.31, 11.58 + seedValue * 3.17);
      gl.uniform1f(uniforms.uTheme, s.theme === 'light' ? 1 : 0);
      gl.uniform3fv(uniforms.uTint, state.tints);
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null);
    };

    const frame = now => {
      raf = 0;
      if (!alive || !visible || document.hidden) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const moving = !s.paused && !reduce;
      if (moving) state.time += dt * s.speed;
      const introducing = state.introTime < INTRO_END;
      if (introducing) state.introTime = Math.min(INTRO_END, state.introTime + dt);

      const { pointer, lens } = state;
      const active = s.mouseInteraction && pointer.inside && !reduce;
      if (active && !lens.placed) {
        lens.x = pointer.x;
        lens.y = pointer.y;
        lens.vx = 0;
        lens.vy = 0;
        lens.placed = true;
      }
      const ax = 120 * (pointer.x - lens.x) - 19 * lens.vx;
      const ay = 120 * (pointer.y - lens.y) - 19 * lens.vy;
      lens.vx += ax * dt;
      lens.vy += ay * dt;
      lens.x += lens.vx * dt;
      lens.y += lens.vy * dt;
      const goal = active ? 1 : 0;
      lens.strength += (goal - lens.strength) * (1 - Math.exp(-dt / (goal > lens.strength ? 0.3 : 0.55)));
      if (lens.strength < 0.001 && !active) lens.placed = false;

      render();
      const settling =
        Math.abs(state.lens.strength - (s.mouseInteraction && state.pointer.inside ? 1 : 0)) > 0.002 ||
        Math.hypot(state.lens.vx, state.lens.vy) > 0.5;
      if (moving || introducing || settling) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf && alive && visible && !document.hidden) raf = requestAnimationFrame(frame);
    };

    const onPointerMove = event => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      state.pointer.x = x;
      state.pointer.y = y;
      state.pointer.inside = x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      wake();
    };

    const onPointerLeave = () => {
      state.pointer.inside = false;
      wake();
    };

    const onVisibility = () => {
      last = 0;
      wake();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const intersection = new IntersectionObserver(entries => {
      visible = entries.some(entry => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(container);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    document.documentElement.addEventListener('pointerleave', onPointerLeave);
    document.addEventListener('visibilitychange', onVisibility);
    resize();
    wake();

    wakeRef.current = () => {
      if (!raf) render();
      wake();
    };

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      document.documentElement.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
      gl.deleteTexture(revealTexture);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  const { className = '', ...attributes } = rest;

  return (
    <div ref={containerRef} className={`laser-flow-container${className ? ` ${className}` : ''}`} {...attributes}>
      <canvas ref={canvasRef} className="laser-flow-canvas" aria-hidden="true" />
    </div>
  );
};

export default LaserFlow;

```

===============================================================================
FILE: src/components/PageHero.jsx
===============================================================================

```jsx
import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";

const PageHero = ({ title, subtitle, badge, breadcrumbs = [] }) => {
  return (
    <div className="page-hero-wrapper">
      <style>{`
        .page-hero-wrapper {
          background-color: var(--primary);
          color: var(--ivory);
          padding: 70px 5% 55px;
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--hairline);
        }

        .page-hero-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .hero-breadcrumb {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 8px;
          font-size: 13px;
          color: rgba(251, 248, 241, 0.7);
          margin-bottom: 24px;
        }

        .hero-breadcrumb a {
          color: var(--accent);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.2s ease;
        }

        .hero-breadcrumb a:hover {
          color: var(--ivory);
          text-decoration: underline;
        }

        .hero-breadcrumb-separator {
          font-size: 9px;
          color: rgba(251, 248, 241, 0.4);
        }

        /* Heritage Serif Kicker Mark */
        .page-hero-kicker {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: 14px;
          color: var(--accent);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .page-hero-kicker::before,
        .page-hero-kicker::after {
          content: "";
          display: inline-block;
          width: 24px;
          height: 1px;
          background-color: var(--accent);
        }

        .page-hero-title {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 42px;
          font-weight: 600;
          color: var(--ivory);
          margin-bottom: 14px;
          line-height: 1.18;
          letter-spacing: -0.01em;
        }

        .page-hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 17px;
          color: rgba(251, 248, 241, 0.85);
          max-width: 750px;
          line-height: 1.65;
          font-weight: 400;
        }

        @media (max-width: 768px) {
          .page-hero-wrapper {
            padding: 45px 5% 40px;
          }
          .page-hero-title {
            font-size: 30px;
          }
          .page-hero-subtitle {
            font-size: 15px;
          }
        }
      `}</style>

      <div className="page-hero-container">
        {/* Breadcrumb Navigation */}
        <div className="hero-breadcrumb">
          <Link to="/">Home</Link>
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={index}>
              <FaChevronRight className="hero-breadcrumb-separator" />
              {item.path ? (
                <Link to={item.path}>{item.label}</Link>
              ) : (
                <span style={{ color: "var(--ivory)" }}>{item.label}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {badge && <div className="page-hero-kicker">{badge}</div>}

        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default PageHero;
```

===============================================================================
FILE: src/components/ProtectedRoute.jsx
===============================================================================

```jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("adminToken");

  if (!token) {
    return <Navigate to="/investnowlogin" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
```

===============================================================================
FILE: src/components/ScrollToTop.jsx
===============================================================================

```jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
```

===============================================================================
FILE: src/Guestlayout/GuestFotter.jsx
===============================================================================

```jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUserTie,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

const GuestFooter = () => {
  return (
    <footer className="investnow-footer">
      <style>{`
        .investnow-footer {
          background-color: var(--primary);
          color: var(--ivory);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          padding: 70px 5% 30px;
          border-top: 3px solid var(--accent);
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1.2fr 1.2fr;
          gap: 28px;
          margin-bottom: 40px;
        }

        /* Hairline Column Divider */
        .footer-col {
          border-right: 1px solid rgba(255, 255, 255, 0.1);
          padding-right: 18px;
        }

        .footer-col:last-child {
          border-right: none;
          padding-right: 0;
        }

        /* Serif-Italic Heritage Section Labels */
        .footer-col-title {
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: 16.5px;
          font-weight: 500;
          color: var(--accent);
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .footer-col-title::after {
          content: "";
          display: inline-block;
          flex-grow: 1;
          height: 1px;
          background: rgba(212, 175, 55, 0.3);
          margin-left: 8px;
        }

        .footer-brand-name {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 21px;
          font-weight: 700;
          color: var(--accent);
          letter-spacing: -0.01em;
          margin-bottom: 2px;
        }

        .footer-brand-sub {
          font-size: 11.5px;
          color: var(--ivory);
          font-weight: 500;
          margin-bottom: 14px;
          display: block;
          opacity: 0.9;
        }

        .footer-tagline {
          font-size: 13.5px;
          color: rgba(251, 248, 241, 0.8);
          line-height: 1.6;
          margin-bottom: 16px;
        }

        .footer-gst {
          font-size: 11.5px;
          color: var(--accent);
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid rgba(212, 175, 55, 0.3);
          padding: 5px 10px;
          border-radius: 4px;
          display: inline-block;
          font-weight: 600;
          margin-bottom: 16px;
        }

        /* Social Media Icons */
        .footer-socials {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 8px;
        }

        .social-icon-link {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: 1px solid rgba(212, 175, 55, 0.5);
          color: var(--accent);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          text-decoration: none;
          transition: all 0.25s ease;
          background: rgba(212, 175, 55, 0.08);
        }

        .social-icon-link:hover {
          background: var(--accent);
          color: var(--primary);
          border-color: var(--accent);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-links a {
          color: rgba(251, 248, 241, 0.85);
          text-decoration: none;
          font-size: 13.5px;
          transition: color 0.2s ease, padding-left 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--accent);
          padding-left: 4px;
        }

        .footer-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: rgba(251, 248, 241, 0.85);
          line-height: 1.55;
          margin-bottom: 12px;
        }

        .footer-contact-icon {
          color: var(--accent);
          font-size: 13px;
          margin-top: 3px;
          flex-shrink: 0;
        }

        .footer-compliance-box {
          background: rgba(0, 0, 0, 0.18);
          border: 1px solid rgba(212, 175, 55, 0.25);
          padding: 18px 22px;
          border-radius: 6px;
          margin-bottom: 25px;
          font-size: 12.5px;
          color: rgba(251, 248, 241, 0.75);
          line-height: 1.6;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
          font-size: 12.5px;
          color: rgba(251, 248, 241, 0.65);
        }

        .footer-bottom-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .footer-bottom-links a {
          color: rgba(251, 248, 241, 0.65);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-bottom-links a:hover {
          color: var(--accent);
        }

        /* Mobile Screen Compact Footer Rules */
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 28px;
          }
          .footer-col {
            border-right: none;
            padding-right: 0;
          }
        }

        @media (max-width: 650px) {
          .investnow-footer {
            padding: 38px 5% 20px;
          }
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px 14px;
            margin-bottom: 22px;
          }
          .footer-col {
            border-right: none;
            padding-right: 0;
          }
          .footer-col:first-child {
            grid-column: span 2;
            border-bottom: 1px solid rgba(255, 255, 255, 0.12);
            padding-bottom: 16px;
            margin-bottom: 4px;
          }
          .footer-col-title {
            font-size: 14.5px;
            margin-bottom: 10px;
          }
          .footer-links {
            gap: 7px;
          }
          .footer-links a {
            font-size: 12.5px;
          }
          .footer-contact-item {
            font-size: 12px;
            margin-bottom: 8px;
          }
          .footer-tagline {
            font-size: 12.5px;
            margin-bottom: 12px;
            line-height: 1.5;
          }
          .footer-compliance-box {
            padding: 14px;
            margin-bottom: 18px;
            font-size: 11px;
            line-height: 1.5;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            padding-top: 14px;
            gap: 10px;
            font-size: 11.5px;
          }
          .footer-bottom-links {
            justify-content: center;
            gap: 10px;
          }
        }
      `}</style>

      <div className="footer-container">
        <div className="footer-grid">
          {/* Column 1: Brand Info & Social Media */}
          <div className="footer-col">
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
              <img
                src="/logo.png"
                alt="INVESTNOW Logo"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "contain",
                  background: "#FFFFFF",
                  padding: "4px",
                  border: "2px solid var(--accent)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
                }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo.jpeg";
                }}
              />
              <div>
                <div className="footer-brand-name">INVESTNOW</div>
                <span className="footer-brand-sub">Financial Services Pvt. Ltd.</span>
              </div>
            </div>
            <p className="footer-tagline">
              Your Trusted Partner in Wealth Growth & Protection. Providing structured, ethical, and goal-oriented financial consultation.
            </p>
            <div className="footer-gst">
              GSTIN: 29AAICI5060P1ZX
            </div>

            {/* Social Media Icons */}
            <div className="footer-socials">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://wa.me/917975347138" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <div className="footer-col-title">Navigation</div>
            <ul className="footer-links">
              <li><Link to="/">Home Overview</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Services Offered</Link></li>
              <li><Link to="/financial-goals">Financial Goals</Link></li>
              <li><Link to="/chalukya-developers">Chalukya Developers</Link></li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="footer-col">
            <div className="footer-col-title">Core Solutions</div>
            <ul className="footer-links">
              <li><Link to="/services#mutual-funds">Mutual Funds & SIPs</Link></li>
              <li><Link to="/services#insurance">Insurance Protection</Link></li>
              <li><Link to="/services#loans">Loans & Financing</Link></li>
              <li><Link to="/services#wealth">Wealth Management</Link></li>
              <li><Link to="/services#stocks">Stocks & Equity</Link></li>
            </ul>
          </div>

          {/* Column 4: Compliance Links */}
          <div className="footer-col">
            <div className="footer-col-title">Legal & Trust</div>
            <ul className="footer-links">
              <li><Link to="/trust-compliance">Trust & Compliance</Link></li>
              <li><Link to="/regulatory-information">Regulatory Info</Link></li>
              <li><Link to="/risk-disclosures">Risk Notices</Link></li>
              <li><Link to="/transparency">Transparency</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-and-conditions">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Column 5: Corporate Office Contact */}
          <div className="footer-col">
            <div className="footer-col-title">Corporate Office</div>
            <div className="footer-contact-item">
              <FaMapMarkerAlt className="footer-contact-icon" />
              <span>INVESTNOW FINANCIAL SERVICES PVT. LTD.<br />Kundapura, Karnataka – 576201</span>
            </div>
            <div className="footer-contact-item">
              <FaPhoneAlt className="footer-contact-icon" />
              <span>+91 79753 47138<br />+91 99802 92567</span>
            </div>
            <div className="footer-contact-item">
              <FaEnvelope className="footer-contact-icon" />
              <span>meetinvenstnow@gmail.com</span>
            </div>
            <div className="footer-contact-item">
              <FaUserTie className="footer-contact-icon" />
              <span>Prashanth: +91 97433 33355</span>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="footer-compliance-box">
          <strong style={{ color: "var(--accent)" }}>Regulatory Disclaimer:</strong> Financial investments, mutual funds, securities, and insurance products are subject to market risks. Please read all scheme-related documents, risk disclosures, and policy terms carefully before making investment decisions. Past performance is not indicative of future returns. INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED acts as an authorized consultant and does not promise guaranteed non-market returns.
        </div>

        {/* Footer Bottom Copyright */}
        <div className="footer-bottom">
          <div>
            © 2026 INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED. All rights reserved.
          </div>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-and-conditions">Terms of Use</Link>
            <Link to="/trust-compliance">Compliance Hub</Link>
            <Link to="/investnowlogin">Admin Login</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GuestFooter;
```

===============================================================================
FILE: src/Guestlayout/Guestlayout.jsx
===============================================================================

```jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import GuestNavbar from './GuestNavbar';
import GuestFooter from './GuestFotter';
import ScrollToTop from '../components/ScrollToTop';

const GuestLayout = () => {
    return (
        <div className="guest-layout-shell">
            <style>{`
                .guest-layout-shell {
                    display: flex;
                    flex-direction: column;
                    min-height: 100vh;
                    background-color: var(--bg);
                    color: var(--text);
                    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                }

                .guest-content-wrapper {
                    flex: 1;
                    padding-top: 125px; /* Offset for fixed header */
                    width: 100%;
                }

                /* Generous Section Spacing & Layout Rules */
                .guest-content-wrapper section {
                    padding: 85px 5%;
                }

                .guest-content-wrapper .container {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                @media (max-width: 768px) {
                    .guest-content-wrapper {
                        padding-top: 75px;
                    }

                    .guest-content-wrapper section {
                        padding: 60px 5%;
                    }
                }
            `}</style>
            <ScrollToTop />
            <GuestNavbar />
            <main className="guest-content-wrapper">
                <Outlet />
            </main>
            <GuestFooter />
        </div>
    );
};

export default GuestLayout;
```

===============================================================================
FILE: src/Guestlayout/GuestNavbar.jsx
===============================================================================

```jsx
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaChevronDown, FaBars, FaTimes, FaBuilding } from "react-icons/fa";

const GuestNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (name) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="investnow-header">
      <style>{`
        .investnow-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          box-shadow: 0 4px 20px rgba(7, 59, 42, 0.15);
        }

        /* Top Bar - Premium Deep Emerald */
        .top-bar {
          background-color: #073B2A;
          color: #F5F8F6;
          font-size: 13px;
          padding: 8px 5%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(212, 175, 55, 0.25);
        }

        .top-bar-info {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .top-bar-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #F5F8F6;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .top-bar-item:hover {
          color: #D4AF37;
        }

        .top-bar-icon {
          color: #D4AF37;
          font-size: 12px;
        }

        /* Main Navbar */
        .navbar-main {
          background: #073B2A;
          padding: 0 5%;
          height: 85px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(212, 175, 55, 0.2);
        }

        .navbar-main.scrolled {
          height: 75px;
          background: #052B1E;
          border-bottom: 1px solid rgba(212, 175, 55, 0.3);
          box-shadow: 0 4px 25px rgba(0, 0, 0, 0.3);
        }

        /* Brand Logo Area */
        .navbar-brand {
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .brand-logo-img {
          width: 52px;
          height: 52px;
          object-fit: contain;
          border-radius: 50%;
          background: #FFFFFF;
          padding: 4px;
          border: 2px solid #D4AF37;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
          transition: all 0.3s ease;
        }

        .navbar-main.scrolled .brand-logo-img {
          width: 44px;
          height: 44px;
        }

        .brand-name {
          font-family: 'Fraunces', Georgia, serif;
          font-size: 24px;
          font-weight: 700;
          color: #D4AF37;
          letter-spacing: -0.01em;
          line-height: 1.1;
        }

        .brand-sub {
          font-family: 'Inter', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #F5F8F6;
          letter-spacing: 0.5px;
        }

        /* Nav Menu */
        .nav-menu {
          display: flex;
          align-items: center;
          gap: 20px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-item {
          position: relative;
        }

        .nav-link {
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          padding: 30px 4px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s ease;
          border-bottom: 2px solid transparent;
        }

        .navbar-main.scrolled .nav-link {
          padding: 25px 4px;
        }

        .nav-link:hover, .nav-link.active {
          color: #D4AF37;
          border-bottom-color: #D4AF37;
        }

        .dropdown-icon {
          font-size: 10px;
          color: #D4AF37;
          transition: transform 0.2s ease;
        }

        .nav-item:hover .dropdown-icon {
          transform: rotate(180deg);
        }

        /* Dropdown Menu */
        .dropdown-menu-custom {
          position: absolute;
          top: 100%;
          left: 0;
          width: 250px;
          background: #073B2A;
          border: 1px solid rgba(212, 175, 55, 0.3);
          border-radius: 6px;
          padding: 10px 0;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
          transition: all 0.25s ease;
          list-style: none;
          margin: 0;
          z-index: 100;
        }

        .nav-item:hover .dropdown-menu-custom {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .dropdown-item-custom a {
          display: block;
          padding: 10px 20px;
          color: #F5F8F6;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          transition: background 0.2s ease, color 0.2s ease;
        }

        .dropdown-item-custom a:hover {
          background: rgba(212, 175, 55, 0.15);
          color: #D4AF37;
        }

        /* Distinct Sub-Brand Highlight Box for Chalukya Developers */
        .chalukya-nav-box {
          background: rgba(212, 175, 55, 0.12);
          border: 1px solid #D4AF37;
          border-radius: 6px;
          padding: 8px 16px !important;
          color: #D4AF37 !important;
          font-weight: 700 !important;
          font-size: 13px !important;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.25s ease;
          box-shadow: 0 2px 8px rgba(212, 175, 55, 0.15);
          border-bottom: 1px solid #D4AF37 !important;
          margin-left: 6px;
        }

        .chalukya-nav-box:hover, .chalukya-nav-box.active {
          background: #D4AF37;
          color: #073B2A !important;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
        }

        .chalukya-nav-box:hover .chalukya-box-icon,
        .chalukya-nav-box.active .chalukya-box-icon {
          color: #073B2A !important;
        }

        .chalukya-box-icon {
          color: #D4AF37;
          font-size: 14px;
          transition: color 0.2s ease;
        }

        .sub-brand-tag {
          font-size: 9px;
          background: #073B2A;
          color: #D4AF37;
          padding: 2px 6px;
          border-radius: 3px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          font-weight: 800;
          border: 1px solid rgba(212, 175, 55, 0.4);
        }

        .chalukya-nav-box:hover .sub-brand-tag,
        .chalukya-nav-box.active .sub-brand-tag {
          background: #073B2A;
          color: #FFFFFF;
        }

        /* Mobile Hamburger */
        .mobile-toggle {
          display: none;
          background: transparent;
          border: none;
          color: #FFFFFF;
          font-size: 24px;
          cursor: pointer;
        }

        @media (max-width: 1100px) {
          .top-bar-info span { display: none; }
          .nav-link { font-size: 13px; padding: 25px 2px; }
        }

        @media (max-width: 992px) {
          .top-bar { display: none; }
          .mobile-toggle { display: block; }
          .nav-menu {
            position: fixed;
            top: 85px;
            right: -100%;
            width: 300px;
            height: calc(100vh - 85px);
            background: #073B2A;
            border-left: 1px solid rgba(212, 175, 55, 0.3);
            flex-direction: column;
            align-items: stretch;
            padding: 20px;
            gap: 10px;
            transition: right 0.3s ease;
            overflow-y: auto;
          }

          .nav-menu.active {
            right: 0;
          }

          .nav-link {
            padding: 14px 10px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            justify-content: space-between;
          }

          .dropdown-menu-custom {
            position: static;
            opacity: 1;
            visibility: visible;
            transform: none;
            box-shadow: none;
            border: none;
            background: transparent;
            padding-left: 15px;
            display: none;
          }

          .dropdown-menu-custom.mobile-show {
            display: block;
          }

          .chalukya-nav-box {
            margin-left: 0;
            margin-top: 10px;
            justify-content: center;
          }
        }
      `}</style>

      {/* Top Bar */}
      <div className="top-bar">
        <div className="top-bar-info">
          <a href="tel:+917975347138" className="top-bar-item">
            <FaPhoneAlt className="top-bar-icon" /> +91 79753 47138
          </a>
          <a href="mailto:meetinvenstnow@gmail.com" className="top-bar-item">
            <FaEnvelope className="top-bar-icon" /> meetinvenstnow@gmail.com
          </a>
          <span className="top-bar-item" style={{ cursor: "default" }}>
            <FaMapMarkerAlt className="top-bar-icon" /> Kundapura, Karnataka
          </span>
        </div>

        <div style={{ color: "#D4AF37", fontSize: "12px", fontWeight: "600" }}>
          GSTIN: 29AAICI5060P1ZX
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar-main ${isScrolled ? "scrolled" : ""}`}>
        <Link to="/" className="navbar-brand" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="INVESTNOW Logo"
            className="brand-logo-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/logo.jpeg";
            }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span className="brand-name">INVESTNOW</span>
            <span className="brand-sub">Financial Services Pvt. Ltd.</span>
          </div>
        </Link>

        <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul className={`nav-menu ${isMenuOpen ? "active" : ""}`}>
          <li className="nav-item">
            <Link
              to="/"
              className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/about"
              className={`nav-link ${location.pathname === "/about" ? "active" : ""}`}
              onClick={closeMenu}
            >
              About Us
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/services"
              className={`nav-link ${location.pathname === "/services" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Services
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/financial-goals"
              className={`nav-link ${location.pathname === "/financial-goals" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Financial Goals
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/trust-compliance"
              className={`nav-link ${location.pathname.includes("trust") || location.pathname.includes("risk") || location.pathname.includes("regulatory") ? "active" : ""}`}
              onClick={(e) => {
                if (window.innerWidth <= 992) {
                  toggleDropdown("compliance");
                }
              }}
            >
              Compliance <FaChevronDown className="dropdown-icon" />
            </Link>
            <ul className={`dropdown-menu-custom ${activeDropdown === "compliance" ? "mobile-show" : ""}`}>
              <li className="dropdown-item-custom"><Link to="/trust-compliance" onClick={closeMenu}>Trust & Compliance Portal</Link></li>
              <li className="dropdown-item-custom"><Link to="/regulatory-information" onClick={closeMenu}>Regulatory Disclosures</Link></li>
              <li className="dropdown-item-custom"><Link to="/risk-disclosures" onClick={closeMenu}>Risk & Mandatory Notices</Link></li>
              <li className="dropdown-item-custom"><Link to="/transparency" onClick={closeMenu}>Transparency Policies</Link></li>
              <li className="dropdown-item-custom"><Link to="/privacy-policy" onClick={closeMenu}>Privacy Policy</Link></li>
              <li className="dropdown-item-custom"><Link to="/terms-and-conditions" onClick={closeMenu}>Terms & Conditions</Link></li>
            </ul>
          </li>

          <li className="nav-item">
            <Link
              to="/customer-support"
              className={`nav-link ${location.pathname === "/customer-support" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Customer Support
            </Link>
          </li>

          <li className="nav-item">
            <Link
              to="/contact"
              className={`nav-link ${location.pathname === "/contact" ? "active" : ""}`}
              onClick={closeMenu}
            >
              Contact Us
            </Link>
          </li>

          {/* Last Nav Item: Distinct Sub-brand Box for Chalukya Developers */}
          <li className="nav-item">
            <Link
              to="/chalukya-developers"
              className={`chalukya-nav-box ${location.pathname === "/chalukya-developers" ? "active" : ""}`}
              onClick={closeMenu}
            >
              <FaBuilding className="chalukya-box-icon" />
              <span>Chalukya Developers</span>
              <span className="sub-brand-tag">Land</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default GuestNavbar;
```

===============================================================================
FILE: src/Guestlayout/HeroSection.jsx
===============================================================================

```jsx
import { useEffect, useRef, useState } from "react";
import LaserFlow from "./LaserFlow";

/* ------------------------------------------------------------------ */
/*  Small helpers                                                      */
/* ------------------------------------------------------------------ */

const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);
  return reduced;
};

/* Tracks scroll progress of an element in [0, 1] across the viewport */
const useScrollProgress = (ref) => {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const compute = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // 0 when top of element at bottom of viewport, 1 when bottom of element at top
      const total = vh + rect.height;
      const scrolled = vh - rect.top;
      setP(Math.min(1, Math.max(0, scrolled / total)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
  return p;
};

/* 3D tilt on mouse move — returns ref + handlers */
const useTilt = (max = 8) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    el.style.setProperty("--rx", `${(-y * max).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${(x * max).toFixed(2)}deg`);
    el.style.setProperty("--mx", `${((x + 0.5) * 100).toFixed(2)}%`);
    el.style.setProperty("--my", `${((y + 0.5) * 100).toFixed(2)}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
};

/* Magnetic button — nudges toward the cursor */
const useMagnetic = (strength = 0.25) => {
  const ref = useRef(null);
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.setProperty("--tx", `${(x * strength).toFixed(2)}px`);
    el.style.setProperty("--ty", `${(y * strength).toFixed(2)}px`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--tx", "0px");
    el.style.setProperty("--ty", "0px");
  };
  return { ref, onMouseMove: onMove, onMouseLeave: onLeave };
};

/* Words that rotate in the title on an interval */
const ROTATING = [
  "Build tomorrow.",
  "Protect tomorrow.",
  "Grow tomorrow.",
  "Fund tomorrow.",
];

/* ------------------------------------------------------------------ */
/*  Hero                                                               */
/* ------------------------------------------------------------------ */

export default function HeroSection() {
  const rootRef = useRef(null);
  const cardRef = useRef(null); // surfaceRef for LaserFlow
  const reduced = useReducedMotion();
  const progress = useScrollProgress(rootRef);
  const [wordIdx, setWordIdx] = useState(0);
  const [copied, setCopied] = useState(false); // not used, reserved

  const cardTilt = useTilt(6);
  const btnA = useMagnetic(0.2);
  const btnB = useMagnetic(0.2);

  // Rotate the italic accent
  useEffect(() => {
    if (reduced) return;
    const id = setInterval(
      () => setWordIdx((i) => (i + 1) % ROTATING.length),
      2800,
    );
    return () => clearInterval(id);
  }, [reduced]);

  // Derived transforms from scroll
  const copyY = reduced ? 0 : (1 - progress) * 40; // parallax on copy
  const cardY = reduced ? 0 : (1 - progress) * -30; // opposite parallax on card
  const cardScale = reduced ? 1 : 0.94 + progress * 0.06; // gentle "settle in"
  const beamOpacity = reduced ? 1 : 0.65 + progress * 0.35;

  return (
    <section
      ref={rootRef}
      className="inv-hero"
      data-progress={progress.toFixed(3)}
    >
      {/* Ambient background layers */}
      <div className="inv-hero-bg" aria-hidden="true">
        <div className="inv-hero-grid" />
        <div className="inv-hero-glow inv-hero-glow--gold" />
        <div className="inv-hero-glow inv-hero-glow--emerald" />
        <div className="inv-hero-scan" />
      </div>

      {/* Laser beam */}
      <div
        className="inv-hero-beam"
        style={{ opacity: beamOpacity, transition: "opacity 400ms ease" }}
      >
        <LaserFlow
          surfaceRef={cardRef}
          beamPosition={0.6}
          color="#0B6045"
          intensity={2.2}
          flare={1.5}
          spread={2}
          spill={1}
          fog={0.15}
          dust={1.4}
          revealImage="/hero.png"
          revealRadius={220}
          revealOpacity={0.65}
          beamWidth={1.5}
          streaks={1.5}
          dots={1}
          pulse={1.5}
          speed={3}
          seed={3}
          mouseInteraction
          intro
          theme="light"
        />
      </div>

      {/* ---------------- Copy ---------------- */}
      <div
        className="inv-hero-copy"
        style={{ transform: `translateY(calc(-50% + ${copyY}px))` }}
      >
        <span className="inv-hero-kicker">
          <span className="inv-hero-kicker-line" />
          <span className="inv-hero-kicker-text">
            Wealth Growth &amp; Protection
          </span>
          <span className="inv-hero-kicker-line" />
        </span>

        <h1 className="inv-hero-title">
          <span className="inv-hero-title-line inv-hero-title-line--1">
            <span>Plan today.</span>
          </span>
          <span className="inv-hero-title-line inv-hero-title-line--2">
            <em key={wordIdx} className="inv-hero-title-accent">
              {ROTATING[wordIdx]}
            </em>
          </span>
        </h1>

        <p className="inv-hero-sub">
          Structured, ethical, and goal-oriented financial consultation — mutual
          funds, insurance, loans, and land, under one roof.
        </p>

        <div className="inv-hero-cta">
          <a
            href="/services"
            ref={btnA.ref}
            onMouseMove={btnA.onMouseMove}
            onMouseLeave={btnA.onMouseLeave}
            className="inv-btn inv-btn-primary"
          >
            <span className="inv-btn-label">Explore Services</span>
            <svg
              className="inv-btn-arrow"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>

          <a
            href="/contact"
            ref={btnB.ref}
            onMouseMove={btnB.onMouseMove}
            onMouseLeave={btnB.onMouseLeave}
            className="inv-btn inv-btn-ghost"
          >
            <span className="inv-btn-label">Talk to an Advisor</span>
            <svg
              className="inv-btn-arrow"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                d="M5 12h14M13 6l6 6-6 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <ul className="inv-hero-trust">
          <li>
            <span className="dot" />
            GSTIN: 29AAICI5060P1ZX
          </li>
          <li>
            <span className="dot" />
            Kundapura, Karnataka
          </li>
          <li>
            <span className="dot" />
            Trusted by 500+ families
          </li>
        </ul>
      </div>

      {/* ---------------- Card ---------------- */}
      <div
        className="inv-hero-card-wrap"
        style={{ transform: `translateY(${cardY}px) scale(${cardScale})` }}
      >
        <div
          ref={(el) => {
            // bridge two refs
            cardTilt.ref.current = el;
            cardRef.current = el;
          }}
          onMouseMove={cardTilt.onMouseMove}
          onMouseLeave={cardTilt.onMouseLeave}
          className="inv-hero-card"
        >
          <img
            src="/hero.png"
            alt="InvestNow dashboard preview"
            className="inv-hero-card-img"
            onError={(e) =>
              console.error("hero.png failed to load — check public/hero.png")
            }
          />
          <div className="inv-hero-card-shine" />
          <div className="inv-hero-card-overlay" />
          <div className="inv-hero-card-corner inv-hero-card-corner--tl" />
          <div className="inv-hero-card-corner inv-hero-card-corner--tr" />
          <div className="inv-hero-card-corner inv-hero-card-corner--bl" />
          <div className="inv-hero-card-corner inv-hero-card-corner--br" />
        </div>
      </div>

     

      {/* -------------------------- Styles -------------------------- */}
      <style>{`
        .inv-hero {
          position: relative;
          width: 100%;
          min-height: 640px;
          height: clamp(560px, 78vh, 780px);
          overflow: hidden;
          background: #FBF8F1;
          isolation: isolate;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        /* ---------- Ambient background ---------- */
        .inv-hero-bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }

        .inv-hero-grid {
          position: absolute; inset: 0;
          background-image:
            radial-gradient(circle at 1px 1px, rgba(7, 59, 42, 0.06) 1px, transparent 0);
          background-size: 26px 26px;
          animation: invGridDrift 40s linear infinite;
        }
        @keyframes invGridDrift {
          from { background-position: 0 0; }
          to   { background-position: 260px 260px; }
        }

        .inv-hero-glow {
          position: absolute;
          width: 640px; height: 640px;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.55;
          mix-blend-mode: multiply;
        }
        .inv-hero-glow--gold {
          left: -180px; bottom: -220px;
          background: radial-gradient(circle, rgba(212, 175, 55, 0.35), transparent 65%);
          animation: invFloatA 18s ease-in-out infinite;
        }
        .inv-hero-glow--emerald {
          right: -200px; top: -180px;
          background: radial-gradient(circle, rgba(11, 96, 69, 0.22), transparent 65%);
          animation: invFloatB 22s ease-in-out infinite;
        }
        @keyframes invFloatA {
          0%,100% { transform: translate(0, 0) scale(1); }
          50%     { transform: translate(40px, -30px) scale(1.08); }
        }
        @keyframes invFloatB {
          0%,100% { transform: translate(0, 0) scale(1); }
          50%     { transform: translate(-50px, 30px) scale(1.1); }
        }

        /* subtle horizontal scan sheen */
        .inv-hero-scan {
          position: absolute; inset: 0;
          background: linear-gradient(
            100deg,
            transparent 30%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 70%
          );
          background-size: 220% 100%;
          animation: invScan 9s ease-in-out infinite;
          opacity: 0.5;
        }
        @keyframes invScan {
          0%   { background-position: -40% 0; }
          100% { background-position: 140% 0; }
        }

        /* ---------- Laser overlay wrapper ---------- */
        .inv-hero-beam {
          position: absolute; inset: 0; z-index: 1; pointer-events: none;
        }

        /* ---------- Copy ---------- */
        .inv-hero-copy {
          position: absolute;
          z-index: 3;
          top: 50%;
          left: clamp(24px, 6vw, 96px);
          right: clamp(24px, 6vw, 96px);
          max-width: 620px;
          color: #17231E;
          transition: transform 400ms cubic-bezier(.2,.7,.2,1);
          will-change: transform;
        }

        /* Kicker */
        .inv-hero-kicker {
          display: inline-flex;
          align-items: center;
          gap: 14px;
          font-family: 'Fraunces', Georgia, serif;
          font-style: italic;
          font-size: 14px;
          letter-spacing: 0.02em;
          color: #997819;
          margin-bottom: 20px;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) both;
        }
        .inv-hero-kicker-line {
          width: 26px; height: 1px;
          background: linear-gradient(90deg, #D4AF37, transparent);
          transform-origin: left center;
          animation: invLineGrow 1.1s cubic-bezier(.2,.7,.2,1) 200ms both;
        }
        .inv-hero-kicker-line:last-child {
          transform-origin: right center;
          background: linear-gradient(270deg, #D4AF37, transparent);
        }
        @keyframes invLineGrow {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }

        /* Title */
        .inv-hero-title {
          font-family: 'Fraunces', Georgia, serif;
          font-weight: 600;
          font-size: clamp(38px, 5.4vw, 68px);
          line-height: 1.05;
          letter-spacing: -0.02em;
          margin: 0 0 22px;
          color: #073B2A;
        }
        .inv-hero-title-line {
          display: block;
          overflow: hidden;
        }
        .inv-hero-title-line > span,
        .inv-hero-title-line > em { display: inline-block; }

        .inv-hero-title-line--1 > span {
          animation: invRise 900ms cubic-bezier(.2,.7,.2,1) 100ms both;
        }
        .inv-hero-title-line--2 > em {
          animation: invAccentIn 700ms cubic-bezier(.2,.7,.2,1) both,
                     invAccentPulse 3.4s ease-in-out infinite 700ms;
          color: #997819;
          font-style: italic;
          font-weight: 500;
        }
        @keyframes invRise {
          from { transform: translateY(105%); }
          to   { transform: translateY(0); }
        }
        @keyframes invAccentIn {
          0%   { transform: translateY(105%) rotate(-2deg); opacity: 0; }
          100% { transform: translateY(0) rotate(0); opacity: 1; }
        }
        @keyframes invAccentPulse {
          0%, 100% { text-shadow: 0 0 0 rgba(212, 175, 55, 0); }
          50%      { text-shadow: 0 0 22px rgba(212, 175, 55, 0.35); }
        }

        /* Sub */
        .inv-hero-sub {
          font-size: clamp(15px, 1.15vw, 17px);
          line-height: 1.7;
          color: #5B6B63;
          max-width: 52ch;
          margin: 0 0 34px;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) 380ms both;
        }
        @keyframes invFadeUp {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* CTA */
        .inv-hero-cta {
          display: flex; flex-wrap: wrap; gap: 14px;
          margin-bottom: 34px;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) 520ms both;
        }

        .inv-btn {
          --tx: 0px; --ty: 0px;
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 26px;
          border-radius: 3px;
          font-size: 14.5px;
          font-weight: 600;
          text-decoration: none;
          border: 1px solid transparent;
          transform: translate3d(var(--tx), var(--ty), 0);
          transition:
            background-color 0.25s ease,
            border-color 0.25s ease,
            color 0.25s ease,
            box-shadow 0.25s ease,
            transform 0.18s ease;
          overflow: hidden;
        }

        .inv-btn-label { position: relative; z-index: 2; }
        .inv-btn-arrow {
          width: 16px; height: 16px;
          position: relative; z-index: 2;
          transition: transform 0.3s ease;
        }
        .inv-btn:hover .inv-btn-arrow { transform: translateX(4px); }

        /* Ripple-like sheen */
        .inv-btn::before {
          content: "";
          position: absolute; inset: 0;
          background: radial-gradient(160px circle at var(--rx,50%) var(--ry,50%),
            rgba(255,255,255,0.28), transparent 60%);
          opacity: 0; transition: opacity 0.3s ease;
          z-index: 1;
        }
        .inv-btn:hover::before { opacity: 1; }

        .inv-btn-primary {
          background: #073B2A;
          color: #FBF8F1;
          border-color: #073B2A;
          box-shadow: 0 0 0 0 rgba(11, 96, 69, 0.35);
        }
        .inv-btn-primary:hover {
          background: #0B6045;
          border-color: #0B6045;
          box-shadow:
            0 12px 28px -10px rgba(7, 59, 42, 0.35),
            0 0 0 8px rgba(11, 96, 69, 0.08);
        }

        .inv-btn-ghost {
          background: #FFFFFF;
          color: #073B2A;
          border-color: rgba(7, 59, 42, 0.22);
        }
        .inv-btn-ghost:hover {
          border-color: #D4AF37;
          color: #997819;
          background: rgba(212, 175, 55, 0.08);
          box-shadow: 0 10px 24px -12px rgba(212, 175, 55, 0.5);
        }

        /* Trust strip */
        .inv-hero-trust {
          list-style: none; padding: 0; margin: 0;
          display: flex; flex-wrap: wrap; gap: 22px;
          font-size: 12.5px; letter-spacing: 0.02em;
          color: #7A8A82;
          animation: invFadeUp 900ms cubic-bezier(.2,.7,.2,1) 660ms both;
        }
        .inv-hero-trust li {
          display: inline-flex; align-items: center; gap: 8px;
          position: relative;
        }
        .inv-hero-trust .dot {
          width: 6px; height: 6px; border-radius: 50%;
          background: #D4AF37;
          display: inline-block;
          box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.55);
          animation: invDotPulse 2.6s ease-in-out infinite;
        }
        .inv-hero-trust li:nth-child(2) .dot { animation-delay: .35s; }
        .inv-hero-trust li:nth-child(3) .dot { animation-delay: .7s; }
        @keyframes invDotPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0.5); }
          50%      { box-shadow: 0 0 0 8px rgba(212,175,55,0); }
        }

        /* ---------- Card ---------- */
        .inv-hero-card-wrap {
          position: absolute;
          left: 55%;
          right: 6%;
          top: 55%;
          bottom: -24px;
          z-index: 2;
          perspective: 1200px;
          transition: transform 500ms cubic-bezier(.2,.7,.2,1);
          will-change: transform;
        }

        .inv-hero-card {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 14px;
          background: #FFFFFF;
          overflow: hidden;
          border: 1px solid rgba(7, 59, 42, 0.12);
          box-shadow:
            0 30px 70px -24px rgba(7, 59, 42, 0.28),
            0 10px 26px -14px rgba(7, 59, 42, 0.14);
          transform:
            rotateX(var(--rx, 0deg))
            rotateY(var(--ry, 0deg));
          transition: transform 350ms cubic-bezier(.2,.7,.2,1),
                      box-shadow 350ms ease;
          transform-style: preserve-3d;
        }
        .inv-hero-card:hover {
          box-shadow:
            0 40px 90px -28px rgba(7, 59, 42, 0.35),
            0 14px 34px -16px rgba(7, 59, 42, 0.18),
            0 0 0 6px rgba(212, 175, 55, 0.08);
        }

        .inv-hero-card-img {
          width: 100%; height: 100%;
          object-fit: cover;
          display: block;
          transform: scale(1.001);
          transition: transform 1.2s cubic-bezier(.2,.7,.2,1);
        }
        .inv-hero-card:hover .inv-hero-card-img { transform: scale(1.04); }

        /* Shine that follows the pointer */
        .inv-hero-card-shine {
          position: absolute; inset: 0;
          background:
            radial-gradient(420px circle at var(--mx, 50%) var(--my, 50%),
              rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 55%);
          mix-blend-mode: soft-light;
          opacity: 0; transition: opacity 0.35s ease;
          pointer-events: none;
        }
        .inv-hero-card:hover .inv-hero-card-shine { opacity: 1; }

        .inv-hero-card-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(
            to top,
            rgba(7, 59, 42, 0.06) 0%,
            rgba(7, 59, 42, 0) 45%
          );
          pointer-events: none;
        }

        /* Corner gold L's — animate in */
        .inv-hero-card-corner {
          position: absolute;
          width: 26px; height: 26px;
          border: 2px solid #D4AF37;
          opacity: 0;
          transform: scale(0.6);
          transition: opacity 0.4s ease, transform 0.4s cubic-bezier(.2,.7,.2,1);
          pointer-events: none;
        }
        .inv-hero-card:hover .inv-hero-card-corner { opacity: 1; transform: scale(1); }
        .inv-hero-card-corner--tl { top: 12px; left: 12px; border-right: 0; border-bottom: 0; }
        .inv-hero-card-corner--tr { top: 12px; right: 12px; border-left: 0; border-bottom: 0; }
        .inv-hero-card-corner--bl { bottom: 12px; left: 12px; border-right: 0; border-top: 0; }
        .inv-hero-card-corner--br { bottom: 12px; right: 12px; border-left: 0; border-top: 0; }
        .inv-hero-card:hover .inv-hero-card-corner--tl { transition-delay: 0ms; }
        .inv-hero-card:hover .inv-hero-card-corner--tr { transition-delay: 60ms; }
        .inv-hero-card:hover .inv-hero-card-corner--br { transition-delay: 120ms; }
        .inv-hero-card:hover .inv-hero-card-corner--bl { transition-delay: 180ms; }

        /* ---------- Scroll hint ---------- */
        .inv-hero-scroll-hint {
          position: absolute;
          left: 50%; bottom: 22px;
          transform: translateX(-50%);
          z-index: 4;
          display: flex; flex-direction: column; align-items: center; gap: 10px;
          color: #7A8A82;
          font-size: 10.5px; letter-spacing: 0.32em; font-weight: 600;
          animation: invFadeUp 900ms ease 900ms both;
        }
        .inv-hero-scroll-line {
          width: 1px; height: 42px;
          background: linear-gradient(to bottom, transparent, #073B2A 40%, transparent);
          position: relative; overflow: hidden;
        }
        .inv-hero-scroll-line::after {
          content: "";
          position: absolute; left: 0; right: 0; height: 14px;
          background: #D4AF37;
          animation: invScrollDot 2.4s ease-in-out infinite;
        }
        @keyframes invScrollDot {
          0%   { top: -14px; }
          100% { top: 42px; }
        }
        .inv-hero-scroll-text { opacity: 0.75; }

        /* ---------- Responsive ---------- */
        @media (max-width: 1024px) {
          .inv-hero {
            height: auto;
            min-height: 760px;
            padding: 90px 0 40px;
          }
          .inv-hero-copy {
            position: relative;
            top: auto; left: auto; right: auto;
            transform: none !important;
            max-width: 720px;
            margin: 0 auto;
            padding: 0 6vw;
          }
          .inv-hero-card-wrap {
            position: relative;
            left: auto; right: auto; top: auto; bottom: auto;
            margin: 56px auto 0;
            width: min(720px, 88vw);
            height: 400px;
            transform: none !important;
          }
          .inv-hero-scroll-hint { display: none; }
        }

        @media (max-width: 640px) {
          .inv-hero { min-height: 700px; padding-top: 72px; }
          .inv-hero-title { font-size: clamp(32px, 9vw, 44px); }
          .inv-hero-sub { font-size: 14.5px; margin-bottom: 26px; }
          .inv-hero-cta { flex-direction: column; align-items: stretch; gap: 10px; }
          .inv-btn { justify-content: center; width: 100%; }
          .inv-hero-trust { gap: 14px; font-size: 11.5px; }
          .inv-hero-card-wrap {
            margin-top: 44px;
            height: 300px;
            border-radius: 14px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .inv-hero *, .inv-hero *::before, .inv-hero *::after {
            animation: none !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </section>
  );
}
```

===============================================================================
FILE: src/Guestlayout/Home.jsx
===============================================================================

```jsx
import React, { useState, useRef, useEffect, useCallback } from "react";
import HeroSection from "./HeroSection";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import {
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaChartPie,
  FaCoins,
  FaChartLine,
  FaBriefcase,
  FaMapMarkedAlt,
  FaArrowRight,
  FaUmbrella,
  FaGraduationCap,
  FaHome,
  FaUserTie,
  FaHandshake,
  FaEye,
  FaBullseye,
} from "react-icons/fa";

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
const hxServices = [
  {
    title: "Mutual funds & SIPs",
    icon: <FaChartPie />,
    desc: "Disciplined wealth accumulation through systematic investment planning, built to compound over the long run.",
    path: "/services#mutual-funds",
    wide: true,
  },
  {
    title: "Loans & financing",
    icon: <FaMoneyCheckAlt />,
    desc: "Personal, business, and home loan guidance matched to your eligibility.",
    path: "/services#loans",
  },
  {
    title: "Insurance",
    icon: <FaShieldAlt />,
    desc: "Life, health, and motor cover to protect what you've built.",
    path: "/services#insurance",
  },
  {
    title: "Wealth management",
    icon: <FaCoins />,
    desc: "Multi-asset allocation across equity, debt, and gold.",
    path: "/services#wealth-management",
  },
  {
    title: "Stocks & equity",
    icon: <FaChartLine />,
    desc: "Neutral insights for long-term equity planning.",
    path: "/services#stocks-equity",
  },
  {
    title: "Portfolio management",
    icon: <FaBriefcase />,
    desc: "Regular reviews, risk alignment, and rebalancing so your portfolio stays on course.",
    path: "/services#portfolio-management",
  },
  {
    title: "Land links (Chalukya)",
    icon: <FaMapMarkedAlt />,
    desc: "Residential and agricultural land options, with legal title verification.",
    path: "/chalukya-developers",
    wide: true,
  },
];

const hxTimeline = [
  {
    step: "01",
    title: "Listen",
    text: "We start with what matters to you — not products. Goals, timelines, obligations.",
    icon: <FaEye />,
  },
  {
    step: "02",
    title: "Map",
    text: "A structured plan built around your income, risk profile, and life milestones.",
    icon: <FaBullseye />,
  },
  {
    step: "03",
    title: "Execute",
    text: "We coordinate with AMCs, insurers, lenders, and developers to open the right doors.",
    icon: <FaHandshake />,
  },
  {
    step: "04",
    title: "Review",
    text: "Regular checkpoints, rebalances, and course corrections as life moves.",
    icon: <FaChartLine />,
  },
];

const hxValues = [
  {
    title: "Experienced guidance",
    desc: "Knowledgeable consultants who work through your plan with you.",
    icon: <FaUserTie />,
  },
  {
    title: "Transparent approach",
    desc: "Clear talk on products, terms, eligibility, and risk.",
    icon: <FaEye />,
  },
  {
    title: "Goal-oriented planning",
    desc: "Strategies built around milestones like retirement or property.",
    icon: <FaBullseye />,
  },
  {
    title: "Relationship-focused",
    desc: "We value long-term clients over one-off transactions.",
    icon: <FaHandshake />,
  },
];

const hxGoals = [
  {
    title: "Wealth creation",
    icon: <FaChartLine />,
    text: "Long-term compounding through structured multi-asset planning.",
  },
  {
    title: "Retirement",
    icon: <FaUmbrella />,
    text: "Post-employment financial independence with a focus on regular income.",
  },
  {
    title: "Education",
    icon: <FaGraduationCap />,
    text: "Prepare financially for higher education, years before the fees arrive.",
  },
  {
    title: "Home & property",
    icon: <FaHome />,
    text: "Down-payment savings and loan eligibility checks.",
  },
  {
    title: "Business growth",
    icon: <FaBriefcase />,
    text: "Capital planning and commercial funding guidance.",
  },
  {
    title: "Family protection",
    icon: <FaShieldAlt />,
    text: "Health coverage and an emergency fund that holds.",
  },
];

const hxBandA = [
  "Mutual Funds",
  "Insurance",
  "Loans",
  "Wealth",
  "Equity",
  "SIPs",
  "Land",
  "Portfolio",
];
const hxBandB = [
  "Advisory",
  "Reviews",
  "Planning",
  "Protection",
  "Compounding",
  "Goals",
  "Rebalancing",
  "Clarity",
];

const hxStatement =
  "Money decisions never arrive one at a time. We bring investments, insurance, loans and land into a single plan, so each choice supports the next.";
const hxStatementHot = ["investments,", "insurance,", "loans", "land"];

const hxOrbs = [
  { label: "Invest", x: "-62%", y: "-62%", fx: "-13%", fy: "-13%" },
  { label: "Insure", x: "62%", y: "-62%", fx: "13%", fy: "-13%" },
  { label: "Borrow", x: "-62%", y: "62%", fx: "-13%", fy: "13%" },
  { label: "Land", x: "62%", y: "62%", fx: "13%", fy: "13%" },
];

/* ------------------------------------------------------------------ */
/* Hooks                                                               */
/* ------------------------------------------------------------------ */
const useHxReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, shown];
};

/*
  Writes --p (0..1) straight onto the element, so scroll animation never
  re-renders React. CSS does the rest with calc().
  mode "full" : 0 when the element enters the viewport, 1 when it leaves
  mode "pin"  : 0 when a tall sticky section starts pinning, 1 when it ends
  mode "read" : 0 when the top is at 70% of the viewport, 1 at its bottom edge
*/
const useHxScrollVar = (ref, mode = "full") => {
  useEffect(() => {
    let raf = 0;
    const calc = () => {
      raf = 0;
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      let p;
      if (mode === "pin") p = -r.top / Math.max(1, r.height - vh);
      else if (mode === "read") p = (vh * 0.7 - r.top) / Math.max(1, r.height);
      else p = (vh - r.top) / (r.height + vh);
      p = Math.min(1, Math.max(0, p));
      el.style.setProperty("--p", p.toFixed(4));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(calc);
    };
    calc();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref, mode]);
};

/* ------------------------------------------------------------------ */
/* Primitives                                                          */
/* ------------------------------------------------------------------ */
const HxReveal = ({ children, delay = 0, className = "", style, ...rest }) => {
  const [ref, shown] = useHxReveal();
  return (
    <div
      ref={ref}
      className={`hx-reveal ${shown ? "hx-reveal--in" : ""} ${className}`}
      style={{ "--hx-rd": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
};

const HxHead = ({ eyebrow, lines, sub, center = false, className = "" }) => {
  const [ref, shown] = useHxReveal(0.3);
  return (
    <div
      ref={ref}
      className={`hx-head ${center ? "hx-head--center" : ""} ${shown ? "hx-head--in" : ""} ${className}`}
    >
      <span className="hx-eyebrow">
        <i className="hx-eyebrow__dot" />
        {eyebrow}
      </span>
      <h2 className="hx-h2">
        {lines.map((l, i) => (
          <span className="hx-line" key={l}>
            <span
              className={i === lines.length - 1 ? "hx-grad" : ""}
              style={{ "--d": `${i * 120}ms` }}
            >
              {l}
            </span>
          </span>
        ))}
      </h2>
      {sub && <p className="hx-sub">{sub}</p>}
    </div>
  );
};

const HxArrow = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path
      d="M4 12h15M13 5l7 7-7 7"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Marquee band (always on, reacts to scroll velocity)                 */
/* ------------------------------------------------------------------ */
const HxBandRow = ({ words, rev = false }) => (
  <div className="hx-band__row">
    <div className={`hx-band__track ${rev ? "hx-band__track--rev" : ""}`}>
      {[...words, ...words, ...words, ...words].map((w, i) => (
        <span
          key={`${w}-${i}`}
          className={`hx-band__word ${i % 2 ? "hx-band__word--out" : ""}`}
        >
          {w}
          <i className="hx-band__gem" />
        </span>
      ))}
    </div>
  </div>
);

const HxBand = ({ innerRef }) => (
  <div className="hx-band" ref={innerRef} aria-hidden="true">
    <HxBandRow words={hxBandA} />
    <HxBandRow words={hxBandB} rev />
  </div>
);

/* ------------------------------------------------------------------ */
/* Section 1 — Statement (pinned, words fill in as you scroll)         */
/* ------------------------------------------------------------------ */
const HxStatementSection = () => {
  const rootRef = useRef(null);
  useHxScrollVar(rootRef, "pin");
  const words = hxStatement.split(" ");

  return (
    <section ref={rootRef} className="hx-state">
      <div className="hx-state__pin">
        <p className="hx-state__text" style={{ "--n": words.length }}>
          {words.map((w, i) => (
            <span
              key={i}
              className={`hx-state__word ${hxStatementHot.includes(w) ? "hx-state__word--hot" : ""}`}
              style={{ "--i": i }}
            >
              {w}{" "}
            </span>
          ))}
        </p>

        <div className="hx-merge" aria-hidden="true">
          <div className="hx-merge__ring" />
          {hxOrbs.map((o, i) => (
            <div
              key={o.label}
              className="hx-orb"
              style={{
                "--x": o.x,
                "--y": o.y,
                "--fx": o.fx,
                "--fy": o.fy,
                "--bob": `${i * 0.9}s`,
              }}
            >
              <span className="hx-orb__label">{o.label}</span>
            </div>
          ))}
          <div className="hx-merge__core">One plan</div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 2 — Services (pinned horizontal scroll)                     */
/* ------------------------------------------------------------------ */
const HxCard = ({ s, i }) => {
  const onMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${(x * 100).toFixed(1)}%`);
    el.style.setProperty("--my", `${(y * 100).toFixed(1)}%`);
    el.style.setProperty("--rx", `${((0.5 - y) * 8).toFixed(2)}deg`);
    el.style.setProperty("--ry", `${((x - 0.5) * 10).toFixed(2)}deg`);
  };
  const onLeave = (e) => {
    const el = e.currentTarget;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <HxReveal
      delay={80}
      className={`hx-card-wrap ${s.wide ? "hx-card-wrap--wide" : ""} ${i % 2 ? "hx-card-wrap--low" : ""}`}
    >
      <Link
        to={s.path}
        className="hx-card"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={{ "--bob": `${i * 0.6}s` }}
      >
        <span className="hx-card__glow" aria-hidden="true" />
        <span className="hx-card__bgnum" aria-hidden="true">
          {String(i + 1).padStart(2, "0")}
        </span>
        <span className="hx-card__icon">{s.icon}</span>
        <span className="hx-card__body">
          <h3 className="hx-card__name">{s.title}</h3>
          <p className="hx-card__desc">{s.desc}</p>
        </span>
        <span className="hx-card__more">
          <span>Explore</span>
          <span className="hx-card__arrow">
            <HxArrow />
          </span>
        </span>
        {i === 0 && (
          <svg
            className="hx-card__spark"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              className="hx-card__spark-line"
              d="M0 52 Q 35 48, 60 34 T 120 20 T 200 4"
              pathLength="1"
            />
            <circle className="hx-card__spark-dot" cx="200" cy="4" r="3.5" />
          </svg>
        )}
      </Link>
    </HxReveal>
  );
};

const HxServicesSection = () => {
  const rootRef = useRef(null);
  const trackRef = useRef(null);
  useHxScrollVar(rootRef, "pin");

  useEffect(() => {
    const measure = () => {
      const sec = rootRef.current;
      const track = trackRef.current;
      if (!sec || !track) return;
      if (window.innerWidth < 900) {
        sec.style.removeProperty("height");
        sec.style.setProperty("--hx-max", "0px");
        return;
      }
      const max = Math.max(0, track.scrollWidth - window.innerWidth);
      sec.style.setProperty("--hx-max", `${max}px`);
      sec.style.height = `${max + window.innerHeight}px`;
    };
    measure();
    window.addEventListener("resize", measure);
    const ro = new ResizeObserver(measure);
    if (trackRef.current) ro.observe(trackRef.current);
    if (document.fonts?.ready) document.fonts.ready.then(measure);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  // magnetic button
  const onMagMove = (e) => {
    const el = e.currentTarget;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * 0.25;
    const dy = (e.clientY - (r.top + r.height / 2)) * 0.35;
    el.style.transform = `translate(${dx}px, ${dy}px)`;
  };
  const onMagLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <section ref={rootRef} className="hx-services">
      <div className="hx-services__pin">
        <div className="hx-services__track" ref={trackRef}>
          <div className="hx-services__intro">
            <HxHead
              eyebrow="What we offer"
              lines={["Seven ways we", "move money forward."]}
              sub="Mutual funds, insurance, loans, equity, and land — coordinated under one roof, so nothing slips between advisors."
            />
            <span className="hx-services__hint" aria-hidden="true">
              Keep scrolling
              <i />
            </span>
          </div>

          {hxServices.map((s, i) => (
            <HxCard key={s.title} s={s} i={i} />
          ))}

          <div className="hx-services__end">
            <Link
              to="/services"
              className="hx-mag"
              onMouseMove={onMagMove}
              onMouseLeave={onMagLeave}
            >
              <span className="hx-mag__ring" aria-hidden="true" />
              <span className="hx-mag__label">See all financial services</span>
              <span className="hx-mag__arrow">
                <HxArrow />
              </span>
            </Link>
          </div>
        </div>

        <div className="hx-services__meter" aria-hidden="true">
          <i />
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 3 — Timeline (rail draws, steps light up with scroll)       */
/* ------------------------------------------------------------------ */
const HxTimelineSection = () => {
  const wrapRef = useRef(null);
  useHxScrollVar(wrapRef, "read");

  return (
    <section className="hx-tl">
      <div className="hx-tl__inner">
        <HxHead
          center
          eyebrow="How we work"
          lines={["Four steps.", "No guesswork."]}
        />

        <div className="hx-tl__wrap" ref={wrapRef}>
          <div className="hx-tl__rail" aria-hidden="true">
            <i className="hx-tl__fill" />
            <i className="hx-tl__head" />
          </div>

          <ol className="hx-tl__list">
            {hxTimeline.map((t, i) => (
              <li
                key={t.step}
                className={`hx-tl__item hx-tl__item--${i % 2 ? "r" : "l"}`}
                style={{ "--at": ((i + 0.5) / hxTimeline.length).toFixed(3) }}
              >
                <span className="hx-tl__num" aria-hidden="true">
                  {t.step}
                </span>
                <div className="hx-tl__card">
                  <span className="hx-tl__icon">{t.icon}</span>
                  <h3 className="hx-tl__name">{t.title}</h3>
                  <p className="hx-tl__text">{t.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 4 — Goals (auto-advancing, ring is the timer)               */
/* ------------------------------------------------------------------ */
const HxGoalsSection = () => {
  const [active, setActive] = useState(0);
  const [hold, setHold] = useState(false);
  const g = hxGoals[active];
  const r = 54;
  const c = 2 * Math.PI * r;
  const next = useCallback(
    () => setActive((a) => (a + 1) % hxGoals.length),
    [],
  );

  return (
    <section className="hx-goals">
      <div className="hx-goals__orb hx-goals__orb--a" aria-hidden="true" />
      <div className="hx-goals__orb hx-goals__orb--b" aria-hidden="true" />
      <div className="hx-goals__inner">
        <HxHead
          eyebrow="Goal-based planning"
          lines={["Six destinations.", "One route per goal."]}
        />

        <div
          className={`hx-goals__shell ${hold ? "is-hold" : ""}`}
          onMouseEnter={() => setHold(true)}
          onMouseLeave={() => setHold(false)}
        >
          <div className="hx-goals__rail">
            {hxGoals.map((x, i) => (
              <HxReveal key={x.title} delay={i * 60}>
                <button
                  type="button"
                  className={`hx-pill ${i === active ? "hx-pill--on" : ""}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                >
                  <span className="hx-pill__icon">{x.icon}</span>
                  <span className="hx-pill__label">{x.title}</span>
                  <span className="hx-pill__count">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="hx-pill__bar" aria-hidden="true" />
                </button>
              </HxReveal>
            ))}
          </div>

          <HxReveal className="hx-stage" delay={160}>
            <div className="hx-stage__dots" aria-hidden="true" />
            <div className="hx-stage__inner" key={g.title}>
              <div className="hx-stage__ringwrap">
                <svg
                  viewBox="0 0 140 140"
                  className="hx-stage__ring"
                  aria-hidden="true"
                >
                  <circle
                    cx="70"
                    cy="70"
                    r={r}
                    fill="none"
                    stroke="rgba(11,96,69,.12)"
                    strokeWidth="5"
                  />
                  <circle
                    className="hx-stage__arc"
                    cx="70"
                    cy="70"
                    r={r}
                    fill="none"
                    stroke="url(#hxArcGrad)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeDasharray={c}
                    strokeDashoffset={c}
                    transform="rotate(-90 70 70)"
                    onAnimationEnd={next}
                  />
                  <defs>
                    <linearGradient id="hxArcGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0" stopColor="#0B6045" />
                      <stop offset="1" stopColor="#1E9E6E" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="hx-stage__orbit" aria-hidden="true" />
                <span className="hx-stage__icon">{g.icon}</span>
              </div>
              <div className="hx-stage__meta">
                <span className="hx-stage__kicker">
                  Goal {active + 1} of {hxGoals.length}
                </span>
                <h3 className="hx-stage__title">{g.title}</h3>
                <p className="hx-stage__text">{g.text}</p>
                <Link to="/financial-goals" className="hx-stage__link">
                  <span>Explore the journey</span>
                  <FaArrowRight size={11} />
                </Link>
              </div>
            </div>
          </HxReveal>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Section 5 — Values (always-orbiting, pauses on hover)               */
/* ------------------------------------------------------------------ */
const HxValuesSection = () => {
  const rootRef = useRef(null);
  useHxScrollVar(rootRef, "full");

  return (
    <section ref={rootRef} className="hx-values">
      <div className="hx-values__inner">
        <HxHead
          center
          eyebrow="Why us"
          lines={["Trusted by families who", "plan decades ahead."]}
        />

        <div className="hx-orbit">
          <div className="hx-orbit__stage">
            <span
              className="hx-orbit__ring hx-orbit__ring--scroll"
              aria-hidden="true"
            />
            <span
              className="hx-orbit__ring hx-orbit__ring--spin"
              aria-hidden="true"
            />
            <span
              className="hx-orbit__ring hx-orbit__ring--still"
              aria-hidden="true"
            />

            {hxValues.map((v, i) => (
              <article
                key={v.title}
                className="hx-node"
                style={{ "--a": `${45 + i * 90}deg` }}
              >
                <div className="hx-node__card">
                  <span className="hx-node__icon">{v.icon}</span>
                  <div className="hx-node__body">
                    <strong>{v.title}</strong>
                    <small>{v.desc}</small>
                  </div>
                </div>
              </article>
            ))}

            <div className="hx-core">
              <span className="hx-core__pulse" />
              <span className="hx-core__pulse hx-core__pulse--b" />
              <svg viewBox="0 0 60 60" aria-hidden="true">
                <path
                  className="hx-core__shield"
                  d="M30 8l18 7v14c0 12-8 21-18 26-10-5-18-14-18-26V15z"
                  fill="none"
                  stroke="#0B6045"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  pathLength="1"
                />
                <path
                  className="hx-core__tick"
                  d="M22 30l6 6 12-14"
                  fill="none"
                  stroke="#0B6045"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength="1"
                />
              </svg>
              <span className="hx-core__label">INVESTNOW</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
const Home = () => {
  const barRef = useRef(null);
  const bandRef = useRef(null);

  // page progress bar + band skew from scroll velocity
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    let last = window.scrollY;
    let v = 0;
    let raf = 0;
    const tick = () => {
      const y = window.scrollY;
      v += (y - last - v) * 0.1;
      last = y;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (barRef.current) {
        barRef.current.style.transform = `scaleX(${max > 0 ? (y / max).toFixed(4) : 0})`;
      }
      if (bandRef.current && !reduce) {
        const sk = Math.max(-8, Math.min(8, -v * 0.4));
        bandRef.current.style.setProperty("--hx-skew", `${sk.toFixed(2)}deg`);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="hx-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&family=Figtree:wght@400;500;600;700&display=swap');

        @property --hx-t   { syntax: '<angle>'; inherits: true;  initial-value: 0deg; }
        @property --hx-ang { syntax: '<angle>'; inherits: false; initial-value: 0deg; }

        /* ===================================================
           HOME PAGE — scoped under .hx-* namespace
           White surfaces, green ink + accents. Green is never
           used as a section background.
           =================================================== */
        .hx-page {
          --hx-ink:#0E1A15;
          --hx-g1:#073B2A;
          --hx-g2:#0B6045;
          --hx-g3:#1E9E6E;
          --hx-gold:#D4AF37;
          --hx-white:#FFFFFF;
          --hx-mist:#F5F7F6;
          --hx-muted:#5B6B63;
          --hx-line: rgba(7,59,42,.12);
          --hx-shadow: 0 1px 2px rgba(7,59,42,.05), 0 18px 40px -22px rgba(7,59,42,.22);
          background: var(--hx-white);
          color: var(--hx-ink);
          font-family:'Figtree',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
          overflow-x: clip;
        }
        .hx-page h1, .hx-page h2, .hx-page h3, .hx-page h4 {
          font-family:'Bricolage Grotesque','Figtree',sans-serif; margin:0;
        }
        .hx-page a:focus-visible, .hx-page button:focus-visible {
          outline: 2px solid var(--hx-g2); outline-offset: 3px;
        }

        /* ---------- Scroll progress ---------- */
        .hx-progress {
          position: fixed; top: 0; left: 0; right: 0; height: 3px; z-index: 60;
          pointer-events: none;
        }
        .hx-progress i {
          display:block; height:100%; transform-origin:left; transform: scaleX(0);
          background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
        }

        /* ---------- Reveal ---------- */
        .hx-reveal {
          opacity: 0;
          transform: translateY(28px) scale(.98);
          filter: blur(6px);
          transition: opacity .9s cubic-bezier(.2,.7,.2,1) var(--hx-rd,0ms),
                      transform .9s cubic-bezier(.2,.7,.2,1) var(--hx-rd,0ms),
                      filter .9s cubic-bezier(.2,.7,.2,1) var(--hx-rd,0ms);
        }
        .hx-reveal--in { opacity: 1; transform: none; filter: none; }

        /* ---------- Section heads ---------- */
        .hx-head { max-width: 760px; }
        .hx-head--center { margin: 0 auto; text-align: center; }
        .hx-eyebrow {
          display:inline-flex; align-items:center; gap:10px;
          font-size:14px; font-weight:600; color: var(--hx-g2);
          margin-bottom: 18px;
          opacity:0; transform: translateY(8px);
          transition: opacity .6s ease, transform .6s ease;
        }
        .hx-head--in .hx-eyebrow { opacity:1; transform:none; }
        .hx-eyebrow__dot {
          position:relative; width:8px; height:8px; border-radius:50%; background: var(--hx-g3);
        }
        .hx-eyebrow__dot::after {
          content:""; position:absolute; inset:-5px; border-radius:50%;
          border:1px solid var(--hx-g3); animation: hxPing 2.2s ease-out infinite;
        }
        @keyframes hxPing { 0%{transform:scale(.4);opacity:.9} 100%{transform:scale(1.6);opacity:0} }

        .hx-h2 {
          font-size: clamp(34px, 4.8vw, 62px);
          font-weight: 700; line-height: 1.04; letter-spacing: -.03em;
          color: var(--hx-ink); text-wrap: balance;
        }
        .hx-line { display:block; overflow:hidden; padding-bottom:.14em; margin-bottom:-.14em; }
        .hx-line > span {
          display:inline-block; transform: translateY(115%);
          transition: transform 1s cubic-bezier(.2,.8,.2,1) var(--d,0ms);
        }
        .hx-head--in .hx-line > span { transform: none; }
        .hx-grad {
          background: linear-gradient(90deg, var(--hx-g1) 0%, var(--hx-g3) 45%, var(--hx-g1) 90%);
          background-size: 220% 100%;
          -webkit-background-clip: text; background-clip: text;
          -webkit-text-fill-color: transparent; color: transparent;
          animation: hxShine 7s linear infinite;
        }
        @keyframes hxShine { to { background-position: -220% 0; } }
        .hx-sub {
          margin: 24px 0 0; font-size: 17px; line-height: 1.7; color: var(--hx-muted); max-width: 52ch;
          opacity:0; transform: translateY(12px);
          transition: opacity .8s ease .35s, transform .8s ease .35s;
        }
        .hx-head--center .hx-sub { margin-inline: auto; }
        .hx-head--in .hx-sub { opacity:1; transform:none; }

        /* =======================  BAND  ======================= */
        .hx-band {
          position: relative; background: var(--hx-white);
          padding: 30px 0; overflow: hidden;
          border-bottom: 1px solid var(--hx-line);
        }
        .hx-band__row {
          transform: skewX(var(--hx-skew, 0deg));
          transition: transform .15s linear;
          overflow: hidden;
        }
        .hx-band__row + .hx-band__row { margin-top: 10px; }
        .hx-band__track {
          display:inline-flex; align-items:center; gap: 34px; white-space:nowrap;
          animation: hxSlide 48s linear infinite;
          will-change: transform;
        }
        .hx-band__track--rev { animation-direction: reverse; animation-duration: 62s; }
        .hx-band:hover .hx-band__track { animation-play-state: paused; }
        .hx-band__word {
          display:inline-flex; align-items:center; gap:34px;
          font-family:'Bricolage Grotesque',sans-serif; font-weight:700;
          font-size: clamp(28px, 4.4vw, 58px); letter-spacing:-.03em; line-height:1.1;
          color: var(--hx-g1);
        }
        .hx-band__word--out { color: transparent; -webkit-text-stroke: 1.2px var(--hx-g2); }
        .hx-band__gem {
          width:12px; height:12px; flex-shrink:0; background: var(--hx-g3);
          transform: rotate(45deg); animation: hxGem 3.2s ease-in-out infinite;
        }
        @keyframes hxGem { 0%,100%{transform:rotate(45deg) scale(1)} 50%{transform:rotate(225deg) scale(.6)} }
        @keyframes hxSlide { to { transform: translateX(-25%); } }

        /* =======================  STATEMENT  ======================= */
        .hx-state { position: relative; height: 260vh; background: var(--hx-white); }
        .hx-state__pin {
          position: sticky; top: 0; height: 100vh;
          max-width: 1240px; margin: 0 auto; padding: 0 5%;
          display: grid; grid-template-columns: 1.1fr .9fr; gap: 48px; align-items: center;
        }
        .hx-state__text {
          margin: 0; font-family:'Bricolage Grotesque',sans-serif; font-weight: 600;
          font-size: clamp(26px, 3.5vw, 48px); line-height: 1.16; letter-spacing: -.025em;
          color: var(--hx-ink); text-wrap: balance;
        }
        .hx-state__word {
          --k: clamp(0, calc(var(--p, 0) * var(--n) * 1.25 - var(--i) + .4), 1);
          opacity: calc(.14 + .86 * var(--k));
          display: inline;
        }
        .hx-state__word--hot { color: var(--hx-g2); }

        .hx-merge {
          --e: clamp(0, calc(var(--p, 0) * 1.9), 1);
          position: relative; width: min(440px, 80vw); aspect-ratio: 1; margin: 0 auto;
        }
        .hx-merge__ring {
          position:absolute; inset: 2%; border-radius:50%;
          border: 1px dashed rgba(11,96,69,.35);
          animation: hxSpin 50s linear infinite;
        }
        .hx-orb {
          position:absolute; left:50%; top:50%; width: 50%; aspect-ratio: 1;
          margin: -25% 0 0 -25%; border-radius: 50%;
          border: 1.5px solid rgba(11,96,69,.6);
          background: radial-gradient(circle at 30% 28%, rgba(30,158,110,.22), rgba(11,96,69,.04) 70%);
          mix-blend-mode: multiply;
          transform: translate(
            calc((1 - var(--e)) * var(--x) + var(--fx)),
            calc((1 - var(--e)) * var(--y) + var(--fy))
          );
          animation: hxBob 6s ease-in-out var(--bob, 0s) infinite;
          display:grid; place-items:center;
        }
        @keyframes hxBob { 0%,100%{translate:0 0} 50%{translate:0 -9px} }
        .hx-orb__label {
          font-family:'Bricolage Grotesque',sans-serif; font-weight:600; font-size: 15px;
          color: var(--hx-g1);
          transform: translate(calc(var(--fx) * 1.8), calc(var(--fy) * 1.8));
          transition: transform .2s linear;
        }
        .hx-merge__core {
          position:absolute; left:50%; top:50%;
          transform: translate(-50%,-50%) scale(calc(.6 + .4 * var(--e)));
          opacity: calc(var(--e) * var(--e));
          font-family:'Bricolage Grotesque',sans-serif; font-weight:700; font-size: 20px;
          color: var(--hx-g1); background: var(--hx-white);
          padding: 10px 18px; border-radius: 999px; border: 1px solid var(--hx-g2);
          box-shadow: 0 10px 30px -12px rgba(11,96,69,.45);
          white-space: nowrap;
        }

        /* =======================  SERVICES  ======================= */
        .hx-services { position: relative; background: var(--hx-mist); }
        .hx-services__pin { position: relative; }
        .hx-services__track {
          display: flex; flex-direction: column; gap: 22px; padding: 100px 5% 110px;
        }
        .hx-services__intro { max-width: 640px; margin-bottom: 18px; }
        .hx-services__hint { display:none; }
        .hx-services__meter { display:none; }

        .hx-card-wrap { display:block; }
        .hx-card {
          --rx: 0deg; --ry: 0deg; --mx: 50%; --my: 0%;
          position: relative; overflow: hidden; isolation: isolate;
          display: flex; flex-direction: column; justify-content: space-between; gap: 28px;
          min-height: 330px; padding: 30px;
          background: var(--hx-white); border-radius: 26px;
          border: 1px solid var(--hx-line); box-shadow: var(--hx-shadow);
          color: var(--hx-ink); text-decoration: none;
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry));
          transition: transform .25s ease-out, box-shadow .45s ease, border-color .35s ease;
        }
        .hx-card:hover {
          transform: perspective(900px) rotateX(var(--rx)) rotateY(var(--ry)) translateY(-8px);
          border-color: transparent;
          box-shadow: 0 2px 4px rgba(7,59,42,.06), 0 40px 70px -30px rgba(7,59,42,.38);
        }
        .hx-card::before {
          content:""; position:absolute; inset:0; border-radius: inherit; padding: 1.6px; z-index: 2;
          pointer-events:none;
          background: conic-gradient(from var(--hx-ang), transparent 0 55%, var(--hx-g3) 78%, var(--hx-g1) 90%, transparent 100%);
          -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
          -webkit-mask-composite: xor; mask-composite: exclude;
          opacity: 0; transition: opacity .4s ease;
          animation: hxAng 3.4s linear infinite;
        }
        .hx-card:hover::before { opacity: 1; }
        @keyframes hxAng { to { --hx-ang: 360deg; } }
        .hx-card__glow {
          position:absolute; inset:0; z-index:0; pointer-events:none;
          background: radial-gradient(380px circle at var(--mx) var(--my), rgba(30,158,110,.16), transparent 60%);
          opacity:0; transition: opacity .35s ease;
        }
        .hx-card:hover .hx-card__glow { opacity: 1; }
        .hx-card__bgnum {
          position:absolute; right: 18px; top: -14px; z-index:0;
          font-family:'Bricolage Grotesque',sans-serif; font-weight:800;
          font-size: 150px; line-height:1; letter-spacing:-.05em;
          color: transparent; -webkit-text-stroke: 1px rgba(11,96,69,.16);
          transform: translateX(calc(var(--p, 0) * -60px));
          transition: -webkit-text-stroke-color .4s ease, transform .4s ease;
        }
        .hx-card:hover .hx-card__bgnum { -webkit-text-stroke-color: rgba(11,96,69,.4); transform: translateY(8px); }
        .hx-card__icon {
          position: relative; z-index:1;
          width: 58px; height: 58px; border-radius: 18px; font-size: 24px;
          display:grid; place-items:center;
          color: var(--hx-g2); background: var(--hx-white);
          border: 1px solid rgba(11,96,69,.28);
          animation: hxBob 5s ease-in-out var(--bob, 0s) infinite;
          transition: color .35s ease, border-color .35s ease, box-shadow .35s ease, background .35s ease;
        }
        .hx-card:hover .hx-card__icon {
          color: var(--hx-white); background: var(--hx-g2); border-color: var(--hx-g2);
          box-shadow: 0 14px 28px -10px rgba(11,96,69,.55);
        }
        .hx-card__body { position: relative; z-index:1; display:block; }
        .hx-card__name { font-size: 25px; font-weight: 700; letter-spacing: -.02em; margin-bottom: 10px; }
        .hx-card__desc { margin:0; font-size: 15.5px; line-height: 1.6; color: var(--hx-muted); max-width: 40ch; }
        .hx-card__more {
          position: relative; z-index:1;
          display:inline-flex; align-items:center; gap:10px; width: fit-content;
          font-size: 14.5px; font-weight: 700; color: var(--hx-g2);
        }
        .hx-card__arrow {
          width: 34px; height: 34px; border-radius:50%; display:grid; place-items:center;
          border:1px solid rgba(11,96,69,.35); color: var(--hx-g2);
          transition: transform .4s cubic-bezier(.2,.8,.2,1), background .3s ease, color .3s ease;
        }
        .hx-card__arrow svg { width: 14px; height: 14px; }
        .hx-card:hover .hx-card__arrow { transform: translateX(6px); background: var(--hx-g2); color: var(--hx-white); }

        .hx-card__spark { position:absolute; left: 30px; right: 30px; bottom: 82px; width: calc(100% - 60px); height: 54px; z-index:1; pointer-events:none; }
        .hx-card__spark-line {
          fill:none; stroke: var(--hx-g3); stroke-width: 1.8; stroke-linecap: round;
          stroke-dasharray: 1; stroke-dashoffset: 1; animation: hxDraw 4.5s ease-in-out infinite;
        }
        .hx-card__spark-dot { fill: var(--hx-g2); animation: hxDot 4.5s ease-in-out infinite; }
        @keyframes hxDraw { 0%{stroke-dashoffset:1} 55%,85%{stroke-dashoffset:0} 100%{stroke-dashoffset:-1} }
        @keyframes hxDot { 0%,45%{opacity:0} 60%,85%{opacity:1} 100%{opacity:0} }

        .hx-services__end { display:flex; align-items:center; justify-content:center; padding: 24px 0 0; }
        .hx-mag {
          position: relative; display:inline-flex; align-items:center; gap: 14px;
          padding: 16px 22px 16px 28px; border-radius: 999px;
          background: var(--hx-white); color: var(--hx-g1);
          border: 1.5px solid var(--hx-g2);
          font-weight: 700; font-size: 15.5px; text-decoration: none;
          transition: transform .25s ease-out, box-shadow .4s ease, color .3s ease;
          overflow: hidden; isolation: isolate;
        }
        .hx-mag::before {
          content:""; position:absolute; inset:0; z-index:-1; border-radius: inherit;
          background: var(--hx-g2); transform: translateY(101%);
          transition: transform .5s cubic-bezier(.2,.8,.2,1);
        }
        .hx-mag:hover { color: var(--hx-white); box-shadow: 0 22px 40px -18px rgba(11,96,69,.6); }
        .hx-mag:hover::before { transform: none; }
        .hx-mag__ring {
          position:absolute; inset:-1.5px; border-radius:inherit; pointer-events:none;
          border: 1.5px solid var(--hx-g3); animation: hxPing 2.6s ease-out infinite;
        }
        .hx-mag__arrow { width: 34px; height: 34px; border-radius:50%; display:grid; place-items:center; border:1px solid currentColor; }
        .hx-mag__arrow svg { width: 14px; height: 14px; transition: transform .3s ease; }
        .hx-mag:hover .hx-mag__arrow svg { transform: translateX(4px); }

        @media (min-width: 900px) {
          .hx-services__pin {
            position: sticky; top: 0; height: 100vh; overflow: hidden;
            display: flex; align-items: center;
          }
          .hx-services__track {
            flex-direction: row; align-items: center; gap: 28px;
            width: max-content; padding: 0 8vw 0 5vw;
            transform: translate3d(calc(var(--p, 0) * var(--hx-max, 0px) * -1), 0, 0);
            will-change: transform;
          }
          .hx-services__intro { flex: 0 0 min(560px, 44vw); margin: 0 40px 0 0; }
          .hx-services__hint {
            display:inline-flex; align-items:center; gap: 14px; margin-top: 36px;
            font-size: 14px; font-weight: 600; color: var(--hx-g2);
          }
          .hx-services__hint i { position:relative; display:block; width: 64px; height: 1.5px; background: rgba(11,96,69,.25); overflow:hidden; }
          .hx-services__hint i::after {
            content:""; position:absolute; inset:0; width: 40%; background: var(--hx-g2);
            animation: hxHint 1.8s ease-in-out infinite;
          }
          @keyframes hxHint { 0%{transform:translateX(-100%)} 100%{transform:translateX(260%)} }
          .hx-card-wrap { flex: 0 0 360px; }
          .hx-card-wrap--wide { flex-basis: 470px; }
          .hx-card-wrap--low { transform: translateY(0); margin-top: 70px; }
          .hx-card-wrap:not(.hx-card-wrap--low) { margin-bottom: 70px; }
          .hx-card { min-height: 380px; }
          .hx-services__end { flex: 0 0 340px; padding: 0; }
          .hx-services__meter {
            display:block; position:absolute; left: 5vw; right: 5vw; bottom: 34px; height: 2px;
            background: rgba(11,96,69,.14); border-radius: 2px; overflow:hidden;
          }
          .hx-services__meter i {
            display:block; height:100%; background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
            transform-origin:left; transform: scaleX(var(--p, 0));
          }
        }

        /* =======================  TIMELINE  ======================= */
        .hx-tl { position: relative; background: var(--hx-white); padding: 130px 5% 140px; overflow: hidden; }
        .hx-tl::before {
          content:""; position:absolute; inset:-40px 0;
          background-image: radial-gradient(circle at 1px 1px, rgba(11,96,69,.14) 1px, transparent 0);
          background-size: 30px 30px;
          mask-image: radial-gradient(ellipse at 50% 35%, #000 20%, transparent 70%);
          -webkit-mask-image: radial-gradient(ellipse at 50% 35%, #000 20%, transparent 70%);
          animation: hxDrift 24s linear infinite; pointer-events:none;
        }
        @keyframes hxDrift { to { background-position: 30px 30px; } }
        .hx-tl__inner { position: relative; max-width: 1120px; margin: 0 auto; }
        .hx-tl__wrap { position: relative; margin-top: 80px; }
        .hx-tl__rail { position:absolute; left:50%; top: 0; bottom: 0; width: 2px; transform: translateX(-50%); background: var(--hx-line); }
        .hx-tl__fill {
          position:absolute; inset:0; transform-origin: top; transform: scaleY(var(--p, 0));
          background: linear-gradient(to bottom, var(--hx-g1), var(--hx-g3));
        }
        .hx-tl__head {
          position:absolute; left:50%; top: calc(var(--p, 0) * 100%);
          width: 14px; height: 14px; margin: -7px 0 0 -7px; border-radius:50%;
          background: var(--hx-white); border: 3px solid var(--hx-g2);
          box-shadow: 0 0 0 6px rgba(30,158,110,.16);
          animation: hxBeat 1.8s ease-in-out infinite;
        }
        @keyframes hxBeat { 50% { box-shadow: 0 0 0 11px rgba(30,158,110,.05); } }
        .hx-tl__list { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap: 56px; position:relative; z-index:1; }
        .hx-tl__item {
          --on: clamp(0, calc((var(--p, 0) - var(--at) + .12) * 9), 1);
          display:grid; grid-template-columns: 1fr 96px 1fr; align-items:center; gap: 20px;
        }
        .hx-tl__item--l { --dir: -1; }
        .hx-tl__item--r { --dir: 1; }
        .hx-tl__num {
          grid-column: 2; grid-row: 1; justify-self:center; position: relative;
          width: 84px; height: 84px; border-radius: 50%; display:grid; place-items:center;
          background: var(--hx-white); border: 1px solid var(--hx-line); color: var(--hx-g1);
          font-family:'Bricolage Grotesque',sans-serif; font-size: 26px; font-weight: 700;
          box-shadow: 0 0 0 calc(var(--on) * 9px) rgba(30,158,110,.12);
          transform: scale(calc(.9 + .1 * var(--on)));
        }
        .hx-tl__num::before {
          content:""; position:absolute; inset:-1px; border-radius:50%;
          border: 2px solid var(--hx-g2); opacity: var(--on);
        }
        .hx-tl__num::after {
          content:""; position:absolute; inset:-9px; border-radius:50%;
          border: 1px dashed rgba(11,96,69,.4); animation: hxSpin 20s linear infinite;
          opacity: calc(.25 + .75 * var(--on));
        }
        .hx-tl__item--l .hx-tl__card { grid-column: 1; grid-row: 1; text-align: right; }
        .hx-tl__item--r .hx-tl__card { grid-column: 3; grid-row: 1; text-align: left; }
        .hx-tl__card {
          position: relative; padding: 28px 30px; border-radius: 24px;
          background: var(--hx-white); border: 1px solid var(--hx-line); box-shadow: var(--hx-shadow);
          opacity: calc(.2 + .8 * var(--on));
          transform: translateX(calc((1 - var(--on)) * var(--dir) * 56px));
          filter: blur(calc((1 - var(--on)) * 3px));
          transition: border-color .3s ease, box-shadow .4s ease;
          overflow: hidden;
        }
        .hx-tl__card::after {
          content:""; position:absolute; left:0; right:0; bottom:0; height:3px;
          background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
          transform: scaleX(0); transform-origin: left; transition: transform .6s cubic-bezier(.2,.8,.2,1);
        }
        .hx-tl__item--l .hx-tl__card::after { transform-origin: right; }
        .hx-tl__card:hover { border-color: rgba(11,96,69,.5); box-shadow: 0 30px 50px -26px rgba(7,59,42,.35); }
        .hx-tl__card:hover::after { transform: scaleX(1); }
        .hx-tl__icon {
          display:inline-grid; place-items:center; width: 44px; height: 44px; border-radius: 14px; font-size: 18px;
          color: var(--hx-g2); border: 1px solid rgba(11,96,69,.3); margin-bottom: 14px;
          transition: transform .5s cubic-bezier(.2,.8,.2,1), background .3s ease, color .3s ease;
        }
        .hx-tl__card:hover .hx-tl__icon { transform: rotate(-10deg) scale(1.1); background: var(--hx-g2); color: var(--hx-white); }
        .hx-tl__name { font-size: 25px; font-weight: 700; letter-spacing: -.02em; margin-bottom: 8px; }
        .hx-tl__text { margin:0; color: var(--hx-muted); line-height: 1.65; font-size: 15.5px; }

        /* =======================  GOALS  ======================= */
        .hx-goals { position: relative; background: var(--hx-mist); padding: 130px 5%; overflow: hidden; }
        .hx-goals__orb {
          position:absolute; border-radius:50%; filter: blur(70px); pointer-events:none; opacity:.55;
          background: radial-gradient(circle, rgba(30,158,110,.28), transparent 65%);
        }
        .hx-goals__orb--a { width: 560px; height: 560px; left:-200px; top: 10%; animation: hxFloatA 18s ease-in-out infinite alternate; }
        .hx-goals__orb--b { width: 480px; height: 480px; right:-160px; bottom: -120px; animation: hxFloatB 22s ease-in-out infinite alternate; }
        @keyframes hxFloatA { to { transform: translate(90px,-50px) scale(1.1); } }
        @keyframes hxFloatB { to { transform: translate(-80px,-60px) scale(1.15); } }
        .hx-goals__inner { position:relative; max-width: 1180px; margin: 0 auto; }
        .hx-goals__shell { display:grid; grid-template-columns: 1fr 1.15fr; gap: 40px; align-items: stretch; margin-top: 60px; }
        .hx-goals__rail { display:flex; flex-direction:column; gap: 10px; }

        .hx-pill {
          position: relative; overflow: hidden; width: 100%;
          display:grid; grid-template-columns: 42px 1fr auto; align-items:center; gap: 14px;
          padding: 14px 20px; background: var(--hx-white);
          border: 1px solid var(--hx-line); border-radius: 16px;
          font: inherit; text-align:left; color: var(--hx-ink); cursor:pointer;
          transition: transform .4s cubic-bezier(.2,.8,.2,1), border-color .3s ease, box-shadow .4s ease;
        }
        .hx-pill::before {
          content:""; position:absolute; inset:0; z-index:0;
          background: linear-gradient(90deg, rgba(30,158,110,.14), rgba(30,158,110,0));
          transform: scaleX(0); transform-origin:left; transition: transform .5s cubic-bezier(.2,.8,.2,1);
        }
        .hx-pill > * { position: relative; z-index: 1; }
        .hx-pill:hover { transform: translateX(6px); border-color: rgba(11,96,69,.45); }
        .hx-pill:hover::before { transform: scaleX(1); }
        .hx-pill--on { transform: translateX(14px); border-color: var(--hx-g2); box-shadow: 0 20px 36px -22px rgba(7,59,42,.4); }
        .hx-pill--on::before { transform: scaleX(1); }
        .hx-pill__icon {
          width: 42px; height: 42px; border-radius: 13px; display:grid; place-items:center;
          border: 1px solid rgba(11,96,69,.28); color: var(--hx-g2);
          transition: background .35s ease, color .35s ease, transform .4s ease;
        }
        .hx-pill--on .hx-pill__icon { background: var(--hx-g2); color: var(--hx-white); transform: rotate(-8deg); }
        .hx-pill__label { font-family:'Bricolage Grotesque',sans-serif; font-weight: 600; font-size: 18px; letter-spacing: -.01em; }
        .hx-pill__count { font-size: 13px; font-weight: 700; color: var(--hx-g2); opacity:.7; }
        .hx-pill__bar {
          position:absolute; left:0; bottom:0; height: 2.5px; width:100%; z-index: 2;
          background: linear-gradient(90deg, var(--hx-g1), var(--hx-g3));
          transform: scaleX(0); transform-origin:left;
        }
        .hx-pill--on .hx-pill__bar { animation: hxTimer 5s linear forwards; }
        @keyframes hxTimer { to { transform: scaleX(1); } }
        .hx-goals__shell.is-hold .hx-pill__bar,
        .hx-goals__shell.is-hold .hx-stage__arc { animation-play-state: paused; }

        .hx-stage {
          position: relative; overflow: hidden; min-height: 460px; padding: 48px;
          display:flex; flex-direction:column; justify-content:center;
          background: var(--hx-white); border: 1px solid var(--hx-line); border-radius: 30px;
          box-shadow: 0 2px 4px rgba(7,59,42,.05), 0 40px 80px -40px rgba(7,59,42,.3);
        }
        .hx-stage__dots {
          position:absolute; inset:0; pointer-events:none;
          background-image: radial-gradient(circle at 1px 1px, rgba(11,96,69,.16) 1px, transparent 0);
          background-size: 22px 22px;
          mask-image: radial-gradient(ellipse at 100% 0%, #000 0%, transparent 65%);
          -webkit-mask-image: radial-gradient(ellipse at 100% 0%, #000 0%, transparent 65%);
          animation: hxDrift 18s linear infinite;
        }
        .hx-stage__inner {
          position:relative; display:grid; grid-template-columns: 150px 1fr; gap: 36px; align-items:center;
          animation: hxStageIn .7s cubic-bezier(.2,.8,.2,1) both;
        }
        @keyframes hxStageIn { from { opacity:0; transform: translateY(16px); filter: blur(4px); } to { opacity:1; transform:none; filter:none; } }
        .hx-stage__ringwrap { position:relative; width:150px; height:150px; display:grid; place-items:center; }
        .hx-stage__ring { position:absolute; inset:0; width:100%; height:100%; }
        .hx-stage__arc { animation: hxArc 5s linear forwards; }
        @keyframes hxArc { to { stroke-dashoffset: 0; } }
        .hx-stage__orbit {
          position:absolute; inset: 14px; border-radius:50%; border: 1px dashed rgba(11,96,69,.35);
          animation: hxSpin 14s linear infinite;
        }
        .hx-stage__orbit::after {
          content:""; position:absolute; top:-4px; left:50%; width:8px; height:8px; margin-left:-4px;
          border-radius:50%; background: var(--hx-g3);
        }
        .hx-stage__icon {
          position:relative; width: 62px; height: 62px; border-radius: 20px; font-size: 26px;
          display:grid; place-items:center; color: var(--hx-g2); background: var(--hx-white);
          border: 1px solid rgba(11,96,69,.3); box-shadow: 0 14px 26px -14px rgba(11,96,69,.5);
          animation: hxBob 4s ease-in-out infinite;
        }
        .hx-stage__kicker { font-size: 13.5px; font-weight: 700; color: var(--hx-g2); }
        .hx-stage__title { font-size: 36px; font-weight: 700; letter-spacing: -.025em; margin: 8px 0 12px; }
        .hx-stage__text { color: var(--hx-muted); line-height: 1.65; font-size: 16px; max-width: 42ch; margin: 0 0 24px; }
        .hx-stage__link {
          position:relative; display:inline-flex; align-items:center; gap: 9px;
          color: var(--hx-g2); font-weight: 700; font-size: 15px; text-decoration:none;
          padding-bottom: 4px; transition: gap .3s ease;
        }
        .hx-stage__link::after {
          content:""; position:absolute; left:0; right:0; bottom:0; height:1.5px; background: var(--hx-g2);
          transform: scaleX(.3); transform-origin:left; transition: transform .4s cubic-bezier(.2,.8,.2,1);
        }
        .hx-stage__link:hover { gap: 15px; }
        .hx-stage__link:hover::after { transform: scaleX(1); }

        /* =======================  VALUES / ORBIT  ======================= */
        .hx-values { position: relative; background: var(--hx-white); padding: 130px 5% 150px; overflow: hidden; }
        .hx-values__inner { max-width: 1180px; margin: 0 auto; }
        .hx-orbit { margin-top: 56px; display:flex; justify-content:center; }
        .hx-orbit__stage {
          --S: min(760px, 94vw);
          --R: calc(var(--S) * .36);
          position: relative; width: var(--S); aspect-ratio: 1;
          animation: hxT 50s linear infinite;
        }
        .hx-orbit__stage:hover { animation-play-state: paused; }
        @keyframes hxT { from { --hx-t: 0deg; } to { --hx-t: 360deg; } }

        .hx-orbit__ring {
          position:absolute; top:50%; left:50%; border-radius:50%; pointer-events:none;
          transform: translate(-50%,-50%);
        }
        .hx-orbit__ring--still { width: 72%; aspect-ratio:1; border: 1px solid rgba(11,96,69,.14); }
        .hx-orbit__ring--spin {
          width: 72%; aspect-ratio:1; border: 1.5px dashed rgba(11,96,69,.4);
          animation: hxSpinC 60s linear infinite reverse;
        }
        .hx-orbit__ring--scroll {
          width: 46%; aspect-ratio:1; border: 1px solid rgba(11,96,69,.3);
          border-top-color: var(--hx-g3); border-right-color: var(--hx-g3);
          transform: translate(-50%,-50%) rotate(calc(var(--p, 0) * 360deg));
        }
        @keyframes hxSpinC { to { transform: translate(-50%,-50%) rotate(360deg); } }

        .hx-node {
          position:absolute; left:50%; top:50%; width: 214px; z-index: 3;
          transform:
            translate(-50%,-50%)
            rotate(calc(var(--hx-t) + var(--a)))
            translateX(var(--R))
            rotate(calc((var(--hx-t) + var(--a)) * -1));
        }
        .hx-node__card {
          display:flex; align-items:center; gap: 12px; padding: 13px 16px; border-radius: 20px;
          background: var(--hx-white); border: 1px solid var(--hx-line); box-shadow: var(--hx-shadow);
          transition: transform .4s cubic-bezier(.2,.8,.2,1), border-color .3s ease, box-shadow .4s ease;
        }
        .hx-node__card:hover {
          transform: scale(1.08); border-color: var(--hx-g2);
          box-shadow: 0 26px 44px -22px rgba(7,59,42,.45);
        }
        .hx-node__icon {
          width: 38px; height: 38px; border-radius: 12px; flex-shrink:0; display:grid; place-items:center;
          color: var(--hx-g2); border: 1px solid rgba(11,96,69,.3); font-size: 15px;
          transition: background .3s ease, color .3s ease, transform .4s ease;
        }
        .hx-node__card:hover .hx-node__icon { background: var(--hx-g2); color: var(--hx-white); transform: rotate(-10deg); }
        .hx-node__body { display:flex; flex-direction:column; line-height:1.3; min-width:0; }
        .hx-node__body strong { font-family:'Bricolage Grotesque',sans-serif; font-weight: 700; font-size: 15px; }
        .hx-node__body small { font-size: 12px; color: var(--hx-muted); margin-top: 2px; }

        .hx-core {
          position:absolute; top:50%; left:50%; transform: translate(-50%,-50%);
          width: 150px; height: 150px; border-radius:50%; display:grid; place-items:center; z-index: 2;
          background: var(--hx-white); border: 1.5px solid var(--hx-g2);
          box-shadow: 0 24px 50px -22px rgba(11,96,69,.55);
        }
        .hx-core svg { width: 56px; height: 56px; margin-top: -10px; }
        .hx-core__shield, .hx-core__tick { stroke-dasharray: 1; stroke-dashoffset: 1; animation: hxDrawLoop 5s ease-in-out infinite; }
        .hx-core__tick { animation-delay: .5s; }
        @keyframes hxDrawLoop { 0%{stroke-dashoffset:1} 35%,80%{stroke-dashoffset:0} 100%{stroke-dashoffset:-1} }
        .hx-core__pulse {
          position:absolute; inset:-1.5px; border-radius:50%; border: 1.5px solid var(--hx-g3);
          animation: hxCorePulse 3s ease-out infinite;
        }
        .hx-core__pulse--b { animation-delay: 1.5s; }
        @keyframes hxCorePulse { 0%{transform:scale(1);opacity:.8} 100%{transform:scale(1.9);opacity:0} }
        .hx-core__label { position:absolute; bottom: 24px; font-family:'Bricolage Grotesque',sans-serif; font-size: 11px; font-weight:700; letter-spacing: .18em; color: var(--hx-g2); }

        @keyframes hxSpin { to { transform: rotate(360deg); } }

        /* =======================  Responsive  ======================= */
        @media (max-width: 1024px) {
          .hx-goals__shell { grid-template-columns: 1fr; }
          .hx-stage { min-height: 400px; }
        }
        @media (max-width: 900px) {
          .hx-state__pin { grid-template-columns: 1fr; gap: 18px; align-content: center; }
          .hx-merge { width: min(300px, 70vw); }
          .hx-card-wrap--low { margin-top: 0; }
          .hx-card { min-height: 290px; }
          .hx-card__bgnum { font-size: 110px; transform: none; }

          .hx-tl { padding: 100px 6% 110px; }
          .hx-tl__rail { left: 32px; }
          .hx-tl__head { left: 32px; }
          .hx-tl__item { grid-template-columns: 64px 1fr; gap: 16px; align-items: start; }
          .hx-tl__num { grid-column: 1; width: 64px; height: 64px; font-size: 20px; }
          .hx-tl__item--l .hx-tl__card,
          .hx-tl__item--r .hx-tl__card { grid-column: 2; text-align: left; }
          .hx-tl__item--l, .hx-tl__item--r { --dir: 1; }
          .hx-tl__item--l .hx-tl__card::after { transform-origin: left; }
        }
        @media (max-width: 760px) {
          .hx-orbit__stage { width: 100%; aspect-ratio: auto; display:grid; gap: 12px; animation: none; }
          .hx-orbit__ring { display:none; }
          .hx-node { position: static; width: auto; transform: none; }
          .hx-core { position: relative; top:auto; left:auto; transform:none; margin: 0 auto 18px; order:-1; }
        }
        @media (max-width: 640px) {
          .hx-goals { padding: 90px 6%; }
          .hx-stage { padding: 30px 24px; }
          .hx-stage__inner { grid-template-columns: 1fr; justify-items: start; }
          .hx-stage__title { font-size: 28px; }
          .hx-values { padding: 90px 6% 100px; }
          .hx-pill--on { transform: translateX(8px); }
        }

        @media (prefers-reduced-motion: reduce) {
          .hx-page *, .hx-page *::before, .hx-page *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          .hx-reveal { opacity: 1 !important; transform: none !important; filter: none !important; }
          .hx-line > span { transform: none !important; }
          .hx-eyebrow, .hx-sub { opacity: 1 !important; transform: none !important; }
          .hx-stage__arc { stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="hx-progress" aria-hidden="true">
        <i ref={barRef} />
      </div>

      {/* Hero (unchanged) */}
      <div className="hx-hero-slot">
        <HeroSection />
      </div>

      <HxBand innerRef={bandRef} />
      <HxStatementSection />
      <HxServicesSection />
      <HxTimelineSection />
      <HxGoalsSection />
      <HxValuesSection />

      <CTASection
        title="Plan today. Build tomorrow."
        subtitle="Financial solutions designed around your goals, priorities, and future security."
        primaryBtnText="Explore Our Services"
        primaryBtnLink="/services"
        secondaryBtnText="Talk to Us"
        secondaryBtnLink="/contact"
      />
    </div>
  );
};

export default Home;
```

===============================================================================
FILE: src/Guestlayout/LaserFlow.css
===============================================================================

```css
.laser-flow-container {
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.laser-flow-canvas {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
}
```

===============================================================================
FILE: src/Guestlayout/LaserFlow.jsx
===============================================================================

```jsx
"use client";

import { useEffect, useRef } from "react";

import "./LaserFlow.css";

const VERTEX = `#version 300 es
in vec2 aPosition;
void main() {
  gl_Position = vec4(aPosition, 0.0, 1.0);
}`;

const FRAGMENT = `#version 300 es
precision highp float;
out vec4 outColor;
uniform vec2 uResolution;
uniform float uDpr;
uniform float uScale;
uniform float uTime;
uniform float uBeamX;
uniform vec4 uSurface;
uniform float uRadius;
uniform vec3 uIntro;
uniform vec4 uPour;
uniform vec2 uRun;
uniform vec4 uLens;
uniform sampler2D uReveal;
uniform vec4 uRevealMap;
uniform vec2 uRevealInfo;
uniform float uAtmosphere;
uniform vec4 uAmount;
uniform vec4 uShape;
uniform vec4 uExtra;
uniform float uTheme;
uniform vec3 uTint[16];

#define BEAM uTint[0]
#define LEFT uTint[1]
#define RIGHT uTint[2]
#define CYAN uTint[3]
#define PINK uTint[4]
#define LILAC uTint[5]
#define SKY uTint[6]
#define PURPLE uTint[7]
#define DEEP uTint[8]
#define MIST uTint[9]
#define NAVY uTint[10]
#define WARM uTint[11]
#define EMBER uTint[12]
#define WHITE uTint[13]
#define HAZE uTint[14]
#define LAVENDER uTint[15]

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  mat2 m = mat2(1.6, 1.2, -1.2, 1.6);
  for (int i = 0; i < 5; i++) {
    v += a * noise(p);
    p = m * p;
    a *= 0.5;
  }
  return v;
}

float sq(float x) {
  return x * x;
}

float roundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

vec3 spill(float e, float fall, float strength, float front, float t, out vec3 glow) {
  glow = vec3(0.0);
  if (strength < 0.0005) return vec3(0.0);
  float f = max(fall, 0.0);
  float d = max(e, 0.0);
  float u = d / (6.0 + 0.28 * f);
  float start = smoothstep(-6.0, 12.0, fall);
  float fade = exp(-sq(max(f - 125.0, 0.0) / 40.0));
  float streak = 0.88 + 0.24 * noise(vec2(u * 6.0, f / 22.0 - t * 1.7));
  float bright = pow(strength, 1.5);
  float soft = sqrt(strength);
  float warmth = smoothstep(90.0, 130.0, f);
  vec3 coreK = mix(WHITE, WARM, warmth * exp(-d / 9.0));
  float core = mix(9.0, 2.6, warmth) * exp(-sq(d / (3.5 + 0.04 * f))) * exp(-sq(max(f - 130.0, 0.0) / 38.0));
  float wall = 24.0 * exp(-sq(d / 1.1)) * exp(-sq(max(f - 100.0, 0.0) / 30.0));
  float bandCenter = 0.7 - 0.3 * smoothstep(30.0, 110.0, f);
  float offset = u - bandCenter;
  float decay = (1.05 - bandCenter) / 1.31;
  float profile = offset < 0.0 ? exp(-sq(offset / 0.3)) : exp(-offset / decay);
  profile *= 1.0 - smoothstep(1.0, 1.4, u);
  vec3 bandA = mix(CYAN, PINK, smoothstep(50.0, 75.0, f));
  bandA = mix(bandA, LILAC, smoothstep(100.0, 125.0, f));
  vec3 bandB = mix(SKY, PURPLE, smoothstep(50.0, 75.0, f));
  vec3 fanK = mix(bandA, bandB, smoothstep(0.06, 0.18, offset));
  fanK = mix(fanK, DEEP, smoothstep(0.22, 0.42, offset));
  vec3 thread = WHITE * wall * bright + coreK * core * streak * bright;
  glow += fanK * 4.5 * profile * fade * streak * bright;
  glow += MIST * 0.7 * exp(-max(u - 1.0, 0.0) / 0.9) * smoothstep(0.7, 1.2, u) * fade * soft;
  glow += EMBER * 0.35 * exp(-sq((f - 165.0) / 22.0)) * exp(-d / 25.0) * bright;
  float lag = u * (6.0 + 0.28 * f) * 0.35;
  float reveal = 1.0 - smoothstep(front - 70.0, front + 8.0, f + lag);
  glow *= start * reveal;
  return thread * start * reveal;
}

vec3 easeLight(vec3 light, float amount) {
  return -log(max(1.0 - amount * (1.0 - exp(-light)), vec3(0.0001)));
}

void main() {
  vec2 frag = vec2(gl_FragCoord.x, uResolution.y * uDpr - gl_FragCoord.y) / uDpr;
  vec2 p = frag / uScale;
  float t = uTime;
  float bx = uBeamX / uScale;
  float sl = uSurface.x / uScale;
  float sy = uSurface.y / uScale;
  float sr = uSurface.z / uScale;
  float sb = uSurface.w / uScale;
  float radius = uRadius / uScale;
  float dx = p.x - bx;
  float adx = abs(dx);
  float h = sy - p.y;
  float hp = max(h, 0.0);
  float above = smoothstep(-0.5, 0.5, h);
  float side = smoothstep(-24.0, 24.0, dx);
  vec3 sideK = mix(mix(LAVENDER, LEFT, smoothstep(40.0, 140.0, adx)), RIGHT, side);
  float beamWidth = uShape.x;
  float flare = uShape.y;
  float spread = 250.0 * uShape.z;
  float reachL = max(bx - sl, 1.0);
  float reachR = max(sr - bx, 1.0);
  float reach = dx < 0.0 ? reachL : reachR;
  float layerLen = clamp(0.29 * reach, 20.0, 100.0) * sqrt(uShape.z);
  float run = uRun.x;
  float runMask = 1.0 - smoothstep(run - 34.0, run + 6.0, adx);
  float bead = exp(-sq((adx - run + 16.0) / (18.0 + 0.04 * run))) * uRun.y;
  float flowMask = (1.0 - smoothstep(0.75 * spread, 1.1 * spread, adx)) * runMask;
  float edgeMask = (1.0 - smoothstep(0.8 * spread, 1.25 * spread, adx)) * runMask;
  float bloom = uIntro.y;
  vec2 center = vec2((sl + sr) * 0.5, (sy + sb) * 0.5);
  vec2 halfSize = vec2((sr - sl) * 0.5, (sb - sy) * 0.5);
  float sd = roundBox(p - center, halfSize, radius);
  float outline = max(sd, 0.0);
  float below = max(p.y - sy - radius, 0.0);
  float hug = smoothstep(-0.5, 0.5, sd) * exp(-sq(below / 14.0));
  float hugWide = smoothstep(-0.5, 0.5, sd) * exp(-sq(below / 40.0));

  vec3 col = vec3(0.0);

  float breathe = 1.0 + uExtra.x * (0.12 * sin(t * 1.5708) + 0.08 * (noise(vec2(t * 0.5, 3.0)) - 0.5));

  float front = uIntro.x / uScale;
  float drop = smoothstep(front + 10.0, front - 110.0, p.y);
  float falling = 1.0 - smoothstep(sy - 24.0, sy, front);
  float top = mix(0.3, 1.0, smoothstep(0.0, 0.3 * sy, p.y));
  float beamCore = 24.0 * exp(-adx / (2.0 * beamWidth));
  float beamHalo = 1.3 * exp(-adx / (6.0 * beamWidth)) + 0.3 * exp(-adx / (22.0 * beamWidth));
  vec3 haloK = mix(BEAM, sideK, exp(-hp / 80.0));
  col += (BEAM * beamCore + haloK * beamHalo) * top * above * drop;
  float head = exp(-sq((p.y - front) / 24.0)) * falling;
  col += mix(WHITE, BEAM, 0.35) * head * (7.0 * exp(-adx / (2.6 * beamWidth)) + 1.0 * exp(-adx / (14.0 * beamWidth)));

  float psi = adx * (outline + 1.0);
  float rise = max(hp - 17.9 * flare, 0.0);
  float skirtAmp = 16.6 * (exp(-sq(rise / (11.8 * flare))) + 0.3 * exp(-rise / (60.0 * flare)));
  float skirtSpread = mix(134.0, 155.0, side) * breathe * flare * flare * mix(0.35, 1.0, min(bloom, 1.0)) * max(bloom, 1.0);
  float skirt = skirtAmp * exp(-psi / skirtSpread) * exp(-sq(adx / (max(layerLen, 60.0 * sqrt(uShape.z)) * 1.48))) * hug;
  col += sideK * skirt * flowMask * min(bloom, 1.0);

  float layer = 12.0 * exp(-adx / layerLen) * exp(-outline / (0.19 * layerLen)) * (1.0 + 0.4 * bead);
  col += sideK * layer * hug * flowMask * min(bloom, 1.0);
  float washMask = smoothstep(sl - 60.0, sl + 6.0, p.x) * (1.0 - smoothstep(sr - 6.0, sr + 45.0, p.x));
  float wash = 1.4 * exp(-adx / 100.0) * exp(-outline / 30.0);
  col += mix(BEAM, sideK, 0.25) * wash * hugWide * washMask * flowMask * min(bloom, 1.0);
  float highWash = 0.7 * exp(-adx / 140.0) * exp(-outline / 60.0);
  col += mix(BEAM, NAVY, 0.5) * highWash * hugWide * washMask * runMask * min(bloom, 1.0);

  float sideSign = dx < 0.0 ? 0.0 : 1.0;
  float along = 0.5 * log((hp + 1.0) / (adx + 1.0));
  float lineScale = 6.0;
  float lp = log(max(psi, 1.0) / (120.0 * flare * flare)) * lineScale;
  float lineIndex = floor(lp) + sideSign * 97.0;
  float wobble = 0.22 * (noise(vec2(lineIndex * 3.7, t * 0.4 + along)) - 0.5);
  float lf = fract(lp + wobble) - 0.5;
  float gradient = lineScale * length(vec2(hp + 1.0, adx)) / max(psi, 1.0) / uScale;
  float halfWidth = max(0.35 * gradient, 0.0001);
  float drawWidth = max(halfWidth, 0.6 * gradient);
  float lineShape = exp(-lf * lf / (drawWidth * drawWidth)) * (halfWidth / drawWidth);
  float lineOn = step(0.3, hash(vec2(lineIndex, 1.3)));
  float lineFlow = smoothstep(0.25, 0.85, noise(vec2(lineIndex * 5.3 + 2.0, along * 3.0 + t * 1.1)));
  float flareArea = 120.0 * flare * flare;
  float lineEnvelope = smoothstep(0.85 * flareArea, 1.4 * flareArea, psi) * (1.0 - smoothstep(3.2 * flareArea, 7.5 * flareArea, psi));
  lineEnvelope *= exp(-adx / (layerLen * 1.5)) * hug * flowMask * (1.0 - smoothstep(35.0 * flare, 80.0 * flare, hp));
  float lineBright = mix(0.35, 1.0, hash(vec2(lineIndex, 4.0)));
  col += mix(sideK, WHITE, 0.6) * lineShape * lineOn * lineFlow * lineEnvelope * lineBright * 2.6 * uAmount.w * min(bloom, 1.0);

  float edgeGlow = 22.8 * exp(-sq(adx / (150.0 * uShape.z))) * edgeMask * (1.0 + 0.9 * bead);
  float onTop = 1.0 - smoothstep(sy + radius, sy + radius + 10.0, p.y);
  float edgeLine = (exp(-sq(max(sd, 0.0) / 0.9)) + 0.12 * exp(-max(sd, 0.0) / 3.0)) * edgeGlow * onTop;
  col += mix(sideK, WHITE, 0.6) * edgeLine * min(bloom, 1.0);

  float pour = uShape.w;
  float baseline = exp(-sq(130.0 / 150.0));
  float strengthR = exp(-sq(reachR / (150.0 * uShape.z))) * (1.0 - smoothstep(0.8 * spread, 1.25 * spread, reachR)) / baseline * pour;
  float strengthL = exp(-sq(reachL / (150.0 * uShape.z))) * (1.0 - smoothstep(0.8 * spread, 1.25 * spread, reachL)) / baseline * pour;
  float fallY = p.y - sy - 0.3 * radius;
  float rightHalf = smoothstep(center.x - 4.0, center.x + 4.0, p.x);
  float haloR = exp(-length(p - vec2(sr - 0.3 * radius, sy + 0.3 * radius)) / 40.0) * sqrt(strengthR);
  float haloL = exp(-length(p - vec2(sl + 0.3 * radius, sy + 0.3 * radius)) / 40.0) * sqrt(strengthL);
  vec3 glowR;
  vec3 glowL;
  col += spill(sd, fallY, strengthR, uPour.y, t, glowR) * rightHalf;
  col += spill(sd, fallY, strengthL, uPour.x, t, glowL) * (1.0 - rightHalf);
  col += easeLight(glowR * rightHalf + NAVY * 0.9 * haloR, uPour.w);
  col += easeLight(glowL * (1.0 - rightHalf) + NAVY * 0.9 * haloL, uPour.z);

  vec2 toLens = frag - uLens.xy;
  float lens = exp(-dot(toLens, toLens) / sq(uLens.z)) * uLens.w;
  col *= 1.0 + 0.35 * lens * hug;
  float fogAmount = uAmount.y * uAtmosphere;
  float near = exp(-adx / 150.0);
  float envelope = near * (0.3 + 0.4 * exp(-hp / 50.0) + 1.2 * exp(-p.y / 120.0));
  if (fogAmount > 0.001 && h > -2.0 && envelope * max(0.25, 6.0 * exp(-adx / 50.0)) > 0.002) {
    vec2 fq = vec2(dx / 1.7, h) / 85.0 + vec2(t * 0.012, -t * 0.03) + uExtra.zw;
    vec2 fw = vec2(fbm(fq * 1.3 + vec2(1.7, 9.2) + t * 0.03), fbm(fq * 1.3 + vec2(8.3, 2.8) - t * 0.025));
    float cloud = fbm(fq + 1.4 * fw);
    float density = smoothstep(0.5, 0.78, cloud);
    float lit = exp(-adx / 50.0);
    float fogMask = smoothstep(-2.0, 20.0, h);
    float reached = smoothstep(front + 80.0, front - 40.0, p.y);
    vec3 fog = (HAZE * 0.45 + BEAM * 6.0 * lit * reached) * density * envelope * fogMask;
    float surfaceLit = exp(-adx / (layerLen * 1.3)) * exp(-outline / 28.0) * hugWide * flowMask * washMask * min(bloom, 1.0);
    fog += sideK * 2.2 * surfaceLit * (smoothstep(0.38, 0.72, cloud) - 0.35) * fogMask;
    float smoke = smoothstep(0.3, 0.75, cloud);
    fog += BEAM * 0.35 * exp(-adx / (22.0 * beamWidth)) * (0.35 + 0.9 * smoke) * fogMask * top * drop;
    col += fog * fogAmount * (1.0 + 1.2 * lens) * mix(1.0, 0.45, uTheme);
  }

  if (uRevealInfo.y > 0.001 && uLens.w > 0.002) {
    vec2 toReveal = frag - uLens.xy;
    float reveal = exp(-dot(toReveal, toReveal) / sq(uRevealInfo.x)) * uLens.w;
    vec2 uv = frag * uRevealMap.xy + uRevealMap.zw;
    float onImage = step(0.0, uv.x) * step(uv.x, 1.0) * step(0.0, uv.y) * step(uv.y, 1.0);
    vec4 ui = texture(uReveal, uv);
    float ink = max(ui.r, max(ui.g, ui.b)) * onImage;
    float lit = clamp(col.b * 0.9, 0.0, 1.0) * (1.0 - smoothstep(0.9, 2.2, col.b));
    float clearance = smoothstep(60.0 * sqrt(beamWidth), 150.0 * sqrt(beamWidth), adx);
    col += mix(BEAM, WHITE, 0.4) * ink * reveal * lit * clearance * uRevealInfo.y * 2.2;
  }

  float haze = col.b;
  float dotGrid = 1.0 - smoothstep(0.16, 0.32, length(fract(frag / 3.0) - 0.5));
  col += BEAM * dotGrid * clamp(haze, 0.0, 1.5) * (1.0 - smoothstep(1.5, 4.0, haze)) * (0.18 + 0.3 * lens) * uExtra.y;
  if (lens > 0.002) {
    vec2 drift = frag - vec2(0.0, t * 14.0);
    vec2 sparkCell = floor(drift / 7.0);
    vec2 sparkPos = (sparkCell + 0.2 + 0.6 * vec2(hash(sparkCell + 5.1), hash(sparkCell + 2.3))) * 7.0;
    float sparkDist = length(drift - sparkPos);
    float sparkOn = step(0.8, hash(sparkCell + 8.8));
    float sparkTwinkle = 0.5 + 0.5 * sin(t * 5.0 + hash(sparkCell + 3.7) * 6.283);
    col += WHITE * exp(-sparkDist * sparkDist / 0.35) * sparkOn * sparkTwinkle * lens * clamp(haze * 1.5, 0.0, 1.0) * 1.6 * uAmount.z;
  }

  float dustAmount = uAmount.z;
  if (dustAmount > 0.001) {
    float dustLp = log(max(psi, 1.0) / (120.0 * flare * flare)) * 2.2;
    vec2 flowCell = vec2(dustLp / 1.1, (along + t * 0.22) / 0.06);
    vec2 cellId = floor(flowCell) + vec2(sideSign * 131.0, 0.0);
    vec2 cellJitter = vec2(hash(cellId + 1.7), hash(cellId + 8.3));
    vec2 particleFlow = (floor(flowCell) + 0.1 + cellJitter * 0.8) * vec2(1.1, 0.06);
    float particlePsi = 120.0 * flare * flare * exp(particleFlow.x / 2.2);
    float particleAlong = particleFlow.y - t * 0.22;
    float particleX = sqrt(particlePsi * exp(-2.0 * particleAlong)) - 1.0;
    float particleH = sqrt(particlePsi * exp(2.0 * particleAlong)) - 1.0;
    float particleDist = length(vec2(adx - particleX, hp - particleH)) * uScale;
    float particleOn = step(0.62, hash(cellId + 3.1));
    float particleTwinkle = 0.5 + 0.5 * sin(t * 5.0 + hash(cellId + 9.2) * 6.283);
    float dustZone = exp(-sq(log(max(psi, 1.0) / (200.0 * flare * flare)) / 0.55)) * hug * flowMask * smoothstep(0.0, 6.0, outline);
    col += WHITE * exp(-particleDist * particleDist / 0.3) * particleOn * particleTwinkle * dustZone * 3.0 * dustAmount * min(bloom, 1.0);

    vec2 glitterCell = vec2(dx / 3.0, (p.y - t * 26.0) / 9.0);
    vec2 glitterId = floor(glitterCell);
    vec2 glitterJitter = vec2(hash(glitterId + 4.4), hash(glitterId + 2.9));
    vec2 glitterPos = (glitterId + 0.15 + glitterJitter * 0.7) * vec2(3.0, 9.0);
    float glitterDist = length(vec2(dx, p.y - t * 26.0) - glitterPos) * uScale;
    float glitterOn = step(0.7, hash(glitterId + 6.6));
    float glitterTwinkle = 0.5 + 0.5 * sin(t * 6.0 + hash(glitterId + 1.1) * 6.283);
    float glitterZone = exp(-adx / (5.0 * beamWidth)) * smoothstep(1.5, 4.0, adx / beamWidth) * above * smoothstep(25.0, 70.0, hp) * top * drop;
    col += WHITE * exp(-glitterDist * glitterDist / 0.25) * glitterOn * glitterTwinkle * glitterZone * 2.2 * dustAmount * uAtmosphere;
  }

  col *= uAmount.x * (1.0 + uIntro.z * 0.9 * exp(-length(vec2(dx, h * 1.6)) / 70.0));
  col *= smoothstep(-0.75, 0.25, sd * uScale);

  vec3 emit = 1.0 - exp(-col * mix(1.0, 0.6, uTheme));
  float peak = max(emit.r, max(emit.g, emit.b));
  if (uTheme > 0.5) {
    float low = min(emit.r, min(emit.g, emit.b));
    float chroma = peak - low;
    vec3 hue = (emit - low) / max(chroma, 0.0001);
    float alpha = clamp(pow(chroma, 1.35) * 1.3, 0.0, 1.0) * 0.9;
    outColor = vec4((hue * 0.82 + 0.06) * alpha, alpha);
  } else {
    outColor = vec4(emit, peak);
  }
}`;

const TINTS = [
  [0, 1],
  [-11.5, 0.77],
  [9.5, 0.95],
  [-53.5, 0.79],
  [39.5, 0.77],
  [16, 0.81],
  [-16.3, 0.92],
  [13.3, 0.96],
  [3, 1.01],
  [1, 0.68],
  [1, 1.15],
  [142.5, 0.51],
  [113.6, 0.28],
  [-7.5, 0.13],
  [-2.7, 0.32],
  [7.5, 0.81],
];

const BASE_SATURATION = 0.78;
const MAX_RENDER_DIM = 2048;
const INTRO_DROP = 1.25;
const INTRO_END = 5;

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const easeOut = (x) => 1 - Math.pow(1 - clamp(x, 0, 1), 3);
const spring = (time) => {
  const omega = 8;
  const zeta = 0.62;
  const damped = omega * Math.sqrt(1 - zeta * zeta);
  return (
    1 -
    Math.exp(-zeta * omega * time) *
      (Math.cos(damped * time) +
        ((zeta * omega) / damped) * Math.sin(damped * time))
  );
};

const toHsv = ([r, g, b]) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const delta = max - min;
  let hue = 0;
  if (delta > 0) {
    if (max === r) hue = ((g - b) / delta) % 6;
    else if (max === g) hue = (b - r) / delta + 2;
    else hue = (r - g) / delta + 4;
  }
  return [(hue * 60 + 360) % 360, max > 0 ? delta / max : 0];
};

const fromHsv = (hue, saturation) => {
  const h = (((hue % 360) + 360) % 360) / 60;
  const c = saturation;
  const x = c * (1 - Math.abs((h % 2) - 1));
  const m = 1 - c;
  const [r, g, b] =
    h < 1
      ? [c, x, 0]
      : h < 2
        ? [x, c, 0]
        : h < 3
          ? [0, c, x]
          : h < 4
            ? [0, x, c]
            : h < 5
              ? [x, 0, c]
              : [c, 0, x];
  return [r + m, g + m, b + m];
};

const buildTints = (rgb) => {
  const [hue, saturation] = toHsv(rgb);
  const strength = saturation / BASE_SATURATION;
  const data = new Float32Array(TINTS.length * 3);
  TINTS.forEach(([shift, scale], index) => {
    data.set(
      fromHsv(hue + shift, clamp(BASE_SATURATION * scale * strength, 0, 1)),
      index * 3,
    );
  });
  return data;
};

const compile = (gl, type, source) => {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (gl.getShaderParameter(shader, gl.COMPILE_STATUS)) return shader;
  gl.deleteShader(shader);
  return null;
};

const link = (gl, vertexSource, fragmentSource) => {
  const vertex = compile(gl, gl.VERTEX_SHADER, vertexSource);
  const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentSource);
  const program = gl.createProgram();
  if (!vertex || !fragment || !program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);
  if (gl.getProgramParameter(program, gl.LINK_STATUS)) return program;
  gl.deleteProgram(program);
  return null;
};

const locate = (gl, program, names) => {
  const result = {};
  for (const name of names) result[name] = gl.getUniformLocation(program, name);
  return result;
};

export const LaserFlow = ({
  surfaceRef,
  beamPosition = 0.6,
  surfaceLevel = 1,
  color = "#3847ff",
  intensity = 1.8,
  beamWidth = 1.5,
  flare = 1.5,
  spread = 1.5,
  spill = 1,
  fog = 0.2,
  dust = 1.6,
  streaks = 1.5,
  dots = 1,
  pulse = 1.5,
  speed = 1.5,
  seed = 3,
  mouseInteraction = true,
  revealImage,
  revealRadius = 220,
  revealOpacity = 0.6,
  intro = true,
  theme = "dark",
  paused = false,
  dpr,
  ...rest
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const wakeRef = useRef(null);
  const settings = {
    surfaceRef,
    beamPosition: clamp(beamPosition, 0, 1),
    surfaceLevel: clamp(surfaceLevel, 0, 1),
    color: String(color),
    intensity: Math.max(0, intensity),
    beamWidth: clamp(beamWidth, 0.2, 5),
    flare: clamp(flare, 0.2, 4),
    spread: clamp(spread, 0.1, 4),
    spill: Math.max(0, spill),
    fog: Math.max(0, fog),
    dust: Math.max(0, dust),
    streaks: Math.max(0, streaks),
    dots: Math.max(0, dots),
    pulse: Math.max(0, pulse),
    speed,
    seed,
    mouseInteraction,
    revealImage,
    revealRadius: Math.max(1, revealRadius),
    revealOpacity: clamp(revealOpacity, 0, 1),
    intro,
    theme,
    paused,
    dpr,
  };
  const settingsRef = useRef(settings);
  settingsRef.current = settings;

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const gl = canvas?.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: true,
      antialias: false,
      depth: false,
      stencil: false,
    });
    if (!container || !canvas || !gl) return undefined;

    const program = link(gl, VERTEX, FRAGMENT);
    if (!program) return undefined;

    const uniforms = locate(gl, program, [
      "uResolution",
      "uDpr",
      "uScale",
      "uTime",
      "uBeamX",
      "uSurface",
      "uRadius",
      "uIntro",
      "uPour",
      "uRun",
      "uLens",
      "uReveal",
      "uRevealMap",
      "uRevealInfo",
      "uAtmosphere",
      "uAmount",
      "uShape",
      "uExtra",
      "uTheme",
      "uTint",
    ]);

    const vao = gl.createVertexArray();
    const buffer = gl.createBuffer();
    gl.bindVertexArray(vao);
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );
    const positionLocation = gl.getAttribLocation(program, "aPosition");
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);

    const revealTexture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, revealTexture);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      1,
      1,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      new Uint8Array([0, 0, 0, 0]),
    );
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);

    const probe = document.createElement("canvas");
    probe.width = 1;
    probe.height = 1;
    const probeContext = probe.getContext("2d", { willReadFrequently: true });
    const reduce =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const state = {
      time: 0,
      introTime: settingsRef.current.intro && !reduce ? 0 : INTRO_END,
      width: 1,
      height: 1,
      ratio: 1,
      colorKey: "",
      tints: buildTints([0.22, 0.28, 1]),
      observed: null,
      pointer: { x: 0, y: 0, inside: false },
      lens: { x: 0, y: 0, vx: 0, vy: 0, strength: 0, placed: false },
      reveal: { src: "", ready: false, width: 1, height: 1, image: null },
    };
    let raf = 0;
    let last = 0;
    let visible = true;
    let alive = true;

    const toRgb = (value) => {
      if (!probeContext) return [0.22, 0.28, 1];
      probeContext.clearRect(0, 0, 1, 1);
      probeContext.fillStyle = "#3847ff";
      probeContext.fillStyle = value;
      probeContext.fillRect(0, 0, 1, 1);
      const [r, g, b] = probeContext.getImageData(0, 0, 1, 1).data;
      return [r / 255, g / 255, b / 255];
    };

    const resolveColor = (s) => {
      if (s.color === state.colorKey) return;
      state.colorKey = s.color;
      state.tints = buildTints(toRgb(s.color));
    };

    const resolveReveal = (s) => {
      const src = s.revealImage ? String(s.revealImage) : "";
      const reveal = state.reveal;
      if (src === reveal.src) return;
      reveal.src = src;
      reveal.ready = false;
      if (reveal.image) reveal.image.onload = null;
      if (!src) return;
      const image = new Image();
      image.crossOrigin = "anonymous";
      image.decoding = "async";
      image.onload = () => {
        if (!alive || reveal.src !== src) return;
        const width = image.naturalWidth || image.width || 1;
        const height = image.naturalHeight || image.height || 1;
        const scale = Math.min(1, 2048 / Math.max(width, height));
        const sheet = document.createElement("canvas");
        sheet.width = Math.max(1, Math.round(width * scale));
        sheet.height = Math.max(1, Math.round(height * scale));
        sheet
          .getContext("2d")
          ?.drawImage(image, 0, 0, sheet.width, sheet.height);
        gl.bindTexture(gl.TEXTURE_2D, revealTexture);
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        gl.texImage2D(
          gl.TEXTURE_2D,
          0,
          gl.RGBA,
          gl.RGBA,
          gl.UNSIGNED_BYTE,
          sheet,
        );
        gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
        reveal.width = sheet.width;
        reveal.height = sheet.height;
        reveal.ready = true;
        wakeRef.current?.();
      };
      image.src = src;
      reveal.image = image;
    };

    const measure = (s, width, height) => {
      const element = s.surfaceRef?.current ?? null;
      if (element !== state.observed) {
        if (state.observed) resizeObserver.unobserve(state.observed);
        if (element) resizeObserver.observe(element);
        state.observed = element;
      }
      if (element) {
        const box = container.getBoundingClientRect();
        const rect = element.getBoundingClientRect();
        if (rect.width > 0) {
          const computed = getComputedStyle(element);
          const radius = Math.max(
            parseFloat(computed.borderTopLeftRadius) || 0,
            parseFloat(computed.borderTopRightRadius) || 0,
          );
          return {
            left: rect.left - box.left,
            top: rect.top - box.top,
            right: rect.right - box.left,
            bottom: rect.bottom - box.top,
            radius: Math.min(radius, rect.width / 2, rect.height / 2),
            real: true,
          };
        }
      }
      return {
        left: -width * 2,
        top: s.surfaceLevel * height,
        right: width * 3,
        bottom: height * 3,
        radius: 0,
        real: false,
      };
    };

    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      const s = settingsRef.current;
      const baseDpr = Math.min(s.dpr || window.devicePixelRatio || 1, 2);
      const longest = Math.max(width, height) * baseDpr;
      const ratio =
        longest > MAX_RENDER_DIM
          ? (baseDpr * MAX_RENDER_DIM) / longest
          : baseDpr;
      const pixelWidth = Math.max(1, Math.round(width * ratio));
      const pixelHeight = Math.max(1, Math.round(height * ratio));
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      state.width = width;
      state.height = height;
      state.ratio = canvas.width / width;
      render();
    };

    const render = () => {
      const s = settingsRef.current;
      resolveColor(s);
      const { width, height } = state;
      const scale = Math.max(0.2, Math.min(width / 585, height / 507));
      let surface = measure(s, width, height);
      let beamX = s.beamPosition * width;
      if (surface.real) {
        const margin = surface.radius + 6;
        if (beamX >= surface.left && beamX <= surface.right) {
          beamX = clamp(beamX, surface.left + margin, surface.right - margin);
        } else {
          surface = {
            left: -width * 2,
            top: height,
            right: width * 3,
            bottom: height * 3,
            radius: 0,
            real: false,
          };
        }
      }
      const startY = -0.15 * height;
      const span = surface.top - startY + 0.3 * height;
      const it = state.introTime;
      const settled = it >= INTRO_END;
      const front = settled
        ? surface.top + 0.3 * height
        : startY + span * Math.pow(clamp(it / INTRO_DROP, 0, 1), 1.3);
      const impact =
        INTRO_DROP *
        Math.pow(Math.max(0, surface.top - startY) / span, 1 / 1.3);
      const tau = it - impact;
      const bloom = settled ? 1 : tau <= 0 ? 0 : spring(tau);
      const flash =
        settled || tau <= 0
          ? 0
          : Math.exp(-tau / 0.35) * (1 - Math.exp(-tau / 0.05));
      const runRange = s.spread * 250 * 1.3 + 80;
      const runFront = settled
        ? 100000
        : tau <= 0
          ? -40
          : runRange * (1 - Math.exp(-1.15 * tau));
      const beadStrength =
        settled || tau <= 0
          ? 0
          : Math.exp(-1.15 * tau) * (1 - Math.exp(-tau / 0.08));
      const pour = (reach) => {
        if (settled) return [1000, 1];
        if (tau <= 0) return [-reach, 0];
        const target = Math.min(reach, runRange * 0.97);
        const arrival = -Math.log(1 - target / runRange) / 1.15;
        const elapsed = tau - arrival;
        const ease = clamp((elapsed + 0.15) / 0.8, 0, 1);
        const fill = ease * ease * ease * (ease * (ease * 6 - 15) + 10);
        if (elapsed <= 0) return [runFront - target, fill];
        const speed = 1.15 * (runRange - target);
        return [speed * elapsed + 260 * elapsed * elapsed, fill];
      };
      const [frontL, fillL] = pour((beamX - surface.left) / scale);
      const [frontR, fillR] = pour((surface.right - beamX) / scale);
      const atmosphere = settled
        ? 1
        : tau <= 0
          ? 0.3 * easeOut(it / INTRO_DROP)
          : 0.3 + 0.7 * (1 - Math.exp(-1.3 * tau));
      const seedValue = Number(s.seed) || 0;

      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.useProgram(program);
      gl.uniform2f(uniforms.uResolution, width, height);
      gl.uniform1f(uniforms.uDpr, state.ratio);
      gl.uniform1f(uniforms.uScale, scale);
      gl.uniform1f(uniforms.uTime, state.time);
      gl.uniform1f(uniforms.uBeamX, beamX);
      gl.uniform4f(
        uniforms.uSurface,
        surface.left,
        surface.top,
        surface.right,
        surface.bottom,
      );
      gl.uniform1f(uniforms.uRadius, surface.radius);
      gl.uniform3f(uniforms.uIntro, front, bloom, flash);
      gl.uniform4f(uniforms.uPour, frontL, frontR, fillL, fillR);
      gl.uniform2f(uniforms.uRun, runFront, beadStrength);
      gl.uniform4f(
        uniforms.uLens,
        state.lens.x,
        state.lens.y,
        95 * scale,
        state.lens.strength,
      );
      resolveReveal(s);
      const { reveal } = state;
      const cover = Math.max(width / reveal.width, height / reveal.height);
      const coverWidth = reveal.width * cover;
      const coverHeight = reveal.height * cover;
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, revealTexture);
      gl.uniform1i(uniforms.uReveal, 0);
      gl.uniform4f(
        uniforms.uRevealMap,
        1 / coverWidth,
        1 / coverHeight,
        (coverWidth - width) / 2 / coverWidth,
        (coverHeight - height) / 2 / coverHeight,
      );
      gl.uniform2f(
        uniforms.uRevealInfo,
        s.revealRadius,
        reveal.ready ? s.revealOpacity : 0,
      );
      gl.uniform1f(uniforms.uAtmosphere, atmosphere);
      gl.uniform4f(uniforms.uAmount, s.intensity, s.fog, s.dust, s.streaks);
      gl.uniform4f(uniforms.uShape, s.beamWidth, s.flare, s.spread, s.spill);
      gl.uniform4f(
        uniforms.uExtra,
        s.pulse,
        s.dots,
        34.34 + seedValue * 7.31,
        11.58 + seedValue * 3.17,
      );
      gl.uniform1f(uniforms.uTheme, s.theme === "light" ? 1 : 0);
      gl.uniform3fv(uniforms.uTint, state.tints);
      gl.bindVertexArray(vao);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindVertexArray(null);
    };

    const frame = (now) => {
      raf = 0;
      if (!alive || !visible || document.hidden) return;
      const s = settingsRef.current;
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 1 / 60;
      last = now;
      const moving = !s.paused && !reduce;
      if (moving) state.time += dt * s.speed;
      const introducing = state.introTime < INTRO_END;
      if (introducing)
        state.introTime = Math.min(INTRO_END, state.introTime + dt);

      const { pointer, lens } = state;
      const active = s.mouseInteraction && pointer.inside && !reduce;
      if (active && !lens.placed) {
        lens.x = pointer.x;
        lens.y = pointer.y;
        lens.vx = 0;
        lens.vy = 0;
        lens.placed = true;
      }
      const ax = 120 * (pointer.x - lens.x) - 19 * lens.vx;
      const ay = 120 * (pointer.y - lens.y) - 19 * lens.vy;
      lens.vx += ax * dt;
      lens.vy += ay * dt;
      lens.x += lens.vx * dt;
      lens.y += lens.vy * dt;
      const goal = active ? 1 : 0;
      lens.strength +=
        (goal - lens.strength) *
        (1 - Math.exp(-dt / (goal > lens.strength ? 0.3 : 0.55)));
      if (lens.strength < 0.001 && !active) lens.placed = false;

      render();
      const settling =
        Math.abs(
          state.lens.strength -
            (s.mouseInteraction && state.pointer.inside ? 1 : 0),
        ) > 0.002 || Math.hypot(state.lens.vx, state.lens.vy) > 0.5;
      if (moving || introducing || settling) raf = requestAnimationFrame(frame);
      else last = 0;
    };

    const wake = () => {
      if (!raf && alive && visible && !document.hidden)
        raf = requestAnimationFrame(frame);
    };

    const onPointerMove = (event) => {
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      state.pointer.x = x;
      state.pointer.y = y;
      state.pointer.inside =
        x >= 0 && y >= 0 && x <= rect.width && y <= rect.height;
      wake();
    };

    const onPointerLeave = () => {
      state.pointer.inside = false;
      wake();
    };

    const onVisibility = () => {
      last = 0;
      wake();
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
    const intersection = new IntersectionObserver((entries) => {
      visible = entries.some((entry) => entry.isIntersecting);
      if (visible) {
        last = 0;
        wake();
      }
    });
    intersection.observe(container);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    wake();

    wakeRef.current = () => {
      if (!raf) render();
      wake();
    };

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      wakeRef.current = null;
      resizeObserver.disconnect();
      intersection.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      document.removeEventListener("visibilitychange", onVisibility);
      gl.deleteTexture(revealTexture);
      gl.deleteBuffer(buffer);
      gl.deleteVertexArray(vao);
      gl.deleteProgram(program);
    };
  }, []);

  useEffect(() => {
    wakeRef.current?.();
  });

  const { className = "", ...attributes } = rest;

  return (
    <div
      ref={containerRef}
      className={`laser-flow-container${className ? ` ${className}` : ""}`}
      {...attributes}
    >
      <canvas
        ref={canvasRef}
        className="laser-flow-canvas"
        aria-hidden="true"
      />
    </div>
  );
};

export default LaserFlow;
```

===============================================================================
FILE: src/Guestlayout/swissHero.css
===============================================================================

```css
/* ===== Swiss hero: fully scoped with the sw- prefix ===== */
.sw-hero {
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #f4f4f0;
  color: #000;
  overflow: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}
.sw-hero *, .sw-hero *::before, .sw-hero *::after { box-sizing: border-box; }
.sw-hero ::selection { background: #ff3300; color: #fff; }
.sw-hero a { color: inherit; text-decoration: none; }
.sw-hero h1, .sw-hero p { margin: 0; }

/* Navigation */
.sw-nav {
  position: fixed; top: 0; left: 0; z-index: 50; width: 100%;
  display: flex; align-items: center; justify-content: space-between;
  padding: 12px 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: rgba(244, 244, 240, 0.8);
  backdrop-filter: blur(12px);
}
.sw-logo { font-size: 16px; font-weight: 700; text-transform: uppercase; letter-spacing: -0.025em; }
.sw-links { display: none; gap: 16px; font-size: 12px; font-weight: 500; text-transform: uppercase; letter-spacing: 0.1em; color: rgba(0, 0, 0, 0.6); }
.sw-links a:hover { color: #000; }
.sw-talk {
  display: flex; align-items: center; gap: 6px;
  border: 0; border-radius: 999px; background: #000; color: #fff;
  padding: 6px 16px; font: inherit; font-size: 12px; cursor: pointer;
  transition: background-color 0.2s ease;
}
.sw-talk:hover { background: #ff3300; }

/* Main layout */
.sw-main { position: relative; display: flex; flex-direction: column; min-height: 100vh; padding-top: 96px; }
.sw-grid { display: grid; grid-template-columns: 1fr; flex: 1; }

/* Left column */
.sw-left {
  position: relative; display: flex; flex-direction: column; justify-content: space-between;
  padding: 24px; border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.sw-title-wrap { margin-top: 48px; overflow: hidden; }
.sw-title {
  font-size: 4.5rem; font-weight: 700; text-transform: uppercase;
  line-height: 0.85; letter-spacing: -0.05em;
}
.sw-line { overflow: hidden; }
.sw-line span { display: block; }
.sw-line-outline { margin-left: 3rem; color: transparent; -webkit-text-stroke: 2px #000; }

.sw-intro { display: flex; flex-direction: column; gap: 24px; max-width: 28rem; margin-top: 48px; }
.sw-quote {
  font-family: ui-serif, Georgia, Cambria, 'Times New Roman', serif;
  font-size: 1.25rem; font-style: italic; line-height: 1.625; color: #525252;
}
.sw-proof { display: flex; align-items: center; gap: 16px; }
.sw-avatars { display: flex; }
.sw-avatar { width: 40px; height: 40px; border-radius: 50%; border: 1px solid #f4f4f0; background: #d4d4d4; }
.sw-avatar + .sw-avatar { margin-left: -16px; }
.sw-proof-text { font-size: 14px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; }
.sw-corner { position: absolute; top: 0; right: 0; padding: 16px; color: rgba(0, 0, 0, 0.2); }
.sw-corner svg { width: 48px; height: 48px; }

/* Right column: 3D visual */
.sw-right { position: relative; min-height: 50vh; overflow: hidden; background: #e5e5e5; }
.sw-border-top { position: absolute; top: 0; left: 0; width: 100%; height: 1px; background: #000; transform-origin: left; }
.sw-scene { position: absolute; inset: 0; width: 100%; height: 100%; cursor: pointer; }
.sw-badge-pos { position: absolute; left: 32px; bottom: 32px; pointer-events: none; }
.sw-badge {
  display: flex; align-items: center; justify-content: center;
  width: 96px; height: 96px; border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(12px);
  animation: sw-spin 8s linear infinite;
}
.sw-badge svg { width: 32px; height: 32px; color: #fff; }

/* Marquee */
.sw-marquee-wrap { position: relative; z-index: 10; margin-top: auto; }
.sw-marquee {
  display: flex; overflow: hidden; padding: 16px 0;
  border-top: 1px solid #000; background: #ff3300; color: #000;
}
.sw-marquee-track {
  display: flex; flex-shrink: 0; min-width: 100%; white-space: nowrap;
  font-size: 2.25rem; font-weight: 900; text-transform: uppercase; letter-spacing: -0.05em;
  animation: sw-marquee 25s linear infinite;
}
.sw-marquee-track span { margin: 0 16px; }

/* Decorative vertical lines */
.sw-lines {
  position: absolute; inset: 0; z-index: 0; display: none;
  justify-content: space-between; padding: 0 24px; pointer-events: none;
}
.sw-lines div { width: 1px; height: 100%; background: rgba(0, 0, 0, 0.05); }

@keyframes sw-marquee { from { transform: translateX(0); } to { transform: translateX(-100%); } }
@keyframes sw-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

/* Responsive */
@media (min-width: 640px) {
  .sw-nav { padding: 16px; }
  .sw-logo { font-size: 18px; }
  .sw-links { display: flex; }
  .sw-talk { padding: 8px 20px; font-size: 14px; }
}
@media (min-width: 768px) {
  .sw-nav { padding: 20px 24px; }
  .sw-logo { font-size: 20px; }
  .sw-links { gap: 24px; font-size: 14px; }
  .sw-talk { padding: 8px 24px; }
  .sw-grid { grid-template-columns: repeat(12, 1fr); }
  .sw-left { grid-column: span 7; padding: 48px; }
  .sw-right { grid-column: span 5; min-height: auto; }
  .sw-title { font-size: 6rem; }
  .sw-lines { display: flex; }
}
@media (min-width: 1024px) {
  .sw-links { gap: 32px; }
  .sw-left { padding: 64px; }
  .sw-title { font-size: 9rem; }
}
@media (prefers-reduced-motion: reduce) {
  .sw-badge, .sw-marquee-track { animation: none; }
}
```

===============================================================================
FILE: src/Guestlayout/SwissScene.jsx
===============================================================================

```jsx
import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Image as DreiImage, useCursor } from "@react-three/drei";
import * as THREE from "three";

// --- 3D Component: Interactive Image ---
export function HoverImage() {
  const ref = useRef(null);
  const [hovered, setHover] = useState(false);

  useCursor(hovered);

  useFrame((state, delta) => {
    if (!ref.current) return;
    const material = ref.current.material;

    material.grayscale = THREE.MathUtils.damp(
      material.grayscale,
      hovered ? 0 : 1,
      4,
      delta,
    );
    material.zoom = THREE.MathUtils.damp(
      material.zoom,
      hovered ? 1.1 : 1,
      4,
      delta,
    );

    ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
  });

  return (
    <DreiImage
      ref={ref}
      url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtC_D-34ozW6glvgR5o8qyI8DhEuzB-quqCH4nchK5PQ&s=10"
      transparent
      scale={[4, 5]}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    />
  );
}

// --- Component: 3D Scene Wrapper ---
export function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <HoverImage />
    </Canvas>
  );
}

// --- Component: Infinite Marquee ---
export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-t border-black bg-[#ff3300] py-4 text-black">
      <div className="animate-marquee whitespace-nowrap text-4xl font-black uppercase tracking-tighter">
        <span className="mx-4">New Collection 2024 —</span>
        <span className="mx-4">Paris Fashion Week —</span>
        <span className="mx-4">Available Worldwide —</span>
        <span className="mx-4">New Collection 2024 —</span>
        <span className="mx-4">Paris Fashion Week —</span>
        <span className="mx-4">Available Worldwide —</span>
      </div>
    </div>
  );
}
```

===============================================================================
FILE: src/index.css
===============================================================================

```css
@import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400..700;1,9..144,400..700&family=Inter:wght@400;500;600;700&display=swap');

:root {
  /* Brand Color Tokens */
  --primary: #073B2A;       /* deep emerald — headings, primary text accents, hover fills */
  --secondary: #0B6045;     /* mid emerald — links, secondary actions */
  --accent: #D4AF37;        /* gold — kickers, dividers, icon outlines, hover highlights */
  --bg: #F5F8F6;            /* pale sage — base background */
  --ivory: #FBF8F1;         /* warm off-white — alternating section backgrounds, card fill */
  --text: #17231E;          /* near-black — body copy */
  --muted: #5B6B63;         /* muted sage-grey — subtext, descriptions */
  --hairline: rgba(7, 59, 42, 0.14); /* thin structural borders */
  --gold-wash: rgba(212, 175, 55, 0.12); /* soft gold background tint */

  /* Backward Compatibility Mappings */
  --primary-green: var(--primary);
  --secondary-green: var(--secondary);
  --investment-gold: var(--accent);
  --gold-hover: #B8941F;
  --main-bg: var(--bg);
  --card-bg: var(--ivory);
  --text-primary: var(--text);
  --text-secondary: var(--muted);
  --border-color: var(--hairline);
}

body {
  margin: 0;
  background-color: var(--bg);
  color: var(--text);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Heritage Editorial Typography */
h1, h2, h3, h4, h5, h6, .serif-heading {
  font-family: 'Fraunces', Georgia, serif;
  font-weight: 600;
  color: var(--primary);
  letter-spacing: -0.01em;
}

/* Letterhead Kicker Mark (No All-Caps Badges) */
.kicker {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: 14px;
  color: var(--accent);
  display: inline-flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.kicker::before,
.kicker::after {
  content: "";
  display: inline-block;
  width: 24px;
  height: 1px;
  background-color: var(--accent);
}

/* Understated Serif-Italic Links with Gold Underline */
.editorial-link {
  font-family: 'Fraunces', Georgia, serif;
  font-style: italic;
  font-size: 15px;
  color: var(--secondary);
  text-decoration: none;
  border-bottom: 1px solid var(--accent);
  padding-bottom: 2px;
  transition: color 0.2s ease, border-color 0.2s ease;
}

.editorial-link:hover {
  color: var(--primary);
  border-bottom-color: var(--primary);
}

/* Outlined Heritage Icons (1px border, square or circular) */
.icon-outlined-square {
  width: 48px;
  height: 48px;
  border-radius: 4px;
  border: 1px solid var(--accent);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  background: var(--ivory);
  transition: all 0.25s ease;
}

.icon-outlined-circle {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid var(--accent);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  background: var(--ivory);
  transition: all 0.25s ease;
}

/* Printed Ledger Flush Panel Grid System */
.ledger-grid {
  display: grid;
  background-color: var(--hairline);
  gap: 1px; /* Background hairline border gap */
  border: 1px solid var(--hairline);
  border-radius: 4px;
  overflow: hidden;
}

.ledger-panel {
  background-color: var(--ivory);
  padding: 36px 30px;
  transition: background-color 0.25s ease, color 0.25s ease;
}

/* Controlled Inversion "Rich Moment" on Panel Hover */
.ledger-panel:hover {
  background-color: var(--primary);
  color: var(--ivory);
}

.ledger-panel:hover h1,
.ledger-panel:hover h2,
.ledger-panel:hover h3,
.ledger-panel:hover h4,
.ledger-panel:hover .panel-title,
.ledger-panel:hover .panel-desc {
  color: var(--ivory) !important;
}

.ledger-panel:hover .icon-outlined-square,
.ledger-panel:hover .icon-outlined-circle {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(212, 175, 55, 0.15);
}

.ledger-panel:hover .editorial-link {
  color: var(--accent);
  border-bottom-color: var(--accent);
}

/* Sharp / Barely Rounded Heritage Buttons */
.btn-heritage-primary {
  background-color: var(--primary);
  color: var(--ivory);
  border: 1px solid var(--primary);
  padding: 12px 28px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: background-color 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  cursor: pointer;
}

.btn-heritage-primary:hover {
  background-color: var(--secondary);
  border-color: var(--secondary);
  color: var(--ivory);
}

.btn-heritage-outline {
  background-color: transparent;
  color: var(--primary);
  border: 1px solid var(--primary);
  padding: 12px 28px;
  border-radius: 3px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  cursor: pointer;
}

.btn-heritage-outline:hover {
  border-color: var(--accent);
  color: var(--primary);
  background-color: var(--gold-wash);
}

/* Accessible Focus States */
a:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible, textarea:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}

/* Reduced Motion Optimization */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

===============================================================================
FILE: src/index.js
===============================================================================

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```

===============================================================================
FILE: src/pages/AboutUs.jsx
===============================================================================

```jsx
import React, { useState, useEffect, useRef } from "react";
import { apiUrl } from "../api";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import {
  FaShieldAlt, FaHandshake, FaEye, FaBullseye, FaUserCheck, FaLightbulb,
  FaCheckCircle, FaUserTie, FaUsers, FaBuilding, FaBriefcase, FaHome,
  FaChartLine, FaExclamationTriangle, FaSync,
} from "react-icons/fa";

const icons = {
  FaShieldAlt: <FaShieldAlt />, FaEye: <FaEye />, FaHandshake: <FaHandshake />,
  FaUserCheck: <FaUserCheck />, FaUserTie: <FaUserTie />, FaChartLine: <FaChartLine />,
  FaBriefcase: <FaBriefcase />, FaBullseye: <FaBullseye />, FaUsers: <FaUsers />,
  FaLightbulb: <FaLightbulb />, FaBuilding: <FaBuilding />, FaHome: <FaHome />,
  FaCheckCircle: <FaCheckCircle />,
};
const renderIcon = (n) => icons[n] || <FaShieldAlt />;

const tags = ["Loans", "Insurance", "Mutual Funds", "Wealth Management", "Stocks & Equity", "Portfolio Management", "Corporate Finance", "Banking Services", "Land Links", "Financial Consultation"];

const Spot = ({ className = "", children }) => {
  const ref = useRef(null);
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <div ref={ref} onMouseMove={move} className={`spot ${className}`}>{children}</div>;
};

const AboutUs = () => {
  const [aboutData, setAboutData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchAboutContent = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(apiUrl("/api/about"));
      if (!res.ok) throw new Error(`Server returned status ${res.status}`);
      const result = await res.json();
      if (result.success && result.data) setAboutData(result.data);
      else setError(true);
    } catch (err) {
      console.error("Failed to fetch About Us resources:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchAboutContent(); }, []);

  const getSortedCards = (arr) =>
    !arr || !Array.isArray(arr) ? [] : [...arr].sort((a, b) => (a.priority || 0) - (b.priority || 0));

  const coreValues = getSortedCards(aboutData?.coreValues);
  const whyChooseUs = getSortedCards(aboutData?.whyChooseUs);
  const whoWeServe = getSortedCards(aboutData?.whoWeServe);
  const visionText = aboutData?.vision || "";
  const missionList = aboutData?.mission || [];

  return (
    <div className="ab">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .ab {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#0A1310;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .ab h2,.ab h3,.ab h4 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .ab .wrap { max-width:1200px; margin:0 auto; }
        .ab section.sec { padding:104px 5%; position:relative; }
        .ab button:focus-visible { outline:2px solid var(--accent); outline-offset:3px; }

        .head { max-width:660px; margin-bottom:52px; }
        .head h2 { font-size:clamp(30px,4vw,44px); font-weight:600; line-height:1.15; letter-spacing:-.015em; margin-bottom:14px; color:var(--primary); }
        .head p { font-size:16.5px; line-height:1.7; margin:0; color:var(--muted); max-width:56ch; }
        .dark .head h2 { color:#FDFBF5; }
        .dark .head p { color:rgba(253,251,245,.8); }

        /* intro */
        .intro { display:grid; grid-template-columns:1.05fr .95fr; gap:64px; align-items:center; }
        .intro h2 { font-size:clamp(30px,3.6vw,42px); font-weight:600; line-height:1.15; color:var(--primary); margin-bottom:20px; letter-spacing:-.015em; }
        .intro p { font-size:16px; line-height:1.75; color:var(--muted); margin:0 0 16px; max-width:58ch; }
        .tags { display:flex; flex-wrap:wrap; gap:9px; margin-top:26px; }
        .tag { padding:8px 16px; border-radius:999px; font-size:13px; font-weight:500; color:var(--primary); background:#fff; border:1px solid rgba(7,59,42,.14); transition:all .25s; }
        .tag:hover { background:var(--primary); color:var(--accent); border-color:var(--primary); }
        .photo { position:relative; padding:0 22px 22px 0; }
        .photo::before { content:''; position:absolute; inset:22px 0 0 22px; border:2px solid var(--accent); border-radius:28px; }
        .photo img { position:relative; display:block; width:100%; aspect-ratio:4/4.4; object-fit:cover; border-radius:28px; box-shadow:0 24px 50px rgba(7,59,42,.18); }
        .photo-badge { position:absolute; left:-18px; bottom:60px; background:var(--primary); color:#FDFBF5; border-radius:18px; padding:14px 18px; display:flex; align-items:center; gap:12px; box-shadow:0 14px 30px rgba(7,59,42,.3); }
        .photo-badge svg { width:34px; height:34px; flex-shrink:0; }
        .photo-badge b { font-family:'Fraunces',serif; font-size:16px; font-weight:600; display:block; line-height:1.2; }
        .photo-badge small { font-size:12px; color:rgba(253,251,245,.65); }

        /* vision + mission */
        .vm { display:grid; grid-template-columns:1fr 1fr; gap:22px; margin-top:80px; }
        .vision { position:relative; overflow:hidden; border-radius:28px; padding:48px; color:#FDFBF5; background:linear-gradient(150deg,var(--primary),#0A1310); }
        .vision-art { position:absolute; right:-70px; top:-70px; width:300px; opacity:.9; animation:spin 60s linear infinite; }
        .vision h3 { font-size:28px; font-weight:600; margin-bottom:16px; position:relative; }
        .vision p { font-family:'Fraunces',serif; font-style:italic; font-size:20px; line-height:1.6; color:rgba(253,251,245,.9); margin:0; position:relative; max-width:34ch; }
        .vision-ic { width:52px; height:52px; border-radius:16px; display:grid; place-items:center; font-size:22px; color:#0A1310; background:var(--accent); margin-bottom:26px; position:relative; }
        .mission { border-radius:28px; padding:48px; background:#fff; border:1px solid rgba(7,59,42,.1); }
        .mission h3 { font-size:28px; font-weight:600; color:var(--primary); margin-bottom:24px; }
        .mission ul { list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:0; }
        .mission li { display:flex; gap:14px; align-items:flex-start; padding:16px 0; border-top:1px solid rgba(7,59,42,.1); font-size:15px; line-height:1.6; color:var(--muted); }
        .mission li:first-child { border-top:none; padding-top:0; }
        .mission li svg { color:var(--accent); font-size:19px; margin-top:2px; flex-shrink:0; }

        /* values (dark bento) */
        .dark { background:#0A1310; color:#FDFBF5; isolation:isolate; }
        .dark::before { content:''; position:absolute; inset:0; z-index:-1; background:radial-gradient(600px 400px at 90% 0%,rgba(11,96,69,.45),transparent 70%),radial-gradient(500px 400px at 0% 100%,rgba(212,175,55,.15),transparent 70%); }
        .dgrid { position:absolute; inset:0; z-index:-1; width:100%; height:100%; opacity:.4; }
        .vgrid { display:grid; grid-template-columns:repeat(3,1fr); gap:18px; }
        .spot { --mx:50%; --my:50%; position:relative; overflow:hidden; border-radius:22px; padding:30px; background:linear-gradient(165deg, rgba(16, 42, 33, 0.8), rgba(8, 24, 18, 0.95)); border:1px solid rgba(212, 175, 55, 0.22); box-shadow:0 10px 30px rgba(0,0,0,0.35); transition:all .3s ease; }
        .spot::before { content:''; position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .3s; background:radial-gradient(320px circle at var(--mx) var(--my),rgba(212,175,55,.25),transparent 60%); }
        .spot:hover { border-color:#D4AF37; transform:translateY(-4px); box-shadow:0 16px 36px rgba(212,175,55,.2); }
        .spot:hover::before { opacity:1; }
        .spot > * { position:relative; }
        .spot:nth-child(4n+1) { grid-column:span 2; }
        .v-ic { width:48px; height:48px; border-radius:14px; display:grid; place-items:center; font-size:20px; color:var(--accent); background:rgba(212,175,55,.12); border:1px solid rgba(212,175,55,.3); margin-bottom:18px; }
        .spot h3 { font-size:21px; font-weight:600; margin-bottom:8px; color:#FDFBF5; }
        .spot p { margin:0; font-size:14.5px; line-height:1.65; color:rgba(253,251,245,.8); max-width:46ch; }

        /* why */
        .why { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; }
        .wcard { background:#fff; border:1px solid rgba(7,59,42,.1); border-radius:22px; padding:30px; position:relative; overflow:hidden; transition:transform .3s, box-shadow .3s, border-color .3s; }
        .wcard:nth-child(3n+2) { transform:translateY(26px); }
        .wcard:hover { border-color:var(--accent); box-shadow:0 18px 40px rgba(7,59,42,.12); }
        .wcard::after { content:''; position:absolute; left:0; bottom:0; height:3px; width:0; background:var(--accent); transition:width .4s; }
        .wcard:hover::after { width:100%; }
        .w-ic { width:48px; height:48px; border-radius:50%; display:grid; place-items:center; font-size:19px; color:var(--deep); background:var(--accent); margin-bottom:18px; }
        .wcard h3 { font-size:19px; font-weight:600; color:var(--primary); margin-bottom:8px; }
        .wcard p { margin:0; font-size:14px; line-height:1.65; color:var(--muted); }

        /* serve */
        .serve { background:var(--ivory); }
        .slist { display:flex; flex-direction:column; border-top:1px solid rgba(7,59,42,.15); }
        .srow { display:grid; grid-template-columns:64px 1fr 1.3fr 40px; gap:26px; align-items:center; padding:26px 8px; border-bottom:1px solid rgba(7,59,42,.15); transition:all .3s; }
        .srow:hover { background:var(--primary); padding-left:24px; padding-right:24px; border-radius:18px; border-color:transparent; }
        .s-ic { width:56px; height:56px; border-radius:50%; display:grid; place-items:center; font-size:22px; color:var(--primary); border:1px solid var(--primary); transition:all .3s; }
        .srow h3 { font-size:23px; font-weight:600; color:var(--primary); transition:color .3s; }
        .srow p { margin:0; font-size:14.5px; line-height:1.6; color:var(--muted); transition:color .3s; }
        .s-arrow { width:22px; color:var(--accent); opacity:0; transform:translateX(-8px); transition:all .3s; }
        .srow:hover .s-ic { background:var(--accent); border-color:var(--accent); color:var(--deep); }
        .srow:hover h3 { color:#FDFBF5; }
        .srow:hover p { color:rgba(253,251,245,.72); }
        .srow:hover .s-arrow { opacity:1; transform:none; }

        /* states */
        .state { max-width:560px; margin:90px auto; text-align:center; padding:52px 32px; background:#fff; border-radius:28px; border:1px solid rgba(7,59,42,.1); }
        .state h3 { font-size:26px; color:var(--primary); margin:18px 0 10px; }
        .state p { color:var(--muted); line-height:1.65; margin:0 0 24px; font-size:15px; }
        .state .warn { font-size:38px; color:var(--accent); }
        .retry { display:inline-flex; align-items:center; gap:10px; border:none; cursor:pointer; background:var(--accent); color:var(--deep); font:600 14px 'Inter',sans-serif; padding:13px 24px; border-radius:999px; transition:transform .25s, box-shadow .25s; }
        .retry:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(212,175,55,.35); }
        .loader { width:56px; height:56px; animation:spin 1.1s linear infinite; }
        @keyframes spin { to { transform:rotate(360deg); } }

        @media (max-width:992px) {
          .intro,.vm { grid-template-columns:1fr; }
          .vgrid,.why { grid-template-columns:repeat(2,1fr); }
          .spot:nth-child(4n+1) { grid-column:auto; }
          .wcard:nth-child(3n+2) { transform:none; }
          .srow { grid-template-columns:56px 1fr 30px; }
          .srow p { grid-column:2 / 4; grid-row:2; }
        }
        @media (max-width:600px) {
          .ab section.sec { padding:70px 6%; }
          .vgrid,.why { grid-template-columns:1fr; }
          .vision,.mission { padding:32px 24px; }
          .photo-badge { left:8px; }
        }
        @media (prefers-reduced-motion:reduce) {
          .ab *,.ab *::before,.ab *::after { animation:none !important; transition:none !important; }
        }
      `}</style>

      <PageHero
        title="Building Confidence Through Smarter Financial Decisions"
        subtitle="Professional financial solutions designed around your goals, priorities and future."
        badge="ABOUT INVESTNOW"
        breadcrumbs={[{ label: "About Us" }]}
      />

      {loading ? (
        <div className="state" role="status">
          <svg className="loader" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(212,175,55,.2)" strokeWidth="5" />
            <path d="M28 6a22 22 0 0 1 22 22" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <h3>Loading About Us content...</h3>
        </div>
      ) : error ? (
        <div className="state" role="alert">
          <FaExclamationTriangle className="warn" />
          <h3>Unable to load resources</h3>
          <p>We couldn't reach the server to fetch this page. Check your network connection or backend service status, then try again.</p>
          <button className="retry" onClick={fetchAboutContent}><FaSync /> Try again</button>
        </div>
      ) : (
        <>
          {/* Intro + vision / mission */}
          <section className="sec" id="intro">
            <div className="wrap">
              <div className="intro">
                <div>
                  <h2>INVESTNOW Financial Services Pvt. Ltd.</h2>
                  <p>INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED is a professional financial-services organization dedicated to helping individuals, families, and businesses plan, grow, and protect their financial well-being.</p>
                  <p>We provide a comprehensive range of structured financial services designed to cater to diverse monetary requirements, from everyday loan requirements and insurance coverage to long-term wealth growth and land acquisition assistance.</p>
                  <div className="tags">{tags.map((t) => <span key={t} className="tag">{t}</span>)}</div>
                </div>
                <div className="photo">
                  <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1000&auto=format&fit=crop" alt="INVESTNOW team consultation" />
                  <div className="photo-badge">
                    <svg viewBox="0 0 34 34" aria-hidden="true">
                      <path d="M17 3l11 4.4v8.2c0 7-4.7 12.4-11 15.4C10.700 28 6 22.600 6 15.600V7.400z" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinejoin="round" />
                      <path d="M11.500 17l4 4 7-8" fill="none" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div><b>Relationship-first</b><small>Advice built to last</small></div>
                  </div>
                </div>
              </div>

              <div className="vm" id="vision">
                <div className="vision">
                  <svg className="vision-art" viewBox="0 0 300 300" fill="none" aria-hidden="true">
                    <circle cx="150" cy="150" r="140" stroke="rgba(212,175,55,.35)" strokeDasharray="3 9" />
                    <circle cx="150" cy="150" r="100" stroke="rgba(212,175,55,.5)" strokeDasharray="70 24" />
                    <circle cx="150" cy="150" r="60" stroke="rgba(255,255,255,.18)" />
                    <circle cx="150" cy="10" r="6" fill="#D4AF37" />
                  </svg>
                  <div className="vision-ic"><FaEye /></div>
                  <h3>Our vision</h3>
                  <p>"{visionText}"</p>
                </div>
                <div className="mission">
                  <h3>Our mission</h3>
                  <ul>
                    {missionList.map((m, i) => (
                      <li key={i}><FaCheckCircle /><span>{m}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Core values */}
          <section className="sec dark">
            <svg className="dgrid" aria-hidden="true">
              <defs>
                <pattern id="abGrid" width="56" height="56" patternUnits="userSpaceOnUse"><path d="M56 0H0V56" fill="none" stroke="rgba(255,255,255,.05)" /></pattern>
                <radialGradient id="abFade" cx="50%" cy="30%" r="70%"><stop offset="0" stopColor="#fff" /><stop offset="1" stopColor="#000" /></radialGradient>
                <mask id="abMask"><rect width="100%" height="100%" fill="url(#abFade)" /></mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#abGrid)" mask="url(#abMask)" />
            </svg>
            <div className="wrap">
              <div className="head">
                <h2>Core values that guide us</h2>
                <p>Every consultation, solution, and recommendation we offer is grounded in these values.</p>
              </div>
              <div className="vgrid">
                {coreValues.map((v, i) => (
                  <Spot key={v._id || i}>
                    <div className="v-ic">{renderIcon(v.icon)}</div>
                    <h3>{v.title}</h3>
                    <p>{v.desc}</p>
                  </Spot>
                ))}
              </div>
            </div>
          </section>

          {/* Why partner */}
          <section className="sec" id="why-us">
            <div className="wrap">
              <div className="head">
                <h2>Why partner with us</h2>
                <p>A structured, relationship-focused approach that keeps financial management clear and efficient.</p>
              </div>
              <div className="why" style={{ paddingBottom: 26 }}>
                {whyChooseUs.map((w, i) => (
                  <div key={w._id || i} className="wcard">
                    <div className="w-ic">{renderIcon(w.icon)}</div>
                    <h3>{w.title}</h3>
                    <p>{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Who we serve */}
          <section className="sec serve" id="who-we-serve">
            <div className="wrap">
              <div className="head">
                <h2>Who we serve</h2>
                <p>Clients who want reliable financial management and property support, from individuals to businesses.</p>
              </div>
              <div className="slist">
                {whoWeServe.map((s, i) => (
                  <div key={s._id || i} className="srow">
                    <div className="s-ic">{renderIcon(s.icon)}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                    <svg className="s-arrow" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                      <path d="M4 11h14M12 5l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <CTASection
        title="Let's Build Your Financial Roadmap"
        subtitle="Schedule a consultation with our experienced financial consultants to evaluate your financial requirements."
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore Services"
        secondaryBtnLink="/services"
      />
    </div>
  );
};

export default AboutUs;
```

===============================================================================
FILE: src/pages/AdminDashboard.jsx
===============================================================================

```jsx
import React, { useState, useEffect } from "react";
import { apiUrl } from "../api";
import { Link } from "react-router-dom";
import {
  FaInfoCircle,
  FaConciergeBell,
  FaBullseye,
  FaBuilding,
  FaEnvelopeOpenText,
  FaArrowRight,
  FaSync,
  FaCheckCircle,
  FaClock,
  FaExclamationTriangle,
  FaLayerGroup
} from "react-icons/fa";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    aboutItems: 0,
    servicesCount: 0,
    goalPillars: 0,
    goalSteps: 0,
    chalukyaSolutions: 0,
    chalukyaSteps: 0,
    totalEnquiries: 0,
    pendingEnquiries: 0,
    repliedEnquiries: 0
  });

  const [recentEnquiries, setRecentEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchDashboardData = async () => {
    setLoading(true);
    setError(false);
    try {
      const token = localStorage.getItem("adminToken");
      const headers = token ? { Authorization: `Bearer ${token}` } : {};

      // Fetch all endpoint data concurrently
      const [aboutRes, servicesRes, goalsRes, chalukyaRes, enquiriesRes] = await Promise.all([
        fetch(apiUrl("/api/about")).catch(() => null),
        fetch(apiUrl("/api/services")).catch(() => null),
        fetch(apiUrl("/api/financial-goals")).catch(() => null),
        fetch(apiUrl("/api/chalukya")).catch(() => null),
        fetch(apiUrl("/api/enquiries"), { headers }).catch(() => null)
      ]);

      let aboutCount = 0;
      if (aboutRes && aboutRes.ok) {
        const data = await aboutRes.json();
        if (data.data) {
          aboutCount = (data.data.coreValues?.length || 0) + (data.data.whyChooseUs?.length || 0) + (data.data.leadership?.length || 0);
        }
      }

      let serviceCount = 0;
      if (servicesRes && servicesRes.ok) {
        const data = await servicesRes.json();
        serviceCount = Array.isArray(data.data) ? data.data.length : 0;
      }

      let goalPillarsCount = 0;
      let goalStepsCount = 0;
      if (goalsRes && goalsRes.ok) {
        const data = await goalsRes.json();
        if (data.data) {
          goalPillarsCount = data.data.pillars?.length || 0;
          goalStepsCount = data.data.journeySteps?.length || 0;
        }
      }

      let chalukyaSolCount = 0;
      let chalukyaStepCount = 0;
      if (chalukyaRes && chalukyaRes.ok) {
        const data = await chalukyaRes.json();
        if (data.data) {
          chalukyaSolCount = data.data.landSolutions?.length || 0;
          chalukyaStepCount = data.data.landJourney?.length || 0;
        }
      }

      let totalEnq = 0;
      let pendingEnq = 0;
      let repliedEnq = 0;
      let recentList = [];

      if (enquiriesRes && enquiriesRes.ok) {
        const data = await enquiriesRes.json();
        const list = data.data || [];
        totalEnq = list.length;
        pendingEnq = list.filter((e) => e.status === "Pending" || !e.status).length;
        repliedEnq = list.filter((e) => e.status === "Replied").length;
        recentList = list.slice(0, 5);
      }

      setStats({
        aboutItems: aboutCount,
        servicesCount: serviceCount,
        goalPillars: goalPillarsCount,
        goalSteps: goalStepsCount,
        chalukyaSolutions: chalukyaSolCount,
        chalukyaSteps: chalukyaStepCount,
        totalEnquiries: totalEnq,
        pendingEnquiries: pendingEnq,
        repliedEnquiries: repliedEnq
      });

      setRecentEnquiries(recentList);
    } catch (err) {
      console.error("Failed to load dashboard statistics:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const adminPages = [
    {
      title: "Manage About Us",
      path: "/admin/about",
      icon: <FaInfoCircle />,
      countText: `${stats.aboutItems} Total Sections & Core Values`,
      desc: "Edit company history, mission statement, leadership team, and core values.",
      color: "#073B2A"
    },
    {
      title: "Manage Services",
      path: "/admin/services",
      icon: <FaConciergeBell />,
      countText: `${stats.servicesCount} Active Wealth Services`,
      desc: "Add, update, or reorganize financial services, features, and investment offerings.",
      color: "#0B6045"
    },
    {
      title: "Manage Financial Goals",
      path: "/admin/financial-goals",
      icon: <FaBullseye />,
      countText: `${stats.goalPillars} Pillars | ${stats.goalSteps} Roadmap Steps`,
      desc: "Customize financial planning pillars and the interactive goal roadmap for users.",
      color: "#D4AF37"
    },
    {
      title: "Manage Chalukya Developers",
      path: "/admin/chalukya",
      icon: <FaBuilding />,
      countText: `${stats.chalukyaSolutions} Land Solutions | ${stats.chalukyaSteps} Journey Steps`,
      desc: "Control land plot offerings, property advantages, and the step-by-step land roadmap.",
      color: "#073B2A"
    },
    {
      title: "Service Requests & Enquiries",
      path: "/admin/enquiries",
      icon: <FaEnvelopeOpenText />,
      countText: `${stats.totalEnquiries} Messages (${stats.pendingEnquiries} Pending)`,
      desc: "Review guest messages, respond via Nodemailer email, and track inquiry status.",
      color: "#0B6045"
    }
  ];

  return (
    <div className="admin-dash-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .admin-dash-page {
          --primary: #073B2A;
          --secondary: #0B6045;
          --accent: #D4AF37;
          --bg: #F5F8F6;
          --ivory: #FBF8F1;
          --text: #17231E;
          --muted: #5B6B63;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          color: var(--text);
        }

        .dash-header {
          background: linear-gradient(135deg, #073B2A 0%, #0B6045 100%);
          color: #FFFFFF;
          padding: 32px 36px;
          border-radius: 20px;
          margin-bottom: 32px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 10px 30px rgba(7,59,42,0.15);
        }

        .dash-header h1 {
          font-family: 'Fraunces', serif;
          font-size: 32px;
          font-weight: 600;
          margin: 0 0 8px 0;
          color: #FDFBF5;
        }

        .dash-header p {
          margin: 0;
          font-size: 15px;
          color: rgba(253,251,245,0.85);
        }

        .refresh-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--accent);
          color: #073B2A;
          border: none;
          padding: 10px 20px;
          border-radius: 999px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .refresh-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(212,175,55,0.35);
        }

        /* Stats Strip */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 36px;
        }

        .stat-card {
          background: #FFFFFF;
          border: 1px solid rgba(7,59,42,0.12);
          border-radius: 18px;
          padding: 24px;
          display: flex;
          align-items: center;
          gap: 18px;
          box-shadow: 0 4px 16px rgba(7,59,42,0.04);
          transition: transform 0.25s, box-shadow 0.25s;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 26px rgba(7,59,42,0.08);
          border-color: var(--accent);
        }

        .stat-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(212,175,55,0.12);
          color: var(--primary);
          display: grid;
          place-items: center;
          font-size: 22px;
          border: 1px solid rgba(212,175,55,0.3);
          flex-shrink: 0;
        }

        .stat-val {
          font-family: 'Fraunces', serif;
          font-size: 28px;
          font-weight: 600;
          color: var(--primary);
          line-height: 1;
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 13.5px;
          color: var(--muted);
          font-weight: 500;
        }

        /* Section Heading */
        .sec-title {
          font-family: 'Fraunces', serif;
          font-size: 24px;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Access Tiles Grid */
        .pages-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          margin-bottom: 40px;
        }

        .page-tile {
          background: #FFFFFF;
          border: 1px solid rgba(7,59,42,0.12);
          border-radius: 20px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(7,59,42,0.03);
        }

        .page-tile::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          height: 4px;
          width: 0;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .page-tile:hover {
          transform: translateY(-4px);
          border-color: var(--accent);
          box-shadow: 0 14px 32px rgba(7,59,42,0.09);
        }

        .page-tile:hover::after {
          width: 100%;
        }

        .tile-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 18px;
        }

        .tile-ic {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          background: var(--bg);
          color: var(--primary);
          display: grid;
          place-items: center;
          font-size: 20px;
          border: 1px solid rgba(7,59,42,0.15);
        }

        .page-tile:hover .tile-ic {
          background: var(--primary);
          color: var(--accent);
          border-color: var(--primary);
        }

        .tile-badge {
          font-size: 12px;
          font-weight: 600;
          background: rgba(11,96,69,0.08);
          color: var(--secondary);
          padding: 4px 12px;
          border-radius: 999px;
          border: 1px solid rgba(11,96,69,0.2);
        }

        .tile-title {
          font-family: 'Fraunces', serif;
          font-size: 20px;
          font-weight: 600;
          color: var(--primary);
          margin-bottom: 8px;
        }

        .tile-desc {
          font-size: 14px;
          color: var(--muted);
          line-height: 1.55;
          margin-bottom: 22px;
        }

        .tile-foot {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--secondary);
        }

        .page-tile:hover .tile-foot {
          color: var(--primary);
        }

        /* Enquiries Table */
        .enq-card {
          background: #FFFFFF;
          border: 1px solid rgba(7,59,42,0.12);
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 6px 20px rgba(7,59,42,0.03);
        }

        .table-responsive {
          overflow-x: auto;
        }

        .custom-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
        }

        .custom-table th {
          background: var(--bg);
          color: var(--primary);
          font-weight: 600;
          font-size: 13.5px;
          padding: 14px 18px;
          border-bottom: 1px solid rgba(7,59,42,0.12);
        }

        .custom-table td {
          padding: 16px 18px;
          border-bottom: 1px solid rgba(7,59,42,0.08);
          font-size: 14px;
          color: var(--text);
        }

        .status-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12.5px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 999px;
        }

        .status-pending {
          background: rgba(212,175,55,0.15);
          color: #8A6D0B;
          border: 1px solid rgba(212,175,55,0.4);
        }

        .status-replied {
          background: rgba(11,96,69,0.12);
          color: var(--secondary);
          border: 1px solid rgba(11,96,69,0.3);
        }

        .action-link {
          color: var(--primary);
          font-weight: 600;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .action-link:hover {
          color: var(--secondary);
          text-decoration: underline;
        }

        .loader-wrap {
          text-align: center;
          padding: 60px 20px;
        }

        .spinner {
          width: 48px;
          height: 48px;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        @media (max-width: 1024px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .pages-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 650px) {
          .dash-header { flex-direction: column; align-items: flex-start; gap: 16px; }
          .stats-grid { grid-template-columns: 1fr; }
          .pages-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* Header Banner */}
      <div className="dash-header">
        <div>
          <h1>Admin Control Dashboard</h1>
          <p>Overview of system statistics, content management modules, and guest service requests.</p>
        </div>
        <button onClick={fetchDashboardData} className="refresh-btn">
          <FaSync size={13} /> Refresh Data
        </button>
      </div>

      {loading ? (
        <div className="loader-wrap">
          <svg className="spinner" viewBox="0 0 56 56">
            <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(212,175,55,.2)" strokeWidth="5" />
            <path d="M28 6a22 22 0 0 1 22 22" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <p style={{ marginTop: "16px", color: "var(--muted)", fontWeight: 500 }}>Fetching live database statistics...</p>
        </div>
      ) : error ? (
        <div className="enq-card" style={{ textAlign: "center", padding: "40px 20px" }}>
          <FaExclamationTriangle size={36} style={{ color: "var(--accent)", marginBottom: "12px" }} />
          <h3 style={{ color: "var(--primary)" }}>Failed to Load Dashboard Data</h3>
          <p style={{ color: "var(--muted)" }}>Could not connect to the backend server. Please verify your internet or server connection.</p>
          <button onClick={fetchDashboardData} className="refresh-btn" style={{ marginTop: "12px" }}>
            <FaSync /> Try Again
          </button>
        </div>
      ) : (
        <>
          {/* Top Key Metrics Strip */}
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-icon-wrap">
                <FaConciergeBell />
              </div>
              <div>
                <div className="stat-val">{stats.servicesCount}</div>
                <div className="stat-label">Wealth Services</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap">
                <FaBullseye />
              </div>
              <div>
                <div className="stat-val">{stats.goalPillars + stats.goalSteps}</div>
                <div className="stat-label">Financial Goal Elements</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap">
                <FaBuilding />
              </div>
              <div>
                <div className="stat-val">{stats.chalukyaSolutions + stats.chalukyaSteps}</div>
                <div className="stat-label">Chalukya Land Items</div>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrap" style={{ background: stats.pendingEnquiries > 0 ? "rgba(212,175,55,0.2)" : "rgba(11,96,69,0.12)" }}>
                <FaEnvelopeOpenText style={{ color: stats.pendingEnquiries > 0 ? "#8A6D0B" : "#0B6045" }} />
              </div>
              <div>
                <div className="stat-val">{stats.totalEnquiries}</div>
                <div className="stat-label">{stats.pendingEnquiries} Pending Requests</div>
              </div>
            </div>
          </div>

          {/* Quick Access Modules Grid */}
          <h2 className="sec-title">
            <FaLayerGroup size={20} style={{ color: "var(--accent)" }} /> Admin Management Modules
          </h2>
          <div className="pages-grid">
            {adminPages.map((page, idx) => (
              <Link key={idx} to={page.path} className="page-tile">
                <div>
                  <div className="tile-top">
                    <div className="tile-ic">{page.icon}</div>
                    <span className="tile-badge">{page.countText}</span>
                  </div>
                  <div className="tile-title">{page.title}</div>
                  <div className="tile-desc">{page.desc}</div>
                </div>
                <div className="tile-foot">
                  Access Management <FaArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>

          {/* Recent Guest Enquiries & Messages */}
          <div className="enq-card">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <h2 className="sec-title" style={{ margin: 0 }}>
                <FaEnvelopeOpenText size={20} style={{ color: "var(--accent)" }} /> Recent Guest Enquiries & Support Messages
              </h2>
              <Link to="/admin/enquiries" className="action-link">
                View All Messages ({stats.totalEnquiries}) <FaArrowRight size={12} />
              </Link>
            </div>

            {recentEnquiries.length === 0 ? (
              <p style={{ color: "var(--muted)", textStyle: "italic", margin: 0 }}>No guest enquiries found in the database.</p>
            ) : (
              <div className="table-responsive">
                <table className="custom-table">
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Guest Name</th>
                      <th>Email / Contact</th>
                      <th>Service Category</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentEnquiries.map((enq) => (
                      <tr key={enq._id}>
                        <td style={{ fontSize: "13px", color: "var(--muted)" }}>
                          {enq.createdAt ? new Date(enq.createdAt).toLocaleDateString() : "N/A"}
                        </td>
                        <td>
                          <strong>{enq.fullName}</strong>
                        </td>
                        <td>
                          <div>{enq.email}</div>
                          <small style={{ color: "var(--muted)" }}>{enq.phone}</small>
                        </td>
                        <td>
                          <span style={{ fontWeight: 500 }}>{enq.service || "General Inquiry"}</span>
                        </td>
                        <td>
                          {enq.status === "Replied" ? (
                            <span className="status-badge status-replied">
                              <FaCheckCircle size={11} /> Replied
                            </span>
                          ) : (
                            <span className="status-badge status-pending">
                              <FaClock size={11} /> Pending
                            </span>
                          )}
                        </td>
                        <td>
                          <Link to="/admin/enquiries" className="action-link">
                            Reply <FaArrowRight size={11} />
                          </Link>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
```

===============================================================================
FILE: src/pages/AdminForgotPassword.jsx
===============================================================================

```jsx
import React, { useState } from "react";
import { apiUrl } from "../api";
import { Link } from "react-router-dom";

const AdminForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email) {
      setError("Please enter your registered admin email address.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(apiUrl("/api/admin/forgot-password"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to reset password.");
      }

      setSuccess(data.message || "A new password has been sent to your email address!");
      setEmail("");
    } catch (err) {
      setError(err.message || "Something went wrong while resetting password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #073B2A, #0B6045)",
        padding: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "420px", width: "100%", background: "#FFFFFF" }}>
        <div className="card-body p-4 p-sm-5">
          <div className="text-center mb-4">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="INVESTNOW Logo" 
                className="img-fluid mb-3"
                style={{ width: "55px", height: "55px", borderRadius: "50%", objectFit: "contain", border: "2px solid #D4AF37", background: "#FFFFFF", padding: "4px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo.jpeg";
                }}
              />
            </Link>
            <h3 className="fw-bold" style={{ color: "#073B2A" }}>Forgot Password</h3>
            <p className="text-muted small">
              Enter your registered email address and we will generate a new password and send it to your email.
            </p>
          </div>

          {error && (
            <div className="alert alert-danger py-2 small rounded-3 mb-3" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success py-2 small rounded-3 mb-3" role="alert">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: "#17231E" }}>Registered Admin Email</label>
              <input
                type="email"
                className="form-control form-control-lg rounded-3 fs-6"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ borderColor: "#DCE8E1" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-100 btn-lg rounded-3 fs-6 fw-bold shadow-sm"
              style={{ background: "#D4AF37", borderColor: "#D4AF37", color: "#FFFFFF" }}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : (
                "Send New Password"
              )}
            </button>
          </form>

          <div className="text-center mt-4 pt-2 border-top">
            <p className="small text-muted mb-0">
              Remember your password?{" "}
              <Link to="/investnowlogin" className="fw-semibold text-decoration-none" style={{ color: "#0B6045" }}>
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminForgotPassword;
```

===============================================================================
FILE: src/pages/AdminLogin.jsx
===============================================================================

```jsx
import React, { useState } from "react";
import { apiUrl } from "../api";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(apiUrl("/api/admin/login"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Invalid email or password");
      }

      // Store auth info in localStorage
      localStorage.setItem("adminToken", data.token);
      if (data.admin) {
        localStorage.setItem("adminUser", JSON.stringify(data.admin));
      }

      // Navigate to /admin page
      navigate("/admin");
    } catch (err) {
      setError(err.message || "Something went wrong during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #073B2A, #0B6045)",
        padding: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "420px", width: "100%", background: "#FFFFFF" }}>
        <div className="card-body p-4 p-sm-5">
          <div className="text-center mb-4">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="INVESTNOW Logo" 
                className="img-fluid mb-3"
                style={{ width: "55px", height: "55px", borderRadius: "50%", objectFit: "contain", border: "2px solid #D4AF37", background: "#FFFFFF", padding: "4px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo.jpeg";
                }}
              />
            </Link>
            <h3 className="fw-bold" style={{ color: "#073B2A" }}>Admin Login</h3>
            <p className="text-muted small">Access your InvestNow admin dashboard</p>
          </div>

          {error && (
            <div className="alert alert-danger py-2 small rounded-3 mb-3" role="alert">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold" style={{ color: "#17231E" }}>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg rounded-3 fs-6"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ borderColor: "#DCE8E1" }}
              />
            </div>

            <div className="mb-3">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <label className="form-label fw-semibold mb-0" style={{ color: "#17231E" }}>Password</label>
                <Link
                  to="/investnowforgotpassword"
                  className="small text-decoration-none fw-semibold"
                  style={{ color: "#0B6045" }}
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                className="form-control form-control-lg rounded-3 fs-6"
                placeholder="Enter password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ borderColor: "#DCE8E1" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-100 btn-lg rounded-3 fs-6 fw-bold shadow-sm mt-3"
              style={{ background: "#D4AF37", borderColor: "#D4AF37", color: "#FFFFFF" }}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : (
                "Login to Dashboard"
              )}
            </button>
          </form>

          <div className="text-center mt-4 pt-2 border-top">
            <p className="small text-muted mb-0">
              Don't have an admin account?{" "}
              <Link to="/investnowregi" className="fw-semibold text-decoration-none" style={{ color: "#0B6045" }}>
                Register here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
```

===============================================================================
FILE: src/pages/AdminRegister.jsx
===============================================================================

```jsx
import React, { useState } from "react";
import { apiUrl } from "../api";
import { Link, useNavigate } from "react-router-dom";

const AdminRegister = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(apiUrl("/api/admin/register"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      setSuccess("Admin registered successfully! Redirecting to login...");
      setTimeout(() => {
        navigate("/investnowlogin");
      }, 1500);
    } catch (err) {
      setError(err.message || "Something went wrong during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="d-flex align-items-center justify-content-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #073B2A, #0B6045)",
        padding: "20px",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      <div className="card shadow-lg border-0 rounded-4" style={{ maxWidth: "450px", width: "100%", background: "#FFFFFF" }}>
        <div className="card-body p-4 p-sm-5">
          <div className="text-center mb-4">
            <Link to="/">
              <img 
                src="/logo.png" 
                alt="INVESTNOW Logo" 
                className="img-fluid mb-3"
                style={{ width: "55px", height: "55px", borderRadius: "50%", objectFit: "contain", border: "2px solid #D4AF37", background: "#FFFFFF", padding: "4px" }}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/logo.jpeg";
                }}
              />
            </Link>
            <h3 className="fw-bold" style={{ color: "#073B2A" }}>Admin Register</h3>
            <p className="text-muted small">Create a new admin account for InvestNow</p>
          </div>

          {error && (
            <div className="alert alert-danger py-2 small rounded-3 mb-3" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success py-2 small rounded-3 mb-3" role="alert">
              {success}
            </div>
          )}

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold" style={{ color: "#17231E" }}>Full Name</label>
              <input
                type="text"
                name="name"
                className="form-control form-control-lg rounded-3 fs-6"
                placeholder="Enter full name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ borderColor: "#DCE8E1" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold" style={{ color: "#17231E" }}>Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control form-control-lg rounded-3 fs-6"
                placeholder="admin@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ borderColor: "#DCE8E1" }}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold" style={{ color: "#17231E" }}>Password</label>
              <input
                type="password"
                name="password"
                className="form-control form-control-lg rounded-3 fs-6"
                placeholder="Create password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ borderColor: "#DCE8E1" }}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold" style={{ color: "#17231E" }}>Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control form-control-lg rounded-3 fs-6"
                placeholder="Confirm password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={{ borderColor: "#DCE8E1" }}
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="btn w-100 btn-lg rounded-3 fs-6 fw-bold shadow-sm"
              style={{ background: "#D4AF37", borderColor: "#D4AF37", color: "#FFFFFF" }}
            >
              {loading ? (
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
              ) : (
                "Register Admin"
              )}
            </button>
          </form>

          <div className="text-center mt-4 pt-2 border-top">
            <p className="small text-muted mb-0">
              Already have an admin account?{" "}
              <Link to="/investnowlogin" className="fw-semibold text-decoration-none" style={{ color: "#0B6045" }}>
                Login here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
```

===============================================================================
FILE: src/pages/ChalukyaDevelopers.jsx
===============================================================================

```jsx
import React, { useState, useEffect, useRef } from "react";
import { apiUrl } from "../api";
import CTASection from "../components/CTASection";
import {
  FaMapMarkedAlt,
  FaTree,
  FaBuilding,
  FaFileContract,
  FaCheckCircle,
  FaSearch,
  FaClipboardCheck,
  FaHandshake,
  FaPhoneAlt,
  FaArrowRight,
  FaLayerGroup,
  FaExclamationTriangle,
  FaSync,
  FaPaperPlane,
  FaShieldAlt,
  FaCompass
} from "react-icons/fa";

const renderIcon = (iconName) => {
  switch (iconName) {
    case "FaMapMarkedAlt":
      return <FaMapMarkedAlt />;
    case "FaTree":
      return <FaTree />;
    case "FaBuilding":
      return <FaBuilding />;
    case "FaFileContract":
      return <FaFileContract />;
    case "FaSearch":
      return <FaSearch />;
    case "FaLayerGroup":
      return <FaLayerGroup />;
    case "FaClipboardCheck":
      return <FaClipboardCheck />;
    case "FaHandshake":
      return <FaHandshake />;
    default:
      return <FaMapMarkedAlt />;
  }
};

const Spot = ({ className = "", children, ...rest }) => {
  const ref = useRef(null);
  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} className={`spot ${className}`} {...rest}>
      {children}
    </div>
  );
};

const ChalukyaDevelopers = () => {
  const [chalukyaData, setChalukyaData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Enquiry Form State
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: ""
  });
  const [submitting, setSubmitting] = useState(false);
  const [formFeedback, setFormFeedback] = useState({ type: "", text: "" });

  const fetchChalukyaContent = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(apiUrl("/api/chalukya"));
      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }
      const result = await res.json();
      if (result.success && result.data) {
        setChalukyaData(result.data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Failed to fetch Chalukya resources:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchChalukyaContent();
  }, []);

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setFormFeedback({ type: "", text: "" });

    if (!form.fullName || !form.email || !form.phone || !form.message) {
      setFormFeedback({ type: "danger", text: "Please fill in all required fields." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(apiUrl("/api/enquiries"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          service: "Chalukya Land Enquiry",
          message: form.message
        })
      });

      const result = await res.json();

      if (res.ok) {
        setFormFeedback({ type: "success", text: result.message || "Enquiry submitted successfully! Our team will get back to you soon." });
        setForm({ fullName: "", email: "", phone: "", message: "" });
      } else {
        setFormFeedback({ type: "danger", text: result.message || "Failed to submit enquiry." });
      }
    } catch (err) {
      console.error(err);
      setFormFeedback({ type: "danger", text: "Unable to connect to server. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  const getSortedItems = (array) => {
    if (!array || !Array.isArray(array)) return [];
    return [...array].sort((a, b) => (a.priority || 0) - (b.priority || 0));
  };

  const landSolutions = getSortedItems(chalukyaData?.landSolutions);
  const whyConsider = getSortedItems(chalukyaData?.whyConsider);
  const landJourney = getSortedItems(chalukyaData?.landJourney);

  return (
    <div className="cd-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .cd-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .cd-page h1,.cd-page h2,.cd-page h3,.cd-page h4,.cd-page h5 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .cd-page .wrap { max-width:1200px; margin:0 auto; }
        .cd-page section.sec { padding:90px 5%; position:relative; }

        .head { max-width:660px; margin-bottom:48px; }
        .head h2 { font-size:clamp(30px,4vw,44px); font-weight:600; line-height:1.15; letter-spacing:-.015em; margin-bottom:14px; color:var(--primary); }
        .head p { font-size:16.5px; line-height:1.7; margin:0; color:var(--muted); max-width:56ch; }

        /* Bright Light Hero Section */
        .chalukya-hero {
          background:linear-gradient(135deg, #FBF8F1 0%, #F5F8F6 60%, #E8F0EC 100%);
          color:var(--text); padding:90px 5% 80px; position:relative; overflow:hidden; border-bottom:1px solid rgba(7,59,42,0.12);
        }
        .chalukya-hero-bg-svg {
          position:absolute; inset:0; width:100%; height:100%; pointer-events:none; opacity:0.6;
        }
        .chalukya-hero-container {
          max-width:1200px; margin:0 auto; display:grid; grid-template-columns:1.1fr 0.9fr; gap:50px; align-items:center; position:relative; z-index:1;
        }
        .chalukya-badge {
          display:inline-flex; align-items:center; gap:8px; background:rgba(212,175,55,0.12); border:1px solid rgba(212,175,55,0.4);
          color:var(--primary); font-family:'Fraunces',serif; font-style:italic; font-size:14px; font-weight:600;
          padding:6px 18px; border-radius:999px; margin-bottom:20px; letter-spacing:.02em;
        }
        .chalukya-hero-title {
          font-size:clamp(36px,5vw,54px); font-weight:600; color:var(--primary); margin-bottom:12px; line-height:1.12; letter-spacing:-.02em;
        }
        .chalukya-hero-subtitle { font-family:'Fraunces',serif; font-style:italic; font-size:22px; color:var(--secondary); font-weight:500; margin-bottom:20px; }
        .chalukya-hero-desc { font-size:16.5px; color:var(--muted); line-height:1.7; margin-bottom:34px; max-width:560px; }

        .chalukya-btn-group { display:flex; gap:16px; flex-wrap:wrap; }
        .btn-earth-primary {
          background:var(--primary); color:#FFFFFF; padding:14px 30px; border-radius:999px; font-size:15px; font-weight:600;
          text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:all .25s; border:1px solid var(--primary);
        }
        .btn-earth-primary:hover { background:var(--secondary); transform:translateY(-2px); box-shadow:0 10px 24px rgba(7,59,42,.2); }
        .btn-earth-outline {
          background:#FFFFFF; color:var(--primary); border:1px solid rgba(7,59,42,.3); padding:14px 28px; border-radius:999px;
          font-size:15px; font-weight:600; text-decoration:none; display:inline-flex; align-items:center; gap:10px; transition:all .25s;
        }
        .btn-earth-outline:hover { background:var(--ivory); border-color:var(--accent); color:var(--primary); transform:translateY(-2px); }

        .photo-frame { position:relative; padding:0 20px 20px 0; }
        .photo-frame::before { content:''; position:absolute; inset:20px 0 0 20px; border:2px solid var(--accent); border-radius:28px; }
        .photo-frame img { position:relative; width:100%; aspect-ratio:4/3.2; object-fit:cover; border-radius:28px; box-shadow:0 20px 40px rgba(7,59,42,.1); }

        /* Light Solutions Section */
        .solutions-sec { background:var(--ivory); position:relative; border-bottom:1px solid rgba(7,59,42,0.08); }
        .solutions-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:24px; position:relative; z-index:1; }
        .spot {
          --mx:50%; --my:50%; position:relative; overflow:hidden; border-radius:24px; padding:36px;
          background:#FFFFFF; border:1px solid rgba(7,59,42,.12);
          box-shadow:0 8px 24px rgba(7,59,42,0.04);
          transition:all .3s ease;
        }
        .spot::before {
          content:''; position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .3s;
          background:radial-gradient(400px circle at var(--mx) var(--my),rgba(212,175,55,.15),transparent 60%);
        }
        .spot:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow:0 16px 36px rgba(7,59,42,0.08); }
        .spot:hover::before { opacity:1; }
        .spot > * { position:relative; }

        .s-icon {
          width:52px; height:52px; border-radius:16px; display:grid; place-items:center; font-size:22px;
          color:var(--primary); background:rgba(7,59,42,.06); border:1px solid rgba(212,175,55,.4); margin-bottom:18px;
        }
        .spot:hover .s-icon { background:var(--primary); color:var(--accent); border-color:var(--primary); }
        .s-title { font-size:23px; font-weight:600; color:var(--primary); margin:0 0 10px; }
        .s-desc { font-size:14.5px; line-height:1.65; color:var(--muted); margin:0 0 20px; }
        .s-bullets { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; gap:10px; }
        .s-bullet { display:flex; align-items:center; gap:10px; font-size:13.5px; color:var(--text); font-weight:500; }
        .bullet-check { color:var(--secondary); font-size:14px; flex-shrink:0; }

        /* Why Consider Cards */
        .why-sec { background:var(--bg); border-bottom:1px solid rgba(7,59,42,0.08); }
        .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .wcard {
          background:#FFFFFF; border:1px solid rgba(7,59,42,.12); border-radius:24px; padding:32px;
          transition:transform .3s, box-shadow .3s, border-color .3s; position:relative; overflow:hidden;
        }
        .wcard:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow:0 16px 36px rgba(7,59,42,.08); }
        .wcard::after { content:''; position:absolute; left:0; bottom:0; height:3px; width:0; background:var(--accent); transition:width .4s; }
        .wcard:hover::after { width:100%; }
        .w-icon-badge {
          width:42px; height:42px; border-radius:12px; background:rgba(212,175,55,.12); color:var(--primary);
          display:grid; place-items:center; font-size:18px; margin-bottom:16px; border:1px solid rgba(212,175,55,.3);
        }
        .w-title { font-size:19px; font-weight:600; color:var(--primary); margin-bottom:10px; }
        .w-desc { font-size:14px; line-height:1.65; color:var(--muted); margin:0; }

        /* Land Journey Roadmap */
        .journey-sec { background:var(--ivory); position:relative; }
        .journey-connector-svg {
          position:absolute; top:54%; left:5%; right:5%; width:90%; height:40px; pointer-events:none; z-index:0;
        }
        .journey-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:18px; margin-top:40px; position:relative; z-index:1; }
        .jcard {
          background:#FFFFFF; border:1px solid rgba(7,59,42,.12); border-radius:24px; padding:28px 18px; text-align:center;
          display:flex; flex-direction:column; align-items:center; transition:all .3s; box-shadow:0 6px 18px rgba(7,59,42,.03);
        }
        .jcard:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow:0 16px 36px rgba(7,59,42,.08); }
        .step-badge {
          font-family:'Fraunces',serif; font-size:12px; font-weight:600; color:var(--primary); background:rgba(212,175,55,.2);
          border:1px solid rgba(212,175,55,.4); padding:4px 12px; border-radius:999px; margin-bottom:14px;
        }
        .step-ic {
          width:48px; height:48px; border-radius:50%; border:1.5px solid var(--primary); color:var(--primary);
          background:var(--bg); display:grid; place-items:center; font-size:19px; margin-bottom:14px; transition:all .3s;
        }
        .jcard:hover .step-ic { background:var(--primary); color:var(--accent); border-color:var(--primary); }
        .step-title { font-size:16px; font-weight:600; color:var(--primary); margin-bottom:8px; }
        .step-desc { font-size:13px; line-height:1.5; color:var(--muted); margin:0; }

        /* Disclaimer Box */
        .disclaimer-box {
          background:#FFFFFF; border:1.5px solid var(--accent); padding:24px 30px; border-radius:20px;
          font-size:13.5px; color:var(--text); line-height:1.65; margin-top:54px; text-align:center; max-width:860px; margin-left:auto; margin-right:auto;
          box-shadow:0 8px 24px rgba(7,59,42,.04); display:flex; align-items:center; gap:16px; justify-content:center;
        }
        .disclaimer-icon { color:var(--accent); font-size:28px; flex-shrink:0; }

        /* Form styling */
        .form-sec { background:var(--bg); }
        .form-card {
          background:#FFFFFF; border:1px solid rgba(7,59,42,.14); border-radius:28px; padding:44px; box-shadow:0 18px 40px rgba(7,59,42,.06);
        }
        .form-label { font-size:14px; font-weight:600; color:var(--primary); margin-bottom:6px; display:block; }
        .form-input,.form-textarea {
          width:100%; box-sizing:border-box; background:var(--bg); border:1px solid rgba(7,59,42,.16);
          border-radius:12px; padding:12px 16px; font-size:14.5px; color:var(--text); font-family:inherit; transition:border-color .25s, box-shadow .25s;
        }
        .form-input:focus,.form-textarea:focus { outline:none; border-color:var(--accent); box-shadow:0 0 0 3px rgba(212,175,55,.2); }
        .form-input[disabled] { background:rgba(7,59,42,.05); color:var(--muted); cursor:not-allowed; }

        .form-grid { display:grid; grid-template-columns:1fr 1fr; gap:20px; margin-bottom:20px; }
        .form-full { grid-column:span 2; }

        .alert-box { padding:14px 20px; border-radius:14px; font-size:14px; margin-bottom:24px; font-weight:500; }
        .alert-danger { background:rgba(217,83,79,.12); border:1px solid rgba(217,83,79,.3); color:#c9302c; }
        .alert-success { background:rgba(11,96,69,.12); border:1px solid rgba(11,96,69,.3); color:var(--primary); }

        .form-submit-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          background:var(--primary); color:#FFFFFF; font-weight:600; font-size:15px; border:none; cursor:pointer;
          padding:14px 36px; border-radius:999px; transition:all .25s;
        }
        .form-submit-btn:hover { background:var(--secondary); transform:translateY(-2px); box-shadow:0 10px 24px rgba(7,59,42,.25); }

        /* States */
        .state { max-width:560px; margin:90px auto; text-align:center; padding:52px 32px; background:#fff; border-radius:28px; border:1px solid rgba(7,59,42,.1); }
        .state h3 { font-size:26px; color:var(--primary); margin:18px 0 10px; }
        .state p { color:var(--muted); line-height:1.65; margin:0 0 24px; font-size:15px; }
        .state .warn { font-size:38px; color:var(--accent); }
        .retry { display:inline-flex; align-items:center; gap:10px; border:none; cursor:pointer; background:var(--primary); color:#FFF; font:600 14px 'Inter',sans-serif; padding:13px 24px; border-radius:999px; transition:all .25s; }
        .retry:hover { background:var(--secondary); transform:translateY(-2px); }
        .loader { width:56px; height:56px; animation:spin 1.1s linear infinite; margin:0 auto; }
        @keyframes spin { to { transform:rotate(360deg); } }

        @media (max-width:1024px) {
          .chalukya-hero-container { grid-template-columns:1fr; text-align:center; }
          .chalukya-hero-desc { margin-left:auto; margin-right:auto; }
          .chalukya-btn-group { justify-content:center; }
          .solutions-grid { grid-template-columns:1fr; }
          .why-grid,.journey-grid { grid-template-columns:repeat(2,1fr); }
          .form-grid { grid-template-columns:1fr; }
          .form-full { grid-column:auto; }
          .journey-connector-svg { display:none; }
        }
        @media (max-width:600px) {
          .cd-page section.sec { padding:70px 6%; }
          .why-grid,.journey-grid { grid-template-columns:1fr; }
          .form-card { padding:28px 20px; }
          .disclaimer-box { flex-direction:column; text-align:center; }
        }
      `}</style>

      {/* Sub-brand Dedicated Hero Section - Bright Light Theme with SVG Blueprint Grid */}
      <div className="chalukya-hero">
        <svg className="chalukya-hero-bg-svg" aria-hidden="true">
          <defs>
            <pattern id="lightPlotGrid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(7,59,42,0.06)" strokeWidth="1" />
              <circle cx="60" cy="0" r="2" fill="rgba(212,175,55,0.4)" />
              <path d="M 15 15 L 45 15 L 45 45 L 15 45 Z" fill="none" stroke="rgba(7,59,42,0.03)" strokeWidth="1" strokeDasharray="3 3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#lightPlotGrid)" />
        </svg>

        <div className="chalukya-hero-container">
          <div>
            <span className="chalukya-badge">
              <FaCompass style={{ color: "#D4AF37" }} /> PROPERTY & LAND SERVICES
            </span>
            <h1 className="chalukya-hero-title">CHALUKYA DEVELOPERS</h1>
            <div className="chalukya-hero-subtitle">Your Land, Your Future. Our Support.</div>
            <p className="chalukya-hero-desc">
              Dedicated land support, plot identification, agricultural land assistance, and property documentation services within the INVESTNOW ecosystem.
            </p>
            <div className="chalukya-btn-group">
              <a href="#solutions" className="btn-earth-primary">
                Explore Land Opportunities <FaArrowRight size={12} />
              </a>
              <a href="#enquiry-form" className="btn-earth-outline">
                Enquire Now <FaPhoneAlt size={12} />
              </a>
            </div>
          </div>

          <div className="photo-frame">
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=1000&auto=format&fit=crop"
              alt="Land Plot Opportunities"
            />
          </div>
        </div>
      </div>

      {loading ? (
        <div className="state" role="status">
          <svg className="loader" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(212,175,55,.2)" strokeWidth="5" />
            <path d="M28 6a22 22 0 0 1 22 22" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <h3>Loading Chalukya Developers content...</h3>
        </div>
      ) : error ? (
        <div className="state" role="alert">
          <FaExclamationTriangle className="warn" />
          <h3>Unable to load resources</h3>
          <p>We couldn't reach the server to fetch Chalukya Developers data. Please check your connection or try again.</p>
          <button className="retry" onClick={fetchChalukyaContent}><FaSync /> Try again</button>
        </div>
      ) : (
        <>
          {/* Light Solutions Grid */}
          <section className="sec solutions-sec" id="solutions">
            <div className="wrap">
              <div className="head">
                <h2>Land & Property Solutions</h2>
                <p>
                  Chalukya Developers functions as the dedicated land and property arm associated with INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED.
                </p>
              </div>

              <div className="solutions-grid">
                {landSolutions.map((s, idx) => (
                  <Spot key={s._id || idx}>
                    <div className="s-icon">{renderIcon(s.icon)}</div>
                    <h3 className="s-title">{s.title}</h3>
                    <p className="s-desc">{s.desc}</p>
                    {s.features && s.features.length > 0 && (
                      <ul className="s-bullets">
                        {s.features.map((f, fi) => (
                          <li key={fi} className="s-bullet">
                            <FaCheckCircle className="bullet-check" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Spot>
                ))}
              </div>
            </div>
          </section>

          {/* Why Consider Section */}
          <section className="sec why-sec">
            <div className="wrap">
              <div className="head">
                <h2>Why Consider Chalukya Developers</h2>
                <p>Transparent documentation, clear titles, and relationship-based property assistance.</p>
              </div>

              <div className="why-grid">
                {whyConsider.map((w, idx) => (
                  <div key={w._id || idx} className="wcard">
                    <div className="w-icon-badge">
                      <FaShieldAlt />
                    </div>
                    <h4 className="w-title">{w.title}</h4>
                    <p className="w-desc">{w.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Land Journey Section with Roadmap connector SVG */}
          <section className="sec journey-sec">
            <svg className="journey-connector-svg" viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true">
              <path d="M 50 20 Q 250 -10, 450 20 T 850 20 T 950 20" fill="none" stroke="rgba(212,175,55,0.4)" strokeWidth="2" strokeDasharray="6 6" />
            </svg>

            <div className="wrap">
              <div className="head">
                <h2>The Land Journey</h2>
                <p>A structured 5-step process ensuring clarity from requirement search to title documentation.</p>
              </div>

              <div className="journey-grid">
                {landJourney.map((j, idx) => (
                  <div key={j._id || idx} className="jcard">
                    <span className="step-badge">STEP {j.step || (idx + 1).toString().padStart(2, "0")}</span>
                    <div className="step-ic">{renderIcon(j.icon)}</div>
                    <h5 className="step-title">{j.title}</h5>
                    <p className="step-desc">{j.text}</p>
                  </div>
                ))}
              </div>

              <div className="disclaimer-box">
                <FaShieldAlt className="disclaimer-icon" />
                <div>
                  <strong>Important Legal Notice:</strong> Property availability, title deeds, land approvals, pricing, and legal encumbrance status should be independently verified by buyers prior to executing any financial transaction or land purchase.
                </div>
              </div>
            </div>
          </section>

          {/* Interactive Land Enquiry / Service Request Form */}
          <section className="sec form-sec" id="enquiry-form">
            <div className="wrap" style={{ maxWidth: "840px" }}>
              <div className="head center" style={{ textAlign: "center", margin: "0 auto 40px" }}>
                <h2>Chalukya Land Service Request & Enquiry</h2>
                <p style={{ margin: "0 auto" }}>
                  Fill out the form below to enquire about available land parcels, plot verification, or property documentation assistance.
                </p>
              </div>

              {formFeedback.text && (
                <div className={`alert-box alert-${formFeedback.type}`} role="alert">
                  {formFeedback.text}
                </div>
              )}

              <form onSubmit={handleEnquirySubmit} className="form-card">
                <div className="form-grid">
                  <div>
                    <label className="form-label">Full Name *</label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your full name"
                      value={form.fullName}
                      onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="yourname@example.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label">Enquiry Subject</label>
                    <input
                      type="text"
                      className="form-input"
                      value="Chalukya Land Plot Enquiry"
                      disabled
                    />
                  </div>
                  <div className="form-full">
                    <label className="form-label">Enquiry / Message Details *</label>
                    <textarea
                      className="form-textarea"
                      rows="4"
                      placeholder="Specify your budget, preferred location, land type (residential, commercial, agricultural), or documentation requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div style={{ textAlign: "center", marginTop: "24px" }}>
                  <button type="submit" disabled={submitting} className="form-submit-btn">
                    {submitting ? "Submitting..." : <><FaPaperPlane size={13} /> Submit Land Enquiry</>}
                  </button>
                </div>
              </form>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <CTASection
        title="Looking for Land Opportunities?"
        subtitle="Contact Chalukya Developers for property enquiries and documentation guidance."
        primaryBtnText="Enquire Now"
        primaryBtnLink="/contact"
        secondaryBtnText="Contact Support"
        secondaryBtnLink="/customer-support"
      />
    </div>
  );
};

export default ChalukyaDevelopers;
```

===============================================================================
FILE: src/pages/ContactUs.jsx
===============================================================================

```jsx
import React, { useState } from "react";
import { apiUrl } from "../api";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { FaPhoneAlt, FaEnvelope, FaUserTie, FaMapMarkerAlt, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "Mutual Funds",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: "", text: "" });

    if (!formData.fullName || !formData.email || !formData.phone || !formData.message) {
      setFeedback({ type: "danger", text: "Please fill in all required fields." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(apiUrl("/api/enquiries"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setFeedback({ type: "success", text: result.message || "Thank you! Your enquiry has been submitted successfully." });
        setFormData({ fullName: "", phone: "", email: "", service: "Mutual Funds", message: "" });
      } else {
        setFeedback({ type: "danger", text: result.message || "Failed to submit enquiry." });
      }
    } catch (err) {
      console.error(err);
      setFeedback({ type: "danger", text: "Unable to connect to server. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="ct-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .ct-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#04241A;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .ct-page h2,.ct-page h3,.ct-page h4 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .ct-page .wrap { max-width:1200px; margin:0 auto; }
        .ct-page section.sec { padding:104px 5%; position:relative; }

        .head { max-width:660px; margin-bottom:56px; }
        .head h2 { font-size:clamp(30px,4vw,44px); font-weight:600; line-height:1.15; letter-spacing:-.015em; margin-bottom:14px; color:var(--primary); }
        .head p { font-size:16.5px; line-height:1.7; margin:0; color:var(--muted); max-width:56ch; }

        /* 3 Contact Cards */
        .cards-grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-bottom:60px; }
        .contact-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:24px; padding:35px 26px;
          text-align:center; transition:transform .3s, box-shadow .3s, border-color .3s; position:relative; overflow:hidden;
        }
        .contact-card:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow:0 16px 36px rgba(7,59,42,.08); }
        .contact-card::after { content:''; position:absolute; left:0; bottom:0; height:3px; width:0; background:var(--accent); transition:width .4s; }
        .contact-card:hover::after { width:100%; }

        .contact-icon-box {
          width:52px; height:52px; border-radius:50%; background:var(--accent); color:var(--deep);
          display:grid; place-items:center; font-size:20px; margin:0 auto 20px;
        }
        .contact-card-title { font-size:20px; font-weight:600; color:var(--primary); margin-bottom:10px; }
        .contact-card-text { font-size:14px; color:var(--muted); line-height:1.6; }
        .contact-card-text a { color:var(--primary); text-decoration:none; font-weight:600; transition:color .25s; }
        .contact-card-text a:hover { color:var(--accent); }

        /* Form & Info Split Grid */
        .contact-grid { display:grid; grid-template-columns:1.2fr 0.8fr; gap:36px; align-items:start; margin-bottom:60px; }

        .form-card {
          background:#fff; border:1px solid rgba(7,59,42,.14); border-radius:28px; padding:44px; box-shadow:0 18px 40px rgba(7,59,42,.06);
        }
        .form-group { margin-bottom:20px; }
        .form-label { font-size:14px; font-weight:600; color:var(--primary); margin-bottom:6px; display:block; }
        .form-input,.form-select,.form-textarea {
          width:100%; box-sizing:border-box; background:var(--bg); border:1px solid rgba(7,59,42,.16);
          border-radius:12px; padding:12px 16px; font-size:14.5px; color:var(--text); font-family:inherit; transition:border-color .25s, box-shadow .25s;
        }
        .form-input:focus,.form-select:focus,.form-textarea:focus { outline:none; border-color:var(--accent); box-shadow:0 0 0 3px rgba(212,175,55,.2); }

        .alert-box { padding:14px 20px; border-radius:14px; font-size:14px; margin-bottom:24px; font-weight:500; display:flex; align-items:center; gap:10px; }
        .alert-danger { background:rgba(217,83,79,.12); border:1px solid rgba(217,83,79,.3); color:#c9302c; }
        .alert-success { background:rgba(11,96,69,.12); border:1px solid rgba(11,96,69,.3); color:var(--primary); }

        .submit-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          background:var(--accent); color:var(--deep); font-weight:600; font-size:15px; border:none; cursor:pointer;
          padding:14px 36px; border-radius:999px; width:100%; transition:transform .25s, box-shadow .25s;
        }
        .submit-btn:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(212,175,55,.35); }

        .info-card {
          background:linear-gradient(150deg,var(--primary),var(--deep)); color:#FDFBF5;
          padding:44px; border-radius:28px; border-left:4px solid var(--accent); position:relative; overflow:hidden;
        }
        .info-card-title { font-size:26px; font-weight:600; color:#FDFBF5; margin-bottom:16px; }
        .info-card-text { font-size:15px; color:rgba(253,251,245,.8); line-height:1.65; margin-bottom:28px; }

        .info-item { display:flex; align-items:flex-start; gap:16px; margin-bottom:22px; font-size:14.5px; color:rgba(253,251,245,.9); }
        .info-icon { color:var(--accent); font-size:19px; margin-top:3px; flex-shrink:0; }

        .map-container {
          width:100%; border-radius:28px; overflow:hidden; box-shadow:0 14px 36px rgba(7,59,42,.08);
          border:1px solid rgba(7,59,42,.12); background:#fff;
        }

        @media (max-width:992px) {
          .cards-grid-3 { grid-template-columns:1fr; }
          .contact-grid { grid-template-columns:1fr; }
        }
        @media (max-width:600px) {
          .ct-page section.sec { padding:70px 6%; }
          .form-card, .info-card { padding:28px 20px; }
        }
      `}</style>

      {/* Hero Header */}
      <PageHero
        title="Let's Start a Conversation"
        subtitle="Get in touch with our team of financial consultants to discuss your goals, requirements, or service queries."
        badge="GET IN TOUCH"
        breadcrumbs={[{ label: "Contact Us" }]}
      />

      <section className="sec">
        <div className="wrap">
          {/* 3 Contact Cards */}
          <div className="cards-grid-3">
            {/* Phone */}
            <div className="contact-card">
              <div className="contact-icon-box"><FaPhoneAlt /></div>
              <h3 className="contact-card-title">Phone Numbers</h3>
              <div className="contact-card-text">
                <a href="tel:+917975347138">+91 79753 47138</a><br />
                <a href="tel:+919980292567">+91 99802 92567</a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-card">
              <div className="contact-icon-box"><FaEnvelope /></div>
              <h3 className="contact-card-title">Email Address</h3>
              <div className="contact-card-text">
                <a href="mailto:meetinvenstnow@gmail.com">meetinvenstnow@gmail.com</a><br />
                <span style={{ fontSize: "12.5px", color: "var(--muted)" }}>Official Customer Support</span>
              </div>
            </div>

            {/* Contact Person */}
            <div className="contact-card">
              <div className="contact-icon-box"><FaUserTie /></div>
              <h3 className="contact-card-title">Direct Contact</h3>
              <div className="contact-card-text">
                <strong>Prashanth</strong><br />
                <a href="tel:+919743333355">+91 97433 33355</a>
              </div>
            </div>
          </div>

          {/* Form & Info Grid */}
          <div className="contact-grid">
            {/* Form */}
            <div className="form-card">
              <h3 style={{ fontSize: "26px", color: "var(--primary)", marginBottom: "8px" }}>
                Send Us an Enquiry
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "26px", lineHeight: "1.6" }}>
                Please fill in your details below and a financial consultant will connect with you.
              </p>

              {feedback.text && (
                <div className={`alert-box alert-${feedback.type}`} role="alert">
                  {feedback.type === "success" && <FaCheckCircle />}
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Service Interested In *</label>
                  <select
                    className="form-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Mutual Funds">Mutual Funds & SIPs</option>
                    <option value="Insurance">Insurance Coverage</option>
                    <option value="Loans">Loans & Financing</option>
                    <option value="Wealth Management">Wealth Management</option>
                    <option value="Stocks & Equity">Stocks & Equity</option>
                    <option value="Portfolio Management">Portfolio Management</option>
                    <option value="Land Links">Land Links / Chalukya Developers</option>
                    <option value="Financial Consultation">General Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Details *</label>
                  <textarea
                    rows="4"
                    className="form-textarea"
                    placeholder="Provide details about your financial enquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" disabled={submitting} className="submit-btn">
                  {submitting ? "Submitting Enquiry..." : <><FaPaperPlane size={13} /> Send Enquiry</>}
                </button>
              </form>
            </div>

            {/* Corporate Info Card */}
            <div className="info-card">
              <h3 className="info-card-title">Corporate Office</h3>
              <p className="info-card-text">
                Visit our office or reach out to our corporate advisors for in-person consultation and portfolio evaluation.
              </p>

              <div className="info-item">
                <FaMapMarkerAlt className="info-icon" />
                <div>
                  <strong>Address:</strong><br />
                  INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED<br />
                  Kundapura, Karnataka – 576201
                </div>
              </div>

              <div className="info-item">
                <FaEnvelope className="info-icon" />
                <div>
                  <strong>Email:</strong><br />
                  meetinvenstnow@gmail.com
                </div>
              </div>

              <div className="info-item">
                <FaPhoneAlt className="info-icon" />
                <div>
                  <strong>Call Center:</strong><br />
                  +91 79753 47138 | +91 99802 92567
                </div>
              </div>

              <div className="info-item">
                <FaUserTie className="info-icon" />
                <div>
                  <strong>Key Representative:</strong><br />
                  Prashanth (+91 97433 33355)
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Location Section */}
          <div className="head" style={{ marginBottom: "26px" }}>
            <h2>Find Us on Google Maps</h2>
          </div>

          <div className="map-container">
            <iframe
              title="INVESTNOW Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.102377372332!2d74.6868!3d13.6264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzM1LjAiTiA3NMKwNDEnMTIuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Schedule a Personal Meeting"
        subtitle="Our advisors are available for one-on-one consultation at your convenience."
        primaryBtnText="Call Us"
        primaryBtnLink="tel:+917975347138"
        secondaryBtnText="Explore Services"
        secondaryBtnLink="/services"
      />
    </div>
  );
};

export default ContactUs;
```

===============================================================================
FILE: src/pages/CustomerSupport.jsx
===============================================================================

```jsx
import React, { useState } from "react";
import { apiUrl } from "../api";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import {
  FaQuestionCircle,
  FaPhoneAlt,
  FaTools,
  FaBalanceScale,
  FaCheckCircle,
  FaPaperPlane
} from "react-icons/fa";

const CustomerSupport = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "Mutual Funds",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState({ type: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFeedback({ type: "", text: "" });

    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setFeedback({ type: "danger", text: "Please fill in all required fields." });
      return;
    }

    try {
      setSubmitting(true);
      const res = await fetch(apiUrl("/api/enquiries"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (res.ok) {
        setFeedback({ type: "success", text: result.message || "Your service request has been submitted successfully!" });
        setFormData({ name: "", phone: "", email: "", service: "Mutual Funds", message: "" });
      } else {
        setFeedback({ type: "danger", text: result.message || "Failed to submit service request." });
      }
    } catch (err) {
      console.error(err);
      setFeedback({ type: "danger", text: "Unable to connect to server. Please try again later." });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="cs-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .cs-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#04241A;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .cs-page h2,.cs-page h3,.cs-page h4 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .cs-page .wrap { max-width:1200px; margin:0 auto; }
        .cs-page section.sec { padding:104px 5%; position:relative; }

        .head { max-width:660px; margin-bottom:56px; }
        .head h2 { font-size:clamp(30px,4vw,44px); font-weight:600; line-height:1.15; letter-spacing:-.015em; margin-bottom:14px; color:var(--primary); }
        .head p { font-size:16.5px; line-height:1.7; margin:0; color:var(--muted); max-width:56ch; }

        /* 4 Cards Grid */
        .cards-grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; margin-bottom:60px; }
        .support-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:24px; padding:32px 24px;
          display:flex; flex-direction:column; justify-content:space-between; text-align:center;
          transition:transform .3s, box-shadow .3s, border-color .3s; position:relative; overflow:hidden;
        }
        .support-card:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow:0 16px 36px rgba(7,59,42,.08); }
        .support-card::after { content:''; position:absolute; left:0; bottom:0; height:3px; width:0; background:var(--accent); transition:width .4s; }
        .support-card:hover::after { width:100%; }

        .support-icon {
          width:52px; height:52px; border-radius:50%; background:var(--accent); color:var(--deep);
          display:grid; place-items:center; font-size:20px; margin:0 auto 18px;
        }
        .support-card-title { font-size:20px; font-weight:600; color:var(--primary); margin-bottom:10px; }
        .support-card-desc { font-size:14px; color:var(--muted); line-height:1.6; margin-bottom:20px; }

        .support-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:var(--primary); color:#FDFBF5; font-weight:600; font-size:13.5px;
          padding:11px 20px; border-radius:999px; text-decoration:none; transition:all .25s; width:100%; box-sizing:border-box;
        }
        .support-btn:hover { background:var(--accent); color:var(--deep); }

        /* Form & Grievance Split */
        .support-split-grid { display:grid; grid-template-columns:1.2fr 0.8fr; gap:36px; align-items:start; }

        .form-card {
          background:#fff; border:1px solid rgba(7,59,42,.14); border-radius:28px; padding:44px; box-shadow:0 18px 40px rgba(7,59,42,.06);
        }
        .form-group { margin-bottom:20px; }
        .form-label { font-size:14px; font-weight:600; color:var(--primary); margin-bottom:6px; display:block; }
        .form-input,.form-select,.form-textarea {
          width:100%; box-sizing:border-box; background:var(--bg); border:1px solid rgba(7,59,42,.16);
          border-radius:12px; padding:12px 16px; font-size:14.5px; color:var(--text); font-family:inherit; transition:border-color .25s, box-shadow .25s;
        }
        .form-input:focus,.form-select:focus,.form-textarea:focus { outline:none; border-color:var(--accent); box-shadow:0 0 0 3px rgba(212,175,55,.2); }

        .alert-box { padding:14px 20px; border-radius:14px; font-size:14px; margin-bottom:24px; font-weight:500; display:flex; align-items:center; gap:10px; }
        .alert-danger { background:rgba(217,83,79,.12); border:1px solid rgba(217,83,79,.3); color:#c9302c; }
        .alert-success { background:rgba(11,96,69,.12); border:1px solid rgba(11,96,69,.3); color:var(--primary); }

        .submit-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:10px;
          background:var(--accent); color:var(--deep); font-weight:600; font-size:15px; border:none; cursor:pointer;
          padding:14px 36px; border-radius:999px; width:100%; transition:transform .25s, box-shadow .25s;
        }
        .submit-btn:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(212,175,55,.35); }

        .grievance-card {
          background:var(--ivory); border:1px solid rgba(7,59,42,.12); border-radius:28px; padding:44px;
        }
        .grievance-title { font-size:24px; font-weight:600; color:var(--primary); margin-bottom:14px; }
        .grievance-text { font-size:14.5px; color:var(--muted); line-height:1.65; margin-bottom:24px; }

        .grievance-step {
          background:#fff; padding:18px 20px; border-radius:16px; border-left:4px solid var(--accent);
          margin-bottom:16px; border-top:1px solid rgba(7,59,42,.08); border-right:1px solid rgba(7,59,42,.08); border-bottom:1px solid rgba(7,59,42,.08);
        }
        .step-heading { font-family:'Fraunces',serif; font-size:16px; font-weight:600; color:var(--primary); margin-bottom:4px; }
        .step-desc { font-size:13.5px; color:var(--muted); line-height:1.5; }

        @media (max-width:1024px) {
          .cards-grid-4 { grid-template-columns:repeat(2,1fr); }
          .support-split-grid { grid-template-columns:1fr; }
        }
        @media (max-width:600px) {
          .cs-page section.sec { padding:70px 6%; }
          .cards-grid-4 { grid-template-columns:1fr; }
          .form-card, .grievance-card { padding:28px 20px; }
        }
      `}</style>

      {/* Page Hero Banner */}
      <PageHero
        title="Support When You Need It"
        subtitle="We are committed to delivering prompt assistance, enquiry resolution, and grievance redressal."
        badge="CUSTOMER CARE"
        breadcrumbs={[{ label: "Customer Support" }]}
      />

      {/* 4 Cards Section */}
      <section className="sec">
        <div className="wrap">
          <div className="head">
            <h2>Support Options</h2>
            <p>Choose the appropriate support channel below for enquiries, phone assistance, service requests, or grievances.</p>
          </div>

          <div className="cards-grid-4">
            {/* Card 1: Enquiry */}
            <div className="support-card" id="enquiry">
              <div>
                <div className="support-icon"><FaQuestionCircle /></div>
                <h3 className="support-card-title">General Enquiry</h3>
                <p className="support-card-desc">Have a question about our services or need guidance? Send us your enquiry.</p>
              </div>
              <div>
                <a href="#service-request" className="support-btn">Submit Enquiry</a>
              </div>
            </div>

            {/* Card 2: Contact Us */}
            <div className="support-card">
              <div>
                <div className="support-icon"><FaPhoneAlt /></div>
                <h3 className="support-card-title">Direct Contact</h3>
                <p className="support-card-desc">Call our representatives directly for immediate phone support.</p>
                <p style={{ fontSize: "13.5px", fontWeight: "600", color: "var(--primary)", margin: "0 0 16px" }}>
                  +91 79753 47138<br />+91 99802 92567
                </p>
              </div>
              <div>
                <Link to="/contact" className="support-btn">View Contact Details</Link>
              </div>
            </div>

            {/* Card 3: Service Request */}
            <div className="support-card">
              <div>
                <div className="support-icon"><FaTools /></div>
                <h3 className="support-card-title">Service Request</h3>
                <p className="support-card-desc">Request policy reviews, portfolio updates, or loan guidance.</p>
              </div>
              <div>
                <a href="#service-request" className="support-btn">Raise Request</a>
              </div>
            </div>

            {/* Card 4: Grievance Redressal */}
            <div className="support-card">
              <div>
                <div className="support-icon"><FaBalanceScale /></div>
                <h3 className="support-card-title">Grievance Redressal</h3>
                <p className="support-card-desc">Raise official concerns or feedback for review by management.</p>
              </div>
              <div>
                <a href="#grievance" className="support-btn">Grievance Process</a>
              </div>
            </div>
          </div>

          {/* Form & Grievance Split Section */}
          <div className="support-split-grid">
            {/* Service Request Form */}
            <div className="form-card" id="service-request">
              <h3 style={{ fontSize: "26px", color: "var(--primary)", marginBottom: "8px" }}>
                Submit Service Request / Enquiry
              </h3>
              <p style={{ color: "var(--muted)", fontSize: "15px", marginBottom: "26px", lineHeight: "1.6" }}>
                Fill out the form below and our team will get back to you promptly.
              </p>

              {feedback.text && (
                <div className={`alert-box alert-${feedback.type}`} role="alert">
                  {feedback.type === "success" && <FaCheckCircle />}
                  <span>{feedback.text}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div className="form-group">
                    <label className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      className="form-input"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address *</label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Select Service *</label>
                  <select
                    className="form-select"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  >
                    <option value="Mutual Funds">Mutual Funds & SIPs</option>
                    <option value="Insurance">Insurance Solutions</option>
                    <option value="Loans">Loans & Financing</option>
                    <option value="Wealth Management">Wealth Management</option>
                    <option value="Land Links">Land Links / Chalukya Developers</option>
                    <option value="Financial Consultation">General Consultation</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message / Details *</label>
                  <textarea
                    rows="4"
                    className="form-textarea"
                    placeholder="Describe your requirement or question..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" disabled={submitting} className="submit-btn">
                  {submitting ? "Submitting Request..." : <><FaPaperPlane size={13} /> Submit Service Request</>}
                </button>
              </form>
            </div>

            {/* Grievance Redressal Section */}
            <div className="grievance-card" id="grievance">
              <h3 className="grievance-title">Grievance Redressal Mechanism</h3>
              <p className="grievance-text">
                INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED is committed to resolving client concerns transparently and efficiently. If you have any dissatisfaction regarding our services, please follow our resolution steps:
              </p>

              <div className="grievance-step">
                <div className="step-heading">Level 1: Initial Complaint</div>
                <div className="step-desc">Contact your dedicated consultant or email <strong>meetinvenstnow@gmail.com</strong> with your query details.</div>
              </div>

              <div className="grievance-step">
                <div className="step-heading">Level 2: Escalation to Management</div>
                <div className="step-desc">If unresolved within 3 working days, escalate directly to senior management at <strong>+91 97433 33355</strong> (Prashanth).</div>
              </div>

              <div className="grievance-step">
                <div className="step-heading">Level 3: Formal Review</div>
                <div className="step-desc">A formal written response and resolution recommendation will be provided to the client.</div>
              </div>

              <p style={{ fontSize: "12.5px", color: "var(--muted)", marginTop: "24px", lineHeight: "1.6" }}>
                Note: Standard corporate grievance procedures apply. Official regulatory contacts will be updated upon notification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Need Instant Phone Consultation?"
        subtitle="Call our team directly for immediate assistance regarding your financial planning."
        primaryBtnText="Call Us Now"
        primaryBtnLink="/contact"
        secondaryBtnText="View All Services"
        secondaryBtnLink="/services"
      />
    </div>
  );
};

export default CustomerSupport;
```

===============================================================================
FILE: src/pages/FinancialGoals.jsx
===============================================================================

```jsx
import React, { useState, useEffect, useRef } from "react";
import { apiUrl } from "../api";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaUmbrella,
  FaGraduationCap,
  FaHome,
  FaBriefcase,
  FaShieldAlt,
  FaArrowRight,
  FaBullseye,
  FaClipboardList,
  FaCogs,
  FaSyncAlt,
  FaCheckDouble,
  FaExclamationTriangle,
  FaSync,
} from "react-icons/fa";

const renderIcon = (iconName) => {
  switch (iconName) {
    case "FaChartLine":
      return <FaChartLine />;
    case "FaUmbrella":
      return <FaUmbrella />;
    case "FaGraduationCap":
      return <FaGraduationCap />;
    case "FaHome":
      return <FaHome />;
    case "FaBriefcase":
      return <FaBriefcase />;
    case "FaShieldAlt":
      return <FaShieldAlt />;
    case "FaBullseye":
      return <FaBullseye />;
    case "FaClipboardList":
      return <FaClipboardList />;
    case "FaCogs":
      return <FaCogs />;
    case "FaSyncAlt":
      return <FaSyncAlt />;
    case "FaCheckDouble":
      return <FaCheckDouble />;
    default:
      return <FaBullseye />;
  }
};

const Spot = ({ className = "", children, ...rest }) => {
  const ref = useRef(null);
  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} className={`spot ${className}`} {...rest}>
      {children}
    </div>
  );
};

const FinancialGoals = () => {
  const [goalsData, setGoalsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchGoalsContent = async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch(apiUrl("/api/financial-goals"));
      if (!res.ok) {
        throw new Error(`Server returned status ${res.status}`);
      }
      const result = await res.json();
      if (result.success && result.data) {
        setGoalsData(result.data);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Failed to fetch Financial Goals resources:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGoalsContent();
  }, []);

  const getSortedItems = (array) => {
    if (!array || !Array.isArray(array)) return [];
    return [...array].sort((a, b) => (a.priority || 0) - (b.priority || 0));
  };

  const pillars = getSortedItems(goalsData?.pillars);
  const journeySteps = getSortedItems(goalsData?.journeySteps);

  return (
    <div className="fg-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .fg-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#0A1310;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .fg-page h2,.fg-page h3,.fg-page h4 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .fg-page .wrap { max-width:1200px; margin:0 auto; }
        .fg-page section.sec { padding:104px 5%; position:relative; }

        .head { max-width:660px; margin-bottom:56px; }
        .head h2 { font-size:clamp(30px,4vw,44px); font-weight:600; line-height:1.15; letter-spacing:-.015em; margin-bottom:14px; color:var(--primary); }
        .head p { font-size:16.5px; line-height:1.7; margin:0; color:var(--muted); max-width:56ch; }

        /* Dark Bento Pillars Section */
        .dark-sec { background:#0A1310; color:#FDFBF5; isolation:isolate; }
        .dark-sec::before { content:''; position:absolute; inset:0; z-index:-1; background:radial-gradient(600px 400px at 90% 0%,rgba(11,96,69,.45),transparent 70%),radial-gradient(500px 400px at 0% 100%,rgba(212,175,55,.15),transparent 70%); }
        .dgrid-bg { position:absolute; inset:0; z-index:-1; width:100%; height:100%; opacity:.4; }

        .pillars-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }
        .spot {
          --mx:50%; --my:50%; position:relative; overflow:hidden; border-radius:24px; padding:34px;
          background:linear-gradient(165deg, rgba(16, 42, 33, 0.8), rgba(8, 24, 18, 0.95));
          border:1px solid rgba(212, 175, 55, 0.22);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          display:flex; flex-direction:column; justify-content:space-between;
          transition:all .3s ease;
        }
        .spot::before {
          content:''; position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .3s;
          background:radial-gradient(320px circle at var(--mx) var(--my),rgba(212,175,55,.25),transparent 60%);
        }
        .spot:hover { border-color:#D4AF37; transform:translateY(-4px); box-shadow:0 16px 36px rgba(212, 175, 55, 0.2); }
        .spot:hover::before { opacity:1; }
        .spot > * { position:relative; }

        .p-icon {
          width:50px; height:50px; border-radius:16px; display:grid; place-items:center; font-size:22px;
          color:var(--accent); background:rgba(212,175,55,.12); border:1px solid rgba(212,175,55,.3); margin-bottom:20px;
        }
        .p-title { font-size:22px; font-weight:600; color:#FDFBF5; margin:0 0 10px; }
        .p-desc { font-size:14.5px; line-height:1.65; color:rgba(253,251,245,.68); margin:0 0 20px; }

        .p-bullets { list-style:none; padding:0; margin:0 0 26px 0; display:flex; flex-direction:column; gap:10px; }
        .p-bullet { font-size:13.5px; color:rgba(253,251,245,.88); display:flex; align-items:center; gap:10px; }
        .p-bullet::before { content:'•'; color:var(--accent); font-size:18px; }

        .pill-btn {
          display:inline-flex; align-items:center; justify-content:center; gap:8px;
          background:var(--accent); color:var(--deep); font-weight:600; font-size:14px;
          padding:12px 20px; border-radius:999px; text-decoration:none; transition:transform .25s, box-shadow .25s;
          width:100%; box-sizing:border-box;
        }
        .pill-btn:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(212,175,55,.35); }

        /* Journey Roadmap Section */
        .journey-sec { background:var(--ivory); }
        .journey-roadmap { display:grid; grid-template-columns:repeat(5,1fr); gap:20px; margin-top:40px; position:relative; }
        .journey-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:24px; padding:30px 22px; text-align:center;
          position:relative; transition:transform .3s, box-shadow .3s, border-color .3s;
          display:flex; flex-direction:column; align-items:center;
        }
        .journey-card:hover { border-color:var(--accent); transform:translateY(-4px); box-shadow:0 16px 36px rgba(7,59,42,.08); }
        
        .step-badge {
          font-family:'Fraunces',serif; font-size:12px; font-weight:600; letter-spacing:.05em;
          color:var(--deep); background:var(--accent); padding:4px 12px; border-radius:999px; margin-bottom:16px;
        }
        .step-ic {
          width:52px; height:52px; border-radius:50%; border:1px solid var(--primary); color:var(--primary);
          display:grid; place-items:center; font-size:20px; margin-bottom:16px; transition:all .3s;
        }
        .journey-card:hover .step-ic { background:var(--primary); color:var(--accent); border-color:var(--primary); }
        
        .step-t { font-size:18px; font-weight:600; color:var(--primary); margin-bottom:10px; }
        .step-d { font-size:13.5px; line-height:1.6; color:var(--muted); margin:0; }

        /* States */
        .state { max-width:560px; margin:90px auto; text-align:center; padding:52px 32px; background:#fff; border-radius:28px; border:1px solid rgba(7,59,42,.1); }
        .state h3 { font-size:26px; color:var(--primary); margin:18px 0 10px; }
        .state p { color:var(--muted); line-height:1.65; margin:0 0 24px; font-size:15px; }
        .state .warn { font-size:38px; color:var(--accent); }
        .retry { display:inline-flex; align-items:center; gap:10px; border:none; cursor:pointer; background:var(--accent); color:var(--deep); font:600 14px 'Inter',sans-serif; padding:13px 24px; border-radius:999px; transition:transform .25s, box-shadow .25s; }
        .retry:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(212,175,55,.35); }
        .loader { width:56px; height:56px; animation:spin 1.1s linear infinite; margin:0 auto; }
        @keyframes spin { to { transform:rotate(360deg); } }

        @media (max-width:1024px) {
          .pillars-grid { grid-template-columns:repeat(2,1fr); }
          .journey-roadmap { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:650px) {
          .pillars-grid, .journey-roadmap { grid-template-columns:1fr; }
          .fg-page section.sec { padding:70px 6%; }
        }
      `}</style>

      <PageHero
        title="Financial Goals. Clearly Planned."
        subtitle="Structure your financial milestones with clarity, discipline, and expert guidance."
        badge="GOAL-BASED PLANNING"
        breadcrumbs={[{ label: "Financial Goals" }]}
      />

      {loading ? (
        <div className="state" role="status">
          <svg className="loader" viewBox="0 0 56 56" aria-hidden="true">
            <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(212,175,55,.2)" strokeWidth="5" />
            <path d="M28 6a22 22 0 0 1 22 22" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
          </svg>
          <h3>Loading Financial Goals content...</h3>
        </div>
      ) : error ? (
        <div className="state" role="alert">
          <FaExclamationTriangle className="warn" />
          <h3>Unable to load resources</h3>
          <p>We couldn't reach the server to fetch financial goals data. Please check your connection or backend service status.</p>
          <button className="retry" onClick={fetchGoalsContent}><FaSync /> Try again</button>
        </div>
      ) : (
        <>
          {/* Major Goal Cards (Pillars of Financial Planning) */}
          <section className="sec dark-sec">
            <svg className="dgrid-bg" aria-hidden="true">
              <defs>
                <pattern id="fgGrid" width="56" height="56" patternUnits="userSpaceOnUse">
                  <path d="M56 0H0V56" fill="none" stroke="rgba(255,255,255,.05)" />
                </pattern>
                <radialGradient id="fgFade" cx="50%" cy="30%" r="70%">
                  <stop offset="0" stopColor="#fff" />
                  <stop offset="1" stopColor="#000" />
                </radialGradient>
                <mask id="fgMask">
                  <rect width="100%" height="100%" fill="url(#fgFade)" />
                </mask>
              </defs>
              <rect width="100%" height="100%" fill="url(#fgGrid)" mask="url(#fgMask)" />
            </svg>

            <div className="wrap">
              <div className="head" style={{ color: "#FDFBF5" }}>
                <h2 style={{ color: "#FDFBF5" }}>Pillars of Financial Planning</h2>
                <p style={{ color: "rgba(253,251,245,.7)" }}>
                  Whether you are accumulating wealth, planning retirement, or securing family assets, explore structured goal options.
                </p>
              </div>

              <div className="pillars-grid">
                {pillars.map((g, index) => (
                  <Spot key={g._id || index}>
                    <div>
                      <div className="p-icon">{renderIcon(g.icon)}</div>
                      <h3 className="p-title">{g.title}</h3>
                      <p className="p-desc">{g.desc}</p>
                      {g.details && g.details.length > 0 && (
                        <ul className="p-bullets">
                          {g.details.map((d, di) => (
                            <li key={di} className="p-bullet">{d}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                    <div>
                      <Link to="/contact" className="pill-btn">
                        Plan Your Goal <FaArrowRight size={12} />
                      </Link>
                    </div>
                  </Spot>
                ))}
              </div>
            </div>
          </section>

          {/* Timeline Journey Section */}
          <section className="sec journey-sec">
            <div className="wrap">
              <div className="head">
                <h2>Financial Goal Journey</h2>
                <p>A systematic step-by-step process to transition from goal identification to structured execution and ongoing review.</p>
              </div>

              <div className="journey-roadmap">
                {journeySteps.map((step, idx) => (
                  <div key={step._id || idx} className="journey-card">
                    <span className="step-badge">STEP {step.step || (idx + 1).toString().padStart(2, "0")}</span>
                    <div className="step-ic">{renderIcon(step.icon)}</div>
                    <h4 className="step-t">{step.name}</h4>
                    <p className="step-d">{step.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      <CTASection
        title="Ready to Start Planning Your Financial Goals?"
        subtitle="Consult with our experts to map out your long-term milestones with a structured roadmap."
        primaryBtnText="Consult an Advisor"
        primaryBtnLink="/contact"
        secondaryBtnText="Explore All Services"
        secondaryBtnLink="/services"
      />
    </div>
  );
};

export default FinancialGoals;
```

===============================================================================
FILE: src/pages/ManageAboutUs.jsx
===============================================================================

```jsx
import React, { useState, useEffect } from "react";
import { apiUrl } from "../api";
import {
  FaSave,
  FaPlus,
  FaTrash,
  FaInfoCircle,
  FaSpinner
} from "react-icons/fa";

const ICON_OPTIONS = [
  { label: "Shield / Trust (FaShieldAlt)", value: "FaShieldAlt" },
  { label: "Eye / Transparency (FaEye)", value: "FaEye" },
  { label: "Handshake / Integrity (FaHandshake)", value: "FaHandshake" },
  { label: "User Check / Focus (FaUserCheck)", value: "FaUserCheck" },
  { label: "User Tie / Professional (FaUserTie)", value: "FaUserTie" },
  { label: "Chart / Growth (FaChartLine)", value: "FaChartLine" },
  { label: "Briefcase / Solutions (FaBriefcase)", value: "FaBriefcase" },
  { label: "Bullseye / Target (FaBullseye)", value: "FaBullseye" },
  { label: "Users / Family (FaUsers)", value: "FaUsers" },
  { label: "Lightbulb / Ideas (FaLightbulb)", value: "FaLightbulb" },
  { label: "Building / Corporate (FaBuilding)", value: "FaBuilding" },
  { label: "Home / Property (FaHome)", value: "FaHome" },
  { label: "Check Circle / Mission (FaCheckCircle)", value: "FaCheckCircle" }
];

const ManageAboutUs = () => {
  const [activeTab, setActiveTab] = useState("visionMission");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [vision, setVision] = useState("");
  const [mission, setMission] = useState([]);
  const [newMissionItem, setNewMissionItem] = useState("");

  const [coreValues, setCoreValues] = useState([]);
  const [whyChooseUs, setWhyChooseUs] = useState([]);
  const [whoWeServe, setWhoWeServe] = useState([]);

  // Card Form State for Adding New Cards
  const [newCard, setNewCard] = useState({
    title: "",
    desc: "",
    icon: "FaShieldAlt",
    priority: 1
  });

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      setLoading(true);
      const res = await fetch(apiUrl("/api/about"));
      const result = await res.json();

      if (res.ok && result.data) {
        setVision(result.data.vision || "");
        setMission(result.data.mission || []);
        setCoreValues(result.data.coreValues || []);
        setWhyChooseUs(result.data.whyChooseUs || []);
        setWhoWeServe(result.data.whoWeServe || []);
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to load About Us data." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Unable to connect to backend server." });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    if (e) e.preventDefault();
    setMessage({ type: "", text: "" });
    setSaving(true);

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(apiUrl("/api/about"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          vision,
          mission,
          coreValues,
          whyChooseUs,
          whoWeServe
        })
      });

      const result = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "About Us page content saved successfully!" });
        if (result.data) {
          setVision(result.data.vision || "");
          setMission(result.data.mission || []);
          setCoreValues(result.data.coreValues || []);
          setWhyChooseUs(result.data.whyChooseUs || []);
          setWhoWeServe(result.data.whoWeServe || []);
        }
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to save content." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Error saving data to server." });
    } finally {
      setSaving(false);
    }
  };

  // Mission Handlers
  const handleAddMission = () => {
    if (!newMissionItem.trim()) return;
    setMission([...mission, newMissionItem.trim()]);
    setNewMissionItem("");
  };

  const handleRemoveMission = (index) => {
    setMission(mission.filter((_, i) => i !== index));
  };

  const handleMissionChange = (index, value) => {
    const updated = [...mission];
    updated[index] = value;
    setMission(updated);
  };

  // Card Management Helper Functions
  const getListByTab = () => {
    if (activeTab === "coreValues") return coreValues;
    if (activeTab === "whyChooseUs") return whyChooseUs;
    if (activeTab === "whoWeServe") return whoWeServe;
    return [];
  };

  const setListByTab = (newList) => {
    if (activeTab === "coreValues") setCoreValues(newList);
    if (activeTab === "whyChooseUs") setWhyChooseUs(newList);
    if (activeTab === "whoWeServe") setWhoWeServe(newList);
  };

  const handleAddCard = () => {
    if (!newCard.title.trim() || !newCard.desc.trim()) {
      alert("Please provide both Title and Description for the card.");
      return;
    }

    const currentList = getListByTab();
    const cardToAdd = { ...newCard, priority: Number(newCard.priority) || currentList.length + 1 };
    
    // Auto sort by priority
    const updatedList = [...currentList, cardToAdd].sort((a, b) => a.priority - b.priority);
    setListByTab(updatedList);

    setNewCard({ title: "", desc: "", icon: "FaShieldAlt", priority: currentList.length + 2 });
  };

  const handleDeleteCard = (index) => {
    const currentList = getListByTab();
    const updatedList = currentList.filter((_, i) => i !== index);
    setListByTab(updatedList);
  };

  const handleCardFieldChange = (index, field, value) => {
    const currentList = getListByTab();
    const updatedList = [...currentList];
    updatedList[index] = {
      ...updatedList[index],
      [field]: field === "priority" ? Number(value) : value
    };
    
    // Sort automatically if priority changes
    if (field === "priority") {
      updatedList.sort((a, b) => a.priority - b.priority);
    }
    
    setListByTab(updatedList);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5 text-center">
        <div>
          <FaSpinner className="spinner-border text-success mb-3 fs-2" style={{ color: "#0B6045" }} />
          <p className="fw-semibold" style={{ color: "#073B2A" }}>Loading About Us page management settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="manage-about-container p-3 p-md-4">
      <style>{`
        .manage-about-container {
          background-color: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(7, 59, 42, 0.06);
          border: 1px solid #DCE8E1;
        }

        .page-header-box {
          background: linear-gradient(135deg, #073B2A, #0B6045);
          color: #FFFFFF;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .page-header-box h2 {
          color: #FFFFFF;
        }

        .nav-tabs-custom {
          border-bottom: 2px solid #DCE8E1;
          margin-bottom: 24px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .nav-tab-btn {
          background: transparent;
          border: none;
          padding: 12px 20px;
          font-weight: 600;
          color: #5B6B63;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 6px 6px 0 0;
        }

        .nav-tab-btn:hover {
          color: #0B6045;
          background: rgba(11, 96, 69, 0.05);
        }

        .nav-tab-btn.active {
          color: #073B2A;
          border-bottom-color: #D4AF37;
          background: rgba(212, 175, 55, 0.08);
        }

        .card-item-box {
          background: #F5F8F6;
          border: 1px solid #DCE8E1;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 16px;
          transition: border-color 0.2s ease;
        }

        .card-item-box:hover {
          border-color: #D4AF37;
        }

        .btn-gold {
          background: #D4AF37;
          color: #FFFFFF;
          border: none;
          font-weight: 700;
        }

        .btn-gold:hover {
          background: #B8941F;
          color: #FFFFFF;
        }

        .btn-green {
          background: #073B2A;
          color: #FFFFFF;
          border: none;
          font-weight: 600;
        }

        .btn-green:hover {
          background: #0B6045;
          color: #FFFFFF;
        }
      `}</style>

      {/* Header Banner */}
      <div className="page-header-box d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-1 d-flex align-items-center gap-2">
            <FaInfoCircle style={{ color: "#D4AF37" }} /> Manage About Us Page Content
          </h2>
          <p className="mb-0 text-white-50 fs-6">
            Dynamically update Vision, Mission, Core Values, Why Partner With Us, and Who We Serve sections for guest visitors.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-gold btn-lg d-flex align-items-center gap-2 px-4 shadow-sm"
        >
          {saving ? <FaSpinner className="spinner-border spinner-border-sm" /> : <FaSave />}
          {saving ? "Saving..." : "Save All Changes"}
        </button>
      </div>

      {/* Alert Messages */}
      {message.text && (
        <div className={`alert alert-${message.type} alert-dismissible fade show rounded-3 mb-4`} role="alert">
          {message.text}
          <button type="button" className="btn-close" onClick={() => setMessage({ type: "", text: "" })}></button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="nav-tabs-custom">
        <button
          className={`nav-tab-btn ${activeTab === "visionMission" ? "active" : ""}`}
          onClick={() => setActiveTab("visionMission")}
        >
          Vision & Mission
        </button>
        <button
          className={`nav-tab-btn ${activeTab === "coreValues" ? "active" : ""}`}
          onClick={() => setActiveTab("coreValues")}
        >
          Core Values Cards ({coreValues.length})
        </button>
        <button
          className={`nav-tab-btn ${activeTab === "whyChooseUs" ? "active" : ""}`}
          onClick={() => setActiveTab("whyChooseUs")}
        >
          Why Partner With Us Cards ({whyChooseUs.length})
        </button>
        <button
          className={`nav-tab-btn ${activeTab === "whoWeServe" ? "active" : ""}`}
          onClick={() => setActiveTab("whoWeServe")}
        >
          Who We Serve Cards ({whoWeServe.length})
        </button>
      </div>

      {/* TAB 1: Vision & Mission */}
      {activeTab === "visionMission" && (
        <div>
          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-header bg-light fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              1. Our Vision Statement
            </div>
            <div className="card-body p-4">
              <label className="form-label fw-semibold text-dark">Vision Text</label>
              <textarea
                className="form-control form-control-lg rounded-3 fs-6"
                rows="3"
                value={vision}
                onChange={(e) => setVision(e.target.value)}
                placeholder="Enter vision statement..."
              />
            </div>
          </div>

          <div className="card border-0 shadow-sm rounded-4 mb-4">
            <div className="card-header bg-light fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              2. Our Mission Bullet Points
            </div>
            <div className="card-body p-4">
              <div className="input-group mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg rounded-3 fs-6"
                  placeholder="Add a new mission statement point..."
                  value={newMissionItem}
                  onChange={(e) => setNewMissionItem(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault();
                      handleAddMission();
                    }
                  }}
                />
                <button className="btn btn-green px-4 fw-bold" type="button" onClick={handleAddMission}>
                  <FaPlus className="me-1" /> Add Point
                </button>
              </div>

              <div className="mission-list-wrapper">
                {mission.length === 0 ? (
                  <p className="text-muted fst-italic">No mission points added yet.</p>
                ) : (
                  mission.map((item, index) => (
                    <div key={index} className="input-group mb-2 shadow-sm rounded-3">
                      <span className="input-group-text bg-white text-muted fw-bold">{index + 1}</span>
                      <input
                        type="text"
                        className="form-control fs-6"
                        value={item}
                        onChange={(e) => handleMissionChange(index, e.target.value)}
                      />
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={() => handleRemoveMission(index)}
                        title="Delete Point"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 2, 3, 4: Card Management */}
      {activeTab !== "visionMission" && (
        <div>
          {/* Add New Card Box */}
          <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: "#F5F8F6", border: "1px solid #DCE8E1" }}>
            <div className="card-header bg-white fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              <FaPlus className="me-2 text-warning" style={{ color: "#D4AF37" }} />
              Add New Card to {activeTab === "coreValues" ? "Core Values" : activeTab === "whyChooseUs" ? "Why Partner With Us" : "Who We Serve"}
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-5">
                  <label className="form-label fw-semibold">Card Title</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Integrity, Experienced Guidance"
                    value={newCard.title}
                    onChange={(e) => setNewCard({ ...newCard, title: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Icon</label>
                  <select
                    className="form-select rounded-3"
                    value={newCard.icon}
                    onChange={(e) => setNewCard({ ...newCard, icon: e.target.value })}
                  >
                    {ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Priority Order</label>
                  <input
                    type="number"
                    className="form-control rounded-3"
                    min="1"
                    value={newCard.priority}
                    onChange={(e) => setNewCard({ ...newCard, priority: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Card Description</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    placeholder="Short descriptive summary..."
                    value={newCard.desc}
                    onChange={(e) => setNewCard({ ...newCard, desc: e.target.value })}
                  />
                </div>
                <div className="col-12 text-end">
                  <button className="btn btn-green fw-bold px-4 shadow-sm" type="button" onClick={handleAddCard}>
                    <FaPlus className="me-2" /> Add Card
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* List of Existing Cards */}
          <h5 className="fw-bold mb-3" style={{ color: "#073B2A" }}>
            Existing Cards ({getListByTab().length})
          </h5>

          {getListByTab().length === 0 ? (
            <div className="text-center p-4 bg-light rounded-4 text-muted">
              No cards added in this section yet. Use the form above to add your first card.
            </div>
          ) : (
            getListByTab().map((card, idx) => (
              <div key={idx} className="card-item-box">
                <div className="row g-3 align-items-center">
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-muted mb-1">Card Title</label>
                    <input
                      type="text"
                      className="form-control rounded-3 fw-bold"
                      value={card.title}
                      onChange={(e) => handleCardFieldChange(idx, "title", e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-muted mb-1">Icon</label>
                    <select
                      className="form-select rounded-3"
                      value={card.icon || "FaShieldAlt"}
                      onChange={(e) => handleCardFieldChange(idx, "icon", e.target.value)}
                    >
                      {ICON_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-md-2 col-6">
                    <label className="form-label small fw-semibold text-muted mb-1">Priority Order</label>
                    <input
                      type="number"
                      className="form-control rounded-3 fw-bold text-center"
                      min="1"
                      value={card.priority || idx + 1}
                      onChange={(e) => handleCardFieldChange(idx, "priority", e.target.value)}
                    />
                  </div>

                  <div className="col-md-2 col-6 text-end">
                    <label className="form-label small fw-semibold text-muted d-block mb-1">Action</label>
                    <button
                      type="button"
                      className="btn btn-outline-danger w-100 rounded-3 d-flex align-items-center justify-content-center gap-1"
                      onClick={() => handleDeleteCard(idx)}
                    >
                      <FaTrash /> Delete
                    </button>
                  </div>

                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted mb-1">Description</label>
                    <textarea
                      className="form-control rounded-3"
                      rows="2"
                      value={card.desc}
                      onChange={(e) => handleCardFieldChange(idx, "desc", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Bottom Save Action */}
      <div className="d-flex justify-content-end mt-4 pt-3 border-top">
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-gold btn-lg d-flex align-items-center gap-2 px-4 shadow"
        >
          {saving ? <FaSpinner className="spinner-border spinner-border-sm" /> : <FaSave />}
          {saving ? "Saving Changes..." : "Save All Changes"}
        </button>
      </div>
    </div>
  );
};

export default ManageAboutUs;
```

===============================================================================
FILE: src/pages/ManageChalukya.jsx
===============================================================================

```jsx
import React, { useState, useEffect } from "react";
import { apiUrl } from "../api";
import {
  FaSave,
  FaPlus,
  FaTrash,
  FaMapMarkedAlt,
  FaSpinner
} from "react-icons/fa";

const CHALUKYA_ICON_OPTIONS = [
  { label: "Map / Location (FaMapMarkedAlt)", value: "FaMapMarkedAlt" },
  { label: "Tree / Agriculture (FaTree)", value: "FaTree" },
  { label: "Building / Commercial (FaBuilding)", value: "FaBuilding" },
  { label: "Contract / Legal (FaFileContract)", value: "FaFileContract" },
  { label: "Search / Requirement (FaSearch)", value: "FaSearch" },
  { label: "Layer / Plot Search (FaLayerGroup)", value: "FaLayerGroup" },
  { label: "Clipboard Check / Evaluation (FaClipboardCheck)", value: "FaClipboardCheck" },
  { label: "Handshake / Closing (FaHandshake)", value: "FaHandshake" }
];

const ManageChalukya = () => {
  const [activeTab, setActiveTab] = useState("solutions");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [landSolutions, setLandSolutions] = useState([]);
  const [whyConsider, setWhyConsider] = useState([]);
  const [landJourney, setLandJourney] = useState([]);

  // New Solution Form State
  const [newSolution, setNewSolution] = useState({
    title: "",
    desc: "",
    icon: "FaMapMarkedAlt",
    features: [""],
    priority: 1
  });

  // New Why Form State
  const [newWhy, setNewWhy] = useState({
    title: "",
    desc: "",
    priority: 1
  });

  // New Journey Step Form State
  const [newStep, setNewStep] = useState({
    step: "01",
    title: "",
    text: "",
    icon: "FaSearch",
    priority: 1
  });

  useEffect(() => {
    fetchChalukyaData();
  }, []);

  const fetchChalukyaData = async () => {
    try {
      setLoading(true);
      const res = await fetch(apiUrl("/api/chalukya"));
      const result = await res.json();

      if (res.ok && result.data) {
        setLandSolutions(result.data.landSolutions || []);
        setWhyConsider(result.data.whyConsider || []);
        setLandJourney(result.data.landJourney || []);
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to load Chalukya Developers data." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Unable to connect to backend server." });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    if (e) e.preventDefault();
    setMessage({ type: "", text: "" });
    setSaving(true);

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(apiUrl("/api/chalukya"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          landSolutions,
          whyConsider,
          landJourney
        })
      });

      const result = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Chalukya Developers page content saved successfully!" });
        if (result.data) {
          setLandSolutions(result.data.landSolutions || []);
          setWhyConsider(result.data.whyConsider || []);
          setLandJourney(result.data.landJourney || []);
        }
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to save content." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Error saving data to server." });
    } finally {
      setSaving(false);
    }
  };

  // --- SOLUTIONS HANDLERS ---
  const handleAddSolution = () => {
    if (!newSolution.title.trim() || !newSolution.desc.trim()) {
      alert("Please enter Title and Description for the Land Solution.");
      return;
    }

    const cleanFeatures = newSolution.features.filter((f) => f.trim() !== "");
    const itemToAdd = {
      ...newSolution,
      features: cleanFeatures,
      priority: Number(newSolution.priority) || landSolutions.length + 1
    };

    const updatedList = [...landSolutions, itemToAdd].sort((a, b) => a.priority - b.priority);
    setLandSolutions(updatedList);

    setNewSolution({
      title: "",
      desc: "",
      icon: "FaMapMarkedAlt",
      features: [""],
      priority: landSolutions.length + 2
    });
  };

  const handleDeleteSolution = (index) => {
    setLandSolutions(landSolutions.filter((_, i) => i !== index));
  };

  const handleSolutionFieldChange = (index, field, value) => {
    const updated = [...landSolutions];
    updated[index] = {
      ...updated[index],
      [field]: field === "priority" ? Number(value) : value
    };

    if (field === "priority") {
      updated.sort((a, b) => a.priority - b.priority);
    }

    setLandSolutions(updated);
  };

  const handleFeatureChange = (solutionIndex, featureIndex, value) => {
    const updated = [...landSolutions];
    const features = [...updated[solutionIndex].features];
    features[featureIndex] = value;
    updated[solutionIndex].features = features;
    setLandSolutions(updated);
  };

  const handleAddFeature = (solutionIndex) => {
    const updated = [...landSolutions];
    updated[solutionIndex].features.push("");
    setLandSolutions(updated);
  };

  const handleRemoveFeature = (solutionIndex, featureIndex) => {
    const updated = [...landSolutions];
    updated[solutionIndex].features = updated[solutionIndex].features.filter((_, i) => i !== featureIndex);
    setLandSolutions(updated);
  };

  // --- WHY CONSIDER HANDLERS ---
  const handleAddWhy = () => {
    if (!newWhy.title.trim() || !newWhy.desc.trim()) {
      alert("Please enter Title and Description.");
      return;
    }

    const itemToAdd = {
      ...newWhy,
      priority: Number(newWhy.priority) || whyConsider.length + 1
    };

    const updatedList = [...whyConsider, itemToAdd].sort((a, b) => a.priority - b.priority);
    setWhyConsider(updatedList);

    setNewWhy({ title: "", desc: "", priority: whyConsider.length + 2 });
  };

  const handleDeleteWhy = (index) => {
    setWhyConsider(whyConsider.filter((_, i) => i !== index));
  };

  const handleWhyFieldChange = (index, field, value) => {
    const updated = [...whyConsider];
    updated[index] = {
      ...updated[index],
      [field]: field === "priority" ? Number(value) : value
    };

    if (field === "priority") {
      updated.sort((a, b) => a.priority - b.priority);
    }

    setWhyConsider(updated);
  };

  // --- JOURNEY HANDLERS ---
  const handleAddJourney = () => {
    if (!newStep.title.trim() || !newStep.text.trim()) {
      alert("Please enter Step Title and Description.");
      return;
    }

    const stepToAdd = {
      ...newStep,
      priority: Number(newStep.priority) || landJourney.length + 1
    };

    const updatedList = [...landJourney, stepToAdd].sort((a, b) => a.priority - b.priority);
    setLandJourney(updatedList);

    const nextStepNum = (landJourney.length + 2).toString().padStart(2, "0");
    setNewStep({
      step: nextStepNum,
      title: "",
      text: "",
      icon: "FaSearch",
      priority: landJourney.length + 2
    });
  };

  const handleDeleteJourney = (index) => {
    setLandJourney(landJourney.filter((_, i) => i !== index));
  };

  const handleJourneyFieldChange = (index, field, value) => {
    const updated = [...landJourney];
    updated[index] = {
      ...updated[index],
      [field]: field === "priority" ? Number(value) : value
    };

    if (field === "priority") {
      updated.sort((a, b) => a.priority - b.priority);
    }

    setLandJourney(updated);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5 text-center">
        <div>
          <FaSpinner className="spinner-border text-success mb-3 fs-2" style={{ color: "#0B6045" }} />
          <p className="fw-semibold" style={{ color: "#073B2A" }}>Loading Chalukya Developers settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="manage-chalukya-container p-3 p-md-4">
      <style>{`
        .manage-chalukya-container {
          background-color: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(7, 59, 42, 0.06);
          border: 1px solid #DCE8E1;
        }

        .page-header-box {
          background: linear-gradient(135deg, #073B2A, #0B6045);
          color: #FFFFFF;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .manage-chalukya-container .page-header-box h2 {
          color: #FFFFFF;
        }

        .nav-tabs-custom {
          border-bottom: 2px solid #DCE8E1;
          margin-bottom: 24px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .nav-tab-btn {
          background: transparent;
          border: none;
          padding: 12px 20px;
          font-weight: 600;
          color: #5B6B63;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 6px 6px 0 0;
        }

        .nav-tab-btn:hover {
          color: #0B6045;
          background: rgba(11, 96, 69, 0.05);
        }

        .nav-tab-btn.active {
          color: #073B2A;
          border-bottom-color: #D4AF37;
          background: rgba(212, 175, 55, 0.08);
        }

        .btn-gold {
          background: #D4AF37;
          color: #FFFFFF;
          border: none;
          font-weight: 700;
        }

        .btn-gold:hover {
          background: #B8941F;
          color: #FFFFFF;
        }

        .btn-green {
          background: #073B2A;
          color: #FFFFFF;
          border: none;
          font-weight: 600;
        }

        .btn-green:hover {
          background: #0B6045;
          color: #FFFFFF;
        }

        .roadmap-admin-card {
          background: #F5F8F6;
          border: 2px dashed #DCE8E1;
          border-radius: 14px;
          padding: 20px;
          position: relative;
          margin-bottom: 20px;
        }
      `}</style>

      {/* Header Banner */}
      <div className="page-header-box d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-1 d-flex align-items-center gap-2">
            <FaMapMarkedAlt style={{ color: "#D4AF37" }} /> Manage Chalukya Developers
          </h2>
          <p className="mb-0 text-white-50 fs-6">
            Dynamically update About Chalukya Developers cards, Why Consider cards, and The Land Journey steps.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-gold btn-lg d-flex align-items-center gap-2 px-4 shadow-sm"
        >
          {saving ? <FaSpinner className="spinner-border spinner-border-sm" /> : <FaSave />}
          {saving ? "Saving..." : "Save All Changes"}
        </button>
      </div>

      {/* Alert Messages */}
      {message.text && (
        <div className={`alert alert-${message.type} alert-dismissible fade show rounded-3 mb-4`} role="alert">
          {message.text}
          <button type="button" className="btn-close" onClick={() => setMessage({ type: "", text: "" })}></button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="nav-tabs-custom">
        <button
          className={`nav-tab-btn ${activeTab === "solutions" ? "active" : ""}`}
          onClick={() => setActiveTab("solutions")}
        >
          About Chalukya Land Solutions ({landSolutions.length})
        </button>
        <button
          className={`nav-tab-btn ${activeTab === "why" ? "active" : ""}`}
          onClick={() => setActiveTab("why")}
        >
          Why Consider Chalukya Cards ({whyConsider.length})
        </button>
        <button
          className={`nav-tab-btn ${activeTab === "journey" ? "active" : ""}`}
          onClick={() => setActiveTab("journey")}
        >
          The Land Journey Steps ({landJourney.length})
        </button>
      </div>

      {/* TAB 1: About Chalukya Land Solutions Cards */}
      {activeTab === "solutions" && (
        <div>
          {/* Add New Solution Form */}
          <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: "#F5F8F6", border: "1px solid #DCE8E1" }}>
            <div className="card-header bg-white fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              <FaPlus className="me-2" style={{ color: "#D4AF37" }} /> Add New Land Solution Card
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-5">
                  <label className="form-label fw-semibold">Solution Title</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Residential Plots, Legal Support"
                    value={newSolution.title}
                    onChange={(e) => setNewSolution({ ...newSolution, title: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Icon</label>
                  <select
                    className="form-select rounded-3"
                    value={newSolution.icon}
                    onChange={(e) => setNewSolution({ ...newSolution, icon: e.target.value })}
                  >
                    {CHALUKYA_ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Priority Order</label>
                  <input
                    type="number"
                    className="form-control rounded-3"
                    min="1"
                    value={newSolution.priority}
                    onChange={(e) => setNewSolution({ ...newSolution, priority: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    placeholder="Short description..."
                    value={newSolution.desc}
                    onChange={(e) => setNewSolution({ ...newSolution, desc: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Feature Checklist Bullet Points</label>
                  {newSolution.features.map((feat, fIdx) => (
                    <div key={fIdx} className="input-group mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={`Feature ${fIdx + 1}...`}
                        value={feat}
                        onChange={(e) => {
                          const updated = [...newSolution.features];
                          updated[fIdx] = e.target.value;
                          setNewSolution({ ...newSolution, features: updated });
                        }}
                      />
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={() => {
                          const updated = newSolution.features.filter((_, i) => i !== fIdx);
                          setNewSolution({ ...newSolution, features: updated });
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                  <button
                    className="btn btn-sm btn-outline-secondary mt-1"
                    type="button"
                    onClick={() => setNewSolution({ ...newSolution, features: [...newSolution.features, ""] })}
                  >
                    <FaPlus className="me-1" /> Add Feature Point
                  </button>
                </div>
                <div className="col-12 text-end">
                  <button className="btn btn-green fw-bold px-4 shadow-sm" type="button" onClick={handleAddSolution}>
                    <FaPlus className="me-2" /> Add Land Solution
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* List of Existing Solutions */}
          <h5 className="fw-bold mb-3" style={{ color: "#073B2A" }}>Existing Land Solutions ({landSolutions.length})</h5>
          {landSolutions.map((sol, sIdx) => (
            <div key={sIdx} className="card border-0 shadow-sm rounded-4 mb-3" style={{ border: "1px solid #DCE8E1" }}>
              <div className="card-body p-4">
                <div className="row g-3 align-items-center">
                  <div className="col-md-5">
                    <label className="form-label small fw-semibold text-muted mb-1">Title</label>
                    <input
                      type="text"
                      className="form-control fw-bold rounded-3"
                      value={sol.title}
                      onChange={(e) => handleSolutionFieldChange(sIdx, "title", e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-muted mb-1">Icon</label>
                    <select
                      className="form-select rounded-3"
                      value={sol.icon || "FaMapMarkedAlt"}
                      onChange={(e) => handleSolutionFieldChange(sIdx, "icon", e.target.value)}
                    >
                      {CHALUKYA_ICON_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-1 col-6">
                    <label className="form-label small fw-semibold text-muted mb-1">Priority</label>
                    <input
                      type="number"
                      className="form-control fw-bold text-center rounded-3"
                      min="1"
                      value={sol.priority || sIdx + 1}
                      onChange={(e) => handleSolutionFieldChange(sIdx, "priority", e.target.value)}
                    />
                  </div>
                  <div className="col-md-2 col-6 text-end">
                    <label className="form-label small fw-semibold text-muted d-block mb-1">Action</label>
                    <button
                      className="btn btn-outline-danger w-100 rounded-3"
                      onClick={() => handleDeleteSolution(sIdx)}
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted mb-1">Description</label>
                    <textarea
                      className="form-control rounded-3"
                      rows="2"
                      value={sol.desc}
                      onChange={(e) => handleSolutionFieldChange(sIdx, "desc", e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted mb-1">Features Checklist</label>
                    {(sol.features || []).map((feat, fIdx) => (
                      <div key={fIdx} className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          value={feat}
                          onChange={(e) => handleFeatureChange(sIdx, fIdx, e.target.value)}
                        />
                        <button
                          className="btn btn-outline-danger"
                          type="button"
                          onClick={() => handleRemoveFeature(sIdx, fIdx)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                    <button
                      className="btn btn-sm btn-outline-secondary mt-1"
                      type="button"
                      onClick={() => handleAddFeature(sIdx)}
                    >
                      <FaPlus className="me-1" /> Add Feature Point
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Why Consider Chalukya Cards */}
      {activeTab === "why" && (
        <div>
          {/* Add New Why Card */}
          <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: "#F5F8F6", border: "1px solid #DCE8E1" }}>
            <div className="card-header bg-white fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              <FaPlus className="me-2" style={{ color: "#D4AF37" }} /> Add New Why Consider Card
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-8">
                  <label className="form-label fw-semibold">Card Title</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Land-Focused Assistance"
                    value={newWhy.title}
                    onChange={(e) => setNewWhy({ ...newWhy, title: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Priority Order</label>
                  <input
                    type="number"
                    className="form-control rounded-3"
                    min="1"
                    value={newWhy.priority}
                    onChange={(e) => setNewWhy({ ...newWhy, priority: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Card Description</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    placeholder="Describe why clients should choose Chalukya..."
                    value={newWhy.desc}
                    onChange={(e) => setNewWhy({ ...newWhy, desc: e.target.value })}
                  />
                </div>
                <div className="col-12 text-end">
                  <button className="btn btn-green fw-bold px-4 shadow-sm" type="button" onClick={handleAddWhy}>
                    <FaPlus className="me-2" /> Add Card
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* List of Existing Why Cards */}
          <h5 className="fw-bold mb-3" style={{ color: "#073B2A" }}>Why Consider Cards ({whyConsider.length})</h5>
          {whyConsider.map((w, wIdx) => (
            <div key={wIdx} className="card border-0 shadow-sm rounded-4 mb-3" style={{ border: "1px solid #DCE8E1" }}>
              <div className="card-body p-4">
                <div className="row g-3 align-items-center">
                  <div className="col-md-8">
                    <label className="form-label small fw-semibold text-muted mb-1">Title</label>
                    <input
                      type="text"
                      className="form-control fw-bold rounded-3"
                      value={w.title}
                      onChange={(e) => handleWhyFieldChange(wIdx, "title", e.target.value)}
                    />
                  </div>
                  <div className="col-md-2 col-6">
                    <label className="form-label small fw-semibold text-muted mb-1">Priority</label>
                    <input
                      type="number"
                      className="form-control fw-bold text-center rounded-3"
                      min="1"
                      value={w.priority || wIdx + 1}
                      onChange={(e) => handleWhyFieldChange(wIdx, "priority", e.target.value)}
                    />
                  </div>
                  <div className="col-md-2 col-6 text-end">
                    <label className="form-label small fw-semibold text-muted d-block mb-1">Action</label>
                    <button
                      className="btn btn-outline-danger w-100 rounded-3"
                      onClick={() => handleDeleteWhy(wIdx)}
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted mb-1">Description</label>
                    <textarea
                      className="form-control rounded-3"
                      rows="2"
                      value={w.desc}
                      onChange={(e) => handleWhyFieldChange(wIdx, "desc", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: The Land Journey Steps */}
      {activeTab === "journey" && (
        <div>
          {/* Add New Journey Step */}
          <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: "#F5F8F6", border: "1px solid #DCE8E1" }}>
            <div className="card-header bg-white fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              <FaPlus className="me-2" style={{ color: "#D4AF37" }} /> Add New Land Journey Step
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-2">
                  <label className="form-label fw-semibold">Step Number</label>
                  <input
                    type="text"
                    className="form-control rounded-3 text-center fw-bold"
                    placeholder="e.g. 01, 02"
                    value={newStep.step}
                    onChange={(e) => setNewStep({ ...newStep, step: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Step Title</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Requirement, Documentation"
                    value={newStep.title}
                    onChange={(e) => setNewStep({ ...newStep, title: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Icon</label>
                  <select
                    className="form-select rounded-3"
                    value={newStep.icon}
                    onChange={(e) => setNewStep({ ...newStep, icon: e.target.value })}
                  >
                    {CHALUKYA_ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
                  <label className="form-label fw-semibold">Priority Order</label>
                  <input
                    type="number"
                    className="form-control rounded-3 text-center"
                    min="1"
                    value={newStep.priority}
                    onChange={(e) => setNewStep({ ...newStep, priority: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Step Description</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    placeholder="Step process instructions..."
                    value={newStep.text}
                    onChange={(e) => setNewStep({ ...newStep, text: e.target.value })}
                  />
                </div>
                <div className="col-12 text-end">
                  <button className="btn btn-green fw-bold px-4 shadow-sm" type="button" onClick={handleAddJourney}>
                    <FaPlus className="me-2" /> Add Journey Step
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* List of Existing Journey Steps */}
          <h5 className="fw-bold mb-3" style={{ color: "#073B2A" }}>The Land Journey Steps ({landJourney.length})</h5>
          {landJourney.map((j, jIdx) => (
            <div key={jIdx} className="roadmap-admin-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="badge bg-success px-3 py-2 fs-6">
                  STEP {j.step || (jIdx + 1).toString().padStart(2, "0")}
                </span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDeleteJourney(jIdx)}
                >
                  <FaTrash className="me-1" /> Delete Step
                </button>
              </div>

              <div className="row g-3">
                <div className="col-md-2">
                  <label className="form-label small fw-semibold text-muted">Step #</label>
                  <input
                    type="text"
                    className="form-control fw-bold text-center rounded-3"
                    value={j.step}
                    onChange={(e) => handleJourneyFieldChange(jIdx, "step", e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold text-muted">Step Title</label>
                  <input
                    type="text"
                    className="form-control fw-bold rounded-3"
                    value={j.title}
                    onChange={(e) => handleJourneyFieldChange(jIdx, "title", e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold text-muted">Icon</label>
                  <select
                    className="form-select rounded-3"
                    value={j.icon || "FaSearch"}
                    onChange={(e) => handleJourneyFieldChange(jIdx, "icon", e.target.value)}
                  >
                    {CHALUKYA_ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
                  <label className="form-label small fw-semibold text-muted">Priority</label>
                  <input
                    type="number"
                    className="form-control fw-bold text-center rounded-3"
                    min="1"
                    value={j.priority || jIdx + 1}
                    onChange={(e) => handleJourneyFieldChange(jIdx, "priority", e.target.value)}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Description</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    value={j.text}
                    onChange={(e) => handleJourneyFieldChange(jIdx, "text", e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Save Action */}
      <div className="d-flex justify-content-end mt-4 pt-3 border-top">
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-gold btn-lg d-flex align-items-center gap-2 px-4 shadow"
        >
          {saving ? <FaSpinner className="spinner-border spinner-border-sm" /> : <FaSave />}
          {saving ? "Saving Changes..." : "Save All Changes"}
        </button>
      </div>
    </div>
  );
};

export default ManageChalukya;
```

===============================================================================
FILE: src/pages/ManageEnquiries.jsx
===============================================================================

```jsx
import React, { useState, useEffect } from "react";
import { apiUrl } from "../api";
import {
  FaEnvelope,
  FaReply,
  FaCheckCircle,
  FaClock,
  FaSpinner,
  FaUser,
  FaPhone,
  FaPaperPlane,
  FaSearch
} from "react-icons/fa";

const ManageEnquiries = () => {
  const [enquiries, setEnquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  // Modal State
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [replying, setReplying] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem("adminToken");
      const res = await fetch(apiUrl("/api/enquiries"), {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const result = await res.json();

      if (res.ok && result.data) {
        setEnquiries(result.data);
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to load guest messages." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Error connecting to backend server." });
    } finally {
      setLoading(false);
    }
  };

  const handleOpenReply = (enquiry) => {
    setSelectedEnquiry(enquiry);
    setReplyText(enquiry.reply || "");
    setMessage({ type: "", text: "" });
  };

  const handleSendReply = async (e) => {
    e.preventDefault();
    if (!replyText.trim()) {
      alert("Please enter a reply message.");
      return;
    }

    setReplying(true);
    setMessage({ type: "", text: "" });

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(apiUrl(`/api/enquiries/${selectedEnquiry._id}/reply`), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ replyText: replyText.trim() })
      });

      const result = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: `Reply sent successfully via email to ${selectedEnquiry.email}!` });
        fetchEnquiries();
        setTimeout(() => {
          setSelectedEnquiry(null);
          setReplyText("");
        }, 1800);
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to send email reply." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Error sending email via Nodemailer." });
    } finally {
      setReplying(false);
    }
  };

  const filteredEnquiries = enquiries.filter((item) => {
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      item.fullName.toLowerCase().includes(q) ||
      item.email.toLowerCase().includes(q) ||
      item.phone.toLowerCase().includes(q) ||
      item.service.toLowerCase().includes(q) ||
      item.message.toLowerCase().includes(q);
    return matchesStatus && matchesQuery;
  });

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5 text-center">
        <div>
          <FaSpinner className="spinner-border text-success mb-3 fs-2" style={{ color: "#0B6045" }} />
          <p className="fw-semibold" style={{ color: "#073B2A" }}>Loading guest messages and enquiries...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="manage-enquiries-container p-3 p-md-4">
      <style>{`
        .manage-enquiries-container {
          background-color: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(7, 59, 42, 0.06);
          border: 1px solid #DCE8E1;
        }

        .page-header-box {
          background: linear-gradient(135deg, #073B2A, #0B6045);
          color: #FFFFFF;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .manage-enquiries-container .page-header-box h2 {
          color: #FFFFFF;
        }

        .enquiry-card {
          background: #FFFFFF;
          border-radius: 14px;
          border: 1px solid #DCE8E1;
          padding: 20px;
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }

        .enquiry-card:hover {
          box-shadow: 0 8px 25px rgba(7, 59, 42, 0.08);
          border-color: #D4AF37;
        }

        .status-badge-pending {
          background: #FFF3CD;
          color: #856404;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
        }

        .status-badge-replied {
          background: #D4EDDA;
          color: #155724;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
        }

        .btn-green {
          background: #073B2A;
          color: #FFFFFF;
          border: none;
          font-weight: 600;
        }

        .btn-green:hover {
          background: #0B6045;
          color: #FFFFFF;
        }

        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
        }

        .reply-modal {
          background: #FFFFFF;
          border-radius: 16px;
          maxWidth: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.25);
        }
      `}</style>

      {/* Header Banner */}
      <div className="page-header-box d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-1 d-flex align-items-center gap-2">
            <FaEnvelope style={{ color: "#D4AF37" }} /> Guest Messages & Service Enquiries
          </h2>
          <p className="mb-0 text-white-50 fs-6">
            View customer enquiries and send email responses directly to users via Nodemailer.
          </p>
        </div>

        <button className="btn btn-outline-light rounded-3 px-3" onClick={fetchEnquiries}>
          Refresh Messages
        </button>
      </div>

      {/* Global Alert */}
      {message.text && (
        <div className={`alert alert-${message.type} alert-dismissible fade show rounded-3 mb-4`} role="alert">
          {message.text}
          <button type="button" className="btn-close" onClick={() => setMessage({ type: "", text: "" })}></button>
        </div>
      )}

      {/* Filter and Search Bar */}
      <div className="row g-3 mb-4 align-items-center">
        <div className="col-md-7">
          <div className="input-group">
            <span className="input-group-text bg-white"><FaSearch className="text-muted" /></span>
            <input
              type="text"
              className="form-control rounded-end"
              placeholder="Search by name, email, phone, service or message..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="col-md-5 d-flex gap-2 justify-content-md-end">
          <button
            className={`btn ${statusFilter === "All" ? "btn-dark" : "btn-outline-secondary"}`}
            onClick={() => setStatusFilter("All")}
          >
            All ({enquiries.length})
          </button>
          <button
            className={`btn ${statusFilter === "Pending" ? "btn-warning" : "btn-outline-secondary"}`}
            onClick={() => setStatusFilter("Pending")}
          >
            Pending ({enquiries.filter(e => e.status === "Pending").length})
          </button>
          <button
            className={`btn ${statusFilter === "Replied" ? "btn-success" : "btn-outline-secondary"}`}
            onClick={() => setStatusFilter("Replied")}
          >
            Replied ({enquiries.filter(e => e.status === "Replied").length})
          </button>
        </div>
      </div>

      {/* Enquiries List */}
      {filteredEnquiries.length === 0 ? (
        <div className="text-center p-5 bg-light rounded-4 text-muted">
          No guest messages or enquiries found.
        </div>
      ) : (
        filteredEnquiries.map((enquiry) => (
          <div key={enquiry._id} className="enquiry-card">
            <div className="d-flex justify-content-between align-items-start flex-wrap gap-2 mb-3">
              <div>
                <h5 className="fw-bold mb-1" style={{ color: "#073B2A" }}>
                  <FaUser className="me-2 text-muted" /> {enquiry.fullName}
                </h5>
                <div className="d-flex gap-3 text-muted small flex-wrap">
                  <span><FaEnvelope className="me-1" /> {enquiry.email}</span>
                  <span><FaPhone className="me-1" /> {enquiry.phone}</span>
                  <span><FaClock className="me-1" /> {new Date(enquiry.createdAt).toLocaleString()}</span>
                </div>
              </div>

              <div>
                <span className={enquiry.status === "Replied" ? "status-badge-replied" : "status-badge-pending"}>
                  {enquiry.status === "Replied" ? <FaCheckCircle className="me-1" /> : <FaClock className="me-1" />}
                  {enquiry.status}
                </span>
              </div>
            </div>

            <div className="mb-3 p-3 bg-light rounded-3">
              <span className="badge bg-secondary mb-2">{enquiry.service}</span>
              <p className="mb-0 text-dark" style={{ whiteSpace: "pre-line" }}>{enquiry.message}</p>
            </div>

            {enquiry.status === "Replied" && enquiry.reply && (
              <div className="mb-3 p-3 rounded-3" style={{ background: "rgba(7, 59, 42, 0.05)", borderLeft: "4px solid #073B2A" }}>
                <p className="small fw-bold text-success mb-1">
                  Replied on {new Date(enquiry.repliedAt).toLocaleString()}:
                </p>
                <p className="mb-0 text-dark small" style={{ whiteSpace: "pre-line" }}>{enquiry.reply}</p>
              </div>
            )}

            <div className="text-end">
              <button
                className="btn btn-green fw-bold px-4 rounded-3 d-inline-flex align-items-center gap-2"
                onClick={() => handleOpenReply(enquiry)}
              >
                <FaReply /> {enquiry.status === "Replied" ? "Send New Reply Email" : "Reply via Email"}
              </button>
            </div>
          </div>
        ))
      )}

      {/* Reply Modal */}
      {selectedEnquiry && (
        <div className="modal-overlay" onClick={() => setSelectedEnquiry(null)}>
          <div className="reply-modal p-4" onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
              <h5 className="fw-bold mb-0" style={{ color: "#073B2A" }}>
                <FaPaperPlane className="me-2 text-warning" style={{ color: "#D4AF37" }} /> Reply to {selectedEnquiry.fullName}
              </h5>
              <button className="btn-close" onClick={() => setSelectedEnquiry(null)}></button>
            </div>

            <div className="mb-3 p-3 bg-light rounded-3">
              <div className="small text-muted mb-1">To: <strong>{selectedEnquiry.email}</strong></div>
              <div className="small text-muted mb-2">Subject: <strong>{selectedEnquiry.service}</strong></div>
              <div className="small text-muted"><strong>Enquiry Message:</strong> "{selectedEnquiry.message}"</div>
            </div>

            <form onSubmit={handleSendReply}>
              <div className="mb-4">
                <label className="form-label fw-semibold">Your Email Response Message</label>
                <textarea
                  className="form-control rounded-3"
                  rows="5"
                  placeholder="Type your response to the user. This will be emailed directly to their inbox via Nodemailer..."
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  required
                />
              </div>

              <div className="d-flex justify-content-end gap-2">
                <button
                  type="button"
                  className="btn btn-outline-secondary px-4"
                  onClick={() => setSelectedEnquiry(null)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={replying}
                  className="btn btn-green fw-bold px-4 d-flex align-items-center gap-2"
                  style={{ background: "#D4AF37", borderColor: "#D4AF37", color: "#FFFFFF" }}
                >
                  {replying ? <FaSpinner className="spinner-border spinner-border-sm" /> : <FaPaperPlane />}
                  {replying ? "Sending Email..." : "Send Email Reply"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageEnquiries;
```

===============================================================================
FILE: src/pages/ManageFinancialGoals.jsx
===============================================================================

```jsx
import React, { useState, useEffect } from "react";
import { apiUrl } from "../api";
import {
  FaSave,
  FaPlus,
  FaTrash,
  FaBullseye,
  FaSpinner
} from "react-icons/fa";

const GOAL_ICON_OPTIONS = [
  { label: "Chart / Wealth (FaChartLine)", value: "FaChartLine" },
  { label: "Umbrella / Retirement (FaUmbrella)", value: "FaUmbrella" },
  { label: "Graduation / Education (FaGraduationCap)", value: "FaGraduationCap" },
  { label: "Home / Property (FaHome)", value: "FaHome" },
  { label: "Briefcase / Business (FaBriefcase)", value: "FaBriefcase" },
  { label: "Shield / Protection (FaShieldAlt)", value: "FaShieldAlt" },
  { label: "Bullseye / Target (FaBullseye)", value: "FaBullseye" },
  { label: "Clipboard / Assessment (FaClipboardList)", value: "FaClipboardList" },
  { label: "Cogs / Planning (FaCogs)", value: "FaCogs" },
  { label: "Check Double / Execute (FaCheckDouble)", value: "FaCheckDouble" },
  { label: "Sync / Review (FaSyncAlt)", value: "FaSyncAlt" }
];

const ManageFinancialGoals = () => {
  const [activeTab, setActiveTab] = useState("pillars");
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const [pillars, setPillars] = useState([]);
  const [journeySteps, setJourneySteps] = useState([]);

  // New Pillar Form State
  const [newPillar, setNewPillar] = useState({
    title: "",
    desc: "",
    icon: "FaChartLine",
    details: [""],
    priority: 1
  });

  // New Journey Step Form State
  const [newStep, setNewStep] = useState({
    step: "01",
    name: "",
    icon: "FaBullseye",
    text: "",
    priority: 1
  });

  useEffect(() => {
    fetchFinancialGoalsData();
  }, []);

  const fetchFinancialGoalsData = async () => {
    try {
      setLoading(true);
      const res = await fetch(apiUrl("/api/financial-goals"));
      const result = await res.json();

      if (res.ok && result.data) {
        setPillars(result.data.pillars || []);
        setJourneySteps(result.data.journeySteps || []);
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to load Financial Goals data." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Unable to connect to backend server." });
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    if (e) e.preventDefault();
    setMessage({ type: "", text: "" });
    setSaving(true);

    try {
      const token = localStorage.getItem("adminToken");
      const res = await fetch(apiUrl("/api/financial-goals"), {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          pillars,
          journeySteps
        })
      });

      const result = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Financial Goals page content saved successfully!" });
        if (result.data) {
          setPillars(result.data.pillars || []);
          setJourneySteps(result.data.journeySteps || []);
        }
      } else {
        setMessage({ type: "danger", text: result.message || "Failed to save content." });
      }
    } catch (err) {
      console.error(err);
      setMessage({ type: "danger", text: "Error saving data to server." });
    } finally {
      setSaving(false);
    }
  };

  // --- PILLAR CARDS HANDLERS ---
  const handleAddPillar = () => {
    if (!newPillar.title.trim() || !newPillar.desc.trim()) {
      alert("Please provide both Title and Description for the Goal Pillar.");
      return;
    }

    const cleanDetails = newPillar.details.filter((d) => d.trim() !== "");
    const pillarToAdd = {
      ...newPillar,
      details: cleanDetails,
      priority: Number(newPillar.priority) || pillars.length + 1
    };

    const updatedList = [...pillars, pillarToAdd].sort((a, b) => a.priority - b.priority);
    setPillars(updatedList);

    setNewPillar({
      title: "",
      desc: "",
      icon: "FaChartLine",
      details: [""],
      priority: pillars.length + 2
    });
  };

  const handleDeletePillar = (index) => {
    setPillars(pillars.filter((_, i) => i !== index));
  };

  const handlePillarFieldChange = (index, field, value) => {
    const updated = [...pillars];
    updated[index] = {
      ...updated[index],
      [field]: field === "priority" ? Number(value) : value
    };

    if (field === "priority") {
      updated.sort((a, b) => a.priority - b.priority);
    }

    setPillars(updated);
  };

  const handlePillarDetailChange = (pillarIndex, detailIndex, value) => {
    const updated = [...pillars];
    const details = [...updated[pillarIndex].details];
    details[detailIndex] = value;
    updated[pillarIndex].details = details;
    setPillars(updated);
  };

  const handleAddPillarDetail = (pillarIndex) => {
    const updated = [...pillars];
    updated[pillarIndex].details.push("");
    setPillars(updated);
  };

  const handleRemovePillarDetail = (pillarIndex, detailIndex) => {
    const updated = [...pillars];
    updated[pillarIndex].details = updated[pillarIndex].details.filter((_, i) => i !== detailIndex);
    setPillars(updated);
  };

  // --- JOURNEY STEPS ROADMAP HANDLERS ---
  const handleAddStep = () => {
    if (!newStep.name.trim() || !newStep.text.trim()) {
      alert("Please provide both Step Title and Description for the Journey Roadmap Step.");
      return;
    }

    const stepToAdd = {
      ...newStep,
      priority: Number(newStep.priority) || journeySteps.length + 1
    };

    const updatedList = [...journeySteps, stepToAdd].sort((a, b) => a.priority - b.priority);
    setJourneySteps(updatedList);

    const nextStepNum = (journeySteps.length + 2).toString().padStart(2, "0");
    setNewStep({
      step: nextStepNum,
      name: "",
      icon: "FaBullseye",
      text: "",
      priority: journeySteps.length + 2
    });
  };

  const handleDeleteStep = (index) => {
    setJourneySteps(journeySteps.filter((_, i) => i !== index));
  };

  const handleStepFieldChange = (index, field, value) => {
    const updated = [...journeySteps];
    updated[index] = {
      ...updated[index],
      [field]: field === "priority" ? Number(value) : value
    };

    if (field === "priority") {
      updated.sort((a, b) => a.priority - b.priority);
    }

    setJourneySteps(updated);
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center p-5 text-center">
        <div>
          <FaSpinner className="spinner-border text-success mb-3 fs-2" style={{ color: "#0B6045" }} />
          <p className="fw-semibold" style={{ color: "#073B2A" }}>Loading Financial Goals management settings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="manage-goals-container p-3 p-md-4">
      <style>{`
        .manage-goals-container {
          background-color: #FFFFFF;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(7, 59, 42, 0.06);
          border: 1px solid #DCE8E1;
        }

        .page-header-box {
          background: linear-gradient(135deg, #073B2A, #0B6045);
          color: #FFFFFF;
          padding: 24px;
          border-radius: 12px;
          margin-bottom: 24px;
        }

        .manage-goals-container .page-header-box h2 {
          color: #FFFFFF;
        }

        .nav-tabs-custom {
          border-bottom: 2px solid #DCE8E1;
          margin-bottom: 24px;
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .nav-tab-btn {
          background: transparent;
          border: none;
          padding: 12px 20px;
          font-weight: 600;
          color: #5B6B63;
          border-bottom: 3px solid transparent;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 6px 6px 0 0;
        }

        .nav-tab-btn:hover {
          color: #0B6045;
          background: rgba(11, 96, 69, 0.05);
        }

        .nav-tab-btn.active {
          color: #073B2A;
          border-bottom-color: #D4AF37;
          background: rgba(212, 175, 55, 0.08);
        }

        .btn-gold {
          background: #D4AF37;
          color: #FFFFFF;
          border: none;
          font-weight: 700;
        }

        .btn-gold:hover {
          background: #B8941F;
          color: #FFFFFF;
        }

        .btn-green {
          background: #073B2A;
          color: #FFFFFF;
          border: none;
          font-weight: 600;
        }

        .btn-green:hover {
          background: #0B6045;
          color: #FFFFFF;
        }

        /* Roadmap step visual preview box for admin */
        .roadmap-admin-card {
          background: #F5F8F6;
          border: 2px dashed #DCE8E1;
          border-radius: 14px;
          padding: 20px;
          position: relative;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        .roadmap-admin-card:hover {
          border-color: #D4AF37;
          background: #FFFFFF;
          box-shadow: 0 8px 25px rgba(7, 59, 42, 0.08);
        }

        .step-badge-admin {
          background: #073B2A;
          color: #D4AF37;
          font-weight: 800;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 13px;
        }
      `}</style>

      {/* Header Banner */}
      <div className="page-header-box d-flex justify-content-between align-items-center flex-wrap gap-3">
        <div>
          <h2 className="fw-bold mb-1 d-flex align-items-center gap-2">
            <FaBullseye style={{ color: "#D4AF37" }} /> Manage Financial Goals Page
          </h2>
          <p className="mb-0 text-white-50 fs-6">
            Easily manage Pillars of Financial Planning and the Financial Goal Journey roadmap steps.
          </p>
        </div>

        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-gold btn-lg d-flex align-items-center gap-2 px-4 shadow-sm"
        >
          {saving ? <FaSpinner className="spinner-border spinner-border-sm" /> : <FaSave />}
          {saving ? "Saving..." : "Save All Changes"}
        </button>
      </div>

      {/* Alert Messages */}
      {message.text && (
        <div className={`alert alert-${message.type} alert-dismissible fade show rounded-3 mb-4`} role="alert">
          {message.text}
          <button type="button" className="btn-close" onClick={() => setMessage({ type: "", text: "" })}></button>
        </div>
      )}

      {/* Navigation Tabs */}
      <div className="nav-tabs-custom">
        <button
          className={`nav-tab-btn ${activeTab === "pillars" ? "active" : ""}`}
          onClick={() => setActiveTab("pillars")}
        >
          Pillars of Financial Planning Cards ({pillars.length})
        </button>
        <button
          className={`nav-tab-btn ${activeTab === "roadmap" ? "active" : ""}`}
          onClick={() => setActiveTab("roadmap")}
        >
          Financial Goal Journey Roadmap Steps ({journeySteps.length})
        </button>
      </div>

      {/* TAB 1: Pillars of Financial Planning Cards */}
      {activeTab === "pillars" && (
        <div>
          {/* Add New Pillar Form */}
          <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: "#F5F8F6", border: "1px solid #DCE8E1" }}>
            <div className="card-header bg-white fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              <FaPlus className="me-2" style={{ color: "#D4AF37" }} /> Add New Financial Goal Pillar Card
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-5">
                  <label className="form-label fw-semibold">Pillar Title</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Wealth Creation, Retirement Planning"
                    value={newPillar.title}
                    onChange={(e) => setNewPillar({ ...newPillar, title: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Icon</label>
                  <select
                    className="form-select rounded-3"
                    value={newPillar.icon}
                    onChange={(e) => setNewPillar({ ...newPillar, icon: e.target.value })}
                  >
                    {GOAL_ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-3">
                  <label className="form-label fw-semibold">Priority Order</label>
                  <input
                    type="number"
                    className="form-control rounded-3"
                    min="1"
                    value={newPillar.priority}
                    onChange={(e) => setNewPillar({ ...newPillar, priority: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Description</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    placeholder="Summary of the goal pillar..."
                    value={newPillar.desc}
                    onChange={(e) => setNewPillar({ ...newPillar, desc: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Feature Bullet Points</label>
                  {newPillar.details.map((detail, dIdx) => (
                    <div key={dIdx} className="input-group mb-2">
                      <input
                        type="text"
                        className="form-control"
                        placeholder={`Feature detail ${dIdx + 1}...`}
                        value={detail}
                        onChange={(e) => {
                          const updated = [...newPillar.details];
                          updated[dIdx] = e.target.value;
                          setNewPillar({ ...newPillar, details: updated });
                        }}
                      />
                      <button
                        className="btn btn-outline-danger"
                        type="button"
                        onClick={() => {
                          const updated = newPillar.details.filter((_, i) => i !== dIdx);
                          setNewPillar({ ...newPillar, details: updated });
                        }}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))}
                  <button
                    className="btn btn-sm btn-outline-secondary mt-1"
                    type="button"
                    onClick={() => setNewPillar({ ...newPillar, details: [...newPillar.details, ""] })}
                  >
                    <FaPlus className="me-1" /> Add Bullet Point
                  </button>
                </div>
                <div className="col-12 text-end">
                  <button className="btn btn-green fw-bold px-4 shadow-sm" type="button" onClick={handleAddPillar}>
                    <FaPlus className="me-2" /> Add Pillar Card
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* List of Existing Pillars */}
          <h5 className="fw-bold mb-3" style={{ color: "#073B2A" }}>
            Existing Goal Pillars ({pillars.length})
          </h5>

          {pillars.map((pillar, pIdx) => (
            <div key={pIdx} className="card border-0 shadow-sm rounded-4 mb-3" style={{ border: "1px solid #DCE8E1" }}>
              <div className="card-body p-4">
                <div className="row g-3 align-items-center">
                  <div className="col-md-5">
                    <label className="form-label small fw-semibold text-muted mb-1">Title</label>
                    <input
                      type="text"
                      className="form-control fw-bold rounded-3"
                      value={pillar.title}
                      onChange={(e) => handlePillarFieldChange(pIdx, "title", e.target.value)}
                    />
                  </div>
                  <div className="col-md-4">
                    <label className="form-label small fw-semibold text-muted mb-1">Icon</label>
                    <select
                      className="form-select rounded-3"
                      value={pillar.icon || "FaChartLine"}
                      onChange={(e) => handlePillarFieldChange(pIdx, "icon", e.target.value)}
                    >
                      {GOAL_ICON_OPTIONS.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-1 col-6">
                    <label className="form-label small fw-semibold text-muted mb-1">Priority</label>
                    <input
                      type="number"
                      className="form-control fw-bold text-center rounded-3"
                      min="1"
                      value={pillar.priority || pIdx + 1}
                      onChange={(e) => handlePillarFieldChange(pIdx, "priority", e.target.value)}
                    />
                  </div>
                  <div className="col-md-2 col-6 text-end">
                    <label className="form-label small fw-semibold text-muted d-block mb-1">Action</label>
                    <button
                      className="btn btn-outline-danger w-100 rounded-3"
                      onClick={() => handleDeletePillar(pIdx)}
                    >
                      <FaTrash className="me-1" /> Delete
                    </button>
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted mb-1">Description</label>
                    <textarea
                      className="form-control rounded-3"
                      rows="2"
                      value={pillar.desc}
                      onChange={(e) => handlePillarFieldChange(pIdx, "desc", e.target.value)}
                    />
                  </div>
                  <div className="col-12">
                    <label className="form-label small fw-semibold text-muted mb-1">Feature Bullet Points</label>
                    {(pillar.details || []).map((detail, dIdx) => (
                      <div key={dIdx} className="input-group mb-2">
                        <input
                          type="text"
                          className="form-control"
                          value={detail}
                          onChange={(e) => handlePillarDetailChange(pIdx, dIdx, e.target.value)}
                        />
                        <button
                          className="btn btn-outline-danger"
                          type="button"
                          onClick={() => handleRemovePillarDetail(pIdx, dIdx)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    ))}
                    <button
                      className="btn btn-sm btn-outline-secondary mt-1"
                      type="button"
                      onClick={() => handleAddPillarDetail(pIdx)}
                    >
                      <FaPlus className="me-1" /> Add Bullet Point
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: Financial Goal Journey Roadmap Steps */}
      {activeTab === "roadmap" && (
        <div>
          {/* Add New Journey Step Form */}
          <div className="card border-0 shadow-sm rounded-4 mb-4" style={{ background: "#F5F8F6", border: "1px solid #DCE8E1" }}>
            <div className="card-header bg-white fw-bold text-dark py-3" style={{ borderBottom: "2px solid #DCE8E1" }}>
              <FaPlus className="me-2" style={{ color: "#D4AF37" }} /> Add New Journey Step (Roadmap Sequence)
            </div>
            <div className="card-body p-4">
              <div className="row g-3">
                <div className="col-md-2">
                  <label className="form-label fw-semibold">Step Number</label>
                  <input
                    type="text"
                    className="form-control rounded-3 fw-bold text-center"
                    placeholder="e.g. 01, 02"
                    value={newStep.step}
                    onChange={(e) => setNewStep({ ...newStep, step: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Step Title</label>
                  <input
                    type="text"
                    className="form-control rounded-3"
                    placeholder="e.g. Goal Identification, Assessment"
                    value={newStep.name}
                    onChange={(e) => setNewStep({ ...newStep, name: e.target.value })}
                  />
                </div>
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Icon</label>
                  <select
                    className="form-select rounded-3"
                    value={newStep.icon}
                    onChange={(e) => setNewStep({ ...newStep, icon: e.target.value })}
                  >
                    {GOAL_ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-2">
                  <label className="form-label fw-semibold">Priority Order</label>
                  <input
                    type="number"
                    className="form-control rounded-3 text-center"
                    min="1"
                    value={newStep.priority}
                    onChange={(e) => setNewStep({ ...newStep, priority: e.target.value })}
                  />
                </div>
                <div className="col-12">
                  <label className="form-label fw-semibold">Step Description / Instructions</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    placeholder="Describe what happens in this step..."
                    value={newStep.text}
                    onChange={(e) => setNewStep({ ...newStep, text: e.target.value })}
                  />
                </div>
                <div className="col-12 text-end">
                  <button className="btn btn-green fw-bold px-4 shadow-sm" type="button" onClick={handleAddStep}>
                    <FaPlus className="me-2" /> Add Roadmap Step
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Roadmap Visual Admin Flow */}
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h5 className="fw-bold mb-0" style={{ color: "#073B2A" }}>
              Financial Goal Journey Roadmap Steps ({journeySteps.length})
            </h5>
            <small className="text-muted fw-semibold">Shown step number-wise on guest layout</small>
          </div>

          {journeySteps.map((step, sIdx) => (
            <div key={sIdx} className="roadmap-admin-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span className="step-badge-admin">
                  STEP {step.step || (sIdx + 1).toString().padStart(2, "0")}
                </span>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() => handleDeleteStep(sIdx)}
                >
                  <FaTrash className="me-1" /> Delete Step
                </button>
              </div>

              <div className="row g-3">
                <div className="col-md-2">
                  <label className="form-label small fw-semibold text-muted">Step #</label>
                  <input
                    type="text"
                    className="form-control fw-bold text-center rounded-3"
                    value={step.step}
                    onChange={(e) => handleStepFieldChange(sIdx, "step", e.target.value)}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label small fw-semibold text-muted">Step Name / Title</label>
                  <input
                    type="text"
                    className="form-control fw-bold rounded-3"
                    value={step.name}
                    onChange={(e) => handleStepFieldChange(sIdx, "name", e.target.value)}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label small fw-semibold text-muted">Icon</label>
                  <select
                    className="form-select rounded-3"
                    value={step.icon || "FaBullseye"}
                    onChange={(e) => handleStepFieldChange(sIdx, "icon", e.target.value)}
                  >
                    {GOAL_ICON_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="col-md-2">
                  <label className="form-label small fw-semibold text-muted">Priority</label>
                  <input
                    type="number"
                    className="form-control fw-bold text-center rounded-3"
                    min="1"
                    value={step.priority || sIdx + 1}
                    onChange={(e) => handleStepFieldChange(sIdx, "priority", e.target.value)}
                  />
                </div>

                <div className="col-12">
                  <label className="form-label small fw-semibold text-muted">Step Description</label>
                  <textarea
                    className="form-control rounded-3"
                    rows="2"
                    value={step.text}
                    onChange={(e) => handleStepFieldChange(sIdx, "text", e.target.value)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Bottom Save Action */}
      <div className="d-flex justify-content-end mt-4 pt-3 border-top">
        <button
          onClick={handleSave}
          disabled={saving}
          className="btn btn-gold btn-lg d-flex align-items-center gap-2 px-4 shadow"
        >
          {saving ? <FaSpinner className="spinner-border spinner-border-sm" /> : <FaSave />}
          {saving ? "Saving Changes..." : "Save All Changes"}
        </button>
      </div>
    </div>
  );
};

export default ManageFinancialGoals;
```

===============================================================================
FILE: src/pages/PrivacyPolicy.jsx
===============================================================================

```jsx
import React from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const PrivacyPolicy = () => {
  return (
    <div className="lg-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .lg-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#04241A;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .lg-page h2,.lg-page h3 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .lg-page .wrap { max-width:920px; margin:0 auto; }
        .lg-page section.sec { padding:90px 5%; position:relative; }

        .legal-content-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:28px; padding:54px;
          box-shadow:0 18px 40px rgba(7,59,42,.05); position:relative; overflow:hidden;
        }
        .legal-content-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:var(--accent); }

        .last-updated {
          font-family:'Fraunces',serif; font-style:italic; font-size:13px; color:var(--accent); font-weight:600;
          letter-spacing:.05em; margin-bottom:28px; display:block; text-transform:uppercase;
        }

        .legal-h2 { font-size:24px; font-weight:600; color:var(--primary); margin:36px 0 14px 0; }
        .legal-p { font-size:15.5px; color:var(--muted); line-height:1.75; margin-bottom:18px; max-width:68ch; }
        .legal-p strong { color:var(--text); }

        @media (max-width:600px) {
          .lg-page section.sec { padding:64px 6%; }
          .legal-content-card { padding:32px 22px; }
        }
      `}</style>

      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, protect, and handle client information responsibly."
        badge="DATA PRIVACY"
        breadcrumbs={[
          { label: "Trust & Compliance", path: "/trust-compliance" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="legal-content-card">
            <span className="last-updated">LAST UPDATED: SEPTEMBER 2026</span>

            <p className="legal-p">
              INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED ("Company", "We", "Us") respects your privacy and is committed to protecting personal data submitted through our website or consultation process.
            </p>

            <h2 className="legal-h2">1. Information We Collect</h2>
            <p className="legal-p">
              We collect information provided voluntarily when you fill out contact forms or request services, including: Name, Phone Number, Email Address, Selected Service Interest, and Consultation Notes.
            </p>

            <h2 className="legal-h2">2. How We Use Information</h2>
            <p className="legal-p">
              - To respond to service enquiries and schedule financial consultations.<br />
              - To facilitate loan, insurance, or mutual fund documentation with authorized partner institutions.<br />
              - To communicate updates regarding your requested financial services.
            </p>

            <h2 className="legal-h2">3. Data Security & Protection</h2>
            <p className="legal-p">
              We implement appropriate technical and organizational measures to safeguard your personal details against unauthorized access, loss, or disclosure. We do not sell or rent client lists to third-party marketers.
            </p>

            <h2 className="legal-h2">4. Contact Privacy Officer</h2>
            <p className="legal-p">
              If you have any questions regarding our privacy practices, please contact us at <strong>meetinvenstnow@gmail.com</strong>.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Questions About Data Protection?"
        primaryBtnText="Contact Privacy Team"
        primaryBtnLink="/contact"
      />
    </div>
  );
};

export default PrivacyPolicy;
```

===============================================================================
FILE: src/pages/RegulatoryInformation.jsx
===============================================================================

```jsx
import React from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const RegulatoryInformation = () => {
  return (
    <div className="lg-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .lg-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#04241A;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .lg-page h2,.lg-page h3 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .lg-page .wrap { max-width:920px; margin:0 auto; }
        .lg-page section.sec { padding:90px 5%; position:relative; }

        .legal-content-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:28px; padding:54px;
          box-shadow:0 18px 40px rgba(7,59,42,.05); position:relative; overflow:hidden;
        }
        .legal-content-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:var(--accent); }

        .last-updated {
          font-family:'Fraunces',serif; font-style:italic; font-size:13px; color:var(--accent); font-weight:600;
          letter-spacing:.05em; margin-bottom:28px; display:block; text-transform:uppercase;
        }

        .legal-h2 { font-size:24px; font-weight:600; color:var(--primary); margin:36px 0 14px 0; }
        .legal-p { font-size:15.5px; color:var(--muted); line-height:1.75; margin-bottom:18px; max-width:68ch; }
        .legal-p strong { color:var(--text); }

        @media (max-width:600px) {
          .lg-page section.sec { padding:64px 6%; }
          .legal-content-card { padding:32px 22px; }
        }
      `}</style>

      <PageHero
        title="Regulatory Information"
        subtitle="Corporate overview, GST identifier, and regulatory disclosure standards."
        badge="LEGAL DISCLOSURE"
        breadcrumbs={[
          { label: "Trust & Compliance", path: "/trust-compliance" },
          { label: "Regulatory Info" },
        ]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="legal-content-card">
            <span className="last-updated">LAST UPDATED: SEPTEMBER 2026</span>

            <p className="legal-p">
              INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED operates as a professional financial services company providing financial consultation, loan assistance guidance, mutual fund planning support, insurance coordination, and land documentation services.
            </p>

            <h2 className="legal-h2">1. Corporate Identification</h2>
            <p className="legal-p">
              <strong>Entity Name:</strong> INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED<br />
              <strong>GST / Registration Identifier:</strong> 29AAICI5060P1ZX<br />
              <strong>Head Office Location:</strong> Kundapura, Karnataka, India<br />
              <strong>Contact Email:</strong> meetinvenstnow@gmail.com
            </p>

            <h2 className="legal-h2">2. Regulatory & Distribution Framework</h2>
            <p className="legal-p">
              INVESTNOW acts as an intermediary financial consultant facilitating financial products issued by third-party financial institutions, asset management companies (AMCs), banks, and insurance issuers.
            </p>
            <p className="legal-p">
              Please contact INVESTNOW directly for applicable regulatory registration details and service-specific information corresponding to individual product lines.
            </p>

            <h2 className="legal-h2">3. Issuer Terms & Responsibilities</h2>
            <p className="legal-p">
              All financial products (such as loans, insurance policies, and mutual fund units) are subject to the specific terms, conditions, eligibility, and underwriting guidelines set by the respective product issuers. INVESTNOW does not guarantee product approval or independent issuer decisions.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions Regarding Regulatory Information?"
        primaryBtnText="Contact Our Office"
        primaryBtnLink="/contact"
      />
    </div>
  );
};

export default RegulatoryInformation;
```

===============================================================================
FILE: src/pages/RiskDisclosures.jsx
===============================================================================

```jsx
import React from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const RiskDisclosures = () => {
  return (
    <div className="lg-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .lg-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#04241A;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .lg-page h2,.lg-page h3 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .lg-page .wrap { max-width:920px; margin:0 auto; }
        .lg-page section.sec { padding:90px 5%; position:relative; }

        .legal-content-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:28px; padding:54px;
          box-shadow:0 18px 40px rgba(7,59,42,.05); position:relative; overflow:hidden;
        }
        .legal-content-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:var(--accent); }

        .last-updated {
          font-family:'Fraunces',serif; font-style:italic; font-size:13px; color:var(--accent); font-weight:600;
          letter-spacing:.05em; margin-bottom:24px; display:block; text-transform:uppercase;
        }

        .risk-alert-box {
          background:rgba(212,175,55,.12); border:1px solid var(--accent); padding:20px 24px;
          border-radius:18px; color:var(--primary); font-weight:600; font-size:14.5px; margin:24px 0 32px; line-height:1.6;
        }

        .legal-h2 { font-size:24px; font-weight:600; color:var(--primary); margin:36px 0 14px 0; }
        .legal-p { font-size:15.5px; color:var(--muted); line-height:1.75; margin-bottom:18px; max-width:68ch; }
        .legal-p strong { color:var(--text); }

        @media (max-width:600px) {
          .lg-page section.sec { padding:64px 6%; }
          .legal-content-card { padding:32px 22px; }
        }
      `}</style>

      <PageHero
        title="Risk Disclosures"
        subtitle="Important disclosures regarding financial market volatility and investment risks."
        badge="RISK WARNING"
        breadcrumbs={[
          { label: "Trust & Compliance", path: "/trust-compliance" },
          { label: "Risk Disclosures" },
        ]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="legal-content-card">
            <span className="last-updated">LAST UPDATED: SEPTEMBER 2026</span>

            <div className="risk-alert-box">
              WARNING: Financial investments, equities, and market-linked instruments involve risk of capital loss. Past performance does not guarantee future results.
            </div>

            <h2 className="legal-h2">1. Market Risk Disclosure</h2>
            <p className="legal-p">
              Investments in mutual funds, stocks, and equity markets are subject to market risks, interest rate fluctuations, macroeconomic factors, and liquidity dynamics. The net asset value (NAV) of investments can go up or down based on market behavior.
            </p>

            <h2 className="legal-h2">2. Non-Guarantee of Returns</h2>
            <p className="legal-p">
              INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED does not promise, offer, or guarantee fixed returns, risk-free returns, or assured appreciation on any market-linked financial products. Any illustrated returns or historical projections are purely informative.
            </p>

            <h2 className="legal-h2">3. Product Specific Terms</h2>
            <p className="legal-p">
              - <strong>Insurance:</strong> Subject to policy terms, exclusions, waiting periods, and underwriting approval by the insurance issuer.<br />
              - <strong>Loans:</strong> Approval, interest rates, tenure, and eligibility criteria are determined solely by lending banks and financial institutions.<br />
              - <strong>Land Links / Real Estate:</strong> Property title, regulatory approvals, and land pricing must be independently verified by buyers.
            </p>

            <h2 className="legal-h2">4. Investor Responsibility</h2>
            <p className="legal-p">
              Investors and clients are encouraged to carefully assess their personal financial goals, risk capacity, and liquidity requirements before entering into any financial transaction or commitment.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Advice Regarding Investment Risks?"
        primaryBtnText="Speak with an Advisor"
        primaryBtnLink="/contact"
      />
    </div>
  );
};

export default RiskDisclosures;
```

===============================================================================
FILE: src/pages/ServiceManage.jsx
===============================================================================

```jsx
import React, { useEffect, useState, useMemo } from "react";
import { apiUrl } from "../api";
import {
  FaPlus,
  FaTrash,
  FaEdit,
  FaSearch,
  FaCheckCircle,
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaChartPie,
  FaCoins,
  FaChartLine,
  FaBriefcase,
  FaBuilding,
  FaUniversity,
  FaMapMarkedAlt,
  FaUserTie,
  FaThLarge,
  FaList,
  FaTimes,
  FaExternalLinkAlt,
  FaLayerGroup,
  FaCheck
} from "react-icons/fa";

const API_URL = apiUrl("/api/services");

// Icon presets for quick selection
const ICON_PRESETS = [
  { label: "Loans", key: "loan", icon: <FaMoneyCheckAlt /> },
  { label: "Insurance", key: "insurance", icon: <FaShieldAlt /> },
  { label: "Mutual Funds", key: "mutual-funds", icon: <FaChartPie /> },
  { label: "Wealth", key: "wealth", icon: <FaCoins /> },
  { label: "Stocks", key: "stocks", icon: <FaChartLine /> },
  { label: "Portfolio", key: "portfolio", icon: <FaBriefcase /> },
  { label: "Corporate", key: "corporate", icon: <FaBuilding /> },
  { label: "Banking", key: "banking", icon: <FaUniversity /> },
  { label: "Land Links", key: "land-links", icon: <FaMapMarkedAlt /> },
  { label: "Consultation", key: "consultation", icon: <FaUserTie /> },
];

const renderIconHelper = (iconInput) => {
  if (!iconInput) return <FaBriefcase />;
  const key = String(iconInput).toLowerCase().trim();
  if (key.includes("loan") || key.includes("money") || key.includes("famoneycheckalt")) return <FaMoneyCheckAlt />;
  if (key.includes("shield") || key.includes("insurance") || key.includes("fashieldalt")) return <FaShieldAlt />;
  if (key.includes("mutual") || key.includes("pie") || key.includes("fachartpie")) return <FaChartPie />;
  if (key.includes("wealth") || key.includes("coin") || key.includes("facoins")) return <FaCoins />;
  if (key.includes("stock") || key.includes("equity") || key.includes("fachartline")) return <FaChartLine />;
  if (key.includes("port") || key.includes("brief") || key.includes("fabriefcase")) return <FaBriefcase />;
  if (key.includes("corp") || key.includes("build") || key.includes("fabuilding")) return <FaBuilding />;
  if (key.includes("bank") || key.includes("univ") || key.includes("fauniversity")) return <FaUniversity />;
  if (key.includes("land") || key.includes("map") || key.includes("famapmarkedalt")) return <FaMapMarkedAlt />;
  if (key.includes("consult") || key.includes("user") || key.includes("fausertie")) return <FaUserTie />;
  if (iconInput.length <= 4) return <span style={{ fontSize: "18px" }}>{iconInput}</span>;
  return <FaBriefcase />;
};

const ServiceManage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [notification, setNotification] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // 'grid' | 'table'
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    icon: "",
    description: "",
    features: [""],
    learnMoreLink: "",
  });

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 4500);
  };

  const getAuthHeaders = () => {
    const token = localStorage.getItem("adminToken");
    const headers = { "Content-Type": "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    return headers;
  };

  // ===============================
  // FETCH ALL SERVICES
  // ===============================
  const fetchServices = async () => {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();

      if (data.success && Array.isArray(data.services)) {
        setServices(data.services);
      } else {
        showNotification("error", data.message || "Failed to fetch services");
      }
    } catch (error) {
      console.error("Fetch Services Error:", error);
      showNotification("error", "Unable to connect to server. Check backend status.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filtered Services by Search
  const filteredServices = useMemo(() => {
    if (!searchQuery.trim()) return services;
    const q = searchQuery.toLowerCase().trim();
    return services.filter((s) => {
      const matchTitle = s.title?.toLowerCase().includes(q);
      const matchDesc = s.description?.toLowerCase().includes(q);
      const matchFeatures = s.features?.some((f) => f.toLowerCase().includes(q));
      return matchTitle || matchDesc || matchFeatures;
    });
  }, [services, searchQuery]);

  // Statistics
  const totalFeaturesCount = useMemo(() => {
    return services.reduce((acc, curr) => acc + (curr.features?.length || 0), 0);
  }, [services]);

  // ===============================
  // FORM HANDLERS
  // ===============================
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectPresetIcon = (key) => {
    setFormData((prev) => ({
      ...prev,
      icon: key,
    }));
  };

  const handleFeatureChange = (index, value) => {
    const updated = [...formData.features];
    updated[index] = value;
    setFormData((prev) => ({
      ...prev,
      features: updated,
    }));
  };

  const addFeature = () => {
    setFormData((prev) => ({
      ...prev,
      features: [...prev.features, ""],
    }));
  };

  const removeFeature = (index) => {
    if (formData.features.length === 1) return;
    const updated = formData.features.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      features: updated,
    }));
  };

  const resetForm = () => {
    setFormData({
      title: "",
      icon: "",
      description: "",
      features: [""],
      learnMoreLink: "",
    });
    setEditingId(null);
  };

  // ===============================
  // ADD / UPDATE SERVICE
  // ===============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      showNotification("error", "Service Title is required.");
      return;
    }

    if (!formData.description.trim()) {
      showNotification("error", "Service Description is required.");
      return;
    }

    const cleanedFeatures = formData.features
      .map((f) => f.trim())
      .filter((f) => f !== "");

    if (cleanedFeatures.length === 0) {
      showNotification("error", "Please add at least one feature item.");
      return;
    }

    const serviceData = {
      title: formData.title.trim(),
      icon: formData.icon.trim() || "FaBriefcase",
      description: formData.description.trim(),
      features: cleanedFeatures,
      learnMoreLink: formData.learnMoreLink.trim() || "#",
    };

    try {
      setLoading(true);

      let response;
      if (editingId) {
        response = await fetch(`${API_URL}/${editingId}`, {
          method: "PUT",
          headers: getAuthHeaders(),
          body: JSON.stringify(serviceData),
        });
      } else {
        response = await fetch(API_URL, {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify(serviceData),
        });
      }

      const data = await response.json();

      if (data.success) {
        const msg = editingId
          ? `Service "${serviceData.title}" updated successfully!`
          : `Service "${serviceData.title}" created successfully!`;
        showNotification("success", msg);

        resetForm();
        fetchServices();
      } else {
        showNotification("error", data.message || "Failed to save service");
      }
    } catch (error) {
      console.error("Save Error:", error);
      showNotification("error", "Failed to communicate with server");
    } finally {
      setLoading(false);
    }
  };

  // ===============================
  // EDIT SERVICE
  // ===============================
  const handleEdit = (service) => {
    setEditingId(service._id);
    setFormData({
      title: service.title || "",
      icon: service.icon || "",
      description: service.description || "",
      features:
        service.features && service.features.length > 0
          ? [...service.features]
          : [""],
      learnMoreLink: service.learnMoreLink || "",
    });

    const formElement = document.getElementById("service-form-card");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // ===============================
  // DELETE SERVICE
  // ===============================
  const confirmDelete = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
        headers: getAuthHeaders(),
      });

      const data = await response.json();

      if (data.success) {
        showNotification("success", "Service deleted successfully!");
        if (editingId === id) resetForm();
        setDeleteConfirmId(null);
        fetchServices();
      } else {
        showNotification("error", data.message || "Failed to delete service");
      }
    } catch (error) {
      console.error("Delete Error:", error);
      showNotification("error", "Error deleting service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-services-dashboard">
      <style>{`
        .admin-services-dashboard {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #17231E;
          max-width: 1300px;
          margin: 0 auto;
        }

        /* Top Header */
        .dash-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .header-title-block h1 {
          font-size: 28px;
          font-weight: 800;
          color: #073B2A;
          margin: 0 0 6px 0;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .header-badge {
          background: rgba(212, 175, 55, 0.15);
          color: #997819;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .header-subtitle {
          font-size: 14px;
          color: #5B6B63;
          margin: 0;
        }

        /* Stats Strip */
        .stats-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 30px;
        }

        .stat-card {
          background: #FFFFFF;
          border: 1px solid #DCE8E1;
          border-radius: 16px;
          padding: 22px 24px;
          display: flex;
          align-items: center;
          gap: 18px;
          box-shadow: 0 4px 16px rgba(7, 59, 42, 0.04);
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .stat-card::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: #0B6045;
          border-radius: 4px 0 0 4px;
        }

        .stat-card.gold::after {
          background: #D4AF37;
        }

        .stat-card.accent::after {
          background: #17231E;
        }

        .stat-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 24px rgba(7, 59, 42, 0.08);
          border-color: #D4AF37;
        }

        .stat-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          background: rgba(7, 59, 42, 0.08);
          color: #073B2A;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }

        .stat-card.gold .stat-icon {
          background: rgba(212, 175, 55, 0.15);
          color: #997819;
        }

        .stat-card.accent .stat-icon {
          background: rgba(23, 35, 30, 0.08);
          color: #17231E;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 800;
          color: #073B2A;
          line-height: 1.1;
          margin-bottom: 2px;
        }

        .stat-label {
          font-size: 13px;
          font-weight: 600;
          color: #5B6B63;
          margin: 0;
        }

        /* Toast Notification */
        .toast-banner {
          padding: 14px 20px;
          border-radius: 12px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
          animation: slideDown 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .toast-banner.success {
          background: linear-gradient(135deg, #E6F4EA, #D4EDDA);
          color: #137333;
          border: 1px solid #C3E6CB;
        }

        .toast-banner.error {
          background: linear-gradient(135deg, #FCE8E6, #F8D7DA);
          color: #C5221F;
          border: 1px solid #F5C6CB;
        }

        /* Form Card */
        .service-form-card {
          background: #FFFFFF;
          border-radius: 18px;
          border: 1px solid #DCE8E1;
          padding: 32px;
          margin-bottom: 35px;
          box-shadow: 0 6px 24px rgba(7, 59, 42, 0.04);
          transition: border-color 0.3s ease;
          position: relative;
        }

        .service-form-card.editing {
          border-color: #D4AF37;
          box-shadow: 0 10px 30px rgba(212, 175, 55, 0.15);
        }

        .form-header-bar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 26px;
          padding-bottom: 18px;
          border-bottom: 1px solid #EEF3F0;
        }

        .form-title-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .form-title {
          font-size: 20px;
          font-weight: 800;
          color: #073B2A;
          margin: 0;
        }

        .mode-pill {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.8px;
          padding: 4px 10px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .mode-pill.create {
          background: rgba(11, 96, 69, 0.1);
          color: #0B6045;
        }

        .mode-pill.edit {
          background: rgba(212, 175, 55, 0.2);
          color: #997819;
        }

        .cancel-edit-btn {
          background: #F5F8F6;
          color: #5B6B63;
          border: 1px solid #DCE8E1;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .cancel-edit-btn:hover {
          background: #E8EFEA;
          color: #17231E;
        }

        .form-grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }

        .form-group {
          margin-bottom: 22px;
        }

        .form-group.span-2 {
          grid-column: 1 / -1;
        }

        .field-label {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          font-weight: 700;
          color: #073B2A;
          margin-bottom: 8px;
        }

        .field-input,
        .field-textarea {
          width: 100%;
          padding: 12px 16px;
          border-radius: 10px;
          border: 1px solid #DCE8E1;
          background: #FAFCFB;
          font-size: 14px;
          color: #17231E;
          box-sizing: border-box;
          transition: all 0.2s ease;
          font-family: inherit;
        }

        .field-input:focus,
        .field-textarea:focus {
          outline: none;
          background: #FFFFFF;
          border-color: #0B6045;
          box-shadow: 0 0 0 3px rgba(11, 96, 69, 0.12);
        }

        /* Preset Icon Selector */
        .icon-selector-section {
          margin-top: 10px;
        }

        .preset-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 8px;
        }

        .preset-chip {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          border: 1px solid #DCE8E1;
          background: #FFFFFF;
          color: #5B6B63;
          font-size: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .preset-chip:hover {
          background: #F5F8F6;
          border-color: #0B6045;
          color: #073B2A;
        }

        .preset-chip.active {
          background: #073B2A;
          border-color: #073B2A;
          color: #D4AF37;
        }

        /* Dynamic Features Builder */
        .feature-rows-container {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .feature-input-row {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .feature-num-badge {
          width: 32px;
          height: 38px;
          border-radius: 8px;
          background: rgba(7, 59, 42, 0.06);
          color: #073B2A;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          font-weight: 700;
          flex-shrink: 0;
        }

        .feature-delete-btn {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: #FFF1F0;
          color: #D64545;
          border: 1px solid #FAD2CF;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 13px;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .feature-delete-btn:hover {
          background: #D64545;
          color: #FFFFFF;
        }

        .add-feature-pill-btn {
          background: rgba(11, 96, 69, 0.08);
          color: #0B6045;
          border: 1px dashed #0B6045;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
          align-self: flex-start;
          margin-top: 6px;
        }

        .add-feature-pill-btn:hover {
          background: #0B6045;
          color: #FFFFFF;
        }

        /* Form Actions */
        .form-cta-bar {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-top: 15px;
          padding-top: 20px;
          border-top: 1px solid #EEF3F0;
        }

        .btn-primary-action {
          background: linear-gradient(135deg, #073B2A 0%, #0B6045 100%);
          color: #FFFFFF;
          border: none;
          padding: 13px 28px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 14px rgba(7, 59, 42, 0.2);
          transition: all 0.25s ease;
        }

        .btn-primary-action:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(7, 59, 42, 0.25);
          background: linear-gradient(135deg, #052D20 0%, #073B2A 100%);
        }

        .btn-primary-action:disabled {
          opacity: 0.6;
          cursor: not-allowed;
          transform: none;
        }

        .btn-ghost-action {
          background: #F5F8F6;
          color: #5B6B63;
          border: 1px solid #DCE8E1;
          padding: 13px 24px;
          border-radius: 10px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .btn-ghost-action:hover {
          background: #E8EFEA;
          color: #17231E;
        }

        /* Services List Section */
        .services-display-card {
          background: #FFFFFF;
          border-radius: 18px;
          border: 1px solid #DCE8E1;
          padding: 30px;
          box-shadow: 0 6px 24px rgba(7, 59, 42, 0.04);
        }

        .list-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .toolbar-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .toolbar-left h2 {
          font-size: 20px;
          font-weight: 800;
          color: #073B2A;
          margin: 0;
        }

        .count-pill {
          background: rgba(7, 59, 42, 0.06);
          color: #073B2A;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
        }

        .toolbar-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .search-box {
          position: relative;
          min-width: 260px;
        }

        .search-box input {
          width: 100%;
          padding: 9px 14px 9px 36px;
          border-radius: 8px;
          border: 1px solid #DCE8E1;
          font-size: 13px;
          background: #FAFCFB;
          box-sizing: border-box;
          transition: all 0.2s ease;
        }

        .search-box input:focus {
          outline: none;
          background: #FFFFFF;
          border-color: #0B6045;
          box-shadow: 0 0 0 3px rgba(11, 96, 69, 0.1);
        }

        .search-icon-pos {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: #87958E;
          font-size: 13px;
        }

        .view-toggle-group {
          display: flex;
          border-radius: 8px;
          border: 1px solid #DCE8E1;
          overflow: hidden;
          background: #FAFCFB;
        }

        .view-btn {
          background: transparent;
          border: none;
          padding: 8px 12px;
          color: #87958E;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .view-btn.active {
          background: #073B2A;
          color: #FFFFFF;
        }

        /* GRID VIEW */
        .services-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 22px;
        }

        .admin-service-card {
          background: #FFFFFF;
          border: 1px solid #DCE8E1;
          border-radius: 14px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          box-shadow: 0 4px 14px rgba(7, 59, 42, 0.03);
          transition: all 0.3s ease;
        }

        .admin-service-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(7, 59, 42, 0.08);
          border-color: #D4AF37;
        }

        .card-header-flex {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 14px;
        }

        .card-icon-bubble {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(7, 59, 42, 0.08);
          color: #073B2A;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }

        .admin-service-card:hover .card-icon-bubble {
          background: #073B2A;
          color: #D4AF37;
        }

        .card-title-block h3 {
          font-size: 18px;
          font-weight: 800;
          color: #073B2A;
          margin: 0 0 4px 0;
        }

        .card-tag {
          font-size: 11px;
          color: #87958E;
          background: #F5F8F6;
          padding: 2px 8px;
          border-radius: 4px;
          display: inline-block;
        }

        .card-desc-text {
          font-size: 13px;
          color: #5B6B63;
          line-height: 1.55;
          margin: 0 0 16px 0;
        }

        .card-features-list {
          list-style: none;
          padding: 0;
          margin: 0 0 18px 0;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .card-feature-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          color: #17231E;
          font-weight: 500;
        }

        .card-feature-bullet {
          color: #D4AF37;
          font-size: 11px;
          flex-shrink: 0;
        }

        .card-link-preview {
          font-size: 12px;
          color: #0B6045;
          background: rgba(11, 96, 69, 0.05);
          padding: 6px 10px;
          border-radius: 6px;
          margin-bottom: 18px;
          display: flex;
          align-items: center;
          gap: 6px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .card-btn-strip {
          display: flex;
          gap: 10px;
          padding-top: 14px;
          border-top: 1px solid #EEF3F0;
        }

        .btn-card-edit {
          flex: 1;
          background: rgba(11, 96, 69, 0.08);
          color: #0B6045;
          border: none;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-card-edit:hover {
          background: #0B6045;
          color: #FFFFFF;
        }

        .btn-card-delete {
          flex: 1;
          background: #FFF1F0;
          color: #D64545;
          border: 1px solid #FAD2CF;
          padding: 9px 14px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          transition: all 0.2s ease;
        }

        .btn-card-delete:hover {
          background: #D64545;
          color: #FFFFFF;
        }

        /* TABLE VIEW */
        .table-wrapper {
          overflow-x: auto;
          border: 1px solid #DCE8E1;
          border-radius: 12px;
        }

        .admin-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 13px;
          text-align: left;
        }

        .admin-table th {
          background: #F5F8F6;
          color: #073B2A;
          font-weight: 700;
          padding: 14px 18px;
          border-bottom: 1px solid #DCE8E1;
        }

        .admin-table td {
          padding: 16px 18px;
          border-bottom: 1px solid #EEF3F0;
          vertical-align: middle;
        }

        .admin-table tr:hover td {
          background: #FAFCFB;
        }

        /* Delete Confirmation Dialog */
        .confirm-backdrop {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.45);
          backdrop-filter: blur(3px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          animation: fadeIn 0.2s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .confirm-modal {
          background: #FFFFFF;
          border-radius: 16px;
          padding: 28px;
          max-width: 420px;
          width: 90%;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          text-align: center;
        }

        .confirm-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #FFF1F0;
          color: #D64545;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 16px auto;
        }

        .confirm-modal h3 {
          font-size: 18px;
          font-weight: 800;
          color: #073B2A;
          margin: 0 0 8px 0;
        }

        .confirm-modal p {
          font-size: 13px;
          color: #5B6B63;
          margin: 0 0 22px 0;
          line-height: 1.5;
        }

        .confirm-btn-bar {
          display: flex;
          gap: 12px;
          justify-content: center;
        }

        .empty-placeholder {
          text-align: center;
          padding: 50px 20px;
          color: #5B6B63;
        }

        .empty-placeholder h3 {
          font-size: 18px;
          color: #073B2A;
          margin: 0 0 6px 0;
        }

        @media (max-width: 900px) {
          .stats-grid {
            grid-template-columns: 1fr;
          }
          .form-grid-2 {
            grid-template-columns: 1fr;
          }
          .services-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* HEADER SECTION */}
      <div className="dash-header">
        <div className="header-title-block">
          <h1>
            Manage Services <span className="header-badge">InvestNow Admin</span>
          </h1>
          <p className="header-subtitle">
            Configure dynamic services cards, icons, descriptions, and feature bullet points shown to clients.
          </p>
        </div>

        <button
          className="btn-primary-action"
          onClick={() => {
            resetForm();
            const el = document.getElementById("service-form-card");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <FaPlus /> Add New Service
        </button>
      </div>

      {/* NOTIFICATION TOAST */}
      {notification && (
        <div className={`toast-banner ${notification.type}`}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {notification.type === "success" ? <FaCheck /> : <FaTimes />}
            <span>{notification.message}</span>
          </div>
          <button
            onClick={() => setNotification(null)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: "16px" }}
          >
            ×
          </button>
        </div>
      )}

      {/* STATS STRIP */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <FaLayerGroup />
          </div>
          <div>
            <div className="stat-value">{services.length}</div>
            <p className="stat-label">Total Active Services</p>
          </div>
        </div>

        <div className="stat-card gold">
          <div className="stat-icon">
            <FaCheckCircle />
          </div>
          <div>
            <div className="stat-value">{totalFeaturesCount}</div>
            <p className="stat-label">Total Feature Bullets</p>
          </div>
        </div>

        <div className="stat-card accent">
          <div className="stat-icon">
            <FaBriefcase />
          </div>
          <div>
            <div className="stat-value">{filteredServices.length}</div>
            <p className="stat-label">Filtered / Visible</p>
          </div>
        </div>
      </div>

      {/* ADD / UPDATE SERVICE FORM */}
      <div
        id="service-form-card"
        className={`service-form-card ${editingId ? "editing" : ""}`}
      >
        <div className="form-header-bar">
          <div className="form-title-wrap">
            <h2 className="form-title">
              {editingId ? "Update Service Information" : "Create New Financial Service"}
            </h2>
            <span className={`mode-pill ${editingId ? "edit" : "create"}`}>
              {editingId ? "Editing Service" : "New Service"}
            </span>
          </div>

          {editingId && (
            <button type="button" className="cancel-edit-btn" onClick={resetForm}>
              Cancel Edit
            </button>
          )}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-grid-2">
            {/* Title */}
            <div className="form-group">
              <label className="field-label">
                <span>Service Title *</span>
                <small style={{ color: "#87958E", fontWeight: 400 }}>e.g. Home Loans</small>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Loans & Financing"
                className="field-input"
                required
              />
            </div>

            {/* Icon Key / Presets */}
            <div className="form-group">
              <label className="field-label">
                <span>Icon Preset / Name</span>
                <small style={{ color: "#87958E", fontWeight: 400 }}>Choose below or type custom</small>
              </label>
              <input
                type="text"
                name="icon"
                value={formData.icon}
                onChange={handleChange}
                placeholder="e.g. loan, shield, wealth, portfolio"
                className="field-input"
              />
              <div className="preset-grid">
                {ICON_PRESETS.map((preset) => (
                  <button
                    key={preset.key}
                    type="button"
                    className={`preset-chip ${formData.icon === preset.key ? "active" : ""}`}
                    onClick={() => handleSelectPresetIcon(preset.key)}
                  >
                    {preset.icon}
                    <span>{preset.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div className="form-group span-2">
              <label className="field-label">
                <span>Description *</span>
                <small style={{ color: "#87958E", fontWeight: 400 }}>Clear, client-facing summary</small>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Structured guidance and loan assistance for personal, business, and residential property needs..."
                rows="3"
                className="field-textarea"
                required
              />
            </div>

            {/* Features Builder */}
            <div className="form-group span-2">
              <div className="field-label">
                <span>Key Features / Bullet Points *</span>
                <button
                  type="button"
                  className="add-feature-pill-btn"
                  onClick={addFeature}
                >
                  <FaPlus style={{ fontSize: "11px" }} /> Add Bullet Point
                </button>
              </div>

              <div className="feature-rows-container">
                {formData.features.map((feature, idx) => (
                  <div className="feature-input-row" key={idx}>
                    <div className="feature-num-badge">{idx + 1}</div>
                    <input
                      type="text"
                      value={feature}
                      onChange={(e) => handleFeatureChange(idx, e.target.value)}
                      placeholder={`Feature bullet ${idx + 1} (e.g. Personal Loans)`}
                      className="field-input"
                    />
                    {formData.features.length > 1 && (
                      <button
                        type="button"
                        className="feature-delete-btn"
                        onClick={() => removeFeature(idx)}
                        title="Remove feature"
                      >
                        <FaTrash />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Learn More Link */}
            <div className="form-group span-2">
              <label className="field-label">
                <span>Learn More Destination Link</span>
                <small style={{ color: "#87958E", fontWeight: 400 }}>URL or internal path (e.g. /contact)</small>
              </label>
              <input
                type="text"
                name="learnMoreLink"
                value={formData.learnMoreLink}
                onChange={handleChange}
                placeholder="/contact or https://yourlink.com"
                className="field-input"
              />
            </div>
          </div>

          <div className="form-cta-bar">
            <button
              type="submit"
              className="btn-primary-action"
              disabled={loading}
            >
              {loading ? (
                "Processing..."
              ) : editingId ? (
                <>
                  <FaCheck /> Update Service
                </>
              ) : (
                <>
                  <FaPlus /> Save & Publish Service
                </>
              )}
            </button>

            {editingId && (
              <button
                type="button"
                className="btn-ghost-action"
                onClick={resetForm}
              >
                Clear Form
              </button>
            )}
          </div>
        </form>
      </div>

      {/* EXISTING SERVICES LIST SECTION */}
      <div className="services-display-card">
        <div className="list-toolbar">
          <div className="toolbar-left">
            <h2>Website Services</h2>
            <span className="count-pill">
              {filteredServices.length} {filteredServices.length === 1 ? "Service" : "Services"}
            </span>
          </div>

          <div className="toolbar-right">
            <div className="search-box">
              <FaSearch className="search-icon-pos" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="view-toggle-group">
              <button
                type="button"
                className={`view-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
              >
                <FaThLarge />
              </button>
              <button
                type="button"
                className={`view-btn ${viewMode === "table" ? "active" : ""}`}
                onClick={() => setViewMode("table")}
                title="Table View"
              >
                <FaList />
              </button>
            </div>
          </div>
        </div>

        {loading && services.length === 0 ? (
          <div className="empty-placeholder">
            <h3>Loading services from database...</h3>
          </div>
        ) : filteredServices.length === 0 ? (
          <div className="empty-placeholder">
            <h3>No services matched your query</h3>
            <p>Try searching with another keyword or add a new service above.</p>
          </div>
        ) : viewMode === "grid" ? (
          /* GRID VIEW */
          <div className="services-cards-grid">
            {filteredServices.map((service) => (
              <div className="admin-service-card" key={service._id}>
                <div>
                  <div className="card-header-flex">
                    <div className="card-icon-bubble">
                      {renderIconHelper(service.icon)}
                    </div>
                    <div className="card-title-block">
                      <h3>{service.title}</h3>
                      <span className="card-tag">Key: {service.icon || "default"}</span>
                    </div>
                  </div>

                  <p className="card-desc-text">{service.description}</p>

                  <ul className="card-features-list">
                    {service.features?.map((f, i) => (
                      <li key={i} className="card-feature-item">
                        <FaCheckCircle className="card-feature-bullet" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {service.learnMoreLink && (
                    <div className="card-link-preview">
                      <FaExternalLinkAlt style={{ fontSize: "10px" }} />
                      <span>{service.learnMoreLink}</span>
                    </div>
                  )}
                </div>

                <div className="card-btn-strip">
                  <button
                    type="button"
                    className="btn-card-edit"
                    onClick={() => handleEdit(service)}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    type="button"
                    className="btn-card-delete"
                    onClick={() => setDeleteConfirmId(service._id)}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* TABLE VIEW */
          <div className="table-wrapper">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Icon</th>
                  <th>Service Title</th>
                  <th>Description</th>
                  <th>Features</th>
                  <th>Link</th>
                  <th style={{ textAlign: "right" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service._id}>
                    <td>
                      <div className="card-icon-bubble" style={{ width: "36px", height: "36px", fontSize: "16px" }}>
                        {renderIconHelper(service.icon)}
                      </div>
                    </td>
                    <td style={{ fontWeight: 700, color: "#073B2A" }}>
                      {service.title}
                    </td>
                    <td style={{ maxWidth: "280px", color: "#5B6B63" }}>
                      {service.description.length > 80
                        ? `${service.description.substring(0, 80)}...`
                        : service.description}
                    </td>
                    <td>
                      <span className="count-pill">
                        {service.features?.length || 0} bullets
                      </span>
                    </td>
                    <td style={{ color: "#0B6045", fontSize: "12px" }}>
                      {service.learnMoreLink || "-"}
                    </td>
                    <td style={{ textAlign: "right" }}>
                      <div style={{ display: "inline-flex", gap: "8px" }}>
                        <button
                          type="button"
                          className="btn-card-edit"
                          style={{ padding: "6px 12px" }}
                          onClick={() => handleEdit(service)}
                        >
                          <FaEdit />
                        </button>
                        <button
                          type="button"
                          className="btn-card-delete"
                          style={{ padding: "6px 12px" }}
                          onClick={() => setDeleteConfirmId(service._id)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* DELETE CONFIRMATION MODAL */}
      {deleteConfirmId && (
        <div className="confirm-backdrop" onClick={() => setDeleteConfirmId(null)}>
          <div className="confirm-modal" onClick={(e) => e.stopPropagation()}>
            <div className="confirm-icon-wrap">
              <FaTrash />
            </div>
            <h3>Delete This Service?</h3>
            <p>
              This action cannot be undone. The service will be immediately removed from both the admin dashboard and public website.
            </p>
            <div className="confirm-btn-bar">
              <button
                type="button"
                className="btn-ghost-action"
                onClick={() => setDeleteConfirmId(null)}
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn-card-delete"
                style={{ background: "#D64545", color: "#FFFFFF", padding: "10px 20px" }}
                onClick={() => confirmDelete(deleteConfirmId)}
              >
                Yes, Delete Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServiceManage;
```

===============================================================================
FILE: src/pages/Services.jsx
===============================================================================

```jsx
import React, { useState, useEffect, useRef } from "react";
import { apiUrl } from "../api";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import {
  FaMoneyCheckAlt,
  FaShieldAlt,
  FaChartPie,
  FaCoins,
  FaChartLine,
  FaBriefcase,
  FaBuilding,
  FaUniversity,
  FaMapMarkedAlt,
  FaUserTie,
  FaCheckCircle,
  FaArrowRight,
  FaExclamationTriangle,
  FaSync,
} from "react-icons/fa";

const API_URL = apiUrl("/api/services");

const renderServiceIcon = (iconInput) => {
  if (!iconInput) return <FaBriefcase />;
  if (typeof iconInput !== "string") return iconInput;

  const key = iconInput.toLowerCase().trim();
  if (key.includes("loan") || key.includes("money") || key.includes("famoneycheckalt")) return <FaMoneyCheckAlt />;
  if (key.includes("shield") || key.includes("insurance") || key.includes("fashieldalt")) return <FaShieldAlt />;
  if (key.includes("mutual") || key.includes("pie") || key.includes("fachartpie")) return <FaChartPie />;
  if (key.includes("wealth") || key.includes("coin") || key.includes("facoins")) return <FaCoins />;
  if (key.includes("stock") || key.includes("equity") || key.includes("fachartline")) return <FaChartLine />;
  if (key.includes("port") || key.includes("brief") || key.includes("fabriefcase")) return <FaBriefcase />;
  if (key.includes("corp") || key.includes("build") || key.includes("fabuilding")) return <FaBuilding />;
  if (key.includes("bank") || key.includes("univ") || key.includes("fauniversity")) return <FaUniversity />;
  if (key.includes("land") || key.includes("map") || key.includes("famapmarkedalt")) return <FaMapMarkedAlt />;
  if (key.includes("consult") || key.includes("user") || key.includes("fausertie")) return <FaUserTie />;

  if (iconInput.length <= 4) {
    return <span style={{ fontSize: "24px" }}>{iconInput}</span>;
  }

  return <FaBriefcase />;
};

const Spot = ({ className = "", children, ...rest }) => {
  const ref = useRef(null);
  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} className={`spot ${className}`} {...rest}>
      {children}
    </div>
  );
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchServices = async () => {
    try {
      setLoading(true);
      setError(false);
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(`Server status ${res.status}`);
      const data = await res.json();
      if (data.success && Array.isArray(data.services)) {
        setServices(data.services);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error("Failed to fetch services:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="sv-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .sv-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#0A1310;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .sv-page h2,.sv-page h3,.sv-page h4 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .sv-page .wrap { max-width:1200px; margin:0 auto; }
        .sv-page section.sec { padding:104px 5%; position:relative; }

        .head { max-width:660px; margin-bottom:56px; }
        .head h2 { font-size:clamp(30px,4vw,44px); font-weight:600; line-height:1.15; letter-spacing:-.015em; margin-bottom:14px; color:var(--primary); }
        .head p { font-size:16.5px; line-height:1.7; margin:0; color:var(--muted); max-width:56ch; }
        .dark .head h2 { color:#FDFBF5; }
        .dark .head p { color:rgba(253,251,245,.8); }

        /* Dark Bento Grid for Offerings */
        .dark-sec { background:#0A1310; color:#FDFBF5; isolation:isolate; }
        .dark-sec::before { content:''; position:absolute; inset:0; z-index:-1; background:radial-gradient(600px 400px at 90% 0%,rgba(11,96,69,.45),transparent 70%),radial-gradient(500px 400px at 0% 100%,rgba(212,175,55,.15),transparent 70%); }
        .dgrid-bg { position:absolute; inset:0; z-index:-1; width:100%; height:100%; opacity:.4; }

        .services-bento { display:grid; grid-template-columns:repeat(2,1fr); gap:22px; }
        .spot {
          --mx:50%; --my:50%; position:relative; overflow:hidden; border-radius:24px; padding:36px;
          background:linear-gradient(165deg, rgba(16, 42, 33, 0.8), rgba(8, 24, 18, 0.95));
          border:1px solid rgba(212, 175, 55, 0.22);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          display:flex; flex-direction:column; justify-content:space-between;
          transition:all .3s ease;
        }
        .spot::before {
          content:''; position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .3s;
          background:radial-gradient(360px circle at var(--mx) var(--my),rgba(212,175,55,.25),transparent 60%);
        }
        .spot:hover { border-color:#D4AF37; transform:translateY(-4px); box-shadow:0 16px 36px rgba(212, 175, 55, 0.2); }
        .spot:hover::before { opacity:1; }
        .spot > * { position:relative; }

        .card-top { display:flex; align-items:center; gap:18px; margin-bottom:18px; }
        .s-icon {
          width:52px; height:52px; border-radius:16px; display:grid; place-items:center; font-size:22px;
          color:var(--accent); background:rgba(212,175,55,.12); border:1px solid rgba(212,175,55,.3); flex-shrink:0;
        }
        .s-title { font-size:24px; font-weight:600; color:#FDFBF5; margin:0; }
        .s-desc { font-size:15px; line-height:1.65; color:rgba(253,251,245,.8); margin:0 0 22px; max-width:52ch; }

        .feature-bullets { list-style:none; padding:0; margin:0 0 28px 0; display:flex; flex-direction:column; gap:12px; }
        .feature-item { display:flex; align-items:center; gap:12px; font-size:14.5px; color:rgba(253,251,245,.9); font-weight:500; }
        .bullet-icon { color:var(--accent); font-size:15px; flex-shrink:0; }

        .card-cta-btn {
          display:inline-flex; align-items:center; gap:8px; color:var(--accent); font-weight:600; font-size:14.5px;
          text-decoration:none; transition:gap .25s, color .25s;
        }
        .card-cta-btn:hover { gap:13px; color:#fff; }

        /* States */
        .state { max-width:560px; margin:90px auto; text-align:center; padding:52px 32px; background:#fff; border-radius:28px; border:1px solid rgba(7,59,42,.1); }
        .state h3 { font-size:26px; color:var(--primary); margin:18px 0 10px; }
        .state p { color:var(--muted); line-height:1.65; margin:0 0 24px; font-size:15px; }
        .state .warn { font-size:38px; color:var(--accent); }
        .retry { display:inline-flex; align-items:center; gap:10px; border:none; cursor:pointer; background:var(--accent); color:var(--deep); font:600 14px 'Inter',sans-serif; padding:13px 24px; border-radius:999px; transition:transform .25s, box-shadow .25s; }
        .retry:hover { transform:translateY(-2px); box-shadow:0 10px 26px rgba(212,175,55,.35); }
        .loader { width:56px; height:56px; animation:spin 1.1s linear infinite; margin:0 auto; }
        @keyframes spin { to { transform:rotate(360deg); } }

        @media (max-width:900px) {
          .services-bento { grid-template-columns:1fr; }
          .spot { padding:28px; }
        }
        @media (max-width:600px) {
          .sv-page section.sec { padding:70px 6%; }
        }
      `}</style>

      <PageHero
        title="Financial Solutions Built Around Your Goals"
        subtitle="From everyday financial requirements to long-term wealth planning, explore our range of services."
        badge="SERVICES OVERVIEW"
        breadcrumbs={[{ label: "Services" }]}
      />

      <section className="sec dark-sec">
        <svg className="dgrid-bg" aria-hidden="true">
          <defs>
            <pattern id="svGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="rgba(255,255,255,.05)" />
            </pattern>
            <radialGradient id="svFade" cx="50%" cy="30%" r="70%">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </radialGradient>
            <mask id="svMask">
              <rect width="100%" height="100%" fill="url(#svFade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#svGrid)" mask="url(#svMask)" />
        </svg>

        <div className="wrap dark">
          <div className="head">
            <h2>Comprehensive Financial Services</h2>
            <p>We offer structured assistance across multiple financial verticals to help you plan with clarity and security.</p>
          </div>

          {loading ? (
            <div className="state" role="status">
              <svg className="loader" viewBox="0 0 56 56" aria-hidden="true">
                <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(212,175,55,.2)" strokeWidth="5" />
                <path d="M28 6a22 22 0 0 1 22 22" fill="none" stroke="#D4AF37" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <h3>Loading services...</h3>
            </div>
          ) : error ? (
            <div className="state" role="alert">
              <FaExclamationTriangle className="warn" />
              <h3>Unable to load resources</h3>
              <p>We couldn't reach the server to fetch our services list. Please check your network or try again.</p>
              <button className="retry" onClick={fetchServices}><FaSync /> Try again</button>
            </div>
          ) : services.length === 0 ? (
            <div className="state">
              <h3>No services available</h3>
              <p>No financial services found at the moment.</p>
            </div>
          ) : (
            <div className="services-bento">
              {services.map((s, index) => (
                <Spot key={s._id || index} id={s.id || `service-${s._id}`}>
                  <div>
                    <div className="card-top">
                      <div className="s-icon">{renderServiceIcon(s.icon)}</div>
                      <h3 className="s-title">{s.title}</h3>
                    </div>
                    <p className="s-desc">{s.description || s.shortDesc}</p>
                    {s.features && s.features.length > 0 && (
                      <ul className="feature-bullets">
                        {s.features.map((f, fi) => (
                          <li key={fi} className="feature-item">
                            <FaCheckCircle className="bullet-icon" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div>
                    {s.learnMoreLink && s.learnMoreLink.startsWith("http") ? (
                      <a href={s.learnMoreLink} target="_blank" rel="noopener noreferrer" className="card-cta-btn">
                        Learn More <FaArrowRight />
                      </a>
                    ) : s.learnMoreLink && s.learnMoreLink.startsWith("/") ? (
                      <Link to={s.learnMoreLink} className="card-cta-btn">
                        Learn More <FaArrowRight />
                      </Link>
                    ) : (
                      <Link to="/contact" className="card-cta-btn">
                        Learn More <FaArrowRight />
                      </Link>
                    )}
                  </div>
                </Spot>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Need Help Choosing the Right Financial Service?"
        subtitle="Our team is ready to answer your queries and guide you toward suitable solutions."
        primaryBtnText="Talk to Us"
        primaryBtnLink="/contact"
        secondaryBtnText="View Financial Goals"
        secondaryBtnLink="/financial-goals"
      />
    </div>
  );
};

export default Services;
```

===============================================================================
FILE: src/pages/TermsConditions.jsx
===============================================================================

```jsx
import React from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const TermsConditions = () => {
  return (
    <div className="lg-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .lg-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#04241A;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .lg-page h2,.lg-page h3 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .lg-page .wrap { max-width:920px; margin:0 auto; }
        .lg-page section.sec { padding:90px 5%; position:relative; }

        .legal-content-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:28px; padding:54px;
          box-shadow:0 18px 40px rgba(7,59,42,.05); position:relative; overflow:hidden;
        }
        .legal-content-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:var(--accent); }

        .last-updated {
          font-family:'Fraunces',serif; font-style:italic; font-size:13px; color:var(--accent); font-weight:600;
          letter-spacing:.05em; margin-bottom:28px; display:block; text-transform:uppercase;
        }

        .legal-h2 { font-size:24px; font-weight:600; color:var(--primary); margin:36px 0 14px 0; }
        .legal-p { font-size:15.5px; color:var(--muted); line-height:1.75; margin-bottom:18px; max-width:68ch; }
        .legal-p strong { color:var(--text); }

        @media (max-width:600px) {
          .lg-page section.sec { padding:64px 6%; }
          .legal-content-card { padding:32px 22px; }
        }
      `}</style>

      <PageHero
        title="Terms & Conditions"
        subtitle="Standard terms governing website usage, consultations, and corporate interactions."
        badge="TERMS OF SERVICE"
        breadcrumbs={[
          { label: "Trust & Compliance", path: "/trust-compliance" },
          { label: "Terms & Conditions" },
        ]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="legal-content-card">
            <span className="last-updated">LAST UPDATED: SEPTEMBER 2026</span>

            <p className="legal-p">
              Welcome to the website of INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED. By browsing or utilizing information on this website, you agree to comply with and be bound by the following terms of use.
            </p>

            <h2 className="legal-h2">1. Use of Website Content</h2>
            <p className="legal-p">
              All text, graphic layouts, logo designs, and content on this site are property of INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED. Content is provided for general informational and educational purposes only.
            </p>

            <h2 className="legal-h2">2. No Investment Guarantee or Binding Offer</h2>
            <p className="legal-p">
              Information on this website does not constitute a legally binding offer or guarantee of financial returns. Final financial transactions, policy issuances, or loan approvals depend on formal agreement execution with respective product issuers or financial institutions.
            </p>

            <h2 className="legal-h2">3. Limitation of Liability</h2>
            <p className="legal-p">
              INVESTNOW shall not be liable for any direct, indirect, or consequential losses arising from the reliance on website information or market fluctuations affecting third-party financial products.
            </p>

            <h2 className="legal-h2">4. Jurisdiction</h2>
            <p className="legal-p">
              These terms are governed by the laws of India, and disputes shall be subject to the exclusive jurisdiction of applicable courts in Karnataka.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Need Further Clarification on Terms?"
        primaryBtnText="Contact Us"
        primaryBtnLink="/contact"
      />
    </div>
  );
};

export default TermsConditions;
```

===============================================================================
FILE: src/pages/TransparencyDisclosures.jsx
===============================================================================

```jsx
import React from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";

const TransparencyDisclosures = () => {
  return (
    <div className="lg-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .lg-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#04241A;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .lg-page h2,.lg-page h3 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .lg-page .wrap { max-width:920px; margin:0 auto; }
        .lg-page section.sec { padding:90px 5%; position:relative; }

        .legal-content-card {
          background:#fff; border:1px solid rgba(7,59,42,.12); border-radius:28px; padding:54px;
          box-shadow:0 18px 40px rgba(7,59,42,.05); position:relative; overflow:hidden;
        }
        .legal-content-card::before { content:''; position:absolute; top:0; left:0; right:0; height:4px; background:var(--accent); }

        .last-updated {
          font-family:'Fraunces',serif; font-style:italic; font-size:13px; color:var(--accent); font-weight:600;
          letter-spacing:.05em; margin-bottom:28px; display:block; text-transform:uppercase;
        }

        .legal-h2 { font-size:24px; font-weight:600; color:var(--primary); margin:36px 0 14px 0; }
        .legal-p { font-size:15.5px; color:var(--muted); line-height:1.75; margin-bottom:18px; max-width:68ch; }
        .legal-p strong { color:var(--text); }

        @media (max-width:600px) {
          .lg-page section.sec { padding:64px 6%; }
          .legal-content-card { padding:32px 22px; }
        }
      `}</style>

      <PageHero
        title="Transparency & Disclosures"
        subtitle="Our commitment to open communication, fair practices, and clear client relationship standards."
        badge="TRANSPARENCY POLICY"
        breadcrumbs={[
          { label: "Trust & Compliance", path: "/trust-compliance" },
          { label: "Transparency" },
        ]}
      />

      <section className="sec">
        <div className="wrap">
          <div className="legal-content-card">
            <span className="last-updated">LAST UPDATED: SEPTEMBER 2026</span>

            <p className="legal-p">
              At INVESTNOW FINANCIAL SERVICES PRIVATE LIMITED, transparency is one of our fundamental core values. We strive to provide clear, accessible, and accurate information regarding all service offerings.
            </p>

            <h2 className="legal-h2">1. Intermediary Disclosure</h2>
            <p className="legal-p">
              INVESTNOW operates as an independent financial consultancy firm. We coordinate between clients and authorized financial institutions, fund houses, banks, and insurance providers. As an intermediary, commission or brokerage arrangements may apply in accordance with industry standards.
            </p>

            <h2 className="legal-h2">2. Clear Communication</h2>
            <p className="legal-p">
              We ensure that clients receive complete details regarding product features, lock-in periods, surrender charges, potential market risks, and loan processing fees prior to finalizing decisions.
            </p>

            <h2 className="legal-h2">3. Conflict of Interest Policy</h2>
            <p className="legal-p">
              Our consultants prioritize client goals and objective suitability when recommending financial options. We do not promote products that contradict a client's stated risk profile or monetary capacity.
            </p>

            <h2 className="legal-h2">4. Client Verification & Feedback</h2>
            <p className="legal-p">
              Clients are encouraged to verify all policy documentation, bond certificates, and loan agreements directly with the respective issuing institutions.
            </p>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to Learn More About Our Standards?"
        primaryBtnText="Contact Support"
        primaryBtnLink="/contact"
      />
    </div>
  );
};

export default TransparencyDisclosures;
```

===============================================================================
FILE: src/pages/TrustCompliance.jsx
===============================================================================

```jsx
import React, { useRef } from "react";
import PageHero from "../components/PageHero";
import CTASection from "../components/CTASection";
import { Link } from "react-router-dom";
import {
  FaShieldAlt,
  FaExclamationTriangle,
  FaEye,
  FaUserShield,
  FaFileContract,
  FaArrowRight,
} from "react-icons/fa";

const Spot = ({ className = "", children, ...rest }) => {
  const ref = useRef(null);
  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    ref.current.style.setProperty("--mx", `${e.clientX - r.left}px`);
    ref.current.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return (
    <div ref={ref} onMouseMove={move} className={`spot ${className}`} {...rest}>
      {children}
    </div>
  );
};

const TrustCompliance = () => {
  const complianceSections = [
    {
      title: "Regulatory Information",
      path: "/regulatory-information",
      icon: <FaShieldAlt />,
      desc: "Information regarding applicable regulatory guidelines, corporate details, and service-specific compliance policies.",
    },
    {
      title: "Risk Disclosures",
      path: "/risk-disclosures",
      icon: <FaExclamationTriangle />,
      desc: "Important notices regarding financial market risks, product issuer terms, and non-guarantee of returns.",
    },
    {
      title: "Transparency & Disclosures",
      path: "/transparency",
      icon: <FaEye />,
      desc: "Our commitment to open communication, clear fee structures, and transparent customer service.",
    },
    {
      title: "Privacy Policy",
      path: "/privacy-policy",
      icon: <FaUserShield />,
      desc: "How we collect, protect, and handle client information in accordance with applicable data privacy guidelines.",
    },
    {
      title: "Terms & Conditions",
      path: "/terms-and-conditions",
      icon: <FaFileContract />,
      desc: "The standard terms governing website access, service consultations, and client interactions.",
    },
  ];

  return (
    <div className="tc-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600&display=swap');

        .tc-page {
          --primary:#073B2A; --secondary:#0B6045; --accent:#D4AF37; --bg:#F5F8F6;
          --ivory:#FBF8F1; --text:#17231E; --muted:#5B6B63; --deep:#0A1310;
          background:var(--bg); color:var(--text); overflow-x:hidden;
          font-family:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
        }
        .tc-page h2,.tc-page h3,.tc-page h4 { font-family:'Fraunces',Georgia,serif; margin:0; }
        .tc-page .wrap { max-width:1200px; margin:0 auto; }
        .tc-page section.sec { padding:104px 5%; position:relative; }

        .head { max-width:660px; margin-bottom:56px; }
        .head h2 { font-size:clamp(30px,4vw,44px); font-weight:600; line-height:1.15; letter-spacing:-.015em; margin-bottom:14px; color:var(--primary); }
        .head p { font-size:16.5px; line-height:1.7; margin:0; color:var(--muted); max-width:56ch; }

        /* Dark Bento Grid for Disclosures */
        .dark-sec { background:#0A1310; color:#FDFBF5; isolation:isolate; }
        .dark-sec::before { content:''; position:absolute; inset:0; z-index:-1; background:radial-gradient(600px 400px at 90% 0%,rgba(11,96,69,.45),transparent 70%),radial-gradient(500px 400px at 0% 100%,rgba(212,175,55,.15),transparent 70%); }
        .dgrid-bg { position:absolute; inset:0; z-index:-1; width:100%; height:100%; opacity:.4; }

        .compliance-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; margin-bottom:60px; }
        .spot {
          --mx:50%; --my:50%; position:relative; overflow:hidden; border-radius:24px; padding:34px;
          background:linear-gradient(165deg, rgba(16, 42, 33, 0.8), rgba(8, 24, 18, 0.95));
          border:1px solid rgba(212, 175, 55, 0.22);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
          display:flex; flex-direction:column; justify-content:space-between;
          transition:all .3s ease;
        }
        .spot::before {
          content:''; position:absolute; inset:0; pointer-events:none; opacity:0; transition:opacity .3s;
          background:radial-gradient(360px circle at var(--mx) var(--my),rgba(212,175,55,.25),transparent 60%);
        }
        .spot:hover { border-color:#D4AF37; transform:translateY(-4px); box-shadow:0 16px 36px rgba(212, 175, 55, 0.2); }
        .spot:hover::before { opacity:1; }
        .spot > * { position:relative; }

        .compliance-icon {
          width:50px; height:50px; border-radius:16px; display:grid; place-items:center; font-size:22px;
          color:var(--accent); background:rgba(212,175,55,.12); border:1px solid rgba(212,175,55,.3); margin-bottom:20px;
        }
        .compliance-card-title { font-size:22px; font-weight:600; color:#FDFBF5; margin:0 0 10px; }
        .compliance-card-desc { font-size:14.5px; line-height:1.65; color:rgba(253,251,245,.68); margin:0 0 25px; }

        .read-more-link {
          color:var(--accent); font-weight:600; font-size:14px; text-decoration:none;
          display:inline-flex; align-items:center; gap:8px; transition:gap .25s, color .25s;
        }
        .read-more-link:hover { gap:13px; color:#fff; }

        .disclosure-box {
          background:var(--ivory); padding:44px; border-radius:28px; border:1px solid rgba(7,59,42,.12);
          border-left:4px solid var(--accent); color:var(--text);
        }
        .disclosure-box-title { font-size:24px; font-weight:600; color:var(--primary); margin-bottom:16px; }
        .disclosure-list { list-style:disc; padding-left:22px; margin:0; color:var(--muted); font-size:15px; line-height:1.8; }

        @media (max-width:1024px) {
          .compliance-grid { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:600px) {
          .tc-page section.sec { padding:70px 6%; }
          .compliance-grid { grid-template-columns:1fr; }
          .disclosure-box { padding:30px 20px; }
        }
      `}</style>

      {/* Hero Header */}
      <PageHero
        title="Trust, Transparency & Responsible Information"
        subtitle="Explore our regulatory disclosures, risk notices, privacy commitments, and corporate governance standards."
        badge="GOVERNANCE & TRUST"
        breadcrumbs={[{ label: "Trust & Compliance" }]}
      />

      <section className="sec dark-sec">
        <svg className="dgrid-bg" aria-hidden="true">
          <defs>
            <pattern id="tcGrid" width="56" height="56" patternUnits="userSpaceOnUse">
              <path d="M56 0H0V56" fill="none" stroke="rgba(255,255,255,.05)" />
            </pattern>
            <radialGradient id="tcFade" cx="50%" cy="30%" r="70%">
              <stop offset="0" stopColor="#fff" />
              <stop offset="1" stopColor="#000" />
            </radialGradient>
            <mask id="tcMask">
              <rect width="100%" height="100%" fill="url(#tcFade)" />
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#tcGrid)" mask="url(#tcMask)" />
        </svg>

        <div className="wrap">
          <div className="head" style={{ color: "#FDFBF5" }}>
            <h2 style={{ color: "#FDFBF5" }}>Corporate Disclosures & Policies</h2>
            <p style={{ color: "rgba(253,251,245,.7)" }}>
              We operate with high standards of corporate transparency and responsible client communication.
            </p>
          </div>

          <div className="compliance-grid">
            {complianceSections.map((c, i) => (
              <Spot key={i}>
                <div>
                  <div className="compliance-icon">{c.icon}</div>
                  <h3 className="compliance-card-title">{c.title}</h3>
                  <p className="compliance-card-desc">{c.desc}</p>
                </div>
                <div>
                  <Link to={c.path} className="read-more-link">
                    Read Policy Document <FaArrowRight size={12} />
                  </Link>
                </div>
              </Spot>
            ))}
          </div>
        </div>
      </section>

      <section className="sec" style={{ background: "var(--bg)" }}>
        <div className="wrap">
          {/* Key Risk Summary Box */}
          <div className="disclosure-box">
            <h3 className="disclosure-box-title">Essential Risk & Regulatory Notice</h3>
            <ul className="disclosure-list">
              <li>Financial products (such as mutual funds, equities, and insurance plans) carry underlying product and market risks.</li>
              <li>Past financial performance does not serve as a guarantee of future returns.</li>
              <li>Please contact INVESTNOW for applicable regulatory and service-specific information regarding individual product issuers.</li>
              <li>Clients should carefully evaluate their individual risk capacity and read official offer documents prior to executing financial decisions.</li>
            </ul>
          </div>
        </div>
      </section>

      <CTASection
        title="Have Questions Regarding Compliance or Policies?"
        primaryBtnText="Contact Support"
        primaryBtnLink="/contact"
        secondaryBtnText="Back to Home"
        secondaryBtnLink="/"
      />
    </div>
  );
};

export default TrustCompliance;
```

===============================================================================
FILE: src/reportWebVitals.js
===============================================================================

```js
const reportWebVitals = onPerfEntry => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
```

===============================================================================
FILE: src/setupTests.js
===============================================================================

```js
// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
```

===============================================================================
FILE: tailwind.config.js
===============================================================================

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Guestlayout/HeroSection.jsx"],
  // Scope Tailwind to the hero only, so it can't touch your Bootstrap pages
  important: ".swiss-hero",
  corePlugins: { preflight: false },
  theme: { extend: {} },
  plugins: [],
};
```

-------------------------------------------------------------------------------

Generated by ctx

Total Files: 51
