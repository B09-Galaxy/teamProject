interface TagProps {
  name: string;
  isSelected: boolean;
  onClick: () => void;
}

function Tag({ name, isSelected, onClick }: TagProps) {
  return (
    <div
      onClick={onClick}
      className={`inline-block rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 cursor-pointer transition duration-300 ease-in-out ${
        isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-800'
      }`}
    >
      {name}
    </div>
  );
}

export default Tag;
