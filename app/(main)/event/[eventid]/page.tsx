import React from "react";

const eventdetails = ({ params }: { params: { eventid: string } }) => {
  return <p className="text-white-1"> eventdetails for {params.eventid}</p>;
};

export default eventdetails;
