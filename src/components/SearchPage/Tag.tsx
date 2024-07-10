function Tag({ name }: { name: string }) {
  return (
    <div className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:bg-gray-300 hover:text-gray-800 cursor-pointer transition duration-300 ease-in-out">
      {name}
    </div>
  );
}

export default Tag;
