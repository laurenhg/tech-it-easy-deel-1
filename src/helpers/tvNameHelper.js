export function getTvName(tv) {
const {brand, type, name} = tv;
return `${brand} ${type} ${name}`;
}