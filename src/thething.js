if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule(
        new URL('stripespainter.js', import.meta.url)
    );
}