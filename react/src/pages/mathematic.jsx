import { button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function Suggetion(props) {


    return (
        <button
            onClick={props.onClickB}
            className="font-bold text-md md:text-lg lg:text-xl col-span-1 w-2/5 flex justify-center  mx-auto h-2/5 rounded-md border-2 py-1 px-2"
        >
            {props.value}
        </button>
    );
}

export default function Mathematic() {
    const generateRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const [age,setAge]=useState(0);
    const [number,setNumber]=useState(0);
useEffect(()=>{
  console.log('hello');
},[age])





    function isCorrect (sug)  {
        if (correctResult==sug) {
           setAge(age+3)
        }
    };

    var randomNumberAdd1 = generateRandomNumber(1, 100);
    var randomNumberAdd2 = generateRandomNumber(1, 100);
    var correctResult = randomNumberAdd1 + randomNumberAdd2;

    var correctAnswer = generateRandomNumber(0, 3);
    var suggestionsList = [0, 0, 0, 0];
    suggestionsList[correctAnswer] = correctResult;

    for (var i = 0; i < 4; i++) {
        if (suggestionsList[i] == 0) {
            suggestionsList[i] =
                randomNumberAdd1 +
                randomNumberAdd2 +
                generateRandomNumber(1, 8);
        }
    }

    const suggetions = suggestionsList.map((suggetion) => {
        return <Suggetion key={suggetion} value={suggetion}  onClickB={()=>isCorrect(suggetion)} />;
    });


    return (
        <>

            <div className="grid grid-cols-1 grid-rows-6 w-full md:w-3/4 lg:w-1/2  mx-auto border h-[75vh] rounded-lg shadow-md mt-6">
                <div className="row-span-3  flex justify-center items-center ">
                    <h1 className="text-orange-600 text-6xl font-bo">
                        {randomNumberAdd1 + "+" + randomNumberAdd2}
                    </h1>
                </div>
                <div className="grid  grid-cols-2 row-span-2   py-2 items-center">
                    {suggetions}
                </div>
                <div className="row-span-1 flex justify-center ">
                    <button className="w-3/4  mx-auto border h-1/2 text-3xl bg-white hover:bg-gray-200 text-red-600 font-bold">
                        next
                    </button>
                </div>
            </div>
        </>
    );
}
