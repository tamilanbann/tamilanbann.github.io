import photo from "./assets/photo.jpeg";
export function AboutMe() {
  return (
    <div className=" md:flex justify-center items-center p-3 m-2">
      <div className="order-1  md:order-2 md:w-2/5  ">
        <div className="flex justify-center items-center">
          <img src={photo} alt="profile" className="h-[300px] w-auto  "></img>
        </div>
      </div>
      <div className="order-2  md:order-1 md:w-3/5">
        <p className="text-3xl p-1 m-2">Tamilaban Nakkeeran </p>
      </div>
    </div>
  );
}
