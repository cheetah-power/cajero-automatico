let cuentas = [
    { nombre: "Mali", saldo: 200, password: "1903" },
    { nombre: "Gera", saldo: 290, password: "4372" },
    { nombre: "Maui", saldo: 67, password: "1759" }
];

function consultarSaldo() {
    let cuenta = cuentas[document.getElementById('cuentas').value];
    let password = prompt("Ingrese su contraseña");
    if(password === cuenta.password) {
        document.getElementById('resultado').innerHTML = "El saldo de " + cuenta.nombre + " es $" + cuenta.saldo;
    } else {
        alert("Contraseña incorrecta");
    }
}

function ingresarMonto() {
    let cuenta = cuentas[document.getElementById('cuentas').value];
    let password = prompt("Ingrese su contraseña");
    if(password === cuenta.password) {
        let monto = prompt("Ingrese el monto a depositar");
        if(cuenta.saldo + parseInt(monto) > 990) {
            alert("No puedes tener más de $990 en tu cuenta");
        } else {
            cuenta.saldo += parseInt(monto);
            document.getElementById('resultado').innerHTML = "Has depositado $" + monto + ". Tu nuevo saldo es $" + cuenta.saldo;
        }
    } else {
        alert("Contraseña incorrecta");
    }
}

function retirarMonto() {
    let cuenta = cuentas[document.getElementById('cuentas').value];
    let password = prompt("Ingrese su contraseña");
    if(password === cuenta.password) {
        let monto = prompt("Ingrese el monto a retirar");
        if(cuenta.saldo - parseInt(monto) < 10) {
            alert("No puedes tener menos de $10 en tu cuenta");
        } else {
            cuenta.saldo -= parseInt(monto);
            document.getElementById('resultado').innerHTML = "Has retirado $" + monto + ". Tu nuevo saldo es $" + cuenta.saldo;
        }
    } else {
        alert("Contraseña incorrecta");
    }
}

