/*
  This solution runs in O(n) time.
  It uses a stack to keep track of the opening brackets.
  When it encounters a closing bracket, it checks if the stack is empty
  or if the top of the stack is not the corresponding opening bracket.
  If either condition is true, it returns false.
  If the stack is empty at the end, it returns true.
*/
function areBracketsValid(str) {
  const stack = [];
  const openBrackets = '{([';
  const closeBrackets = '})]';
  const bracketMap = {
    '}': '{',
    ')': '(',
    ']': '['
  };

  for (const char of str) {
    if (openBrackets.includes(char)) {
      stack.push(char);
    } else if (closeBrackets.includes(char)) {
      if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(areBracketsValid("{[]}")); // true
console.log(areBracketsValid("{(])}")); // false
console.log(areBracketsValid("{([)]}")); // false
