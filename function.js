import fs from "node:fs/promises";
async function myFunction() {
    // Function implementation
    try {
        await fs.writeFile("filepush", "content", "utf-8");
        console.log("File created successfully");
    }catch (err) {
        console.error("Error occurred:", err);
    }
}
async function readfile() {
    // Read file implementation
    try {
        const data = await fs.readFile("filepush", "utf-8");
        console.log(data);
        return data;
    } catch (err) {
        console.error("Error occurred:", err);
    }
}
async function updatefile() {
    // Update file implementation
    try {
        await fs.writeFile("filepush", "updated content", "utf-8");
        console.log("File updated successfully");
    } catch (err) {
        console.error("Error occurred:", err);
    }
}
async function deletefile() {
    // Delete file implementation
    try {
        await fs.unlink("filepush");
        console.log("File deleted successfully");
    } catch (err) {
        console.error("Error occurred:", err);
    }
}
await readfile();