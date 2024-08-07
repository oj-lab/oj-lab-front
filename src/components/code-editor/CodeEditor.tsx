import React, { useEffect, useRef, useState } from "react";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";
import "./useWorker";

export interface CodeEditorProps {
  value: string;
  className?: string;
  language?: string;
  onChange: (value: string) => void;
  parent: HTMLElement;
}

const CodeEditor: React.FC<CodeEditorProps> = (props) => {
  const [editor, setEditor] =
    useState<monaco.editor.IStandaloneCodeEditor | null>(null);
  const monacoEl = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (monacoEl.current) {
      setEditor((editor) => {
        if (editor) return editor;

        editor = monaco.editor.create(monacoEl.current!, {
          value: props.value,
          language: props.language || "cpp",
          theme:
            localStorage.getItem("isLightMode") === "true" ? "vs" : "vs-dark",
          automaticLayout: true,
          scrollBeyondLastLine: false,
          scrollbar: {
            vertical: "auto",
          },
        });

        props.onChange(editor!.getValue());

        editor.onDidChangeModelContent(() => {
          props.onChange(editor!.getValue());
        });

        return editor;
      });
    }

    return () => editor?.dispose();
    // !!! Cannot add props to the dependency array
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editor]);

  useEffect(() => {
    const handleStorageChange = () => {
      monaco.editor.setTheme(
        localStorage.getItem("isLightMode") === "true" ? "vs" : "vs-dark",
      );
    };

    // Listen for storage changes
    window.addEventListener("themeChanged", handleStorageChange);

    return () => {
      window.removeEventListener("themeChanged", handleStorageChange);
    };
  }, [editor]);

  useEffect(() => {
    if (editor) {
      monaco.editor.setModelLanguage(
        editor.getModel()!,
        props.language || "cpp",
      );
    }
  }, [props.language, editor]);

  useEffect(() => {
    const handleResize = () => {
      if (editor) {
        // wait for next frame to ensure last layout finished
        window.requestAnimationFrame(() => {
          // get the parent dimensions and re-layout the editor
          const rect = props.parent.getBoundingClientRect();
          if (
            localStorage.getItem("isDrawerOpen") === "true" &&
            window.innerWidth >= 1024
          ) {
            editor.layout({
              width: rect.width - 352,
              height: window.innerHeight,
            });
          } else {
            const currentWidth = editor.getLayoutInfo().width;
            // make the transition smooth
            if (currentWidth < rect.width - 112) {
              editor.layout({
                width: currentWidth + 1,
                height: window.innerHeight,
              });
            } else {
              editor.layout({
                width: rect.width - 112,
                height: window.innerHeight,
              });
            }
          }
        });
      }
    };

    window.addEventListener("drawerChanged", handleResize);
    const resizeObserver = new ResizeObserver(() => {
      handleResize();
    });
    if (monacoEl.current) {
      resizeObserver.observe(monacoEl.current);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("drawerChanged", handleResize);
      window.removeEventListener("resize", handleResize);
      resizeObserver.disconnect();
    };
  }, [editor, props.parent]);

  return (
    <div
      className={props.className}
      ref={monacoEl}
      style={{ border: "0 solid" }}
    />
  );
};

export default CodeEditor;
