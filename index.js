const URL =                 document.defaultView.URL || document.defaultView.webkitURL
const videoFileInput =      document.querySelector('#video-file');
const targetFileInput =     document.querySelector('#target-file');
const translationFileInput = document.querySelector('#translation-file');

const main = () => {
    videoFileInput.addEventListener('change', playSelectedFile, false);
    document.addEventListener("keydown", (event) => {if (event.keyCode === 190) toggleTracks();})
}

const playSelectedFile = (event) => {
    assignSource(videoFileInput,'video')
    assignSource(targetFileInput,'#target-subs')
    assignSource(translationFileInput,'#translation-subs')
}

const assignSource = (sourceFile,sourceElementSelector) => {
    const file = sourceFile.files[0];
    const fileURL = URL.createObjectURL(file);
    const node = document.querySelector(sourceElementSelector);
    node.src = fileURL;
}

const toggleTracks = () => {
    const tracks = document.querySelector("video").textTracks;
    tracks[0].mode = tracks[0].mode === "showing" ? "hidden" : "showing"
    tracks[1].mode = tracks[1].mode === "showing" ? "hidden" : "showing"
}

main()
