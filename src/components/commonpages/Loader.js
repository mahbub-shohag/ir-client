import React, { useState } from 'react'
import { css } from "@emotion/react";
import ScaleLoader from "react-spinners/ScaleLoader";

const override = css`
  display: block;
  margin-top:18% !important;
  margin-left:50% !important;
  margin: 0 auto;
  border-color: red;
`;
 function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#0beef0");
    return (
        <>
            <ScaleLoader color={color} loading={loading} css={override} size={150} />
        </>
    )
}
export default Loader;
