import React from "react";

const WechatModal = ({ imageUrl, onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div className="bg-white p-4 rounded-lg sm:max-w-sm sm:max-h-1/4 max-w-xs">
        <img src={imageUrl} alt="Modal" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default WechatModal;
