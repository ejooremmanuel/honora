import React, { useEffect } from "react";
import { getData } from "../services/services";

const Messages = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    getData().then((res) => {
      setData(res.data.data);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.map((dat) => {
            return (
              <div key={dat._id}>
                {dat.name}
                <p>{dat.message}</p>
                <p>{dat.company}</p>
                <p>{dat.email}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Messages;
