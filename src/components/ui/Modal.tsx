import React from 'react';
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";

export function Modal({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50" />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pt-20 sm:pt-4"
          >
            <div className="bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
              <button onClick={onClose} className="absolute right-4 top-4 text-gray-400 hover:text-white"><X size={20} /></button>
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
