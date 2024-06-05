import { useEffect, useState } from "react";
import Buttons from "./Buttons";
import Result from "./Result";

export default function App() {
  const [values, setValue] = useState([]);
  const [secValues, setSecValues] = useState([]);
  const [result, setResult] = useState(0);
  const [opt, setOpt] = useState(0);

  useEffect(() => {
    let x = Number(values.join(""));
    setResult(x);
  }, [values]);

  function handleAddItem(e) {
    if (e === "-") {
      setOpt(e);
      if (secValues.length > 0) {
        setSecValues(secValues);
      } else {
        setSecValues(values);
        setValue([]);
      }
    } else if (e === "+") {
      setOpt(e);
      if (secValues.length > 0) {
        return;
      } else {
        setSecValues(values);
        setValue([]);
      }
    } else if (e === "/") {
      setOpt(e);
      if (secValues.length > 0) {
        return;
      } else {
        setSecValues(values);
        setValue([]);
      }
    } else if (e === "*") {
      setOpt(e);
      if (secValues.length > 0) {
        return;
      } else {
        setSecValues(values);
        setValue([]);
      }
    } else {
      setValue((values) => [...values, e]);
    }
  }

  function handleClear() {
    setValue([]);
    setSecValues([]);
  }

  function handleNegative() {
    let y = -Number(values.join(""));
    setSecValues((secValue) => [...secValue, y]);
    setValue([]);
  }

  function handlePercentage() {
    let x = Number(values.join("")) / 100;
    setSecValues((secValue) => [...secValue, x]);
    setValue([]);
  }

  function handleEqual() {
    if (opt === "-") {
      if (typeof secValues !== "string") {
        let x = Number(values.join(""));
        let y = Number(secValues.join(""));
        setResult(y - x);
      }
      let x = Number(values.join(""));
      let y = Number(secValues.join(""));

      setResult(y - x);
    }

    if (opt === "+") {
      if (typeof secValues !== "string") {
        let x = Number(values.join(""));
        let y = Number(secValues.join(""));
        setResult(y + x);
      } else {
        let x = Number(values.join(""));
        let y = Number(secValues.join(""));
        setResult(y + x);
      }
    }

    if (opt === "/") {
      if (typeof secValues !== "string") {
        let x = Number(values.join(""));
        let y = Number(secValues.join(""));
        setResult(y / x);
      } else {
        let x = Number(values.join(""));
        let y = Number(secValues.join(""));

        setResult(y / x);
      }
    }

    if (opt === "*") {
      if (typeof secValues !== "string") {
        let x = Number(values.join(""));
        let y = Number(secValues.join(""));
        setResult(y * x);
      } else {
        let x = Number(values.join(""));
        let y = Number(secValues.join(""));

        setResult(y * x);
      }
    }
  }

  return (
    <div className="app">
      <Result result={result} />
      <Buttons
        onAddItem={handleAddItem}
        onClear={handleClear}
        onNegative={handleNegative}
        onEqual={handleEqual}
        onPercentage={handlePercentage}
      />
    </div>
  );
}
