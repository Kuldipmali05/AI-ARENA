import express from "express";
import runGraph from "./ai/graph.ai.js";
import cors from "cors";
import { geminiModel } from "./ai/model.ai.js";

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true,
  }),
);

app.get("/", async (req, res) => {
  const result = await runGraph("Write a code for binary search in JS");
  res.json(result);
});

app.post("/invoke", async (req, res) => {
  const { input } = req.body;
  const result = await runGraph(input);
  res.status(200).json({
    message: "Graph executed successfully",
    success: true,
    result,
  });
});

app.get("/test-gemini", async (req, res) => {
  try {
    const response = await geminiModel.invoke("Say only: Hello");

    res.json({
      success: true,
      response,
    });
  } catch (error) {
    console.error("Gemini Error:", error);

    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : error,
    });
  }
});

export default app;
