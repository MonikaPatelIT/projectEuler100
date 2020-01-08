const Problem001 = () => {
  let arr = [];
  for (let i = 0; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      arr.push(i);
    }
  }
  const sum = arr.reduce((a, r) => a + r);

  return (
    <div>
      <h1>#ProjectEuler100</h1>
      <div>
        <h3>Multiples of 3 and 5</h3>
        <span>Problem 1</span>
        <p>
          If we list all the natural numbers below 10 that are multiples of 3 or
          5, we get 3, 5, 6 and 9. The sum of these multiples is 23. Find the
          sum of all the multiples of 3 or 5 below 1000.
        </p>
        <span>Solution</span>
        <p>{sum}</p>
      </div>
    </div>
  );
};

export default Problem001;
