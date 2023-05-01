import React, { useState } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-jsx";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { transform } from "@babel/standalone";

const Editor: React.FC = () => {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  // options for the editor
  const editorOptions = {
    enableBasicAutocompletion: true, // enable basic autocompletion
    enableLiveAutocompletion: true, // enable live autocompletion
    enableSnippets: true, // enable snippets
    highlightActiveLine: true, // highlight the active line
  };
  const handleRunCode = () => {
    try {
      const transpiledCode = transform(code, {
        presets: ["es2015", "react"],
        ast: false,
        code: true,
      }).code;

      setOutput(`<html>
      <head>
        <style></style>
      </head>
      <body>
        
        <script>${transpiledCode}</script>
      </body>
    </html>
      `);
    } catch (err) {
      setOutput(err.toString());
    }
  };

  return (
    <div style={{ display: "flex", width: "100%" }}>
      <AceEditor
        mode="jsx"
        theme="monokai"
        value={code}
        onChange={(newCode) => setCode(newCode)}
        name="editor"
        editorProps={{ $blockScrolling: true }}
        setOptions={editorOptions}
        style={{ height: "500px", width: "100%" }}
      />
      <button onClick={handleRunCode}>Run Code</button>
      <iframe
        title="Output"
        srcDoc={output}
        style={{
          height: "500px",
          width: "100%",
          marginTop: "20px",
          backgroundColor: "#fff",
        }}
      />
    </div>
  );
};

export default Editor;
