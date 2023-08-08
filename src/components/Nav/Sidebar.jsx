import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          {/* <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            fanatic
          </h1> */}
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            About
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Projects
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            to="blog"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blog
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <a
            href="https://drive.google.com/drive/folders/13Jb90dar7KI4cqSKbn66LN3LMszYqiBf?usp=sharing"
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            target="_blank"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Curation
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a
            href="https://drive.google.com/file/d/1IfwfldFaKmoowiBlzf2YzQXMpi2viRlQ/view?usp=sharing"
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            target="_blank"
            spy={true}
            smooth={true}
            offset={-60}
          >
            List of Winner
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a
            href="https://drive.google.com/file/d/17mLBCeBNiNfX4rhH5JIsLJnk6KQLuetZ/view?usp=drive_link"
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            target="_blank"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Press Release
          </a>
        </li>
        <li className="semiBold font15 pointer">
          <a
            href="https://drive.google.com/drive/folders/1-4jpAN8xwYZE7UH-35OjxALyahTJwM8w"
            activeClass="active"
            target="_blank"
            rel="noopener noreferrer"
            spy={true}
            style={{ padding: "10px 15px", color: "white" }}
            smooth={true}
            offset={-80}
          >
            Gallery
          </a>
        </li>
        {/* <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="pricing"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Pricing
          </Link>
        </li> */}
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{}}
            to="contact"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        {/* <li className="semiBold font15 pointer">
          <a href="https://bit.ly/Pendaftaran-IIF-2023" style={{ padding: "10px 30px 10px 0" }} className="whiteColor">
            Registrasi
          </a>
        </li> */}
        <li className="semiBold font15 pointer flexCenter">
          <a href="https://drive.google.com/file/d/1ObB8FkJLvmaUV3ceiIBBoOuHEzDoRRKY/view?usp=drive_link" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
            Guide Book
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 20px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 10px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 1px;
  li {
    margin: 8px 0;
  }
`;
