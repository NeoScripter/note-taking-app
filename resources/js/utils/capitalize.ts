export function capitalize(sentence: string) {
    return sentence
        .split(' ')
        .map((word) => (word.charAt(0).toUpperCase() + word.slice(1).toLocaleLowerCase()))
        .join(' ');
}
