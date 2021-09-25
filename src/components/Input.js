import React from "react";

export default function Input(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Add something to the bucket list"
        aria-label="Add something to the bucket list"
        aria-describedby="add-button"
        value={props.inputString}
        onChange={props.inputChangeHandler}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="add-button"
        onClick={props.addtoBucketList}
      >
        Add
      </button>
    </div>
  );
}
