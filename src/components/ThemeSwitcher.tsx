import { useState, useEffect } from 'react';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const themes = [
  {
    id: 'default',
    name: 'Cyber Navy',
    description: 'Neon Cyan on Dark Navy',
    colors: {
      bg: '#0F172A',
      primary: '#22D3EE',
    },
  },
  {
    id: 'charcoal',
    name: 'Charcoal & Sulphur',
    description: 'High Contrast Yellow',
    colors: {
      bg: '#121212',
      primary: '#EAB308',
    },
  },
  {
    id: 'slate',
    name: 'Slate & Silver',
    description: 'Minimalist Elegance',
    colors: {
      bg: '#1E293B',
      primary: '#94A3B8',
    },
  },
];

const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('default');

  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme') || 'default';
    setActiveTheme(savedTheme);
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeId: string) => {
    const root = document.documentElement;
    root.classList.remove('theme-charcoal', 'theme-slate');
    
    if (themeId === 'charcoal') {
      root.classList.add('theme-charcoal');
    } else if (themeId === 'slate') {
      root.classList.add('theme-slate');
    }
  };

  const handleThemeChange = (themeId: string) => {
    setActiveTheme(themeId);
    applyTheme(themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2.5 rounded-xl bg-secondary/50 backdrop-blur-xl border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
        aria-label="Change theme"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Palette size={18} />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              className="absolute right-0 top-full mt-3 z-50 w-72 p-4 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border/50 shadow-2xl"
            >
              <h4 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                <Palette size={14} className="text-primary" />
                Theme Settings
              </h4>
              <div className="space-y-2">
                {themes.map((theme) => (
                  <motion.button
                    key={theme.id}
                    onClick={() => handleThemeChange(theme.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                      activeTheme === theme.id
                        ? 'bg-primary/10 border border-primary/40'
                        : 'hover:bg-secondary/50 border border-transparent'
                    }`}
                    whileHover={{ x: 2 }}
                  >
                    <div className="flex gap-1">
                      <div
                        className="w-5 h-5 rounded-lg border border-border/50"
                        style={{ backgroundColor: theme.colors.bg }}
                      />
                      <div
                        className="w-5 h-5 rounded-lg"
                        style={{ backgroundColor: theme.colors.primary }}
                      />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="text-sm font-medium text-foreground">{theme.name}</div>
                      <div className="text-xs text-muted-foreground">{theme.description}</div>
                    </div>
                    {activeTheme === theme.id && (
                      <Check size={16} className="text-primary" />
                    )}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ThemeSwitcher;
