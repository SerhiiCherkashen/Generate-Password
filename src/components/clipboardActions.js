// src/features/clipboard/clipboardActions.js
import { setTextToCopy } from "./clipboardSlice";
import ClipboardJS from "clipboard";

export const copyToClipboard = (text) => (dispatch) => {
  console.log("copyToClipboard : ", text);
  dispatch(setTextToCopy(text));

  // Используем ClipboardJS для копирования текста в буфер обмена
  const clipboard = new ClipboardJS(".copy-button");
  console.log("clipboard : ", clipboard);
  console.log("clipboard action: ", clipboard.action);
  console.log("clipboard container: ", clipboard.container);
  console.log("clipboard e: ", clipboard.e);
  console.log("clipboard listener: ", clipboard.listener);
  console.log("clipboard target: ", clipboard.target);
  console.log("clipboard.text : ", clipboard.text);
  //   console.log("clipboard : ", clipboard.target.value);
  console.log("clipboard : ", clipboard.on);

  clipboard.on("success", function (e) {
    console.info("Action:", e.action);
    console.info("Text:", e.text);
    console.info("Trigger:", e.trigger);

    e.clearSelection();
  });

  //   clipboard.on("success", (e) => {
  //     console.log(`Текст "${e.text}" успешно скопирован в буфер обмена`);
  //     e.clearSelection();
  //   });

  clipboard.on("error", function (e) {
    console.error("Action:", e.action);
    console.error("Trigger:", e.trigger);
  });

  //   clipboard.on("error", (e) => {
  //     console.error("Ошибка при копировании текста", e);
  //   });
};

//
//
//
// var clipboard = new ClipboardJS('.btn');

// clipboard.on("success", function (e) {
//   console.info("Action:", e.action);
//   console.info("Text:", e.text);
//   console.info("Trigger:", e.trigger);

//   e.clearSelection();
// });

// clipboard.on("error", function (e) {
//   console.error("Action:", e.action);
//   console.error("Trigger:", e.trigger);
// });
