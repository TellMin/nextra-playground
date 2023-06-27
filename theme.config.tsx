import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>TellMin</span>,
  project: {
    link: "https://github.com/TellMin/nextra-playground",
  },
  footer: {
    component: () => null,
  },
  editLink: {
    component: () => null,
  },
};

export default config;
