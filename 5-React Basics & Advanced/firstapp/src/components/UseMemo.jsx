import React, { useMemo, memo } from "react";

// add function
const add = (x, y) => x+y;
//  Use useMemo to memoize values and memo to memoize components.
//  Both tools can be used together to enhance performance in complex React applications.
const UseMemo = ({ a, b }) => {
  const value = useMemo(() => add(a, b), [a, b]);

  return (
    <div>
        <ComponentA value={value}/>
    </div>
  );
};

export default UseMemo;

// ComponentA should receive props and pass them down to ComponentB
const ComponentA = memo(({ value }) => <ComponentB value={value} />);

// ComponentB should receive props and pass them down to ComponentC
const ComponentB = ({ value }) => <ComponentC value={value} />;

// ComponentC should receive props and use them
const ComponentC = ({ value }) => {
  return <div>{value}</div>;
};