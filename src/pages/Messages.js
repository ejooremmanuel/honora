import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { getData, deleteData } from "../services/services";
import {
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";

import { FaRegTrashAlt } from "react-icons/fa";

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

  const rows = data;

  return (
    <div style={{ marginTop: "50px" }}>
      <Navbar />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <TableContainer
          component={Paper}
          style={{ width: "95vw", margin: "30px auto" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Full Name</TableCell>
                <TableCell align="right">Email Address</TableCell>
                <TableCell align="right">Company</TableCell>
                <TableCell align="right">Message</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell>No messages yet</TableCell>
                </TableRow>
              ) : (
                <>
                  {rows.map((row) => (
                    <TableRow
                      key={row._id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">
                        <a
                          style={{ textDecoration: "none", color: "black" }}
                          href={`mailto:${row.email}`}
                        >
                          {row.email}
                        </a>
                      </TableCell>
                      <TableCell align="right">{row.company}</TableCell>
                      <TableCell align="right">{row.message}</TableCell>
                      <TableCell align="right">
                        <FaRegTrashAlt
                          onClick={() => {
                            deleteData(row._id);
                          }}
                          style={{ cursor: "pointer" }}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};
export default Messages;
