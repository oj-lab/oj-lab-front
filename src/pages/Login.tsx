import React from "react";
import { redirectToOAuthGitHub, postPasswordLogin } from "@/apis/auth";
import GitHubIcon from "@/components/display/icons/GitHubIcon";
import EyeIcon from "@/components/display/icons/tabler/EyeIcon";
import EyeClosedIcon from "@/components/display/icons/tabler/EyeClosedIcon";
import OJLabIcon from "@/components/display/icons/OJLabIcon";
import PasswordIcon from "@/components/display/icons/tabler/PasswordIcon";
import OAuthIcon from "@/components/display/icons/tabler/OauthIcon";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AddMessageSagaPattern } from "@/store/sagas/message";

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [showPassaword, setShowPassword] = React.useState<boolean>(false);
  const [account, setAccount] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [loginMode, setLoginMode] = React.useState<"oauth" | "password">(
    "oauth",
  );

  const toggleShowPassword = () => {
    setShowPassword(!showPassaword);
  };

  return (
    <div className="flex flex-auto flex-col items-center justify-center gap-4 bg-base-100 p-12">
      <div className="flex flex-col">
        <OJLabIcon className="h-48 w-auto" />
        <h1 className="mb-4 mt-[-24px] self-center text-2xl font-bold">
          {t("Welcome to OJ LAB!")}
        </h1>
      </div>

      <div className="flex max-w-sm flex-col gap-4">
        {loginMode === "oauth" ? (
          <button className="btn btn-outline" onClick={redirectToOAuthGitHub}>
            <GitHubIcon className="w-8 fill-current" />
            {t("Sign in with GitHub")}
          </button>
        ) : (
          <>
            <label className="input input-sm input-bordered flex items-center gap-2">
              <input
                className="grow"
                type="text"
                placeholder={t("Account")}
                onChange={(e) => setAccount(e.target.value)}
              />
            </label>
            <label className="input input-sm input-bordered flex items-center gap-2">
              <input
                className="grow"
                type={showPassaword ? "text" : "password"}
                placeholder={t("Password")}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <button
                className="btn btn-circle btn-ghost btn-xs"
                onClick={toggleShowPassword}
              >
                {showPassaword ? (
                  <EyeIcon className="h-4 w-4" />
                ) : (
                  <EyeClosedIcon className="h-4 w-4" />
                )}
              </button>
            </label>
            <button
              className="btn btn-neutral btn-active btn-sm btn-block"
              type="submit"
              onClick={() => {
                if (!account) {
                  dispatch({
                    type: AddMessageSagaPattern,
                    payload: {
                      id: "login-error",
                      content: `${t("Please input your account")}`,
                      duration: 3000,
                      level: "warning",
                    },
                  });
                  return;
                }
                postPasswordLogin(account, password)
                  .then((res) => {
                    console.log(res);
                    window.location.href = import.meta.env.BASE_URL;
                  })
                  .catch((err) => {
                    dispatch({
                      type: AddMessageSagaPattern,
                      payload: {
                        id: "login-error",
                        content: `${t("Failed login with password")}`,
                        duration: 3000,
                        level: "error",
                        err: err.toString(),
                      },
                    });
                  });
              }}
            >
              {t("Login")}
            </button>
          </>
        )}

        <div className="mt-2 flex flex-col gap-2">
          <button
            className="btn btn-ghost btn-xs flex flex-col content-start gap-2 p-1 text-sm"
            onClick={() => {
              if (loginMode === "oauth") {
                setLoginMode("password");
              }
              if (loginMode === "password") {
                setLoginMode("oauth");
              }
            }}
          >
            {loginMode === "oauth" ? (
              <>
                <PasswordIcon className="h-4 w-auto text-base-content/80" />
                <div>
                  <span className="!text-xs !font-normal text-base-content/80">
                    {t("Password Login")}
                  </span>{" "}
                  <span className="!text-xs !font-normal text-base-content/60">
                    {`(${t("Internal")})`}
                  </span>
                </div>
              </>
            ) : (
              <>
                <OAuthIcon className="h-4 w-auto text-slate-500" />
                <span className="text-start !text-xs !font-normal text-slate-500">
                  {t("OAuth Login")}
                </span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
