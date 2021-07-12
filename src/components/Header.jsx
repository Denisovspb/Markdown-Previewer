import React from 'react';
import { GrEdit } from 'react-icons/gr';
import { BsFileEarmarkText } from 'react-icons/bs';
import { AiOutlineFullscreen, AiOutlineFullscreenExit } from 'react-icons/ai';
import classNames from 'classnames';

function Header({ title, fullScreen, onClickFullScreen }) {
  const buttonClasses = classNames(
    'align-baseline',
    'cursor-pointer',
    'text-2xl',
    'hover:text-white',
    'transition',
    'delay-150',
    'ease-in-out',
  );
  return (
    <div className="flex items-center justify-between bg-green-500 px-8 py-2 text-lg">
      <div className="flex items-center font-bold">
        {title === 'editor' ? <GrEdit className="mr-2" /> : <BsFileEarmarkText className="mr-2" />}
        {title}
      </div>
      {fullScreen ? (
        <AiOutlineFullscreenExit className={buttonClasses} onClick={() => onClickFullScreen()} />
      ) : (
        <AiOutlineFullscreen className={buttonClasses} onClick={() => onClickFullScreen()} />
      )}
    </div>
  );
}

export default Header;
