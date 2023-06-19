const parseEnv = () => {
    let arr = process.env
    for (let item in arr){
        if (item.includes("RSS_")){
            console.log(item+"="+arr[item])
        }
    }
};

parseEnv();