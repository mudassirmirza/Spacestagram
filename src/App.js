import { useReducer, useRef } from "react";
import { Header } from "./components/header/header.js";
import { Card } from "./components/image-card/Card";
import "./App.scss";
import { useInfiniteScroll } from "./hooks/useInfiniteScroll.js";
import { useAxios } from "./services/Api.js";

function App() {
  const dataReducer = (state, action) => {
    switch (action.type) {
      case "LOAD":
        return { ...state, data: state.data.concat(action.data) };
      case "CALL":
        return { ...state, isCalling: action.isCalling };

      default:
        return state;
    }
  };

  const pageReducer = (state, action) => {
    switch (action.type) {
      case "NEXT_PAGE":
        return { ...state, pageNum: state.pageNum + 1 };
      default:
        return state;
    }
  };

  const [page, pageDispatch] = useReducer(pageReducer, { pageNum: 0 });
  const [imageData, dataDispatch] = useReducer(dataReducer, {
    data: [],
    isCalling: true,
  });

  let bottom = useRef(null);
  useAxios(page, dataDispatch);
  useInfiniteScroll(bottom, pageDispatch);

  return (
    <div className="app">
      <Header />
      <div className="app__card-list">
        {imageData.data.map((image, index) => {
          return (
            <Card key={index} class_name=".card-img-top" givenObject={image} />
          );
        })}
      </div>
      {imageData.isCalling && <div className="app__loading"></div>}
      <div className="app__footer" ref={bottom}></div>
    </div>
  );
}

export default App;
