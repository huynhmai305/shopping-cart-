import styles from "../../styles/Home.module.css";
import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Navbar";

const Layout = ({ children }) => {
  useEffect(() => {});

  return (
    <div className={styles.container}>
      <Header />
      <header>
        <Sidebar />
      </header>
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
