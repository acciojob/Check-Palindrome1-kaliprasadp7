// complete the given function

function palindrome(str){
const isPalindrome = str==str.split('').reverse().join('');
	return isPalindrome;
}
module.exports = palindrome
