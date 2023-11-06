import React from "react";
type Basic2 = {
  icon: React.ReactNode;
  name: string;
  description: string;
};
export const Basic2 = ({ icon, name, description }: Basic2) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        columnGap: "5px",
      }}
    >
      <p
        style={{
          padding: "none",
          fontSize: "18px",
          fontWeight: "600",
          textTransform: "capitalize",
        }}
      >
        <span
          style={{
            verticalAlign: "middle",
            color: "#81AAD9",
            marginRight: "5px",
          }}
        >
          {icon}
        </span>
        {name}
      </p>
      <span style={{ color: "#7C7D7E" }}>{description}</span>
    </div>
  );
};
