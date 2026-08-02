"use client";

import { motion } from "framer-motion";
import { MessageSquare, Bot, User, Send } from "lucide-react";

export function ChatbotVisual() {
  return (
    <div className="relative w-full max-w-lg mx-auto py-4">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl bg-neutral-950 border border-neutral-800 shadow-2xl p-4 sm:p-5 text-white"
      >
        {/* Chat UI Header */}
        <div className="flex items-center justify-between pb-3 border-b border-neutral-800 mb-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-full bg-violet-600 flex items-center justify-center">
              <Bot className="h-3.5 w-3.5 text-white" />
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-white block leading-tight">
                ARKAYA AI ASSISTANT
              </span>
              <span className="text-[10px] font-mono text-emerald-400 block">
                ACTIVE • CONTEXT-AWARE
              </span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-neutral-400 bg-neutral-900 px-2 py-0.5 rounded border border-neutral-800">
            RAG ENABLED
          </span>
        </div>

        {/* Conversation Stream */}
        <div className="space-y-3 font-sans text-xs">
          {/* Message 1: User */}
          <div className="flex items-start gap-2 justify-end">
            <div className="max-w-[80%] rounded-2xl rounded-tr-none bg-blue-600 text-white p-3 shadow-md">
              Can you help me find the right AI solution for our customer support?
            </div>
            <div className="h-6 w-6 rounded-full bg-neutral-800 flex items-center justify-center shrink-0">
              <User className="h-3 w-3 text-neutral-300" />
            </div>
          </div>

          {/* Message 2: AI */}
          <div className="flex items-start gap-2">
            <div className="h-6 w-6 rounded-full bg-violet-600 flex items-center justify-center shrink-0">
              <Bot className="h-3 w-3 text-white" />
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-none bg-neutral-900 border border-neutral-800 text-neutral-200 p-3 space-y-1.5 shadow-md">
              <p>
                Absolutely. We build contextual AI Chatbots trained directly on your business knowledge base and CRM data.
              </p>
              <div className="pt-1 flex items-center gap-2 text-[10px] font-mono text-violet-400">
                <span className="h-1.5 w-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span>Knowledge Retrieval: 99.4% precision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Input Bar Wireframe */}
        <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center gap-2">
          <div className="flex-1 bg-neutral-900 border border-neutral-800 rounded-xl px-3 py-2 text-neutral-500 font-mono text-[11px]">
            Type your inquiry or workflow question...
          </div>
          <div className="h-8 w-8 rounded-xl bg-violet-600 flex items-center justify-center text-white shrink-0">
            <Send className="h-3.5 w-3.5" />
          </div>
        </div>

      </motion.div>
    </div>
  );
}
