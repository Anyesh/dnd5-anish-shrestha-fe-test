import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getClassList } from "src/redux/actions/class-actions";
import { RootStateType } from "src/redux/reducers";
export default function ClassList() {
  const dispatch = useDispatch();
  const classes = useSelector((state: RootStateType) => state.classes);
  const spinning = useSelector((state: RootStateType) => state.loading.spin);

  useEffect(() => {
    dispatch(getClassList());
    return () => {
      // cleanup
    };
  }, [dispatch]);

  const renderList = () => {
    if (spinning) {
      return "Loading ...";
    }
    return classes?.results?.map((item) => {
      return (
        <div
          className="lg:w-1/4 md:w-1/2 p-4 w-full transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none text-white"
          key={item.index}
        >
          <Link
            to={`/class?id=${item.index}`}
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
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">{renderList()}</div>
      </div>
    </section>
  );
}
