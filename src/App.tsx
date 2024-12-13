import React, { useState } from 'react';
import { Palette } from 'lucide-react';
import { ColorPicker } from './components/ColorPicker';
import { PalettePreview } from './components/PalettePreview';
import { ExportPanel } from './components/ExportPanel';
import { ColorPalette } from './types/color';
import { generateComplementaryColor } from './utils/colorUtils';

function App() {
  const [palette, setPalette] = useState<ColorPalette>({
    id: '1',
    name: 'My Palette',
    colors: {
      primary: '#2563eb',
      secondary: '#4f46e5',
      accent: '#ec4899',
      background: '#ffffff',
      text: '#1f2937'
    }
  });

  const updateColor = (key: keyof ColorPalette['colors'], value: string) => {
    setPalette(prev => ({
      ...prev,
      colors: {
        ...prev.colors,
        [key]: value,
        ...(key === 'primary' && {
          secondary: generateComplementaryColor(value)
        })
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Palette className="w-8 h-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">
            Minimalist Design Palette Generator
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8 bg-white p-6 rounded-xl shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ColorPicker
                label="Primary Color"
                color={palette.colors.primary}
                onChange={(color) => updateColor('primary', color)}
              />
              <ColorPicker
                label="Secondary Color"
                color={palette.colors.secondary}
                onChange={(color) => updateColor('secondary', color)}
              />
              <ColorPicker
                label="Accent Color"
                color={palette.colors.accent}
                onChange={(color) => updateColor('accent', color)}
              />
              <ColorPicker
                label="Background Color"
                color={palette.colors.background}
                onChange={(color) => updateColor('background', color)}
              />
              <ColorPicker
                label="Text Color"
                color={palette.colors.text}
                onChange={(color) => updateColor('text', color)}
              />
            </div>
            <PalettePreview palette={palette} />
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm">
            <ExportPanel palette={palette} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;