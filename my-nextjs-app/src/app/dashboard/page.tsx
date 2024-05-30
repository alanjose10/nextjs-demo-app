
import Button from "@/components/button";
import LineChart from "@/components/line-chart";

// import { convertToString } from "../_lib/date-utilities";

export default function Page() {

    const date = new Date();

    return (
        <div>
            <h1>dashboard homepage</h1>
            {/* <p>Date is {convertToString(date)}</p> */}
            <LineChart/>
            <Button></Button>
        </div>
    )
}