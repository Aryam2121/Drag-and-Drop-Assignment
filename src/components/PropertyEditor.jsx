export default function PropertyEditor({ selectedElement, onUpdateElement }) {
    if (!selectedElement) return null;
  
    return (
      <div className="mt-6 bg-white p-4 rounded shadow">
        <h3 className="text-lg font-bold mb-4">Edit Properties</h3>
  
        {selectedElement.type === "text" && (
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Enter text"
            value={selectedElement.props.text || ""}
            onChange={(e) => onUpdateElement("text", e.target.value)}
          />
        )}
  
        {selectedElement.type === "image" && (
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Enter image URL"
            value={selectedElement.props.src || ""}
            onChange={(e) => onUpdateElement("src", e.target.value)}
          />
        )}
  
        {selectedElement.type === "button" && (
          <input
            type="text"
            className="border p-2 w-full mb-2"
            placeholder="Enter button label"
            value={selectedElement.props.label || ""}
            onChange={(e) => onUpdateElement("label", e.target.value)}
          />
        )}
      </div>
    );
  }
  