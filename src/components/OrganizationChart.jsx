import React from "react";
import { ReactFlow, Background, Handle, Position } from "reactflow";
import "reactflow/dist/style.css";

// Custom Node Component
const CustomNode = ({ data, isConnectable }) => {
  const { label, level, icon } = data;

  const getNodeStyle = () => {
    const baseStyle =
      "w-[200px] h-[120px] flex flex-col items-center justify-center rounded-2xl shadow-xl text-white font-bold text-center text-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl";

    switch (level) {
      case 1:
        return `${baseStyle} bg-gradient-to-br from-blue-500 to-blue-600`;
      case 2:
        return `${baseStyle} bg-gradient-to-br from-green-500 to-green-600`;
      case 2.5:
        return `${baseStyle} bg-gradient-to-br from-purple-500 to-purple-600`;
      case 3:
        return `${baseStyle} bg-gradient-to-br from-red-500 to-red-600`;
      default:
        return `${baseStyle} ${
          data.color || "bg-gradient-to-br from-gray-500 to-gray-600"
        }`;
    }
  };

  return (
    <div className={getNodeStyle()}>
      {level > 1 && (
        <Handle
          type="target"
          position={Position.Top}
          isConnectable={isConnectable}
          style={{ background: "#fff", border: "2px solid #333" }}
        />
      )}

      <div className="flex flex-col items-center justify-center h-full px-2">
        {icon && <div className="text-lg mb-2">{icon}</div>}
        <div className="whitespace-pre-line leading-tight">{label}</div>
      </div>

      {level < 4 && (
        <Handle
          type="source"
          position={Position.Bottom}
          isConnectable={isConnectable}
          style={{ background: "#fff", border: "2px solid #333" }}
        />
      )}
    </div>
  );
};

const nodeTypes = {
  custom: CustomNode,
};

const OrganizationChart = () => {
  const initialNodes = [
    {
      id: "1",
      type: "custom",
      position: { x: 500, y: 50 },
      data: {
        label: "ĐẠI HỘI ĐỒNG\nCỔ ĐÔNG",
        level: 1,
        icon: "🏛️",
      },
    },
    {
      id: "2",
      type: "custom",
      position: { x: 300, y: 200 },
      data: {
        label: "HỘI ĐỒNG\nQUẢN TRỊ",
        level: 2,
        icon: "👥",
      },
    },
    {
      id: "3",
      type: "custom",
      position: { x: 700, y: 200 },
      data: {
        label: "BAN\nKIỂM SOÁT",
        level: 2.5,
        icon: "🔍",
      },
    },
    {
      id: "4",
      type: "custom",
      position: { x: 500, y: 350 },
      data: {
        label: "TỔNG\nGIÁM ĐỐC",
        level: 3,
        icon: "👔",
      },
    },
    // Row 1 - 5 departments (centered better)
    {
      id: "5",
      type: "custom",
      position: { x: 150, y: 550 },
      data: {
        label: "TRUNG TÂM\nNGHIÊN CỨU\nPHÁT TRIỂN",
        level: 4,
        color: "bg-gradient-to-br from-amber-400 to-amber-500",
        icon: "💡",
      },
    },
    {
      id: "6",
      type: "custom",
      position: { x: 350, y: 550 },
      data: {
        label: "TRUNG TÂM\nPHÁT TRIỂN\nPHẦN MỀM",
        level: 4,
        color: "bg-gradient-to-br from-cyan-400 to-cyan-500",
        icon: "💻",
      },
    },
    {
      id: "7",
      type: "custom",
      position: { x: 550, y: 550 },
      data: {
        label: "TRUNG TÂM\nPHẦN MỀM\nTHIẾT KẾ WEB",
        level: 4,
        color: "bg-gradient-to-br from-indigo-400 to-indigo-500",
        icon: "🌐",
      },
    },
    {
      id: "8",
      type: "custom",
      position: { x: 750, y: 550 },
      data: {
        label: "TRUNG TÂM\nMARKETING VÀ\nTRUYỀN THÔNG",
        level: 4,
        color: "bg-gradient-to-br from-pink-400 to-pink-500",
        icon: "📢",
      },
    },
    {
      id: "9",
      type: "custom",
      position: { x: 950, y: 550 },
      data: {
        label: "TRUNG TÂM\nTƯ VẤN\nTRIỂN KHAI",
        level: 4,
        color: "bg-gradient-to-br from-teal-400 to-teal-500",
        icon: "🛠️",
      },
    },
    // Row 2 - 6 departments (centered better)
    {
      id: "10",
      type: "custom",
      position: { x: 100, y: 750 },
      data: {
        label: "TRUNG TÂM\nCHĂM SÓC\nKHÁCH HÀNG",
        level: 4,
        color: "bg-gradient-to-br from-orange-400 to-orange-500",
        icon: "🤝",
      },
    },
    {
      id: "11",
      type: "custom",
      position: { x: 300, y: 750 },
      data: {
        label: "TRUNG TÂM\nTÀI CHÍNH\nKẾ TOÁN",
        level: 4,
        color: "bg-gradient-to-br from-emerald-400 to-emerald-500",
        icon: "💰",
      },
    },
    {
      id: "12",
      type: "custom",
      position: { x: 500, y: 750 },
      data: {
        label: "TRUNG TÂM\nQUẢN LÝ\nDANG RANGE",
        level: 4,
        color: "bg-gradient-to-br from-violet-400 to-violet-500",
        icon: "📊",
      },
    },
    {
      id: "13",
      type: "custom",
      position: { x: 700, y: 750 },
      data: {
        label: "SHOP\nONLINE",
        level: 4,
        color: "bg-gradient-to-br from-rose-400 to-rose-500",
        icon: "🛒",
      },
    },
    {
      id: "14",
      type: "custom",
      position: { x: 900, y: 750 },
      data: {
        label: "PHÒNG\nNHÂN SỰ\nTỔNG HỢP",
        level: 4,
        color: "bg-gradient-to-br from-slate-400 to-slate-500",
        icon: "👥",
      },
    },
    {
      id: "15",
      type: "custom",
      position: { x: 1100, y: 750 },
      data: {
        label: "PHÒNG\nHÀNH CHÍNH\nTỔ CHỨC",
        level: 4,
        color: "bg-gradient-to-br from-zinc-400 to-zinc-500",
        icon: "🏢",
      },
    },
  ];

  const initialEdges = [
    // From Đại hội đồng cổ đông to both level 2
    {
      id: "e1-2",
      source: "1",
      target: "2",
      style: { stroke: "#4ade80", strokeWidth: 3 },
    },
    {
      id: "e1-3",
      source: "1",
      target: "3",
      style: { stroke: "#a855f7", strokeWidth: 3 },
    },

    // From Hội đồng quản trị to Tổng giám đốc
    {
      id: "e2-4",
      source: "2",
      target: "4",
      style: { stroke: "#ef4444", strokeWidth: 3 },
    },

    // From Tổng giám đốc to all departments
    {
      id: "e4-5",
      source: "4",
      target: "5",
      style: { stroke: "#f59e0b", strokeWidth: 2 },
    },
    {
      id: "e4-6",
      source: "4",
      target: "6",
      style: { stroke: "#06b6d4", strokeWidth: 2 },
    },
    {
      id: "e4-7",
      source: "4",
      target: "7",
      style: { stroke: "#6366f1", strokeWidth: 2 },
    },
    {
      id: "e4-8",
      source: "4",
      target: "8",
      style: { stroke: "#ec4899", strokeWidth: 2 },
    },
    {
      id: "e4-9",
      source: "4",
      target: "9",
      style: { stroke: "#14b8a6", strokeWidth: 2 },
    },
    {
      id: "e4-10",
      source: "4",
      target: "10",
      style: { stroke: "#f97316", strokeWidth: 2 },
    },
    {
      id: "e4-11",
      source: "4",
      target: "11",
      style: { stroke: "#10b981", strokeWidth: 2 },
    },
    {
      id: "e4-12",
      source: "4",
      target: "12",
      style: { stroke: "#8b5cf6", strokeWidth: 2 },
    },
    {
      id: "e4-13",
      source: "4",
      target: "13",
      style: { stroke: "#f43f5e", strokeWidth: 2 },
    },
    {
      id: "e4-14",
      source: "4",
      target: "14",
      style: { stroke: "#64748b", strokeWidth: 2 },
    },
    {
      id: "e4-15",
      source: "4",
      target: "15",
      style: { stroke: "#71717a", strokeWidth: 2 },
    },
  ];

  return (
    <div className="w-full h-[900px]">
      <ReactFlow
        nodes={initialNodes}
        edges={initialEdges}
        nodeTypes={nodeTypes}
        fitView
        fitViewOptions={{ padding: 0.1 }}
        defaultViewport={{ x: 0, y: 0, zoom: 0.8 }}
        nodesDraggable={false}
        nodesConnectable={false}
        panOnDrag={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        preventScrolling={true}
        elementsSelectable={false}
        selectNodesOnDrag={false}
        attributionPosition="bottom-left">
        <Background variant="dots" gap={20} size={1} color="#e2e8f0" />
      </ReactFlow>
    </div>
  );
};

export default OrganizationChart;
