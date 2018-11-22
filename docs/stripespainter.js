registerPaint("stripes", class {
    static get inputProperties() {
        return ["--line-color", "--line-thickness", "--line-interval"]
    }
    paint(ctx, geom, properties) {
        const lineColor = properties.get("--line-color").toString() || "#000000";
        let lineThickness, lineInterval;
        try {
            lineThickness = parseFloat(properties.get("--line-thickness").toString()) || 1;
            lineInterval = parseFloat(properties.get("--line-interval").toString()) || 1;
        } catch (e) {
            lineThickness = 1;
            lineInterval = 1;
        }
        const lineSpan = lineThickness + lineInterval;
        const numberOflines = Math.ceil(geom.height / lineSpan)
        for (let index=0; index < numberOflines; index++) {
            ctx.beginPath();
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = lineThickness / 2;
            ctx.lineCap = "round";
            const y = ( index * lineSpan );
            ctx.moveTo(0, y );
            ctx.lineTo(geom.width,y);
            ctx.stroke();
        }
    }
})