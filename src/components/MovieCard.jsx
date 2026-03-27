export const MovieCard = ({ title, image, description }) => {
  return (
    <div className="bg-bg-card rounded-lg overflow-hidden hover:scale-105 transition cursor-pointer">
      <img src={image} alt={title} className="w-full aspect-[2/3] object-cover" />
      <div className="p-3 flex flex-col items-center gap-2">
        <h3 className="text-white font-semibold mb-1">{title}</h3>
        {description && <p className="text-xs text-gray-300 text-center">{description}</p>}
      </div>
    </div>
  );
};