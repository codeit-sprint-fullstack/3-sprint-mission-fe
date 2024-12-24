import React from "react";
import { useAuthStore } from "@/store/useAuthStore";

const ErrorModal = () => {
  const { errorMessage, isModalOpen, toggleModal, setError } = useAuthStore();

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-6">
      <div className="flex h-[250px] w-[540px] flex-col items-center justify-center rounded-md bg-white p-6 shadow-lg">
        <p className="font-semibold">{errorMessage}</p>
        <button
          className="mt-10 w-[165px] rounded-md bg-blue py-3 text-white"
          onClick={() => {
            toggleModal(false);
            setError(null);
          }}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
