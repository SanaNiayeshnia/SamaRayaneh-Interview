"use client";

import { togglePatientActiveStatus } from "@/app/_lib/actions";
import { Switch } from "@mui/material";
import { useOptimistic } from "react";

function PatientStatusToggler({ checked = false, patientId = "" }) {
  //use optimisticValue to keep the ui smooth
  const [optimisticStatus, toggleOptimisticStatus] = useOptimistic(
    checked,
    (status) => !status
  );

  async function onChange() {
    toggleOptimisticStatus();
    await togglePatientActiveStatus(patientId);
  }

  return (
    <Switch checked={optimisticStatus} color="primary" onChange={onChange} />
  );
}

export default PatientStatusToggler;
