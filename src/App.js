import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";

import HomePage from "./pages/homepage/homepage.component";
import ScrollToTop from "./components/scroll-to-top/scroll-to-top";
import Header from "./components/header/header.component";
import UsersPage from "./pages/userspage/userspage.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import ManageProfile from "./pages/manageProfile/manageProfile.component";
import ImagePlaceholder from "./assets/user.svg";
import { GlobalStyle } from "./global.styles";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            firstName: "",
            lastName: "",
            location: "",
            title: "",
            about: "",
            skills: "",
            portfolioLink: "",
            githubLink: "",
            linkedinLink: "",
            image: ImagePlaceholder,
            ...snapShot.data(),
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route
              exact
              path="/signin"
              render={() =>
                this.props.currentUser ? (
                  <Redirect to="/" />
                ) : (
                  <SignInAndSignUpPage />
                )
              }
            />
            <Route
              exact
              path="/manageProfile"
              render={() =>
                this.props.currentUser ? <ManageProfile /> : <HomePage />
              }
            />
            <Route path="/users" component={UsersPage} />
          </Switch>
        </ScrollToTop>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
