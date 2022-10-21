try {
    importScripts(
        "backgroundScript/backgroundScript.js",
    );
} catch (e) {
    console.log("Error Importing background scripts ", e);
}