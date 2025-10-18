"use client";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function CustomDataGrid({
  columns = [],
  rows = [],
  noRowsLabel = "هیچ داده‌ای برای نمایش وجود ندارد!",
}) {
  return (
    <Box sx={{ overflowX: "auto", width: "100%" }}>
      <Box sx={{ height: 500, width: "100%", minWidth: "800px" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          disableRowSelectionOnClick
          localeText={{
            noRowsLabel,
          }}
          sx={{ borderRadius: "8px" }}
          disableColumnMenu
          disableColumnSorting
        />
      </Box>
    </Box>
  );
}

export default CustomDataGrid;
