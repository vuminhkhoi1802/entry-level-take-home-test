import { Card, Pagination } from "antd";
import { Sessions } from "../constant";

type Props = {
  data: Sessions[];
  currentPage: number;
  pageSize: number;
  total: number;
  onChange: any;
};

function ListSessions({ data, currentPage, pageSize, total, onChange }: Props) {
  const convertDate = (dateTime: string) => {
    const date = new Date(dateTime);

    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();
    return `${month} ${day}`;
  };
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {data.length &&
        data?.map((item) => (
          <Card
            key={item.id}
            hoverable
            style={{ width: "calc(33% - 12px)", marginBottom: "24px" }}
            cover={
              <img alt={item.name} src={item.program[0].thumbnail_img_url} />
            }
          >
            <Card.Meta
              title={item.program[0].display_title}
              description={`${convertDate(item.start_date)} - ${convertDate(
                item.end_date
              )}`}
            />
          </Card>
        ))}
      <Pagination
        style={{ marginTop: "16px" }}
        current={currentPage}
        pageSize={pageSize}
        total={total}
        onChange={onChange}
        showSizeChanger
        pageSizeOptions={["6", "12", "18", "24", "30"]}
      />
    </div>
  );
}

export default ListSessions;
