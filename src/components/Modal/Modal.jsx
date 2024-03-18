import React, { useState } from "react";
import "./Modal.css";
import Button from "../Button/index";

function Modal({ModalTitle,ModalContent}) {
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
          <div className="modal-dialog mx-auto max-w-[500px] border relative rounded z-50 opacity-1 bg-white">
            <div className="modal-content  rounded border-grey ">
              <div className="modal-title flex justify-between items-center p-4 rounded border-b">
                <h1 className="text-[20px] font-medium ">{ModalTitle}</h1>
                <button
                  className="p-1"
                  onClick={(e) => {
                    closeModal();
                  }}
                >
                  X
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
        )}
        {isOpen && (
          <div
            className="fixed inset-0 z-10 bg-black opacity-50"
            onClick={closeModal}
          ></div>
        )}
      </div>
    </div>
  );
}

export default Modal;
