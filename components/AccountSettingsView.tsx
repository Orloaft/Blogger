export const AccountSettingsView = (props) => {
  switch (props.option) {
    case "default":
      return (
        <>
          <button onClick={() => props.setOption("changePassword")}>
            change password
          </button>
          <button onClick={() => props.setOption("deleteAccount")}>
            delete account
          </button>
        </>
      );
    case "changePassword":
      return (
        <form onSubmit={(e) => props.handlePasswordChange(e)}>
          <p>old password</p>
          <input name="oldPw"></input>
          <p>new password</p>
          <input name="newPw"></input>
          <button type="submit">change password</button>
          <button onClick={() => props.setOption("default")}>back</button>
        </form>
      );
    case "deleteAccount":
      return (
        <>
          <p>Are you sure you want to delete this account?</p>
          <button onClick={props.handleDelete}>yes</button>{" "}
          <button onClick={() => props.setOption("default")}>no</button>
        </>
      );
  }
};
