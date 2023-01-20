import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./component/search/Search";
import Paragraph from "./component/paragraph/Paragraph";
import './App.css'

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [paragraph, setParagraph] = useState([]);
  const [number, setNumber] = useState(0);

  const getParagraph = async () => {
    setIsLoading(true);
    const response = await axios.get(
      `https://hipsum.co/api/?type=hipster-centric&paras=${number}`
    );
    setParagraph(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    getParagraph();
  }, [number]);

  //change number
  const numberHandle = (e) => {
    setNumber(e.target.value);
    console.log(number);
  };

  return (
    <div>
      <Search
        type="number"
        placeholder="How many paragraph you need?"
        min={1}
        changeHandle={numberHandle}
      />
      <Paragraph pera={paragraph} />
    </div>
  );
};

export default App;
