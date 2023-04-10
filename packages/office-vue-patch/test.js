function test() {
    let scripts = ['http://localhost:5174/@vite/client', 'http://localhost:5174/src/main.ts'];
    scripts.forEach(src => {
        let script = document.createElement('script');
        script.src = src;
        script.type = 'module';
        document.body.append(script)
    })
}