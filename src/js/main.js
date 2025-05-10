main();

function main() {
    // Initialize the GL context
    const canvas = document.querySelector("#canvas");
    const gl = canvas.getContext("webgl2");
    if (gl == null) {
        alert("Unable to initalize WebGL");
        return;
    }

    // Set clear color and clear the color buffer
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
}

