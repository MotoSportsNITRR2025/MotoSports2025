import React from 'react'

function HeaderAnchor(props) {
  return (
    <a href={props.to} className="flex shrink-0 justify-center items-center h-10 px-2 py-2 border-3 border-transparent rounded-md hover:bg-tawny hover:text-white hover:text-tawny hover:border-tawny transition-all duration-450">
        <li className="cursor-pointer whitespace-nowrap font-poppins font-medium font-2 text-base">{props.text}</li>
    </a>
  )
}

export default HeaderAnchor