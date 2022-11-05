#comentario linea simple con hashtag

"""
Anotaciones:
comentario multilinea con 3 comillas, contenido entre comillas
pedir informacion: input
parseint(de javascript) en python es solo int
console log(js) se remplaza por print()
"""

"""

"""

#pedir un lado y calcular superficie
"""
Ejemplo de parseado de input que por default es un string

lado = int(input("Ingrese el lado"))
superficie = lado * lado
print(superficie)
"""

"""
ejemplo de ciclo if: se ponen 2 puntos despues del parentesis de condicion. Operadores de comparacion van con texto (or para ||, and para &&). no lleva llaves
la tabulacion indica lo que se lee si se cumple el if. 

nombre = input("Ingrese su nombre")
if (nombre[0] == "e" or nombre[0] == "E"):
    print("tu nombre empieza con E")
    print("Esto cae adentro del if")
print("Esto lo lee aunque no entre al if")

"""
#len = length. upper = toUppercase . lower = toLowercase. Capitalize = primera mayusc, resto minuscula.
"""

nombre = "jose"
print(len(nombre))
"""

"""
recorrer con ciclo for: se declara suma como acumulador. for n donde n es el indice que toma la posicion del ciclo, y numeros el array a recorrer

numeros = [2,6,7,6,2,4]
suma=0
for n in numeros:
    suma+=n
print(suma)
"""

#no se puede concatenar un valor entero a un string. requiere colocar .format para pasar de int a string para concatenarlo.
"""

nombre = "Juan"
edad = 40

#print(nombre + " tiene " + edad + " años") (Ejemplo de JS)

print("{} tiene {} años".format(nombre,edad))
"""

"""se puede llamar un rango de indices del array poniendo 2 puntos, el primer valor incluido y el segundo excluido. 
Si no se pone el segundo, va hasta el final del array. Si no se ponde el primero, va desde el primer indice hasta uno antes del indicado.
"""
lista = [0,1,2,3,4,5,6,7,8,9]
print(lista[:6])