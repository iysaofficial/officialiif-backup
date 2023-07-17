import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Components
import TestimonialBox from "../Elements/TestimonialBox";

export default function TestimonialSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Peserta adalah pelajar dan
            mahasiswa Indonesia di wilayah
            regional Jawa Timur yang masih
            terdaftar aktif sebagai siswa
            SMP/Mts, SMA/SMK/MA dan
            Mahasiswa."
            author="IYSA Official"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Peserta bisa perorangan atau
            kelompok dengan maksimal 5
            (lima) orang dalam satu
            kelompok.
            "
            author="IYSA Official"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Peserta berasal dari lembaga
            yang sama
            "
            author="IYSA Official"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Setiap kelompok wajib memiliki
            guru/dosen pembimbing yang
            berasal dari sekolah/universitas
            yang bersangkutan."
            author="IYSA Official"
          />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <TestimonialBox
            text="Pembimbing merupakan
            guru/dosen dari
            sekolah/universitas yang
            bersangkutan.
            "
            author="IYSA Official"
          />
        </LogoWrapper>
        
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 90%;
  padding: 0 5%;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
