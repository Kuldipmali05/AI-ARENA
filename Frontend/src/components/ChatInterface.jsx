import { useState, useRef, useEffect } from "react";
import { Scale } from "lucide-react";

import ChatInput from "./ChatInput";
import UserPrompt from "./UserPrompt";
import SolutionCard from "./SolutionCard";
import JudgeVerdict from "./JudgeVerdict";
import axios from "axios";

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newProblem = input.trim();
    setInput("");

    const response = await axios.post("http://localhost:3000/invoke", {
      input: newProblem,
    });

    const data = response.data;

    console.log(data);

    // Generate dummy response based on prompt
    const newChat = {
      id: Date.now(),
      problem: newProblem,
      ...data.result,
    };

    setMessages((prev) => [...prev, newChat]);
  };

  return (
    <>
      {/* Main Chat Area */}
      <main className="flex-1 overflow-y-auto px-4 md:px-8 pt-10 pb-40">
        <div className="max-w-6xl mx-auto space-y-24">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-[50vh] text-zinc-400 flex-col gap-4">
              <Scale size={48} className="opacity-20" />
              <p className="text-lg">What would you like to compare today?</p>
            </div>
          ) : (
            messages.map((chat, index) => (
              <div key={index} className="space-y-10 group">
                <UserPrompt text={chat.problem} />

                {/* Solutions Container */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:ml-16">
                  <SolutionCard
                    title="Solution 1"
                    solution={chat.solution_1}
                    isWinner={
                      chat.judge.solution_1_score >= chat.judge.solution_2_score
                    }
                  />
                  <SolutionCard
                    title="Solution 2"
                    solution={chat.solution_2}
                    isWinner={
                      chat.judge.solution_2_score > chat.judge.solution_1_score
                    }
                  />
                </div>

                <JudgeVerdict
                  score1={chat.judge.solution_1_score}
                  score2={chat.judge.solution_2_score}
                  reasoning1={chat.judge.solution_1_reasoning}
                  reasoning2={chat.judge.solution_2_reasoning}
                />
              </div>
            ))
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      <ChatInput input={input} setInput={setInput} handleSend={handleSend} />
    </>
  );
};

export default ChatInterface;
