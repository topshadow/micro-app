function loadScripts() {
    // alert('load script')
    let srcs = ['http://localhost:5173/@vite/client', 'http://localhost:5173/src/main.ts?t=1681156338789'];
    srcs.forEach(src => {
        let script = document.createElement('script');
        script.src = src;
        script.type = 'module';
        document.body.append(script)
    });
    window.envirment = 'office'
}
loadScripts();