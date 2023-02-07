import EditorJS from "@editorjs/editorjs"
import React, { useEffect } from 'react';
import List from '@editorjs/list';

function TextEditor(){

    function saving(){
      const output = document.getElementById('output');
      editor.save().then( savedData => {
        output.innerHTML = JSON.stringify(savedData, null, 4);
        console.log(savedData)
      })
    }

    let editor = { isReady: false };

    useEffect(() => {
      if (!editor.isReady) {
        editor = new EditorJS({
          autofocus: true,
          holder: 'editorjs',
          tools: {
            list:List
          }
        });
      }
    }, []);

    return(
        <div>
            <pre id="output">Content</pre>
            <button id="save-button" onClick={saving}>Save</button>
            <div id="editorjs"></div>
        </div>
    );
}

export default TextEditor;