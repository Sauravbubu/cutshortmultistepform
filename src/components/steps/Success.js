import { useStepperContext } from "../../contexts/StepperContext";

export default function Success() {
  const { userData, setUserData } = useStepperContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  return (
    <div className="flex flex-col ">
      <p className="text-xl font-bold text-center  text-gray-500">
        How are you Planning to use Eden ?
      </p>
      <p className="text-md text-center  text-gray-500">
        We'll streamline your setup expreience accordingly
      </p>
      <div className="w-full  flex gap-4 pt-3">
        <div className="flex flex-col  border-2 p-3 gap-2  hover:border-blue-300 cursor-pointer rounded-xl"
        onClick={()=>{ setUserData({ ...userData, usedfor: "single" })}}
        >
          <p className="text-lg font-bold   text-gray-500">For Me</p>
          <p className="text-md   text-gray-500">
            Write Better .Think more clearly ,stay Organized
          </p>
        </div>
        <div className="flex flex-col border-2 p-3 gap-2 hover:border-blue-300 cursor-pointer rounded-xl"
         onClick={()=>{ setUserData({ ...userData, usedfor: "team" })}}>
          <p className="text-lg font-bold   text-gray-500">With My Team</p>
          <p className="text-md    text-gray-500">
            Wikis,Docs,tasks & Projects , All in one place
          </p>
        </div>
      </div>
    </div>
  );
}
