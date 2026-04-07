import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import 'highlight.js/styles/github-dark.css';
import { Bot } from 'lucide-react';

export default function SolutionCard({ title, solution, isWinner }) {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl flex flex-col overflow-hidden shadow-sm transition-shadow hover:shadow-md">
      <div className="bg-zinc-50/80 border-b border-zinc-200 px-5 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Bot size={18} className="text-zinc-400" />
          <h3 className="font-semibold text-sm tracking-wide text-zinc-600 uppercase">{title}</h3>
        </div>
        {isWinner && 
          <span className="bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded font-medium">Winner</span>
        }
      </div>
      <div className="p-6 md:p-8 prose prose-zinc prose-sm md:prose-base max-w-none prose-headings:font-semibold prose-a:text-blue-600">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {solution}
        </ReactMarkdown>
      </div>
    </div>
  );
}
