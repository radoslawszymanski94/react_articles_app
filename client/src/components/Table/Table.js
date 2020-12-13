import React from "react";
import { Table as Tab, Empty } from "antd";

const Table = ({ columns, onChange, numberOfItems, articles }) => {
  return (
    <Tab
      locale={{ emptyText: <Empty description="No articles" /> }}
      columns={columns}
      dataSource={articles}
      onChange={onChange}
      pagination={{ pageSize: numberOfItems }}
    />
  );
};

export default Table;
