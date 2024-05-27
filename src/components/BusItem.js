import React from "react";
import { Box, Divider, Paper, Typography } from "@mui/material";
const BusItem = ({ busInfoitem_label, busitem_content, Iconcomp }) => {
  return (
    <Paper component={Box} my={2} px={1} className="busInfoItem">
      <div className="d-flex">
        <div style={{ fontSize: "15px" }} className="d-flex align-items-center">
          {/* bus info item icon*/}
          <span className="p-2 busItemIcon">{Iconcomp}</span>{" "}
          <Divider
            orientation="vertical"
            variant="middle"
            style={{ height: "40px", color: "red" }}
            flexItem
            className="mx-3"
          />
        </div>
        <div>
          <Typography variant="body2" className="busInfoItem_label py-1">
            {busInfoitem_label}
          </Typography>
          <Typography
            variant="h6"
            className={
              busitem_content === "Inactive"
                ? "activeBusStatus"
                : "busInfoItem_content"
            }
            style={{ fontSize: "15px", fontWeight: "bold" }}
          >
            {busitem_content}
          </Typography>
        </div>
      </div>
    </Paper>
  );
};

export default BusItem;
