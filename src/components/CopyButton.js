import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { copyToClipboard } from "./clipboardActions";
import { changeInput } from "./clipboardSlice";

const CopyButton = () => {
  const dispatch = useDispatch();
  const textToCopy = useSelector((state) => state.clipboardReducer.textToCopy);

  return (
    <div>
      {textToCopy}
      <input onChange={(e) => dispatch(changeInput(e))} />
      <button onClick={() => dispatch(copyToClipboard(textToCopy))}>
        {/* Копировать */}
        <i class="fa fa-clone">asd</i>
      </button>
    </div>
  );
};

export default CopyButton;
