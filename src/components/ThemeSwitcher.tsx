import { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';

type ThemeName = 'cyber' | 'charcoal' | 'slate';

interface Theme {
  name: ThemeName;
  label: string;
  description: string;
  preview: {
    bg: string;
    accent: string;
  };
}

const themes: Theme[] = [
  {
    name: 'cyber',
    label: 'Cyber Navy',
    description: 'Dark Navy with Neon Cyan',
    preview: { bg: '#0F172A', accent: '#22D3EE' }
  },
  {
    name: 'charcoal',
    label: 'Charcoal & Sulphur',
    description: 'High contrast with Deep Yellow',
    preview: { bg: '#121212', accent: '#EAB308' }
  },
  {
    name: 'slate',
    label: 'Slate & Silver',
    description: 'Minimalist Blue-Gray',
    preview: { bg: '#1E293B', accent: '#94A3B8' }
  }
];

const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('cyber');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as ThemeName;
    if (saved && themes.some(t => t.name === saved)) {
      setCurrentTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (themeName: ThemeName) => {
    const root = document.documentElement;
    
    switch (themeName) {
      case 'cyber':
        // Dark Navy with Neon Cyan
        root.style.setProperty('--background', '222 47% 11%');
        root.style.setProperty('--foreground', '210 40% 98%');
        root.style.setProperty('--card', '222 47% 13%');
        root.style.setProperty('--card-foreground', '210 40% 98%');
        root.style.setProperty('--secondary', '217 33% 17%');
        root.style.setProperty('--secondary-foreground', '210 40% 90%');
        root.style.setProperty('--muted', '217 33% 14%');
        root.style.setProperty('--muted-foreground', '215 20% 55%');
        root.style.setProperty('--primary', '185 84% 53%');
        root.style.setProperty('--primary-foreground', '222 47% 11%');
        root.style.setProperty('--accent', '265 70% 60%');
        root.style.setProperty('--accent-foreground', '210 40% 98%');
        root.style.setProperty('--border', '217 33% 20%');
        root.style.setProperty('--ring', '185 84% 53%');
        break;
        
      case 'charcoal':
        // Material Dark Gray with Deep Yellow
        root.style.setProperty('--background', '0 0% 7%');
        root.style.setProperty('--foreground', '0 0% 100%');
        root.style.setProperty('--card', '0 0% 10%');
        root.style.setProperty('--card-foreground', '0 0% 100%');
        root.style.setProperty('--secondary', '0 0% 14%');
        root.style.setProperty('--secondary-foreground', '0 0% 90%');
        root.style.setProperty('--muted', '0 0% 12%');
        root.style.setProperty('--muted-foreground', '0 0% 60%');
        root.style.setProperty('--primary', '45 92% 47%');
        root.style.setProperty('--primary-foreground', '0 0% 7%');
        root.style.setProperty('--accent', '38 92% 50%');
        root.style.setProperty('--accent-foreground', '0 0% 100%');
        root.style.setProperty('--border', '0 0% 18%');
        root.style.setProperty('--ring', '45 92% 47%');
        break;
        
      case 'slate':
        // Slate Blue-Gray Minimalist
        root.style.setProperty('--background', '217 33% 17%');
        root.style.setProperty('--foreground', '210 40% 98%');
        root.style.setProperty('--card', '215 28% 22%');
        root.style.setProperty('--card-foreground', '210 40% 98%');
        root.style.setProperty('--secondary', '215 25% 27%');
        root.style.setProperty('--secondary-foreground', '210 40% 90%');
        root.style.setProperty('--muted', '215 25% 23%');
        root.style.setProperty('--muted-foreground', '215 15% 60%');
        root.style.setProperty('--primary', '215 20% 65%');
        root.style.setProperty('--primary-foreground', '217 33% 17%');
        root.style.setProperty('--accent', '215 25% 50%');
        root.style.setProperty('--accent-foreground', '210 40% 98%');
        root.style.setProperty('--border', '215 20% 30%');
        root.style.setProperty('--ring', '215 20% 65%');
        break;
    }
  };

  const handleThemeChange = (themeName: ThemeName) => {
    setCurrentTheme(themeName);
    applyTheme(themeName);
    localStorage.setItem('portfolio-theme', themeName);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-full bg-secondary/80 border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
        aria-label="Change theme"
      >
        <Palette size={18} />
      </button>

      {isOpen && (
        <>
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-2 w-64 bg-card border border-border rounded-xl shadow-xl overflow-hidden z-50">
            <div className="p-3 border-b border-border/50">
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Color Theme</span>
            </div>
            <div className="p-2">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => handleThemeChange(theme.name)}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    currentTheme === theme.name 
                      ? 'bg-primary/10 text-primary' 
                      : 'hover:bg-secondary/80 text-foreground'
                  }`}
                >
                  <div className="flex gap-1">
                    <div 
                      className="w-4 h-4 rounded-full border border-border/50"
                      style={{ backgroundColor: theme.preview.bg }}
                    />
                    <div 
                      className="w-4 h-4 rounded-full border border-border/50"
                      style={{ backgroundColor: theme.preview.accent }}
                    />
                  </div>
                  <div className="flex-1 text-left">
                    <div className="text-sm font-medium">{theme.label}</div>
                    <div className="text-xs text-muted-foreground">{theme.description}</div>
                  </div>
                  {currentTheme === theme.name && (
                    <Check size={16} className="text-primary" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ThemeSwitcher;
