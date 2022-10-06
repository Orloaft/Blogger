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
        <>
          <p>old password</p>
          <input></input>
          <p>new password</p>
          <input></input>
          <button>change password</button>
          <button onClick={() => props.setOption("default")}>back</button>
        </>
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
