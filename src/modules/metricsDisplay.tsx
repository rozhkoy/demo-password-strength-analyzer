import React from "react";

interface ParamsProps {
  params: {
    [key: string]: string | number;
  };
}

export const MetricsDisplay: React.FC<ParamsProps> = ({ params }) => {
  return (
    <div className="fixed min-w-[200px] top-[15px] left-[15px] bg-white p-3 border border-gray-200 rounded-md shadow-sm">
      <ul className="flex flex-col gap-2">
        {Object.entries(params).map(([key, value]) => (
          <li key={key} className="text-sm text-gray-800">
            <strong className="text-gray-600">{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};
