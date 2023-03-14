import app from "../external/config/app";

const port = process.env.API_PORT;
app.listen(port, () => {
  console.log(`Server is listening on -p ${port}...\n`);
});
