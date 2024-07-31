import React from 'react';

interface LogoProps {
  className?: string;
  width?: string;
}

const Logo: React.FC<LogoProps> = () => (
  <svg width="40" height="40" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="600" height="600" rx="61" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M300 75L500 187.5V412.5L300 525L100 412.5V187.5L300 75ZM150.993 187.5L300 103.684L449.007 187.5H150.993ZM125 224.808V397.879L275.263 482.402L125 224.808ZM324.737 482.402L475 397.879V224.808L324.737 482.402ZM300 475.192L146.763 212.5H453.237L300 475.192Z" fill="#EDE9DE"/>
</svg>

);

export default Logo;