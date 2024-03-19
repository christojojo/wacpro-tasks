import React, { useState } from "react";
import "./Modal.css";
import Button from "../Button/index";
import { createPortal } from "react-dom";

function Modal({ ModalTitle, ModalContent, className, centered = false }) {
  const [isOpen, setIsOpen] = useState(false);

  const openmodal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="pt-24">
      <div>
        <Button
          variant="primary"
          onClick={(e) => {
            openmodal();
          }}
        >
          Launch Modal
        </Button>
        {isOpen && (
          <>
            {createPortal(
              <>
                <div
                  className="fixed inset-0 z-10 bg-black opacity-50"
                  onClick={closeModal}
                ></div>
                <div
                  className={`modal-dialog mx-auto w-full border rounded z-50 opacity-1 bg-white absolute left-1/2 -translate-x-1/2 ${
                    className || "max-w-[500px]"
                  } 
                   ${centered ? "top-1/2 -translate-y-1/2" : "top-20"}`}
                >
                  <div className="modal-content  rounded border-grey ">
                    <div className="modal-title flex justify-between items-center p-4 rounded border-b">
                      <h1 className="text-[20px] font-medium ">{ModalTitle}</h1>
                      <button
                        className="px-1 font-medium text-lg opacity-100 hover:opacity-80 transition-all duration-150 ease-in-out"
                        onClick={(e) => {
                          closeModal();
                        }}
                      >
                        <span class="material-symbols-outlined">close</span>
                      </button>
                    </div>
                    <div className="modal-body p-4 border-b">
                      <p>{ModalContent}</p>
                    </div>
                    <div className="modal-footer p-4 flex justify-end gap-2">
                      <Button
                        variant="secondary"
                        onClick={(e) => {
                          closeModal();
                        }}
                      >
                        Close
                      </Button>
                      <Button
                        variant="primary"
                        onClick={(e) => {
                          closeModal();
                        }}
                      >
                        Save
                      </Button>
                    </div>
                  </div>
                </div>
              </>,
              document.body
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default Modal;
