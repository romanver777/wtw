import React from "react";

import { page, userPageTitle } from "../../helpers/const";
import Header from "../header/header";
import Logo from "../logo/logo";
import UserPageTitle from "../user-page-title/user-page-title";
import Form from "../form/form";
import Footer from "../footer/footer";

const SignIn: React.FC = () => {
  return (
    <div className="user-page">
      <Header page={page.userPage}>
        <Logo />
        <UserPageTitle title={userPageTitle.signIn} />
      </Header>

      <div className="sign-in user-page__content">
        <Form />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
