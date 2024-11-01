import React from "react";
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import'./TodosLoading.css'

function TodosLoading() {
  return (
    // <Box sx={{ width: 400 }}>
    <Box className="TodosLoading" >
      <Skeleton />
      <Skeleton animation="wave" />
      <Skeleton animation={false} />
    </Box>
  );
}

export { TodosLoading };
