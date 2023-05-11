import { Router } from "express";
import * as dotenv from "dotenv";
import { Configuration, OpenAIApi } from "openai";

dotenv.config();

export const router = Router();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openAI = new OpenAIApi(configuration);

router.route("/").get((req, res) => {
  res.send("Hello from dalle");
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;

    console.log("hi", req.body);

    const res = await fetch("https://api.openai.com/v1/images/generations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authentication: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      data: {
        prompt,
        n: 1,
        size: "1024x1024",
      },
    });

    // const aiResponse = await openAI.createImage({
    //   prompt,
    //   n: 1,
    //   size: "1024x1024",
    //   // response_format: "b64_json",
    // });
    // console.log("RES", aiResponse);

    // const image = aiResponse?.data?.data[0].b64_json;
    // res.status(200).json({ photo: image });
    res.status(200).json(req.body.prompt);
  } catch (error) {
    console.log(error?.respose?.data?.error?.message);
    res.status(500).send(error?.respose?.data?.error?.message);
  }
});
