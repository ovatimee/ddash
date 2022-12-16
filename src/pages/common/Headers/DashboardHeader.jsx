import React, { useLayoutEffect } from "react";
import { useTranslation } from "react-i18next";
import Header, { HeaderLeft, HeaderRight } from "../../../layout/Header/Header";
// import { Popover } from "bootstrap";
// import Button from "../../../components/bootstrap/Button";
import useDarkMode from "../../../hooks/useDarkMode";
import LANG, { getLangWithKey } from "../../../lang";
// import Dropdown, {
//   DropdownItem,
//   DropdownMenu,
//   DropdownToggle,
// } from "../../../components/bootstrap/Dropdown";
import showNotification from "../../../components/extras/showNotification";
import {
  ArrowLeftIcon,
  LightBulbIcon,
  MoonIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import MaterialIconsReact from "material-icons-react";
// import Icon from "../../../components/icon/Icon";
// import Spinner from "../../../components/bootstrap/Spinner";

const DashboardHeader = () => {
  const { darkModeStatus, setDarkModeStatus } = useDarkMode();
  const styledBtn = {
    color: darkModeStatus ? "dark" : "light",
    hoverShadow: "default",
    isLight: !darkModeStatus,
    size: "lg",
  };
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng).then(() =>
      showNotification(
        <span className="d-flex align-items-center">
          {/* <Icon icon={getLangWithKey(lng)?.icon} size="lg" className="me-1" /> */}
          <span>{`Language changed to ${getLangWithKey(lng)?.text}`}</span>
        </span>,
        'You updated the language of the site. (Only "Aside" was prepared as an example.)'
      )
    );
  };
  /**
   * Language attribute
   */
  useLayoutEffect(() => {
    document.documentElement.setAttribute("lang", i18n.language);
  });
  return (
    <Header>
      <HeaderLeft>
        {/* <Popovers title='DashboardHeader.tsx' desc={<code>src/pages/common/Headers/DashboardHeader.tsx</code>}> */}
        {/* 	HeaderLeft */}
        {/* </Popovers> */}
        <code>DashboardHeader.tsx</code>
        <div className="">
          {/* <FontAwesomeIcon icon={["fab","circle"]} color="#ddd" size="lg" className="h-4 w-4 text-red-500 bg-red-200" listItem /> */}

          <input
            type="text"
            name="search-bar"
            placeholder="Search"
            className="bg-slate-200 py-2.5 px-4 rounded-md"
          />
        </div>
      </HeaderLeft>

      <HeaderRight>
        <div className="row g-3 align-items-center">
          <div className="col-auto">
            {/* <Popovers */}
            {/*   title="DashboardHeader.tsx" */}
            {/*   desc={<code>src/pages/common/Headers/DashboardHeader.tsx</code>} */}
            {/* > */}
            {/*   HeaderRight */}
            {/* </Popovers> */}
            <code className="ps-3">DashboardHeader.tsx</code>
          </div>
          {/* Dark Mode */}
          <div className="col-auto">
            {/* <Popover trigger="hover" desc="Dark / Light mode"> */}
            <button
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...styledBtn}
              onClick={() => setDarkModeStatus(!darkModeStatus)}
              aria-label="Toggle fullscreen"
              data-tour="dark-mode"
            >
              {darkModeStatus ? (
                <MoonIcon className="h-7 w-7" />
              ) : (
                <SunIcon className="h-7 w-7" />
              )}
            </button>
            {/* </Popover> */}
          </div>
          {/* Lang Selector */}
          <div className="col-auto">
            {/* <Dropdown> */}
            {/*   <DropdownToggle hasIcon={false}> */}
            {/*     {typeof getLangWithKey(i18n.language)?.icon === "undefined" ? ( */}
            {/*       <Button */}
            {/*         // eslint-disable-next-line react/jsx-props-no-spreading */}
            {/*         {...styledBtn} */}
            {/*         className="btn-only-icon" */}
            {/*         aria-label="Change language" */}
            {/*         data-tour="lang-selector" */}
            {/*       > */}
            {/*         <Spinner isSmall inButton="onlyIcon" isGrow /> */}
            {/*       </Button> */}
            {/*     ) : ( */}
            {/*       <Button */}
            {/*         // eslint-disable-next-line react/jsx-props-no-spreading */}
            {/*         {...styledBtn} */}
            {/*         icon={getLangWithKey(i18n.language)?.icon} */}
            {/*         aria-label="Change language" */}
            {/*         data-tour="lang-selector" */}
            {/*       /> */}
            {/*     )} */}
            {/*   </DropdownToggle> */}
            {/*   <DropdownMenu isAlignmentEnd data-tour="lang-selector-menu"> */}
            {/*     {Object.keys(LANG).map((i) => ( */}
            {/*       <DropdownItem key={LANG[i].lng}> */}
            {/*         <Button */}
            {/*           icon={LANG[i].icon} */}
            {/*           onClick={() => changeLanguage(LANG[i].lng)} */}
            {/*         > */}
            {/*           {LANG[i].text} */}
            {/*         </Button> */}
            {/*       </DropdownItem> */}
            {/*     ))} */}
            {/*   </DropdownMenu> */}
            {/* </Dropdown> */}
          </div>
        </div>
      </HeaderRight>
    </Header>
  );
};
export default DashboardHeader;
