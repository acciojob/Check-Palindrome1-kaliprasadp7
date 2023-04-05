// complete the given function

function palindrome(str){
const isPalindrome = str.toLowerCase()==str.toLowerCase().split('').reverse().join('');
	return isPalindrome;
}
module.exports = palindrome
