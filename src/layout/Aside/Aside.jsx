import React, { useContext, useState } from "react";
import classNames from "classnames";
import { useTranslation } from "react-i18next";
import Brand from "../Brand/Brand";
import Navigation, { NavigationLine } from "../Navigation/Navigation";
import User from "../User/User";
import { dashboardMenu, demoPages, layoutMenu } from "../../menu";
import ThemeContext from "../../contexts/themeContext";
import { CircleStackIcon, SwatchIcon } from "@heroicons/react/24/solid";
// import Icon from "../../components/icon/Icon";
// import Popovers from "../../components/bootstrap/Popovers";
const Aside = () => {
  const { asideStatus, setAsideStatus } = useContext(ThemeContext);
  // const { asideStyle, touchStatus, hasTouchButton, asideWidthWithSpace, x } = useAsideTouch();
  // const isModernDesign = process.env.REACT_APP_MODERN_DESGIN === 'true';
  // const constraintsRef = useRef(null);
  const [doc, setDoc] = useState(false);
  const { t } = useTranslation(["translation", "menu"]);
  return (
    <>
      <aside
        className={classNames(
          "aside",
          { open: asideStatus },
          {
            // 'aside-touch-bar-close': !touchStatus && hasTouchButton && isModernDesign,
            // 'aside-touch-bar-open': touchStatus && hasTouchButton && isModernDesign,
          }
        )}
      >
        <div className="aside-head">
          <Brand asideStatus={asideStatus} setAsideStatus={setAsideStatus} />
        </div>
        <div className="aside-body">
          <Navigation menu={dashboardMenu} id="aside-dashboard" />
          <NavigationLine />
          {!doc && (
            <>
              <Navigation menu={demoPages} id="aside-demo-pages" />
              <NavigationLine />
              <Navigation menu={layoutMenu} id="aside-menu" />
              <NavigationLine />
            </>
          )}

          {asideStatus && doc && <div className="p-4">Documentation</div>}
        </div>
        <div className="aside-foot">
          <nav aria-label="aside-bottom-menu">
            <div className="navigation">
              <div
                role="presentation"
                className="navigation-item cursor-pointer"
                onClick={() => {
                  setDoc(!doc);
                }}
                data-tour="documentation"
              >
                <span className="navigation-link navigation-link-pill">
                  <span className="navigation-link-info">
                    <SwatchIcon className="navigation-icon" />
                    <span className="navigation-text w-4 h-4">
                      {t("menu:Documentation")}
                    </span>
                  </span>
                  <span className="navigation-link-extra">
                    <CircleStackIcon
                      className={classNames(
                        "navigation-notification",
                        "text-success",
                        "animate__animated animate__heartBeat animate__infinite animate__slower"
                      )}
                    />
                  </span>
                </span>
              </div>
            </div>
          </nav>
          <User />
        </div>
      </aside>
    </>
  );
};
export default Aside;
