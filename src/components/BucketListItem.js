import React from "react";

export default function BucketListItem(props) {
  return (
    <div
      className="card mb-1"
      onClick={() => props.removeFromBucklist(props.bucketThing)}
    >
      <div className="card-body">{props.bucketThing}</div>
    </div>
  );
}
