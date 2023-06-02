import { useRef, useState } from 'react';
import { MdEditor } from 'md-editor-rt';
import type { ExposeParam } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';

const App = () => {
  const editorRef = useRef<ExposeParam>();
  const [mdString, setMdString] = useState('');

  return (
    <div className="test">
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

export default App;
