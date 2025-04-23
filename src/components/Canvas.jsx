export default function Canvas({ elements, onDrop, onDragOver, onSelectElement }) {
    return (
      <div
        className="w-full h-[500px] bg-white rounded shadow p-4 overflow-auto"
        onDrop={onDrop}
        onDragOver={onDragOver}
      >
        {elements.length === 0 ? (
          <p className="text-gray-400 text-center">Drag elements here...</p>
        ) : (
          elements.map((el) => (
            <div
              key={el.id}
              onClick={() => onSelectElement(el.id)}
              className="border p-2 m-2 cursor-pointer hover:bg-gray-100"
            >
              {el.type === "text" && <p>{el.props.text || "Sample Text"}</p>}
              {el.type === "image" && (
  <img
    src={el.props.src && el.props.src.trim() !== "" ? el.props.src : "https://picsum.photos/200"}
    alt="Placeholder"
    className="w-24 h-24 object-cover"
  />
)}
              {el.type === "button" && (
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  {el.props.label || "Click Me"}
                </button>
              )}
            </div>
          ))
        )}
      </div>
    );
  }
  