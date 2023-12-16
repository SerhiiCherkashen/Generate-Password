// CopyButton.js
import React, { useState } from "react";
import ClipboardJS from "clipboard";

const CopyButton = ({ textToCopy }) => {
  const [notification, setNotification] = useState(null);

  const handleCopy = () => {
    // Создаем экземпляр ClipboardJS
    const clipboard = new ClipboardJS(".copy-button");

    // Обработчик успешного копирования
    clipboard.on("success", (e) => {
      setNotification("Текст успешно скопирован в буфер обмена!");
      setTimeout(() => setNotification(null), 2000);

      // Очищаем выделение
      e.clearSelection();
    });

    // Обработчик ошибки копирования
    clipboard.on("error", (e) => {
      setNotification("Ошибка при копировании текста. Попробуйте вручную.");
    });

    // Уничтожаем экземпляр ClipboardJS после использования
    clipboard.destroy();
  };

  return (
    <div>
      <button className="copy-button" onClick={handleCopy}>
        Копировать
      </button>
      {notification && <div>{notification}</div>}
    </div>
  );
};

export default CopyButton;
