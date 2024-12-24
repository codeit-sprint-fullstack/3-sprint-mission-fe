import React from "react";
import CheckIcon from "@/components/SVG/CheckIcon";

type ConfirmDeleteModalProps = {
  message: string;
  leftBtnText: string;
  rightBtnText: string;
  type: "red" | "blue";
  onClose: () => void;
  onConfirm: () => void;
};

const ConfirmDeleteModal = ({
  message,
  leftBtnText,
  rightBtnText,
  type,
  onClose,
  onConfirm,
}: ConfirmDeleteModalProps) => {
  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50 px-6">
      <div className="flex h-[200px] w-[300px] flex-col items-center justify-between rounded-md bg-white py-6 shadow-lg">
        <CheckIcon fillColor={type} />

        <p className="font-semibold">{message}</p>
        <div className="flex gap-4">
          <button
            className="w-[88px] rounded-md border border-red bg-white py-3 text-red"
            onClick={() => {
              onClose();
            }}
          >
            {leftBtnText}
          </button>
          <button
            className="w-[88px] rounded-md bg-red py-3 text-white"
            onClick={() => {
              onConfirm();
            }}
          >
            {rightBtnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
