/* eslint-disable jsx-a11y/anchor-is-valid */
import UserMenu, { UserMenuAction } from "../UserMenu";
import LanguageMenu from "../LanguageMenu";
import ThemeMenu from "../ThemeMenu";
import DarkLightToggle from "../DarkLightToggle";
import {
  TrophyIcon,
  ListBulletIcon,
  RectangleStackIcon,
} from "@heroicons/react/24/outline";
import PageMenu from "../PageMenu";
import { useUser } from "@/hooks/user";
import { UserResponse, postSignOut } from "@/api/auth";

const iconPath = `${import.meta.env.BASE_URL}images/oj-lab-icon.svg`;

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl: `${import.meta.env.BASE_URL}avatars/male-avatar-1.svg`,
};

function getUserNavigation(user?: UserResponse) {
  if (user) {
    let navigation: Array<UserMenuAction> = [
      {
        name: "Sign out",
        href: "#",
        onClick: () => {
          postSignOut().then(() => {
            console.log("Sign out successfully");
            window.location.reload();
          });
        },
      },
    ];
    if (user.roles.includes("admin")) {
      navigation.unshift({ name: "Admin page", href: "/admin" });
    }
    return navigation;
  } else {
    return [{ name: "Login", href: "/login" }];
  }
}

const navigation = [
  {
    name: "Problem",
    href: "/problem",
    icon: <ListBulletIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
  },
  {
    name: "Contest",
    href: "#",
    icon: <TrophyIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
  },
  {
    name: "Submission",
    href: "/submission",
    icon: <RectangleStackIcon className="mr-2 h-4 w-4" aria-hidden="true" />,
  },
];

export default function Navbar() {
  const { getUser } = useUser();

  return (
    <div className="navbar bg-base-100 lg:px-8">
      <div className="flex-auto space-x-4">
        <div className="hidden items-center text-2xl md:flex">
          <img className="block h-12 w-auto" src={iconPath} alt="OJ Lab" />
        </div>
        <PageMenu navigation={navigation} />
      </div>
      <div className="flex-none">
        <ThemeMenu className="hidden sm:block" />
        <DarkLightToggle />
        <LanguageMenu />
        <UserMenu
          avatarUrl={user.imageUrl}
          actions={getUserNavigation(getUser())}
        />
      </div>
    </div>
  );
}
