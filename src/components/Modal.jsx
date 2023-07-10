import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

export default function Modal({ onClose, isOpen, children }) {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="m-auto relative z-50 min-h-[200px] max-w-[80%] bg-white p-4">
            <div className="flex justify-end">
              <AiOutlineClose
                onClick={onClose}
                className="text-2xl cursor-pointer"
              />
            </div>
            {children}
          </div>
          <div
            onClick={onClose}
            className="absolute z-40 top-0 h-screen w-screen backdrop-blur"
          />
        </>
      )}
    </>,
    document.getElementById("modal-root")
  );
}
