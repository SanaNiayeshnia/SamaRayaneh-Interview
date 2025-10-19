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
    <div className="flex items-center">
      <p
        className={`text-sm transition-all duration-300 ${
          !optimisticStatus ? "text-primary-500" : ""
        }`}
      >
        غیر فعال
      </p>
      <Switch
        checked={optimisticStatus}
        color="primary"
        onChange={onChange}
        la
      />
      <p
        className={`text-sm transition-all duration-300 ${
          optimisticStatus ? "text-primary-500" : ""
        }`}
      >
        فعال
      </p>
    </div>
  );
}

export default PatientStatusToggler;
