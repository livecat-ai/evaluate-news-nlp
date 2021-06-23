function checkUrl(inputUrl) {
    const re = /^(ftp|http|https):\/\/[^ "]+$/;
    return re.test(inputUrl);
}

export { checkUrl }
