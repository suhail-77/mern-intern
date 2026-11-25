async function getDatas() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("delayed time")
            resolve()
        }, 2000)
    })
}
async function display() {
    console.log("start");

    let res = await getDatas();

    console.log("end")


}
display()