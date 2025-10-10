const sortByKey = (array, key, atoz) => {
    if (atoz === 'ztoa') {
        return array.sort(function(a, b) {
            let x = b[key];
            let y = a[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    } else {
        return array.sort(function(a, b) {
            let x = a[key];
            let y = b[key];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        });
    }

}
export default sortByKey