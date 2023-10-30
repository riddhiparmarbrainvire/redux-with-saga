import React, { useState } from "react";
// import { addUser } from "../slice/userSlice";
import { useSelector } from "react-redux";
import Input from "@mui/material/Input";
import { Box, Button, FormControl, Grid, Container } from "@mui/material";
// import { useNavigate } from "react-router-dom";

// let id: number = 10;
const Add: React.FC = () => {
  // const navigate = useNavigate();
  const users = useSelector((state: any) => state.userData.users);

  console.log(users, "users in add");
  const [input, setInput] = useState<string>("");

  // const dispatch = useDispatch();
  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInput(e.currentTarget.value);
  // };

  // const handleAdd = (e: React.FormEvent<HTMLButtonElement>) => {
  //   e.preventDefault();
  //   dispatch(
  //     addUser({
  //       id: ++id,
  //       name: input,
  //     })
  //   );
  //   setInput("");
  //   // navigate("/add-user");
  // };

  return (
    <>
      <Container>
        <FormControl>
          <Box sx={{ pt: 10, pb: 10 }}>
            <h2>Add User</h2>
            <Grid container spacing={2}>
              {/* <Grid item xs={12}>
                <Input
                  value={input}
                  onChange={handleChange}
                  name="name"
                  placeholder="Add name"
                />
              </Grid> */}
              {/* <Grid item xs={6}>
                <Input
                  value={input}
                  onChange={handleChange}
                  name="username"
                  placeholder="Add username"
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  value={input}
                  onChange={handleChange}
                  name="email"
                  placeholder="Add email"
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  value={input}
                  onChange={handleChange}
                  name="phone"
                  placeholder="Add phone"
                />
              </Grid> */}
            </Grid>
            <Box sx={{ textAlign: "right", pt: 5 }}>
              <Button
                variant="contained"
                // onClick={handleAdd}
              >
                Add User
              </Button>
            </Box>
          </Box>
        </FormControl>
      </Container>
    </>
  );
};

export default Add;
