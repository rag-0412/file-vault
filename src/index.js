import { httpServerHandler} from "cloudflare:node";
import express from "express";
import fileRoutes from "./routes/file.routes.js"
import { env } from "cloudflare:workers";
import dotenv from 'dotenv';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json()); 

app.get("/", (req, res) => {
	res.json({
		success: true,
		message: "Express.js is running on CloudFlare Workers!",
	});

});

app.get("/api/health", (req , res) =>{
	res.json({
		success:true,
		message: "Server is Healthy and Working Fine..",
	});
});

app.use("/api/files", fileRoutes);

app.listen(PORT, () =>{
	console.log(`server is running on the port ${PORT}`);

});
export default httpServerHandler({ port: 3000 });