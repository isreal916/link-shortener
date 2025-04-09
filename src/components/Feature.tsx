


export default function Feature({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center gap-4 bg-white rounded-2xl shadow-lg p-12 w-[80%] relative md:w-[30%] ">
      <img src={image} alt="feature" className="bg-verydarkBlue p-6 rounded-[4rem] absolute  top-[-35px]" />
      <h3 className="text-[#3b3054] font-bold text-xl mt-8">{title}</h3>
      <p className="text-grayishViolet text-center">{description}</p>
    </div>
  );


}