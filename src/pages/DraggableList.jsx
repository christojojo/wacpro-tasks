import React, { useState } from "react";
import {
  DndContext,
  closestCorners,
  useSensor,
  useSensors,
  PointerSensor,
  DragOverlay,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const initialColumns = {
  todo: [
    { id: "1", title: "Design UI" },
    { id: "2", title: "Create Wireframes" },
  ],
  inprogress: [
    { id: "3", title: "Implement Drag" },
  ],
  done: [
    { id: "4", title: "Write Docs" },
  ],
};

const DraggableCard = ({ item }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: item.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="p-3 bg-white rounded shadow cursor-grab"
    >
      {item.title}
    </div>
  );
};

const Column = ({ id, title, items }) => {
  return (
    <div className="w-full md:w-1/3 bg-gray-100 p-4 rounded shadow-sm h-full border min-w-[250px]">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <SortableContext items={items.map((i) => i.id)} strategy={verticalListSortingStrategy}>
        <div className="space-y-3">
          {items.map((item) => (
            <DraggableCard key={item.id} item={item} />
          ))}
        </div>
      </SortableContext>
    </div>
  );
};

const KanbanBoard = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [activeCard, setActiveCard] = useState(null);

  const sensors = useSensors(useSensor(PointerSensor));

  const findColumn = (id) => {
    return Object.keys(columns).find((key) =>
      columns[key].some((item) => item.id === id)
    );
  };

  const handleDragStart = (event) => {
    const { active } = event;
    const column = findColumn(active.id);
    const item = columns[column].find((task) => task.id === active.id);
    setActiveCard(item);
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over) return;

    const sourceColumnId = findColumn(active.id);
    const targetColumnId = findColumn(over.id);

    if (!sourceColumnId || !targetColumnId) return;

    if (active.id === over.id) return;

    const sourceItems = [...columns[sourceColumnId]];
    const targetItems = [...columns[targetColumnId]];

    const activeIndex = sourceItems.findIndex((item) => item.id === active.id);
    const overIndex = targetItems.findIndex((item) => item.id === over.id);

    const [movedItem] = sourceItems.splice(activeIndex, 1);

    if (sourceColumnId === targetColumnId) {
      // Reordering inside the same column
      sourceItems.splice(overIndex, 0, movedItem);
      setColumns({
        ...columns,
        [sourceColumnId]: sourceItems,
      });
    } else {
      // Moving to another column
      targetItems.splice(overIndex, 0, movedItem);
      setColumns({
        ...columns,
        [sourceColumnId]: sourceItems,
        [targetColumnId]: targetItems,
      });
    }

    setActiveCard(null);
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col md:flex-row gap-4 p-4">
        {Object.entries(columns).map(([columnId, items]) => (
          <Column
            key={columnId}
            id={columnId}
            title={columnId.charAt(0).toUpperCase() + columnId.slice(1)}
            items={items}
          />
        ))}
      </div>

      <DragOverlay>
        {activeCard ? (
          <div className="p-3 bg-white rounded shadow cursor-grabbing">
            {activeCard.title}
          </div>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
};

export default KanbanBoard;
