import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper";
import SubHeader, {
  SubHeaderLeft,
  SubHeaderRight,
  SubheaderSeparator,
} from "../../layout/SubHeader/SubHeader";
import Page from "../../layout/Page/Page";
import { ShoppingBag } from "react-feather";
import InfoCard from "../../components/Cards/InforCard";
import RoundIcon from "../../components/RoundIcon";
import Chart from "../../components/extras/Chart";
// import Popovers from "../../components/bootstrap/Popovers";
const DashboardPage = () => {
       
        const options = {
          series: [{
          name: 'TEAM A',
          type: 'column',
          data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
          name: 'TEAM B',
          type: 'area',
          data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
          name: 'TEAM C',
          type: 'line',
          data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
          chart: {
          height: 350,
          type: 'line',
          stacked: false,
        },
        stroke: {
          width: [0, 2, 5],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: "vertical",
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
          '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
        ],
        markers: {
          size: 0
        },
        xaxis: {
          type: 'datetime'
        },
        yaxis: {
          title: {
            text: 'Points',
          },
          min: 0
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y) {
              if (typeof y !== "undefined") {
                return y.toFixed(0) + " points";
              }
              return y;
        
            }
          }
        }
        };
  return (
    <PageWrapper title="Dashboard Page">
      <SubHeader>
        <SubHeaderLeft>
          {/* <Popovers */}
          {/*   title="DashboardPage.tsx" */}
          {/*   desc={<code>src/pages/dashboard/DashboardPage.tsx</code>} */}
          {/* > */}
          {/*   SubHeaderLeft */}
          {/* </Popovers> */}
          <code>DashboardPage.tsx</code>
          <SubheaderSeparator />
        </SubHeaderLeft>
        <SubHeaderRight>
          {/* <Popovers */}
          {/*   title="DashboardPage.tsx" */}
          {/*   desc={<code>src/pages/dashboard/DashboardPage.tsx</code>} */}
          {/* > */}
          {/*   SubHeaderRight */}
          {/* </Popovers> */}
          <code>DashboardPage.tsx</code>
        </SubHeaderRight>
      </SubHeader>
      <Page>
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
          <InfoCard title="Total clients" value="6389">
            
            <RoundIcon
              icon={ShoppingBag}
              iconColorClass="text-orange-500 dark:text-orange-100"
              bgColorClass="bg-orange-100 dark:bg-orange-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Account balance" value="$ 46,760.89">
            <RoundIcon
              icon={ShoppingBag}
              iconColorClass="text-green-500 dark:text-green-100"
              bgColorClass="bg-green-100 dark:bg-green-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="New sales" value="376">
            <RoundIcon
              icon={ShoppingBag}
              iconColorClass="text-blue-500 dark:text-blue-100"
              bgColorClass="bg-blue-100 dark:bg-blue-500"
              className="mr-4"
            />
          </InfoCard>

          <InfoCard title="Pending contacts" value="35">
            <RoundIcon
              icon={ShoppingBag}
              iconColorClass="text-teal-500 dark:text-teal-100"
              bgColorClass="bg-teal-100 dark:bg-teal-500"
              className="mr-4"
            />
          </InfoCard>
        </div>
          <Chart options={options} />
        <div className="row">
          <div className="col-12 mb-3">
            {/* <Popovers */}
            {/*   title="DashboardPage.tsx" */}
            {/*   desc={<code>src/pages/dashboard/DashboardPage.tsx</code>} */}
            {/* > */}
            {/*   Page */}
            {/* </Popovers> */}
            <code className="ps-3">DashboardPage.tsx</code>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};
export default DashboardPage;
