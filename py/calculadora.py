print("presione + para sumar")
print("presione - para restar")
print("presione * para multiplicar")
print("presione / para dividir")
print("presione . para salir")
PrimerNumero = float(input("ingresa un numero: "))
segundoNumero = float(input("ingresa otro numero: "))

operacion = input(f"que operacion deseas realizar con {PrimerNumero} y {segundoNumero}: ")
if operacion == "+":
    resultado = PrimerNumero + segundoNumero
    print(f"{resultado}")

elif operacion == "-":
    resultado = PrimerNumero - segundoNumero
    print(f"{resultado}")

elif operacion == "*":
    resultado = PrimerNumero * segundoNumero
    print(f"{resultado}")

elif operacion == "/":
    resultado = PrimerNumero / segundoNumero
    print(f"{resultado}")

elif operacion == ".":
    print("ha salido del programa")
else:
    print("no ha seleccionado ninguna accion disponible")

operacion = input(f"Desea realizar otra operacion con {PrimerNumero} y {segundoNumero}?: ")

if operacion == "s":
    operacion = input(f"que operacion deseas realizar con {PrimerNumero} y {segundoNumero}: ")
    if operacion == "+":
        resultado = PrimerNumero + segundoNumero
        print(f"{resultado}")

    elif operacion == "-":
        resultado = PrimerNumero - segundoNumero
        print(f"{resultado}")

    elif operacion == "*":
        resultado = PrimerNumero * segundoNumero
        print(f"{resultado}")

    elif operacion == "/":
        resultado = PrimerNumero / segundoNumero
        print(f"{resultado}")

    elif operacion == ".":
        print("ha salido del programa")
    else:
        print("no ha seleccionado ninguna accion disponible")

if operacion == "n":
    print("que tenga buen dia")

print("que tenga buen dia")

