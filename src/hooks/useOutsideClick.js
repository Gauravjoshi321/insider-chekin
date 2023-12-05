import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const refStyledModal = useRef();

  useEffect(function () {
    function handleClick(e) {

      if (refStyledModal.current && !refStyledModal.current.contains(e.target)) {
        console.log("click outside");
        handler();
      }

    }

    document.addEventListener("click", handleClick, listenCapturing);

    return () => document.removeEventListener("click", handleClick, listenCapturing);
  }, [handler, listenCapturing])

  return { refStyledModal };
}

export default useOutsideClick;