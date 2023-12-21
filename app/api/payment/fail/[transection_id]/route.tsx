
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const PaymentFailPage = () => {
  const router = useRouter();
  useEffect(() => {
    // fetch necessary info using the transection_id
    // console.log(router?.query?.transection_id);
  }, [router]);

  return (
    <div>
      <p>Payment Unsuccessful...!</p>
      {/* <p>Payment Id: {router?.query?.transection_id || "---"}</p> */}
    </div>
  );
};

export default PaymentFailPage;