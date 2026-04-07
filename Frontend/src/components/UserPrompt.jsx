import { User } from 'lucide-react';

export default function UserPrompt({ text }) {
  return (
    <div className="flex gap-4 md:gap-6 items-start">
      <div className="w-10 h-10 rounded-full bg-zinc-200/80 flex items-center justify-center shrink-0 border border-zinc-300">
        <User size={18} className="text-zinc-600" />
      </div>
      <div className="bg-white border border-zinc-200 px-6 py-5 rounded-2xl text-[16px] md:text-lg w-full shadow-sm leading-relaxed text-zinc-800">
        {text}
      </div>
    </div>
  );
}
