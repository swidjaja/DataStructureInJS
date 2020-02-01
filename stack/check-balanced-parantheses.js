const Stack = require('./stack');

const checkBalancedParantheses = (str) => {
  const stack = new Stack();
  const entries = str.split('');
  const isBalanced = true;

  for (let idx = 0; idx < entries.length; idx += 1) {
    if (!isBalanced) break;

    const entry = entries[idx];

    switch (entry) {
      case '(':
      case '[':
        stack.push(entry);
        break;
      case ')':
      case ']': {
        try {
          const topMost = stack.pop();
          if ((entry === ')' && topMost !== '(') ||
          (entry === ']' && topMost !== '[')) {
            isBalanced = false;
          }
        } catch (ex) { }
      }
      default:
        break;
    }
  }

  return isBalanced && stack.isEmpty();
};

[
  '(())',
  '(()())',
  '([])',
  '([][])',
  '[()]',
  '[()()]'
].forEach((input) => {
  const result = checkBalancedParantheses(input);
  console.log(`\ncheckBalancedParantheses ${input} = ${result}`);
  if (!result) {
    console.log("TEST FAILED!\n");
  }
});

[
  '(()',
  '((())',
  '([)',
  '([[]',
  '[(]',
  '[()(]'
].forEach((input) => {
  const result = checkBalancedParantheses(input);
  console.log(`\ncheckBalancedParantheses ${input} = ${result}`);
  if (result) {
    console.log("TEST FAILED!");
  }
});
