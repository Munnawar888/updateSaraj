import React from "react";
import { AiFillHome } from "react-icons/ai";
import { FaCartPlus, FaUserTie } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { GiTalk } from "react-icons/gi";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Product",
    path: "/products",
    icon: <FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    icon: <FcAbout />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact",
    icon: <GiTalk />,
    cName: "nav-text",
  },
  {
    title: "Become a Seller",
    path: "/",
    icon: <FaUserTie />,
    cName: "nav-text",
  },
];
