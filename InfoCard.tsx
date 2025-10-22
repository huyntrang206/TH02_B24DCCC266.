import React from "react";

interface InfoCardProps {
  title: string;
  children?: React.ReactNode;
}

const InfoCard: React.FC<InfoCardProps> = ({ title, children }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 6, marginBottom: 12 }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default InfoCard;
