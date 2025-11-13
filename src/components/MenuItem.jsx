export default function MenuItem({ item }) {
  const [name, price, desc] = item;

  return (
    <div className="border-b border-cream-darkest py-3 col-span-2 md:col-span-1">
      <div className="flex items-center">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between items-center">
            <span className="text-3xl text-[#4B382A] arvo-regular">{name}</span>
            <span className="font-medium text-left arvo-regular text-stone-700">
              {price}
            </span>
          </div>
          <span className="text-base bg-stone-500 text-shadow-black bg-clip-text text-transparent arvo-regular-italic flex-1">
            {desc}
          </span>
        </div>
      </div>
    </div>
  );
}
