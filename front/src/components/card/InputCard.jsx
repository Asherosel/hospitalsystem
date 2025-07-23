import React from 'react';

const InputCard = ({ data, value, onChange }) => {
  return (
    <div className="p-4 rounded-xl">
      <select
        className="w-full rounded-xl border border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={value || ""}
        onChange={onChange}
      >
        <option value="" disabled>Bir hastane seçin</option>
        {data && data.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default InputCard;
