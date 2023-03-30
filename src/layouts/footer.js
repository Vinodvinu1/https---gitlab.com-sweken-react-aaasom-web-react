import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "reactstrap";

const Footer = () => {
  return (
    <Navbar color="dark" xs={12} dark expand="md">
      <div>
        <p className="text-gray-200">Copyright © AAASOM 2023</p>
      </div>
    </Navbar>
  );
};

export default Footer;
