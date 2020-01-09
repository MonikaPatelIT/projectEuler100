const Problem003 = () => {
  const is_Prime = num => {
    for (let i = 2; i < Math.sqrt(num); i++) {
      if (num % i == 0) return false;

      return true;
    }
  };

  let factors = [];
  const prime_factors = num => {
    for (let i = 2; i <= num; i++) {
      while (is_Prime(i) && num % i === 0) {
        if (!factors.includes(i)) factors.push(i);
        num /= i;
      }
    }
    return factors;
  };

  console.log(prime_factors(600851475143)); // all prime factors
  let max_prime_factors = factors.reduce((a, b) => (a > b ? a : b)); // max prime factors
  console.log(max_prime_factors);

  return (
    <div>
      <div>
        <h3>Largest prime factor</h3>
        <span>Problem 3</span>
        <p>
          The prime factors of 13195 are 5, 7, 13 and 29. What is the largest
          prime factor of the number 600851475143 ?
        </p>
        <span>Solution</span>
        <p>{max_prime_factors}</p>
      </div>
    </div>
  );
};

export default Problem003;
