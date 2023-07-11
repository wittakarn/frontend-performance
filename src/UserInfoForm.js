import { Fragment, useReducer } from "react";

const initialFormData = { firstname: "", lastname: "" };

function formReducer(state, action) {
  if (action.type === "firstnameChanged") {
    return {
      ...state,
      firstname: action.value,
    };
  }

  if (action.type === "lastnameChanged") {
    return {
      ...state,
      lastname: action.value,
    };
  }

  return state;
}

function UserInfoForm({ handleSubmit }) {
  const [state, dispatch] = useReducer(formReducer, initialFormData);

  const handleFirstnameChanged = (event) => {
    dispatch({
      value: event.target.value,
      type: "firstnameChanged",
    });
  };

  const handleLastnameChanged = (event) => {
    dispatch({
      value: event.target.value,
      type: "lastnameChanged",
    });
  };

  const onSubmit = () => {
    handleSubmit(state);
  };

  return (
    <Fragment>
      <div>
        <input
          type="text"
          name="firstname"
          value={state.firstname}
          onChange={handleFirstnameChanged}
        />
      </div>
      <div>
        <input
          type="text"
          name="lastname"
          value={state.lastname}
          onChange={handleLastnameChanged}
        />
      </div>
      <div>
        <button onClick={onSubmit}>Submit</button>
      </div>
    </Fragment>
  );
}

export default UserInfoForm;
