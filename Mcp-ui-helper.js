#!/usr/bin/env node
import { createServer } from "@cursor-ai/tools/server";
import { z } from "zod";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

createServer({
  tools: [
    {
      name: "expandUiTask",
      description: "Takes a UI component task and expands it into implementation steps.",
      inputSchema: z.object({ task: z.string() }),
      execute: async ({ task }) => {
        const completion = await openai.chat.completions.create({
          model: process.env.OPENAI_MODEL,
          messages: [
            { role: "system", content: "You're a senior frontend developer using Next.js, Tailwind, and shadcn/ui." },
            { role: "user", content: `Break this task down into detailed steps:\n\n${task}` }
          ],
          temperature: parseFloat(process.env.DEFAULT_TEMPERATURE || "0.3")
        });
        return completion.choices[0].message.content;
      }
    }
  ]
});
