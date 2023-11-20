import React from "react";
// import Navbar from "./Login";
import SNavbar from "./Navbar";
import { Box, Toolbar, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const Homepage = () => {
  const [botStatus, setBotStatus] = useState("stopped");

  const startBot = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/start-bot");
      console.log(response.data);
      setBotStatus("running");
    } catch (error) {
      console.error("Error starting bot:", error);
    }
  };

  const stopBot = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/stop-bot");
      console.log(response.data);
      setBotStatus("stopped");
    } catch (error) {
      console.error("Error stopping bot:", error);
    }
  };

  return (
    <div>
      <SNavbar />

      <Box component="main" sx={{ p: 2 }}>
        {/* <Toolbar /> */}

        <div>
          <h1>Bot Control</h1>
          <p>Status: {botStatus}</p>
          <button class="btn btn-blue" type="button" onClick={startBot}>Start Bot</button>
          <button class="btn btn-blue" type="button" onClick={stopBot}>Stop Bot</button>
        </div>
      </Box>
    </div>
  );
};

export default Homepage;
