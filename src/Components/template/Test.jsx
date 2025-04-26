const Test = () => {
    const date = new Date();
    console.log(`${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`);

    console.log(date.getTime());
    const date2 = new Date(date.getTime() + 2 * 60 * 60 * 1000);
    console.log(
        `${date2.getHours()} ${date2.getMinutes()} ${date2.getSeconds()}`
    );

    return <div></div>;
};
export default Test;
