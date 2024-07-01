// src/App.tsx
import React from 'react';
import { Button } from '../components/ui/button';
import HeroSection from '../components/hero/hero-main'

function App() {
  return (
    <div className="h-screen w-full">
      <HeroSection />
    </div>
  );
}

export default App;