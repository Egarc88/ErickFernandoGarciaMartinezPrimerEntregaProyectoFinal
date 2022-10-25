let usuario = (prompt('Hola Bienvenido de Nuevo a Expertos en Carnes Ingresa tu Usuario.'))
let password = parseInt(prompt('Bienvenido a Expertos en Carnes Ingresa tu password.'))
let producto = parseInt(prompt(`Bienvenido ${usuario}! Que deseas comprar el dia de hoy? 1. Res - 2. Cerdo - 3. Mariscos - 4. Otros `))
let seguirComprando = true
let totalCompra = 0
let decision
let totalCompraFinal = 0

while (seguirComprando === true) {
    if (producto === 1) {
        totalCompra = totalCompra + 50
    } else if (producto === 2) {
        totalCompra = totalCompra + 55
    } else if (producto === 3) {
        totalCompra = totalCompra + 60
    } else if (producto === 4) {
        totalCompra = totalCompra + 20
    }

    alert(`${usuario}, tu total hasta ahora es de: ${totalCompra}.`)
    decision = parseInt(prompt(`${usuario} Quieres seguir comprando? 1. Si | 2. No`))

    if (decision === 1) {
        producto = parseInt(prompt(`Muy bien ${usuario}, escoge el producto que deseas comprar ahora: 1. Res | 2. Cerdo| 3. Mariscos| 4. Otros`))
    } else {
        seguirComprando = false
    }
}



totalCompraFinal = parseInt(alert(`${usuario}, el total de tu compra es de ${totalCompraFinal + totalCompra}. Gracias por preferirnos!`))