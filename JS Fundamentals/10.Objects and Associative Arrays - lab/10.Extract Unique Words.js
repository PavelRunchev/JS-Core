function extractUniqueWords(array) {
    let unique = new Set();
    let text = array.join('\n')
        .split(/\W+/g)
        .filter(w => w !== "")
        .map(w => w.toLowerCase())
        .forEach(w => unique.add(w));

    console.log([...unique].join(", "));
}



extractUniqueWords(["Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Pellentesque quis hendrerit dui. \n",
    "Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.",
    "Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.",
    "Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.",
    "Morbi in ipsum varius, pharetra diam vel, mattis arcu."]);