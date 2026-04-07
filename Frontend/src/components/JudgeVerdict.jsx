import { Scale } from 'lucide-react';

export default function JudgeVerdict({ score1, score2, reasoning1, reasoning2 }) {
  return (
    <div className="md:ml-16 bg-[#1a1c1c] text-zinc-50 rounded-2xl overflow-hidden shadow-lg border border-zinc-800">
      <div className="bg-[#2f3131] px-5 py-4 border-b border-[#474747] flex items-center gap-3">
        <Scale size={18} className="text-zinc-400" />
        <h3 className="font-semibold text-sm tracking-wide uppercase text-zinc-200">Judge Verdict</h3>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#474747]">
        <div className="bg-[#1a1c1c] p-6 md:p-8 flex flex-col gap-4 relative">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <span className="text-8xl font-black">{score1}</span>
          </div>
          <div className="flex items-baseline gap-2 z-10 border-b border-zinc-800 pb-4 mb-2">
            <span className="text-zinc-500 font-medium text-sm tracking-widest uppercase">Sol 1</span>
            <span className="ml-auto text-3xl font-semibold text-white">{score1}<span className="text-zinc-500 text-xl font-normal">/10</span></span>
          </div>
          <p className="text-zinc-300 leading-relaxed z-10 text-[15px]">{reasoning1}</p>
        </div>
        <div className="bg-[#1a1c1c] p-6 md:p-8 flex flex-col gap-4 relative">
          <div className="absolute top-0 right-0 p-6 opacity-10 pointer-events-none">
            <span className="text-8xl font-black">{score2}</span>
          </div>
          <div className="flex items-baseline gap-2 z-10 border-b border-zinc-800 pb-4 mb-2">
            <span className="text-zinc-500 font-medium text-sm tracking-widest uppercase">Sol 2</span>
            <span className="ml-auto text-3xl font-semibold text-white">{score2}<span className="text-zinc-500 text-xl font-normal">/10</span></span>
          </div>
          <p className="text-zinc-300 leading-relaxed z-10 text-[15px]">{reasoning2}</p>
        </div>
      </div>
    </div>
  );
}
