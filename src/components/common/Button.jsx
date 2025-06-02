// src/components/home/SkillsPreview.jsxcomponents/common/Button.jsx

import { Link } from "react-router-dom";

export default function Button({ variant = "secondary", ...props }) {
  const baseStyles = `
    inline-block 
    px-6 py-3 text-sm                            
    sm:px-5 sm:py-2.5 sm:text-base         
    lg:px-6 lg:py-3 lg:text-lg  
    font-semibold 
    rounded-full 
    border 
    transition duration-300 transform 
    hover:scale-105 
    active:scale-105
  `;

  const variantStyles = {
    primary: `
      text-[#222222]
      bg-[#5AC8FA]
      border-[#5AC8FA]
      hover:bg-[#222222]
      hover:text-[#5AC8FA]
      hover:shadow-[0_0_10px_2px_#5AC8FA]
      active:bg-[#3FCBFF]
      active:text-[#222222]
    `,
    secondary: `
      text-[#5AC8FA]
      bg-[#222222]
      border-[#5AC8FA]
      hover:bg-[#3FCBFF]
      hover:text-[#222222]
      hover:shadow-[0_0_8px_2px_#5AC8FA]
      active:bg-[#3FCBFF]
      active:text-[#222222]
    `
  };

  const newProps = {
    ...props,
    className: `${baseStyles} ${variantStyles[variant]} ${props.className || ""}`
  };

  if (props.href) {
    return <a href={props.href} download={props.download} {...newProps} />;
  }

  if (props.to) {
    return <Link {...newProps} />;
  }

  return <button {...newProps} />;
}