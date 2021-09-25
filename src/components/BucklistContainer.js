import React, { useState } from "react";
import Input from "./Input";
import BucketListItem from "./BucketListItem";

export default function BucklistContainer() {
  const [bucketList, setBucketList] = useState([
    "Go to italy",
    "do something else",
  ]);
  const [inputString, setInputString] = useState("");

  const inputChangeHandler = (event) => {
    setInputString(event.target.value);
  };

  const addtoBucketList = (event) => {
    const newBucketList = [...bucketList, inputString];

    setBucketList(newBucketList);
  };

  const removeFromBucklist = (value) => {
    const newBucketList = bucketList.filter(
      (bucketThing) => bucketThing !== value
    );

    setBucketList(newBucketList);
  };

  return (
    <div>
      <Input
        addtoBucketList={addtoBucketList}
        inputChangeHandler={inputChangeHandler}
        inputString={inputString}
      />

      {bucketList.map((bucketThing, i) => {
        return (
          <BucketListItem
            key={`bucket${i}`}
            bucketThing={bucketThing}
            removeFromBucklist={removeFromBucklist}
          />
        );
      })}
    </div>
  );
}
