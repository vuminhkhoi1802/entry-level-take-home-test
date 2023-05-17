import React, { useState, useEffect } from "react";
import { Input, Row, Col, Select } from "antd";
import { Sessions, Status } from "../constant";
import ListSessions from "./ListSessions";
import { fetchData } from "../servers";
const { Option } = Select;

const Home: React.FC = () => {
  const [data, setData] = useState<Sessions[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(6);
  const [total, setTotal] = useState<number>(0);
  const [shortTitle, setShortTitle] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  useEffect(() => {
    getData();
  }, [currentPage, pageSize]);

  const getData = async () => {
    const response = await fetchData(currentPage, pageSize, shortTitle, status);
    setData(response.data);
    setTotal(parseInt(response.total));
  };

  const handlePaginationChange = (page: number, pageSize?: number) => {
    setCurrentPage(page);
    if (pageSize) {
      setPageSize(pageSize);
    }
  };

  const handleSearchByShortTitle = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value) {
      setShortTitle(event.target.value);
    } else {
      setShortTitle("");
    }
  };

  const handleSearchStatus = async (value: Status) => {
    setStatus(value);
    const response = await fetchData(currentPage, pageSize, shortTitle, value);
    setData(response.data);
    setTotal(parseInt(response.total));
  };

  const handleSearch = async () => {
    const response = await fetchData(currentPage, pageSize, shortTitle, status);
    setData(response.data);
    setTotal(parseInt(response.total));
  };

  return (
    <div>
      <Row gutter={16}>
        <Col className="gutter-row" span={12}>
          <Input.Search
            style={{ margin: "16px 0" }}
            placeholder="Search by short_title"
            value={shortTitle}
            onChange={handleSearchByShortTitle}
            onSearch={handleSearch}
          />
        </Col>
        <Col className="gutter-row" span={12}>
          <Select
            style={{ width: 200, margin: "16px 0" }}
            placeholder="Select status"
            onChange={handleSearchStatus}
          >
            <Option value="OFFERING">OFFERING</Option>
            <Option value="RUNNING">RUNNING</Option>
            <Option value="OFFBOARDING">OFFBOARDING</Option>
          </Select>
        </Col>
      </Row>
      {Array.isArray(data) && data.length ? (
        <ListSessions
          data={data}
          currentPage={currentPage}
          pageSize={pageSize}
          total={total}
          onChange={handlePaginationChange}
        />
      ) : (
        "No Data"
      )}
    </div>
  );
};

export default Home;
