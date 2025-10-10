const formatDate = (dateString, excludeYear) => {
    let options = { year: "numeric", month: "long", day: "numeric" };
    if (excludeYear) {
        options = { month: "long", day: "numeric" };
    }
    return new Date(dateString).toLocaleDateString("en-US", options);
};

export default formatDate;
