"use client";
import CustomDataGrid from "../ui/CustomDataGrid";
import { formatDate } from "@/app/_lib/utils";
import { Switch } from "@mui/material";
import ContextMenu from "../ui/ContextMenu";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import CreateUpdatePatientForm from "./CreateUpdatePatientForm";

function PatientsTable({ patients = [] }) {
  const { openModal } = useGlobalContext();

  const contextMenuItems = (patient) => [
    {
      label: "ویرایش",
      icon: EditIcon,
      handler: () => {
        openModal({
          title: `ویرایش بیمار ${patient?.name}`,
          content: <CreateUpdatePatientForm patient={patient} />,
        });
      },
    },
    { label: "حذف", icon: DeleteForeverIcon, handler: () => {} },
  ];

  const columns = [
    {
      field: "id",
      headerName: "شناسه",
      flex: 0.5,
      align: "right",
      editable: false,
    },
    {
      field: "name",
      headerName: "نام و نام‌خانوادگی",
      flex: 1.2,
      align: "right",
      editable: false,
    },
    {
      field: "dateOfBirth",
      headerName: "تاریخ تولد",
      flex: 0.8,
      align: "right",
      editable: false,
    },
    {
      field: "email",
      headerName: "ایمیل",
      flex: 1.2,
      editable: false,
    },
    {
      field: "isActive",
      headerName: "وضعیت",
      flex: 0.6,
      align: "center",
      renderCell: (params) => (
        <Switch
          checked={params.value}
          color="primary"
          onChange={(e) => {
            console.log(
              `Patient ${params.row.name} is now ${
                e.target.checked ? "active" : "inactive"
              }`
            );
          }}
        />
      ),
      editable: false,
    },
    {
      field: "actions",
      headerName: "عملیات‌ها",
      flex: 0.6,
      align: "center",
      renderCell: (params) => (
        <ContextMenu items={contextMenuItems(params.formattedValue)} />
      ),
      editable: false,
    },
  ];

  const formattedPatients = patients?.result?.map((patient) => {
    const { name, dateOfBirth, email, isActive, id } = patient;

    return {
      id,
      name,
      dateOfBirth: formatDate(dateOfBirth),
      email,
      isActive,
      actions: patient,
    };
  });

  return (
    <CustomDataGrid
      rows={formattedPatients}
      columns={columns}
      noRowsLabel="هیچ بیماری یافت نشد!"
    />
  );
}

export default PatientsTable;
