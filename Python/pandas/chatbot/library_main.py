import IA1 as bot
from modulo_funcs import consulta, prestar, devolver, comprar, consultar_libro
def login():
    att = 3
    print('\n=== 🔐 Inicio de Sesión 🔐 ===')
    usuario = input('👤 Usuario: ')
    contrasena = input('🔑 Contraseña: ')
    while att > 1:
        if usuario == 'admin' and contrasena == 'admin':
            return True
        else:
            print('Usuario o contraseña incorrectos')
            att -= 1
            print('Intentos restantes:', att)
            usuario = input('Usuario: ')
            contrasena = input('Contraseña: ')
    if att == 0:
        return False
    
def inicio():
    print('\n=== 📚 Bienvenido a la Biblioteca Virtual 📚 ===')
    print('\nPor favor, seleccione una opción:')
    print('1. 🔐 Iniciar sesión')
    print('2. 🤖 Chatbot')
    opc = input('\n➜ Opción: ')
    if opc == '1':    
        if login():
            print('Sesión iniciada correctamente')
            menu()
        else:
            print('Usuario o contraseña incorrectos')
    elif opc == '2':
        print("Chatbot iniciado (escribe 'salir' para terminar)")
        while True:
            user_input = input('Tu: ')
            if user_input.lower() == 'salir':
                print('Chatbot finalizado')
                inicio()
            print('Bot:', bot.get_response(user_input))
    else:
        print('Opción incorrecta')
def menu():
    while True:
        print('\n=== 📋 Menú Principal 📋 ===')
        print('1. 📚 Consultar libros')
        print('2. 📖 Prestar libro')
        print('3. ↩️  Devolver libro')
        print('4. 💰 Comprar libro')
        print('5. ℹ️  Ver info de un libro')
        print('6. 🚪 Salir')
        opc = input('\n➜ Opción: ')
        if opc == '1':
            consulta()
        elif opc == '2':
            prestar()
        elif opc == '3':
            devolver()
        elif opc == '4':
            comprar()
        elif opc == '5':
            titulo = input('Ingrese el título del libro: ').upper()
            consultar_libro(titulo)
        elif opc == '6':
            print('Realmente desea salir? (s/n)')
            opx = input('Opción: ')
            if opx == 's':
                inicio()
if __name__ == '__main__':
    inicio()