import { Router } from "express";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

import { Post } from "../mongodb/models";

dotenv.config();

export const router = Router();
