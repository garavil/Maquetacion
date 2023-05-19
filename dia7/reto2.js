jQuery(() => {
    let total= 0
    let price1 = 20
    let price2 = 18
    let price3 = 12
    let price4 = 22
    $("#boton1").on("click", ()=>{
        total += price1
        $("#suma").append('<p>PRENDA: Pantalón suelto 20</p>')
        

    });
    $("#boton2").on("click", ()=>{
        total += price2
        $("#suma").append('<p>PRENDA: Vestido túnico 18</p>')
        
    });
    $("#boton3").on("click", ()=>{
        total += price3
        $("#suma").append('<p>PRENDA: Falda Mid 12</p>')
           
    });
    $("#boton4").on("click", ()=>{
        total += price4
        $("#suma").append('<p>PRENDA: Cardigan Rayas 22</p>') 
         
    });
    $("#boton5").on("click", ()=>{
        total += price3
        $("#suma").append('<p>PRENDA: Falda mini 12</p>')  
        
    });
    $("#boton6").on("click", ()=>{
        total += price2 
        $("#suma").append('<p>PRENDA: Mono 18</p>') 
        
    });
    $("#boton7").on("click", ()=>{
        total += price1  
        $("#suma").append('<p>PRENDA: Vestido jersey 20</p>')
        
    });
    $("#boton8").on("click", ()=>{
        total += price4 
        $("#suma").append('<p>PRENDA: Pantalón talle alto 22</p>')
        
    });
    $('#carrito').on('click', ()=>{
        $("#total").append(total) 
    }
    )
    
    
})