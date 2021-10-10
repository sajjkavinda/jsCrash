function pal(str) {
    const len = s.length;

    for (let i = 0; i < len/2; i++){
        if (s[i] !== s[len - 1 -i]){
            return 'Not a Palindrome';

        }
    return 'Plaindrome';
    }
}

const s = prompt('Enter a string: ');

const v = pal(s);

console.log(v);