"use client";
import CustomDataGrid from "../ui/CustomDataGrid";
import { formatDate, sortData } from "@/app/_lib/utils";
import ContextMenu from "../ui/ContextMenu";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useGlobalContext } from "@/app/_providers/contexts/GlobalContextProvider";
import CreateUpdatePatientForm from "./CreateUpdatePatientForm";
import PatientStatusToggler from "./PatientStatusToggler";
import DeletePatientForm from "./DeletePatientForm";
import { useSearchParams } from "next/navigation";

function PatientsTable({ patients = [], loading = false }) {
  const { openModal } = useGlobalContext();
  const searchParams = useSearchParams();
  const patientStatusFilter = searchParams.get("status");
  const sortFilter = searchParams.get("sort") || "name-asc";
  const filteredPatients = patientStatusFilter
    ? patients?.filter((patient) =>
        patientStatusFilter === "active"
          ? patient.isActive === true
          : patientStatusFilter === "notActive"
          ? patient.isActive === false
          : true
      )
    : patients;
  const sortedPatients = sortData(filteredPatients, sortFilter);

  const patientActions = (patient) => [
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
    {
      label: "حذف",
      icon: DeleteForeverIcon,
      handler: () => {
        openModal({
          title: `حذف بیمار ${patient?.name}`,
          content: <DeletePatientForm patientId={patient?.id} />,
        });
      },
    },
  ];

  const columns = [
    {
      field: "id",
      headerName: "شناسه",
      flex: 0.8,
      align: "right",
      editable: false,
    },
    {
      field: "name",
      headerName: "نام و نام‌خانوادگی",
      flex: 1.2,
      editable: false,
    },
    {
      field: "dateOfBirth",
      headerName: "تاریخ تولد",
      flex: 0.8,
      editable: false,
    },
    {
      field: "email",
      headerName: "ایمیل",
      flex: 1.2,
      align: "right",
      editable: false,
    },
    {
      field: "isActive",
      headerName: "وضعیت",
      flex: 0.6,
      align: "center",
      renderCell: (params) => (
        <PatientStatusToggler
          patientId={params?.row?.id}
          checked={params.value}
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
        <ContextMenu items={patientActions(params.value)} />
      ),
      editable: false,
    },
  ];

  const formattedPatients = sortedPatients?.map((patient) => {
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
      noRowsLabel="هیچ بیماری با این فیلترها یافت نشد!"
      loading={loading}
    />
  );
}

export default PatientsTable;
