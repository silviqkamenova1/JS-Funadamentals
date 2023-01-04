function extraxtFile(string) {
    let arr = string.split('\\')
    let file = arr.pop()

    let extensionStart = file.lastIndexOf('.')
    let endOfFile = file.substring(0, extensionStart)
    let extension = file.substring(extensionStart + 1, file.length + 1)
    console.log(`File name: ${endOfFile}`);
    console.log(`File extension: ${extension}`);



}
//extraxtFile('C:\\Internal\\training-internal\\Template.pptx')
extraxtFile('C:\\Projects\\Data-Structures\\LinkedList.cs')