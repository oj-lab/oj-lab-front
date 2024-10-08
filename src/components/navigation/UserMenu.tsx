import { useNavigate } from "react-router-dom";
import React from "react";
import { postSignOut } from "@/apis/auth";
import { useCookies } from "react-cookie";
import { useSelector } from "react-redux";
import { joinClasses } from "@/utils/common";
import { userInfoSelector } from "@/store/selectors";
import UserAvatar from "@/components/display/UserAvatar";
import UserCircleIcon from "../display/icons/tabler/UserFilledIcon";
import { useTranslation } from "react-i18next";

export interface UserMenuAction {
  name: string;
  href?: string;
  onClick?: () => void;
}

export interface UserMenuProps {
  avatarUrl?: string;
  actions?: Array<UserMenuAction>;
}

/**
 * @param {string} props.avatarUrl
 * @param {Array<{ name: string, href: string }>} props.navigation The name of navigation will be translated.
 */
const UserMenu: React.FC<UserMenuProps> = (props) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [, , removeCookie] = useCookies(["auth-token"]);
  const [open, setOpen] = React.useState(false);
  const userInfo = useSelector(userInfoSelector);
  const isLogined = userInfo !== undefined;

  React.useEffect(() => {
    document?.activeElement instanceof HTMLElement &&
      document.activeElement.blur();
  }, [open]);

  return (
    <>
      {open && ( // Close the dropdown when clicking outside
        <div
          className="fixed inset-0 z-[1]"
          onClick={() => {
            setOpen(false);
          }}
        />
      )}
      <div
        className={joinClasses(
          "dropdown dropdown-end",
          open && "dropdown-open",
        )}
        onClick={() => {
          setOpen(!open);
        }}
      >
        <div
          tabIndex={0}
          className={joinClasses(
            "btn btn-ghost px-2",
            open ? "z-[2]" : "z-[0]",
          )}
        >
          <UserAvatar
            alt={isLogined ? userInfo?.name : "user"}
            avatarUrl={userInfo?.avatarUrl}
            fallbackElement={
              !isLogined && (
                <UserCircleIcon className="h-5 w-5 text-neutral-content" />
              )
            }
            online={isLogined}
          />
          {isLogined && (
            <div className="flex flex-col items-start">
              <span>{userInfo?.name}</span>
              <span className="text-xs font-thin">{t("Welcome!")}</span>
            </div>
          )}
          {!isLogined && (
            <div className="flex flex-col items-start">
              <span>{t("Login")}</span>
              <span className="text-xs font-thin">{t("or Register")}</span>
            </div>
          )}
        </div>
        <ul
          tabIndex={0}
          className="menu dropdown-content z-[2] w-32 rounded border border-base-content/10 bg-base-100 shadow-2xl"
        >
          {isLogined && (
            <li key="logout">
              <span
                className="rounded"
                onClick={(e) => {
                  e.preventDefault();
                  postSignOut().then((res) => {
                    console.log(res);
                  });
                  removeCookie("auth-token");
                  window.location.href = import.meta.env.BASE_URL;
                }}
              >
                {t("Logout")}
              </span>
            </li>
          )}
          {!isLogined && (
            <li key="login">
              <span
                className="rounded"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/login");
                }}
              >
                {t("Login")}
              </span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

export default UserMenu;
