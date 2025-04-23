export default function Sidebar() {
    const handleDragStart = (e, type) => {
      e.dataTransfer.setData("type", type);
    };
  
    return (
      <div className="w-full md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-bold mb-4">Elements</h2>
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, "text")}
          className="p-2 bg-white shadow mb-2 cursor-move text-center"
        >
          Text
        </div>
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, "image")}
          className="p-2 bg-white shadow mb-2 cursor-move text-center"
        >
          Image
        </div>
        <div
          draggable
          onDragStart={(e) => handleDragStart(e, "button")}
          className="p-2 bg-white shadow mb-2 cursor-move text-center"
        >
          Button
        </div>
      </div>
    );
  }
  