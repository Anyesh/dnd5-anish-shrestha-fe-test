import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getSpells } from "src/redux/actions/spell-actions";
import { RootStateType } from "src/redux/reducers";

export default function Spells() {
  const dispatch = useDispatch();
  const spells = useSelector((state: RootStateType) => state.spell);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id") || null;
    dispatch(getSpells(id));
  }, [dispatch]);

  const renderList = () => {
    return spells?.results?.map((item) => {
      return (
        <div
          className="lg:w-1/4 md:w-1/2 p-4 w-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white"
          key={item.index}
        >
          <Link
            to={`/spell?id=${item.index}`}
            className="block relative rounded overflow-hidden"
          >
            <h1 className="bg-blue-400 text-center p-5">{item.name}</h1>
          </Link>
        </div>
      );
    });
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto">
        <div className="flex flex-wrap -m-4">{renderList()}</div>
      </div>
    </section>
  );
}
