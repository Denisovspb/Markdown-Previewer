import { React, useState } from 'react';
import Header from './Header';

function Preview({ children, hideEditor, setHideEditor }) {
  const [fullScreen, setFullScreen] = useState(false);
  const onClickFullScreen = () => {
    setFullScreen(!fullScreen);
    setHideEditor(!hideEditor);
  };
  return (
    <div className="border-2 border-black mb-8">
      <Header title="PREVIEW" fullScreen={fullScreen} onClickFullScreen={onClickFullScreen} />
      {children}
    </div>
  );
}

export default Preview;
