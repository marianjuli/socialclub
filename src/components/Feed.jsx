import { Box, Stack, Skeleton } from "@mui/material";
import React, { useState } from "react";
import Post from "./Post";



const Feed = () => {
  return (
    <Box flex={5} p={2} sx={{ xs: 0, md: 2 }}>
      <Post />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </Box>
  );
};

export default Feed;
