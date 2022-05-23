import useFields from "../hooks/useFields";

const SignUpForm = () => {
  const [formData, handleChange, resetForm] = useFields({
    username: "",
    email: "",
    password: "",
  });

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
        <button onClick={resetForm}>Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
