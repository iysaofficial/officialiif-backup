import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import OpenIcon from "../../assets/svg/OpenIcon";
import BurgerIcon from "../../assets/svg/BurgerIcon";
<s></s>;
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
          </Link>
          <BurderWrapper>
            <OpenBtn
              onClick={() => toggleSidebar(!sidebarOpen)}
              className="animate pointer"
            >
              <OpenIcon />
            </OpenBtn>
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Utama
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Tentang
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Proyek
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="blog"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Ketentuan
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <a
                href="https://drive.google.com/drive/folders/13Jb90dar7KI4cqSKbn66LN3LMszYqiBf?usp=sharing"
                activeClass="active"
                target="_blank"
                rel="noopener noreferrer"
                spy={true}
                style={{ padding: "10px 15px" }}
                smooth={true}
                offset={-80}
              >
                Kurasi
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a
                href="https://drive.google.com/file/d/1IfwfldFaKmoowiBlzf2YzQXMpi2viRlQ/view?usp=sharing"
                activeClass="active"
                target="_blank"
                rel="noopener noreferrer"
                spy={true}
                style={{ padding: "10px 15px" }}
                smooth={true}
                offset={-80}
              >
                Daftar Pemenang
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <a
                href="PRESS RELEASE IIF (JAWA TIMUR).pdf"
                activeClass="active"
                target="_blank"
                rel="noopener noreferrer"
                spy={true}
                style={{ padding: "10px 15px" }}
                smooth={true}
                offset={-80}
              >
                Siaran Pers
              </a>
            </li>

            <li className="semiBold font15 pointer">
              <a
                href="https://drive.google.com/drive/folders/1-4jpAN8xwYZE7UH-35OjxALyahTJwM8w"
                activeClass="active"
                target="_blank"
                rel="noopener noreferrer"
                spy={true}
                style={{ padding: "10px 15px" }}
                smooth={true}
                offset={-80}
              >
                Galeri
              </a>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Contact
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <a
                href="https://drive.google.com/file/d/1ObB8FkJLvmaUV3ceiIBBoOuHEzDoRRKY/view?usp=drive_link"
                className="radius6 lightBg"
                style={{ padding: "10px 15px" }}
              >
                Buku Panduan
              </a>
            </li>
            {/* <li className="semiBold font15 pointer flexCenter"> */}
            {/* <a
                href="https://bit.ly/Pendaftaran-IIF-2023"
                className="radius8 lightBg"
                style={{ padding: "10px 15px" }}
              >
                Registrasi
              </a> */}
            {/* </li> */}
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const OpenBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;
