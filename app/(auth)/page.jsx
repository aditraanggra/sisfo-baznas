"use client";
import React from "react";
import Link from "next/link";
import LoginForm from "@/components/partials/auth/login-form";
import Social from "@/components/partials/auth/social";
import useDarkMode from "@/hooks/useDarkMode";
import dynamic from "next/dynamic";

const Login2 = () => {
  const [isDark] = useDarkMode();
  return (
    <>
      <div className="loginwrapper">
        <div className="lg-inner-column">
          <div className="right-column relative">
            <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
              <div className="auth-box h-full flex flex-col justify-center">
                <div className="mobile-logo text-center mb-6 lg:hidden block">
                  <Link href="/">
                    <img
                      src={
                        isDark
                          ? "assets/images/logo/logo-white.svg"
                          : "/assets/images/logo/logo.svg"
                      }
                      alt=""
                      className="mx-auto"
                    />
                  </Link>
                </div>
                <div className="text-center 2xl:mb-10 mb-4">
                  <h4 className="font-medium">Sign in</h4>
                  <div className="text-slate-500 dark:text-slate-400 text-base">
                    Silahkan masuk untuk menggunakan aplikasi SISFO ZIS
                  </div>
                </div>
                <LoginForm />
              </div>
              <div className="auth-footer text-center">
                Copyright 2023, BAZNAS Kabupaten Cianjur.
              </div>
            </div>
          </div>
          <div
            className="left-column bg-cover bg-no-repeat bg-center "
            style={{
              backgroundImage: `url(/assets/images/all-img/login-bg.png)`,
            }}
          >
            <div className="flex flex-col h-full justify-center">
              <div className="flex-1 flex flex-col justify-center items-center">
                <Link href="/">
                  <img
                    src="assets/images/logo/logo-white.svg"
                    alt=""
                    className="mb-10"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login2;
