from module_cajero import *

def menu():
    while True:
        print('\nMenú de Opciones:')
        print("1. 📝 Crear cuenta")
        print("2. 💸 Retirar dinero")
        print("3. 💰 Ingresar dinero")
        print("4. 📊 Ver estado de cuenta")
        print('5. 📈 Ver estadísticas de transacciones')
        print('6. 📈 Ver resumen de montos')
        print('7. 📈 Ver evolución temporal')
        print("8. 🚪 Salir")
        
        opc = input('Seleccione una opción (1-5):\n')
        
        if opc == '1': crear_cuenta()
        elif opc == '2': retirar_dinero()
        elif opc == '3': ingresar_dinero()
        elif opc == '4': revisar_cuenta()
        elif opc == '5': 
            dni = input('Ingrese el DNI:\n')
            operations_stats(dni)
        elif opc == '6': 
            dni = input('Ingrese el DNI:\n')
            transaction_summary(dni)
        elif opc == '7': 
            dni = input('Ingrese el DNI:\n')
            transactions_timeline(dni)
        elif opc == '8':
            if input('¿Confirmar salida? (s/n):\n').lower() == 's':
                print('Gracias por usar nuestro sistema')
                break
        else:
            print('Opción inválida')

if __name__ == '__main__':
    menu()