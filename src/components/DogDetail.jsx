// import useFetchCustom from "../hooks/useFetchCustom";

import { useFetch } from "usehooks-ts";

// SECTION custom hook
// const DogDetail = () => {
//   const data = useFetchCustom("https://dog.ceo/api/breeds/image/random");

//   if (data.isLoading) {
//     return <div>Loading...</div>;
//   }
//   if (data.error) {
//     return <div>Sorry, something went wrong...</div>;
//   }
//   const { status, message } = data.res;
//   return (
//     <div>
//       <h3>{status}</h3>
//       <div>
//         <img src={message} alt="dog" />
//       </div>
//     </div>
//   );
// };

// SECTION usehooks-ts

const DogDetail = () => {
  const { data, error } = useFetch("https://dog.ceo/api/breeds/image/random");

  if (error) return <p>Sorry, something went wrong...</p>;
  if (!data) return <p>Loading...</p>;

  return <img src={data.message} alt="dog" />;
};

export default DogDetail;
