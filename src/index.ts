import { server } from "./server/Server";

server.listen(process.env.PORT || 3000, () => {
  console.log(`Example app listening on port 3000`);
});
