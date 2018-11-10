import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "redux/modules/user";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createAccount: (username, password, name, email, phone, bankaccount) => {
      dispatch(
        userActions.createAccount(
          username,
          password,
          name,
          email,
          phone,
          bankaccount
        )
      );
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Container);
