import React from 'react';
import { ColorPalette } from '../types/color';

interface PalettePreviewProps {
  palette: ColorPalette;
}

export const PalettePreview: React.FC<PalettePreviewProps> = ({ palette }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Preview</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          <button
            style={{ backgroundColor: palette.colors.primary }}
            className="w-full px-4 py-2 text-white rounded-lg shadow-sm"
          >
            Primary Button
          </button>
          <button
            style={{ backgroundColor: palette.colors.secondary }}
            className="w-full px-4 py-2 text-white rounded-lg shadow-sm"
          >
            Secondary Button
          </button>
          <button
            style={{ backgroundColor: palette.colors.accent }}
            className="w-full px-4 py-2 text-white rounded-lg shadow-sm"
          >
            Accent Button
          </button>
        </div>
        <div
          style={{ backgroundColor: palette.colors.background }}
          className="p-6 rounded-lg shadow-sm"
        >
          <h4
            style={{ color: palette.colors.text }}
            className="text-xl font-semibold mb-2"
          >
            Sample Text
          </h4>
          <p style={{ color: palette.colors.text }} className="text-sm">
            This is how your text will look against the background color.
          </p>
        </div>
      </div>
    </div>
  );
};