import { useEffect, useState, VFC } from "react";

import { GrpcWebImpl, PingClientImpl } from "../protobuf/protobuf/ping";

const Ping: VFC = () => {
  document.title = "Ping - Q'n'A";

  const [message, setMessage] = useState("");

  const rpc = new GrpcWebImpl("/grpc", {
    debug: false,
  });

  const pingClient = new PingClientImpl(rpc);
  useEffect(() => {
    pingClient
      .Ping({})
      .then((response) => {
        setMessage(response.message);
      })
      .catch((error) => {
        alert(error.message);
      });
  }, []);

  return (
    <>
      <p>Message From Server:</p>
      <p>{message}</p>
    </>
  );
};

export default Ping;
