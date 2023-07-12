import UserInfoForm from "./UserInfoForm";

function Body({ handleSubmit }) {
  return (
    <div className="container">
      Body
      <UserInfoForm handleSubmit={handleSubmit}></UserInfoForm>
    </div>
  );
}

export default Body;
