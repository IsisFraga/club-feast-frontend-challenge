import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";

 const ShowMeFilter = () => {
  return (
    <div className="flex flex-col w-full border-y border-gray-200 px-4">
      <div className="flex w-full py-3">
        <h3 className="flex text-base min-w-fit">Show Me</h3>
        <div className="flex group/tooltip ml-2 relative justify-center">
          <QuestionMarkCircleIcon className="w-4 text-gray-400"/>
          <span className="absolute bottom-6 scale-0 rounded min-w-[250px] bg-gray-800 p-1 text-base text-white group-hover/tooltip:scale-100">Login to filter items you've watched.</span>
        </div>
      </div>
      <div className="flex items-center mb-2">
        <input type="radio" id="radio1" className="appearance-none w-4 h-4 cursor-pointer border checked:border-4 checked:border-light-blue rounded-full checked:bg-white" checked />
        <label htmlFor="radio1" className="ml-2">
          Everything
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input type="radio" id="radio2" className="appearance-none w-4 h-4 border border-gray-300 rounded-full cursor-not-allowed" disabled />
        <label htmlFor="radio2" className="ml-2">
          Movies I Haven't Seen
        </label>
      </div>
      <div className="flex items-center mb-2">
        <input type="radio" id="radio3" className="appearance-none w-4 h-4 border border-gray-300 rounded-full cursor-not-allowed" disabled />
        <label htmlFor="radio3"className="ml-2">
          Movies I Have Seen
        </label>
      </div>
    </div>
  );
};

export default ShowMeFilter