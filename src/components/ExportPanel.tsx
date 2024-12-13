import React from 'react';
import { Download, Share2, Copy } from 'lucide-react';
import { ColorPalette, ColorFormat } from '../types/color';
import { hexToRgb, hexToHsl } from '../utils/colorUtils';

interface ExportPanelProps {
  palette: ColorPalette;
}

export const ExportPanel: React.FC<ExportPanelProps> = ({ palette }) => {
  const getColorFormats = (hex: string): ColorFormat => ({
    hex,
    rgb: hexToRgb(hex),
    hsl: hexToHsl(hex)
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const downloadPalette = () => {
    const data = JSON.stringify(palette, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${palette.name.toLowerCase().replace(/\s+/g, '-')}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold">Export Options</h3>
      <div className="space-y-4">
        {Object.entries(palette.colors).map(([name, color]) => (
          <div key={name} className="space-y-2">
            <h4 className="text-sm font-medium capitalize">{name}</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {Object.entries(getColorFormats(color)).map(([format, value]) => (
                <button
                  key={format}
                  onClick={() => copyToClipboard(value)}
                  className="flex items-center justify-between px-3 py-2 text-sm bg-gray-50 rounded-md hover:bg-gray-100"
                >
                  <span className="uppercase">{format}: {value}</span>
                  <Copy className="w-4 h-4" />
                </button>
              ))}
            </div>
          </div>
        ))}
        <div className="flex gap-4 pt-4">
          <button
            onClick={downloadPalette}
            className="flex items-center gap-2 px-4 py-2 text-sm text-white bg-blue-600 rounded-lg hover:bg-blue-700"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
          <button
            onClick={() => copyToClipboard(window.location.href)}
            className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 border rounded-lg hover:bg-gray-50"
          >
            <Share2 className="w-4 h-4" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
};