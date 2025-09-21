"use client";

import { useContext, useState } from "react";
import { AppContext } from "@/context/app.context";

import Logo from "../common/Logo";
import Menu2 from "../menu/Menu2";
import OffCanvas from "../offcanvas/OffCanvas";

export default function Header({ headerData }) {
  const [show, setShow] = useState(false);
  const { direction } = useContext(AppContext);
  return (
    <header className="header">
      <div className="inner">
        <div className="logo">
          <Logo />
        </div>
        <div className="nav">
          <Menu2 navData={headerData} />
        </div>
        <div className="others">
          <div className="navicon">
            <button onClick={() => setShow(true)}>
              <span className="menu-icon">
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <OffCanvas show={show} setShow={setShow} headerData={headerData} />
    </header>
  );
}
