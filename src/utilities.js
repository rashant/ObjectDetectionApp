export const drawRect=(detections,ctx)=>{
    detections.forEach(prediction=>{
        //get prediction results
        const [x,y,width,height]=prediction['bbox'];
        const text=prediction['class'];
        const confidence=prediction['score'];

        //set styling
        const color='#'+Math.floor(Math.random()*17777215).toString(16);
        ctx.strokeStyle=color
        ctx.font="18px Arial"
        ctx.fillStyle=color

        //draw rectangles and text
        ctx.beginPath()
        ctx.fillText(text,x,y)
        ctx.fillText(confidence,x,y+20)
        ctx.rect(x,y,width,height)
        ctx.stroke()
    })
}