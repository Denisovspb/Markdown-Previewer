import { React, useState } from 'react';
import Header from './Header';
import classNames from 'classnames';

function Editor({ onHandleChangeInput, inputValue, hidePreview, setHidePreview }) {
  const [fullScreen, setFullScreen] = useState(false);
  const onClickFullScreen = () => {
    setFullScreen(!fullScreen);
    setHidePreview(!hidePreview);
  };
  const divClasses = classNames('border-2', 'border-black', 'mb-8', { 'min-h-screen': fullScreen });
  const textAreaClasses = classNames(
    'w-full',
    'border-2',
    'resize-none',
    'h-96',
    'outline-none',
    'text-lg',
    {
      'min-h-screen': fullScreen,
    },
  );
  return (
    <div className={divClasses}>
      <Header title="EDITOR" fullScreen={fullScreen} onClickFullScreen={onClickFullScreen} />
      <textarea
        className={textAreaClasses}
        onChange={(event) => onHandleChangeInput(event)}
        value={inputValue}
        id="editor"
      />
    </div>
  );
}

export default Editor;
