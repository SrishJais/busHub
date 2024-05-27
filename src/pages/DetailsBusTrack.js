import React, { useEffect, useState } from 'react';

import PageNotFound from "./PageNotFound";
//for loading
import { TailSpin } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import { Typography } from '@mui/material';

const DetailsBusTrack = () => {

  const { id } = useParams();
  const [idFound, setIdFound] = useState(false);

  const [loading, setLoading] = useState(true); // to avoid flash after refresh

  const [oneData, setOneData] = useState({});

//hardcoded passed  data as array of obj
 const data=[{
  name:"201",
  distance:"10m",
  time:"30min",
  id:"123"
 }];
  useEffect(() => {
    if (id !== undefined && id !== "") {
      data.forEach((val) => {
        if (val.id === id) {
          //req/valid id
          setIdFound(true);
          setOneData(val);
        }
      });
      // either id found or not found , make it false after execution of useEffect
      setLoading(false);
    }
    // eslint-disable-line react-hooks/exhaustive-deps
  }, [id]);
  
  // const { property1,property2,property3 } =oneData;


return (
    <>
      {loading ? (
        <div
          className="d-flex justify-content-center py-4 align-items-center"
          style={{ height: "91vh", color: "grey", fontWeight: "bolder" }}
        >
          <TailSpin height="70" color="grey" />
          Loading...
        </div>
      ) : (
        <>
          {idFound ? (
            <div>
               {/*____________________________Write details section here___________________ */}
               {/* {property1} */}
               <Typography>hgjhj</Typography>
            </div>
          ) : (
            <PageNotFound />
          )}
        </>
      )}
    </>
  );
};

export default DetailsBusTrack;
