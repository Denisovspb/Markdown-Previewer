import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import { useState } from 'react';
import Prism from 'prismjs';
import marked from 'marked';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  },
});

// INSERTS target="_blank" INTO HREF TAGS (required for Codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [inputValue, setInputValue] = useState(placeholder);
  const [hidePreview, setHidePreview] = useState(false);
  const [hideEditor, setHideEditor] = useState(false);
  const onHandleChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="App bg-gradient-to-r from-gray-400 to-gray-700 min-h-screen">
      <div className="container mx-auto md:max-w-screen-lg py-8">
        {!hideEditor && (
          <Editor
            onHandleChangeInput={onHandleChangeInput}
            inputValue={inputValue}
            hidePreview={hidePreview}
            setHidePreview={setHidePreview}
          />
        )}
        {!hidePreview && (
          <Preview
            inputValue={inputValue}
            id="preview"
            hideEditor={hideEditor}
            setHideEditor={setHideEditor}>
            <div
              dangerouslySetInnerHTML={{
                __html: marked(inputValue, { renderer: renderer }),
              }}
              id="preview"
              className="bg-blue-300 p-5"
            />
          </Preview>
        )}
      </div>
    </div>
  );
}

export default App;
