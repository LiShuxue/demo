import { useRef, useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import type { ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

const Test = () => {
  const editorRef = useRef<ExposeParam>();
  const [mdString, setMdString] = useState('');
  return (
    <div className="app">
      <MdEditor
        ref={editorRef}
        modelValue={mdString}
        previewTheme="github"
        codeTheme="github"
        onChange={setMdString}
      />
    </div>
  );
};

export default Test;
