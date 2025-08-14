  // src/components/KonvaDrawingBoard.jsx
  import React, { useState, useRef, useEffect, useCallback } from "react";
  import { Stage, Layer, Line, Rect } from "react-konva";
  import {
    Pencil,
    Eraser,
    Move,
    RotateCcw,
    MousePointerClick,
    Save,
  } from "lucide-react";

  function PenOptions({currentColor, currentSize, onColorChange, onSizeChange}) {
    const colors = [
      { name: "White", value: "#ffffff" },
      { name: "Black", value: "#000000" },
      { name: "Red", value: "#ef4444" },
      { name: "Blue", value: "#3b82f6" },
      { name: "Green", value: "#22c55e" },
      { name: "Yellow", value: "#eab308" },
      { name: "Purple", value: "#a855f7" },
      { name: "Orange", value: "#f97316" },
      { name: "Pink", value: "#ec4899" },
      { name: "Cyan", value: "#06b6d4" },
    ];

    const brushSizes = [
      { name: "Extra Small", value: 2 },
      { name: "Small", value: 5 },
      { name: "Medium", value: 10 },
      { name: "Large", value: 15 },
      { name: "Extra Large", value: 20 },
      { name: "Huge", value: 30 },
    ];

    return (
      <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-4 min-w-48">
        <h4 className="text-white text-sm font-semibold mb-3">Pen Options</h4>
        
        {/* Color Selection */}
        <div className="mb-4">
          <p className="text-white text-xs mb-2 font-medium">Color:</p>
          <div className="grid grid-cols-5 gap-2">
            {colors.map(color => (
              <button
                key={color.value}
                className={`w-8 h-8 rounded-full border-2 transition-all hover:scale-110 ${
                  currentColor === color.value 
                    ? 'border-white shadow-lg shadow-white/30' 
                    : 'border-gray-400 hover:border-white/70'
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => onColorChange(color.value)}
                title={color.name}
              />
            ))}
          </div>
        </div>
        
        {/* Brush Size Selection */}
        <div>
          <p className="text-white text-xs mb-2 font-medium">Brush Size:</p>
          <div className="space-y-2">
            {brushSizes.map(size => (
              <button
                key={size.value}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs transition-colors ${
                  currentSize === size.value 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
                onClick={() => onSizeChange(size.value)}
              >
                <span>{size.name}</span>
                <div className="flex items-center">
                  <span className="text-xs mr-2">{size.value}px</span>
                  <div 
                    className="rounded-full bg-current"
                    style={{ 
                      width: Math.min(size.value, 16) + 'px', 
                      height: Math.min(size.value, 16) + 'px' 
                    }}
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  export default PenOptions;
