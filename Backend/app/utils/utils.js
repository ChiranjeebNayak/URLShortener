function hashCode(s) {
    for (var h = 0, i = 0; i < s.length; h &= h) h = 31 * h + s.charCodeAt(i++);
    return h;
}

function hashCodeToChar(s) {
    let res = "";
    for (i = 0; i < s.length; i++) {
        if (s[i] == "-") res += "Z";
        else res += String.fromCharCode(s[i] - "0" + 97);
    }
    return res;
}

module.exports = {hashCode , hashCodeToChar}