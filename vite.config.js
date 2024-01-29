
export default {
    root: 'src',
    build: {
        outDir: '../dist',
        rollupOptions: {
            input: {
                home: 'src/index.html',
                about: 'src/about.html',
                'blog/how-to-flirt': 'src/blog/how-to-flirt.html'
            }
        }
    },
    base: '/vite-practice/',
};