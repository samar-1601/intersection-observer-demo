import { useEffect } from "react";
import "./styles.css";

export default function App() {
  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          let isIntersecting = entry.isIntersecting;
          entry.target.innerHTML = isIntersecting ? "Inside" : "Outside";
          console.log(isIntersecting ? "Inside" : "Outside");
        });
      },
      {
        root: document.querySelector(".scrollBox")
      }
    );
    observer.observe(document.querySelector("#box"));
  }, []);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>
        Scroll inside the grey box and see the console to see the
        IntersectionObserver in action
      </h2>
      <div className="scrollBox">
        <div className="boxBrothers"></div>
        <div id="box">Outside</div>
        <div className="boxBrothers"></div>
      </div>
    </div>
  );
}
