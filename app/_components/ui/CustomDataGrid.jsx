"use client";
import { Box, Skeleton } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

function CustomDataGrid({
  columns = [],
  rows = [],
  noRowsLabel = "هیچ داده‌ای برای نمایش وجود ندارد!",
  loading = false,
}) {
  const skeletonColumns = columns.map((col) => ({
    ...col,
    renderCell: () => <Skeleton variant="text" width="100%" height={40} />,
  }));

  const loadingRows = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
  }));

  return (
    <Box sx={{ overflowX: "auto", width: "100%" }}>
      <Box sx={{ height: 500, width: "100%", minWidth: "800px" }}>
        <DataGrid
          rows={loading ? loadingRows : rows}
          columns={loading ? skeletonColumns : columns}
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
