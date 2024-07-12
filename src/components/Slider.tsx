'use client'
import React from 'react';
import styled, { keyframes } from 'styled-components';

const marquee = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  padding-top : 3rem;
  white-space: nowrap;
  width: 100%;
  background: #fff;
  position: relative;
`;

const MarqueeContent = styled.div`
  display: inline-block;
  animation: ${marquee} 20s linear infinite;
`;

const Slide = styled.img`
  display: inline-block;
  width: 25%;
  background-color: red;
  object-fit: contain;
  margin-right: 32px; /* Adjust spacing between slides */
`;

const Sliderss = () => {
  return (
    <MarqueeContainer>
      <MarqueeContent>
        {Array.from({ length: 10 }).map((_, index) => (
          <Slide key={index} src={`/slider/${index + 1}.png`} alt={`slide-${index}`} />
        ))}
        {Array.from({ length: 10 }).map((_, index) => (
          <Slide key={index + 10} src={`/slider/${index + 1}.png`} alt={`slide-${index}`} />
        ))}
      </MarqueeContent>
    </MarqueeContainer>
  );
};

export default Sliderss;
