import React from "react";
import { Button as TableButton, Tooltip } from "antd";

const Button = ({ title, type, shape, icon, children, ...props }) => {
  return (
    <Tooltip title={title}>
      <TableButton type={type} shape={shape} icon={icon} {...props}>
        {children}
      </TableButton>
    </Tooltip>
  );
};

export default Button;
