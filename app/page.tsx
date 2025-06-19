import Link from "next/link";

// rafce
const page = async () => {
  // Javascript
  await new Promise((resolve) => setInterval(resolve,1000))
  return (
    // if dont have div it will can return only 1 element
    <div>
      <h1>Hello Nontawat</h1>
      <p>Description</p>
    </div>
  );
};
export default page;
