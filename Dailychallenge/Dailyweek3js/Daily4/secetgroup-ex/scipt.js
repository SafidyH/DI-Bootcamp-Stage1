const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

const secretSocietyName = names.map(name => name[0]).sort().join('');

console.log(secretSocietyName);