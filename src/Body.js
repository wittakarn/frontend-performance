import UserInfoForm from "./UserInfoForm";

function Body() {
  const handleSubmit = (data) => {
    console.log(JSON.stringify(data));
  };

  return (
    <div>
      Body
      <UserInfoForm handleSubmit={handleSubmit}></UserInfoForm>
    </div>
  );
}

export default Body;
