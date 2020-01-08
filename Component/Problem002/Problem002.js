const Problem002 = () => {
  function fibonacci(n) {
    return n <= 1 ? 1
         : n == 2 ? 2
         : fibonacci(n - 1) + fibonacci(n - 2);
 }
 
 console.log(fibonacci(4));
 let count = 1;
 let arr_fib=[];
  while(fibonacci(count)<4000000){
  arr_fib.push(fibonacci(count));
  count++
  }
  
  console.log(arr_fib);
 let  arr_fib_even = []; 
  arr_fib.map(data =>{
  if(data %2 ==0){
  arr_fib_even.push(data);
  }
  } )
  
  console.log(arr_fib_even);
  
 let arr_fib_even_sum= arr_fib_even.reduce((a,r)=> a+r);
 console.log(arr_fib_even_sum);

  return (
    <div>
      <h1>#ProjectEuler100</h1>
      <div>
        <h3>Even Fibonacci numbers</h3>
        <span>Problem 2</span>
        <p>
        Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
        </p>
        <span>Solution</span>
        <p>{arr_fib_even_sum}</p>
      </div>
    </div>
  );
};

export default Problem002;
