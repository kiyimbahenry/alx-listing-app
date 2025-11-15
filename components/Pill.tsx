import { FilterProps } from '@/interfaces';

const Pill: React.FC<FilterProps> = ({ label, isActive = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full border transition-all duration-200 ${
        isActive
          ? 'bg-blue-600 text-white border-blue-600'
          : 'bg-white text-gray-700 border-gray-300 hover:border-blue-600 hover:text-blue-600'
      }`}
    >
      {label}
    </button>
  );
};

export default Pill;
