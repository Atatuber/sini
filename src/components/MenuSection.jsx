import MenuItem from "./MenuItem";
export default function MenuSection({ section }) {
  return (
    <div className="mb-10">
      <h3 className="inline-block text-2xl font-semibold bg-linear-to-r from-cream-darkest to-khaki bg-clip-text text-transparent h1-font">
        {section.title}
      </h3>
      <div className="border-b-2 border-khaki pb-2 mb-4"></div>
      <div className="grid grid-cols-2 gap-3">
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
