export function getScreenSize(tv) {
    if(!tv.availableSizes || tv.availableSizes.length === 0) {
        return 'No sizes available';
    }

    const sizesString = tv.availableSizes.map(size => `${size} inches (${Math.round(size * 2.54)} cm)`).join(' | ');

    return sizesString;
}