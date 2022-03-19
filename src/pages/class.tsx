import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getClassDetails } from "src/redux/actions/class-actions";
import { RootStateType } from "src/redux/reducers";
import Spells from "./spellList";

export default function ClassPage() {
  const dispatch = useDispatch();
  const classDetails = useSelector((state: RootStateType) => state.class);
  const spinning = useSelector((state: RootStateType) => state.loading.spin);

  const [tab, setTab] = useState<string | null>("DESC");

  const tabSet = (tab: string) => {
    localStorage.setItem("tab", tab);
    setTab(tab);
  };

  let history = useHistory();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id") || null;
    dispatch(getClassDetails(id));
    localStorage.getItem("tab") && setTab(localStorage.getItem("tab"));
  }, [dispatch]);

  const renderSpells = () => {
    return <Spells />;
  };
  const renderTabs = () => {
    switch (tab) {
      case "DESC":
        return (
          <div>
            <p className="leading-relaxed mb-4"></p>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Starting Proficiencies:</span>
              <span className="ml-auto text-gray-900">
                {" "}
                <div className="mx-auto flex flex-wrap mt-5">
                  {classDetails?.proficiencies?.map((p) => p.name).join(", ")}
                </div>
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Starting Equipment(s):</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {classDetails?.starting_equipment
                  ?.map((s) => s?.equipment?.name)
                  .join(", ")}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Sub classe(s):</span>
              <span className="ml-auto text-gray-900">
                {" "}
                {classDetails?.subclasses?.map((s) => s.name).join(", ")}
              </span>
            </div>
            <div className="flex border-t border-b mb-6 border-gray-200 py-2">
              <span className="text-gray-500">Hit Die:</span>
              <span className="ml-auto text-red-500">
                {" "}
                {classDetails?.hit_die}
              </span>
            </div>
            <h1 className="pt-2 pb-2 text-lg border-b-2 text-indigo-500 border-indigo-500">
              Proficiency Choices:{" "}
            </h1>
            Player must choose {classDetails?.proficiency_choices?.[0]?.choose}{" "}
            proficiency choices from the list below:
            <div className="flex flex-wrap p-1">
              {classDetails?.proficiency_choices?.[0]?.from.map((item) => (
                <p className="rounded-full m-1 p-3  text-sm text-white bg-indigo-500">
                  {item.name}
                </p>
              ))}
            </div>
          </div>
        );

      case "SPELLS":
        return renderSpells();

      default:
        return "SELECT TAB";
    }
  };

  return (
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
            {classDetails?.index}
          </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">
            {classDetails?.name}
          </h1>
          <div className="flex mb-4">
            <button
              className={`flex-grow border-b-2 ${
                tab === "DESC"
                  ? "text-indigo-500  border-indigo-500"
                  : "border-gray-300"
              } py-2 text-lg px-1`}
              onClick={() => tabSet("DESC")}
            >
              Description
            </button>

            <button
              className={`flex-grow border-b-2 ${
                tab === "SPELLS"
                  ? "text-indigo-500  border-indigo-500"
                  : "border-gray-300"
              } py-2 text-lg px-1`}
              onClick={() => tabSet("SPELLS")}
            >
              Spells
            </button>
          </div>
        </div>
        {renderTabs()}
      </div>
    </section>
  );
}
