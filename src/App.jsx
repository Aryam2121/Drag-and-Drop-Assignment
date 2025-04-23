import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertyEditor from './components/PropertyEditor';

export default function App() {
  const [elements, setElements] = useState([]);
  const [selectedElementId, setSelectedElementId] = useState(null);

  const handleDrop = (e) => {
    e.preventDefault();
    const type = e.dataTransfer.getData("type");

    const newElement = {
      id: Date.now(),
      type,
      props: {},
    };

    setElements((prev) => [...prev, newElement]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleSelectElement = (id) => {
    setSelectedElementId(id);
  };

  const handleUpdateElement = (key, value) => {
    setElements((prev) =>
      prev.map((el) =>
        el.id === selectedElementId
          ? { ...el, props: { ...el.props, [key]: value } }
          : el
      )
    );
  };

  const selectedElement = elements.find((el) => el.id === selectedElementId);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <Sidebar />
      <div className="flex-1 bg-gray-200 p-4">
        <h2 className="text-xl font-bold mb-4">Canvas Area</h2>
        <Canvas
          elements={elements}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onSelectElement={handleSelectElement}
        />
        <PropertyEditor
          selectedElement={selectedElement}
          onUpdateElement={handleUpdateElement}
        />
      </div>
    </div>
  );
}
