const Test = () => {
    const date = new Date();
    // console.log(`${date.getHours()} ${date.getMinutes()} ${date.getSeconds()}`);

    // console.log(date.getTime());
    const date2 = new Date(date.getTime() + 2 * 60 * 60 * 1000 + 5 * 60 * 1000);
    // console.log(
    //     `${date2.getHours()} ${date2.getMinutes()} ${date2.getSeconds()}`
    // );
    const difference = (date2.getTime() - date.getTime()) / 1000;
    const hours = Math.floor(difference / 3600);
    const min = Math.floor((difference % 3600) / 60);
    const sec = Math.floor(difference % 60);
    console.log(`${hours}h ${min}m ${sec}s`);
    //output: -3h -5m 0s

    return <div></div>;
};
export default Test;
