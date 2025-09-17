import { NextResponse, type NextRequest } from "next/server";
import { streamText } from "ai";
import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { imageUnderstandPrompt } from "@/constants/prompt";

const BASE_URL =
  process.env.AI_PROVIDER_BASE_URL || "https://text.pollinations.ai/openai";
const API_KEY =
  process.env.AI_PROVIDER_API_KEY || process.env.POLLINATIONS_AI_API_KEY;
const DEFAULT_MODEL = process.env.AI_PROVIDER_DEFAULT_MODEL || "openai";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json(
      { status: "error", message: "Missing file" },
      { status: 400 }
    );
  }
  if (file.size > 2097152) {
    return NextResponse.json(
      { status: "error", message: "File size exceeds 2MB limit" },
      { status: 400 }
    );
  }

  const openAICompatible = createOpenAICompatible({
    name: "openAICompatible",
    baseURL: BASE_URL,
    apiKey: API_KEY,
  });

  const image = await file.arrayBuffer();

  const result = streamText({
    model: openAICompatible(DEFAULT_MODEL),
    system: imageUnderstandPrompt,
    messages: [
      {
        role: "user",
        content: [
          { type: "text", text: "Describe the image in detail." },
          { type: "image", image },
        ],
      },
    ],
  });

  return result.toTextStreamResponse();
}
