import { Send } from 'lucide-react';

export default function ChatInput({ input, setInput, handleSend }) {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-linear-to-t from-zinc-50 via-zinc-50/90 to-transparent pt-20 pb-8 px-4 md:px-8">
      <div className="max-w-4xl mx-auto relative group">
        <div className="absolute -inset-0.5 bg-linear-to-r from-zinc-200 to-zinc-300 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <textarea
          className="relative w-full bg-white border border-zinc-300 rounded-2xl pl-6 pr-20 py-4.5 text-[16px] focus:outline-none focus:border-zinc-500 resize-none shadow-sm transition-colors text-zinc-800 placeholder-zinc-400"
          placeholder="Provide a problem to compare solutions..."
          rows={1}
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            e.target.style.height = 'auto';
            e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleSend();
              e.target.style.height = 'auto'; // Reset height
            }
          }}
        />
        <button 
          onClick={() => {
            handleSend();
            const textarea = document.querySelector('textarea');
            if(textarea) textarea.style.height = 'auto';
          }}
          disabled={!input.trim()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-3 bg-zinc-900 text-white rounded-xl hover:bg-zinc-800 disabled:opacity-40 disabled:bg-zinc-800 disabled:cursor-not-allowed transition-all"
        >
          <Send size={18} />
        </button>
      </div>
      <p className="text-center text-xs text-zinc-400 mt-4 font-medium tracking-wide">
        AI ARENA
      </p>
    </div>
  );
}
