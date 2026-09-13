import React from 'react';
import type { MenuItem } from '@/data/menu';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  return (
    <div className="group relative flex flex-col justify-between p-6 bg-white border border-[--color-muted-brown]/10 rounded-2xl shadow-sm transition-all duration-300 hover:shadow-md hover:border-[--color-primary]/30 hover:-translate-y-1 h-full">
      <div className="space-y-3">
        <div className="flex justify-between items-start gap-4">
          <h4 className="font-serif text-lg font-semibold text-[--color-espresso] group-hover:text-[--color-primary] transition-colors leading-tight">
            {item.name}
          </h4>
          <span className="font-medium text-[--color-accent] whitespace-nowrap">
            {item.price}
          </span>
        </div>
        {item.description && (
          <p className="text-sm text-[--color-muted-brown] leading-relaxed">
            {item.description}
          </p>
        )}
      </div>
      <div className="mt-6 pt-4 border-t border-[--color-muted-brown]/10">
        <span className="text-xs font-medium tracking-wider uppercase text-[--color-muted-brown]/70">
          {item.category}
        </span>
      </div>
    </div>
  );
}
