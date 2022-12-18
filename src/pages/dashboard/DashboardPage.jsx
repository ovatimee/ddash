import React from "react";
import PageWrapper from "../../layout/PageWrapper/PageWrapper";
import Page from "../../layout/Page/Page";
import { ShoppingBag } from "react-feather";
import InfoCard from "../../components/Cards/InforCard";
import RoundIcon from "../../components/RoundIcon";
import Line from "../../components/Charts/Line";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import BreadCrumb from "../../components/BreadCrumb";
import PageTitle from "../../components/PageTitle";
import { useFetch } from "../../hooks/useFetchData";
import ResizableBox from "../../components/ResizableBox";

const DashboardPage = () => {
  const users = useFetch("https://randomuser.me/api/?results=5");
  if (users.data === "undefined") {
    users.reFetch();
  }
  const data = users.data;
  return (
    <PageWrapper title="Dashboard Page">
      <Page>
        <PageTitle>Dashboard</PageTitle>
        <BreadCrumb />
        <div className=" my-3">
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
          <div className="flex flex-col lg:flex-row">
            <div className="w-full">
              <Line />
            </div>
            <div>
              <div className="flex justify-between">
                <h3>Best Sellers</h3>
                <EllipsisVerticalIcon className="w-6 h-6" />
              </div>
              <hr />
              <div className="py-4 w-96">
                {data.results.map((user) => (
                  <div className="flex items-center justify-between pb-3">
                    <div className="flex">
                      <div className="pr-5">
                        <img
                          src={user.picture.thumbnail}
                          alt="user-profile"
                          className="rounded-2xl"
                        />
                      </div>
                      <div className="flex flex-col justify-between">
                        <h3>{`${user.name.first} ${user.name.last}`}</h3>
                        <p>{user.gender}</p>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between">
                      <h3>{user.phone.split("-")[1]}</h3>
                      <p>120</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Page>
    </PageWrapper>
  );
};
export default DashboardPage;
