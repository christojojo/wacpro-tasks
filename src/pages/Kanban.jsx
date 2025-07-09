import React from "react";

// Mock Syncfusion Kanban component since we can't import external packages
// This demonstrates the structure and functionality you'd get with the actual component

const kanban = () => {
  const [tasks, setTasks] = React.useState([
    {
      id: 1,
      title: "Design System Architecture",
      status: "To Do",
      priority: "High",
      assignee: "Sarah Johnson",
      description: "Create the foundational architecture for the design system",
      tags: ["Architecture", "Design"],
    },
    {
      id: 2,
      title: "API Integration",
      status: "In Progress",
      priority: "Medium",
      assignee: "Mike Chen",
      description: "Integrate REST API endpoints for user management",
      tags: ["Backend", "API"],
    },
    {
      id: 3,
      title: "User Authentication",
      status: "In Progress",
      priority: "High",
      assignee: "Emily Davis",
      description: "Implement OAuth 2.0 authentication system",
      tags: ["Security", "Auth"],
    },
    {
      id: 4,
      title: "Dashboard Analytics",
      status: "Testing",
      priority: "Medium",
      assignee: "Alex Rodriguez",
      description: "Create interactive dashboard with real-time analytics",
      tags: ["Frontend", "Analytics"],
    },
    {
      id: 5,
      title: "Mobile Responsive Design",
      status: "Done",
      priority: "High",
      assignee: "Lisa Wang",
      description: "Ensure all components work perfectly on mobile devices",
      tags: ["Mobile", "CSS"],
    },
    {
      id: 6,
      title: "Performance Optimization",
      status: "Done",
      priority: "Low",
      assignee: "David Kim",
      description: "Optimize bundle size and loading performance",
      tags: ["Performance", "Optimization"],
    },
  ]);

  const columns = [
    { key: "To Do", title: "To Do", color: "#FF6B6B" },
    { key: "In Progress", title: "In Progress", color: "#4ECDC4" },
    { key: "Testing", title: "Testing", color: "#45B7D1" },
    { key: "Done", title: "Done", color: "#96CEB4" },
  ];

  const priorityColors = {
    High: "#FF6B6B",
    Medium: "#FFD93D",
    Low: "#6BCF7F",
  };

  const handleDragStart = (e, task) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(task));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, newStatus) => {
    e.preventDefault();
    const taskData = JSON.parse(e.dataTransfer.getData("text/plain"));

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskData.id ? { ...task, status: newStatus } : task
      )
    );
  };

  const getTasksByStatus = (status) => {
    return tasks.filter((task) => task.status === status);
  };

  const TaskCard = ({ task }) => {
    const dragRef = React.useRef(null);

    const handleDragStart = (e) => {
      e.dataTransfer.setData("text/plain", JSON.stringify(task));
    };

    return (
      <div
        className="bg-white rounded-lg shadow-md p-4 mb-3 cursor-move hover:shadow-lg transition-shadow duration-200 border-l-4 select-none"
        style={{ borderLeftColor: priorityColors[task.priority] }}
        draggable
        onDragStart={handleDragStart}
        ref={dragRef}
      >
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-gray-800 text-sm">{task.title}</h3>
          <span
            className="px-2 py-1 rounded-full text-xs font-medium text-white"
            style={{ backgroundColor: priorityColors[task.priority] }}
            draggable
            onDragStart={handleDragStart}
          >
            {task.priority}
          </span>
        </div>

        <p
          className="text-gray-600 text-sm mb-3"
          draggable
          onDragStart={handleDragStart}
        >
          {task.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-3">
          {task.tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
              draggable
              onDragStart={handleDragStart}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {task.assignee
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <span
              className="text-sm text-gray-600"
              draggable
              onDragStart={handleDragStart}
            >
              {task.assignee}
            </span>
          </div>
          <span className="text-xs text-gray-500">#{task.id}</span>
        </div>
      </div>
    );
  };

  const Column = ({ column }) => (
    <div
      className="bg-gray-50 rounded-lg p-4 min-h-96"
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, column.key)}
    >
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-bold text-gray-800 flex items-center">
          <div
            className="w-3 h-3 rounded-full mr-2"
            style={{ backgroundColor: column.color }}
          ></div>
          {column.title}
        </h2>
        <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm font-medium">
          {getTasksByStatus(column.key).length}
        </span>
      </div>

      <div className="space-y-3">
        {getTasksByStatus(column.key).map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Project Management Kanban Board
          </h1>
          <p className="text-gray-600">
            Drag and drop tasks between columns to update their status
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {columns.map((column) => (
            <Column key={column.key} column={column} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default kanban;
