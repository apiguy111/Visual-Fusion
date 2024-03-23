import React from "react";
import "./Header.css";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import HelpIcon from "@mui/icons-material/Help";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import LogoutIcon from "@mui/icons-material/Logout";

function Header() {
  return (
    <div className="headerMain">
      <div className="contentRow">
        <p className="celebare">Celebare</p>
        <div className="contentRow2">
          <p className="celebare2">Dashboard</p>
          <p className="celebare2">Account</p>
          <p className="celebare2">Portfolio</p>
          <p className="celebare2">Services</p>
        </div>
        <div>
          <CloudDownloadIcon className="icon" />
          <HelpIcon className="icon" />
          <ImportContactsIcon className="icon" />
          <LogoutIcon className="icon" />
        </div>
      </div>
    </div>
  );
}

export default Header;
