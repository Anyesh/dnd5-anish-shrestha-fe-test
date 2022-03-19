import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getSpellDetails } from "src/redux/actions/spell-actions";
import { RootStateType } from "src/redux/reducers";

export default function Spell() {
  const dispatch = useDispatch();
  const spellDetails = useSelector(
    (state: RootStateType) => state.spellDetails
  );
  const spinning = useSelector((state: RootStateType) => state.loading.spin);

  let history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id") || null;

    dispatch(getSpellDetails(id));
  }, [dispatch]);

  return (
    <div>
      <section className="text-gray-600 body-font ">
        <div className="p-10 flex">
          <button onClick={() => history.goBack()} className="mb-5 text-left">
            ⬅ Go Back
          </button>
        </div>
        <p className="text-center">{spinning ? "Loading ..." : ""}</p>

        <div className="w-screen px-20 mx-auto">
          <div className="lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {spellDetails?.index}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
              {spellDetails?.name}
            </h1>
            <div className="flex mb-4">
              <div className="flex-grow border-b-2 text-indigo-500  border-indigo-500 py-2 text-lg px-1">
                Description
              </div>
            </div>
            <p className="leading-relaxed mb-4 text-left">
              {spellDetails?.desc}

              {spellDetails?.higher_level}
            </p>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Level:</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {spellDetails?.level}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Range:</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {spellDetails?.range}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Component(s):</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {spellDetails?.components?.map((s) => s).join(", ")}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">duration:</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {spellDetails?.duration}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Casting Time:</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {spellDetails?.casting_time}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Ritual:</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {spellDetails?.ritual ? "True" : "False"}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Concentration:</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {spellDetails?.concentration ? "True" : "False"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
