import matplotlib.pyplot as plt
import pandas as pd
import datetime as dt

df_clientes = pd.read_excel('pandas/cajero/clientes.xlsx', dtype={'dni': str, 'telefono': str, 'contraseña': str})
df_transacciones = pd.read_excel('pandas/cajero/transacciones.xlsx', dtype={'dni': str})
def generar_boleta(tipo, monto, dni):
    fecha = dt.datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    print(f"{'-'*40}")
    print(f"DATOS DE LA TRANSACCIÓN:")
    print(f"Fecha: {fecha}")
    print(f"{'Retiro' if tipo == 'retiro' else 'Depósito'} exitoso")
    print(f"DNI del titular: {dni}")
    print(f"Monto {'retirado' if tipo == 'retiro' else 'depositado'}: S/. {monto}")
    print(f"{'-'*40}")

    nueva_transaccion = {
        'fecha': fecha,
        'dni': dni,
        'tipo': tipo,
        'monto': monto
    }

    global df_transacciones
    df_transacciones = pd.concat([df_transacciones, pd.DataFrame([nueva_transaccion])], ignore_index=True)
    df_transacciones.to_excel('transacciones.xlsx', index=False)
    
def crear_cuenta ():
    global df_clientes
    crear_dni = input('Ingrese el DNI del titular de la cuenta:\n')
    while len(crear_dni) != 8 or not crear_dni.isdigit():
        print('El DNI debe contener 8 dígitos numéricos')
        crear_dni = input('Ingrese nuevamente el DNI: ')
    if crear_dni in df_clientes['dni'].values:
        print('Este DNI ya está registrado')
        return
    edad = int(input('Ingrese la edad del titular: \n'))
    while edad < 18:
        print('El titular debe ser mayor de edad')
        edad = int(input('Ingrese nuevamente la edad: '))
        
    nueva_cuenta = {
        'dni': crear_dni,
        'nombre': input('Ingrese el nombre del titular:\n'),
        'apellido': input('Ingrese los apellidos del titular:\n'),
        'edad': edad,
        'telefono': input('Ingrese el teléfono del titular (9 dígitos):\n'),
        'correo': input('Ingrese el correo del titular:\n'),
        'saldo': 0.0,
        'contraseña': input('Ingrese su contraseña (mín. 8 caracteres): \n')
    }
    
    df_clientes = pd.concat([df_clientes, pd.DataFrame([nueva_cuenta])], ignore_index=True)
    df_clientes.to_excel('clientes.xlsx', index=False)
    print(f"{'-'*30}\nCuenta creada exitosamente\n{'-'*30}")

def retirar_dinero():
    global df_clientes
    dni = input('Ingrese el DNI:\n')
    password = input('Ingrese la contraseña:\n')
    
    cuenta = df_clientes[df_clientes['dni'] == dni]
    if cuenta.empty or cuenta.iloc[0]['contraseña'] != password:
        print('DNI o contraseña incorrectos')
        return
        
    saldo = cuenta.iloc[0]['saldo']
    print(f'Saldo actual: S/. {saldo}')
    
    if saldo <= 0:
        print('Saldo insuficiente')
        return
        
    retiro = float(input('Ingrese monto a retirar:\n'))
    if retiro > 500 or retiro > saldo:
        print('Monto inválido o excede el límite de S/. 500')
        return
        
    if input('Confirmar retiro (s/n):\n').lower() == 's':
        df_clientes.loc[df_clientes['dni'] == dni, 'saldo'] = saldo - retiro
        df_clientes.to_excel('clientes.xlsx', index=False)
        generar_boleta('retiro', retiro, dni)

def ingresar_dinero():
    global df_clientes
    dni = input('Ingrese el DNI:\n')
    password = input('Ingrese la contraseña:\n')
    
    cuenta = df_clientes[df_clientes['dni'] == dni]
    if cuenta.empty or cuenta.iloc[0]['contraseña'] != password:
        print('DNI o contraseña incorrectos')
        return
        
    deposito = float(input('Ingrese monto a depositar:\n'))
    while deposito <= 0:
        print('Ingrese un monto válido')
        deposito = float(input('Ingrese monto a depositar:\n'))
    
    df_clientes.loc[df_clientes['dni'] == dni, 'saldo'] += deposito
    df_clientes.to_excel('clientes.xlsx', index=False)
    generar_boleta('deposito', deposito, dni)

def revisar_cuenta():
    dni = input('Ingrese el DNI:\n')
    cuenta = df_clientes[df_clientes['dni'] == dni]
    
    if cuenta.empty:
        print('Cuenta no encontrada')
        return
    
    cuenta = cuenta.iloc[0]
    print(f"{'-'*40}")
    print('DATOS DE LA CUENTA:')
    print(f"DNI: {cuenta['dni']}")
    print(f"Titular: {cuenta['apellido'].upper()}, {cuenta['nombre'].upper()}")
    print(f"Saldo: S/. {cuenta['saldo']}")
    print(f"{'-'*40}")

def operations_stats(dni):
    global df_transacciones
    transacciones = df_transacciones[df_transacciones['dni'] == dni]

    if transacciones.empty:
        print(f"No se encontraron transacciones para el DNI: {dni}")
        return
    tipos = transacciones['tipo'].value_counts()
    
    plt.figure(figsize=(6, 6))
    plt.pie(tipos, labels=tipos.index, autopct='%1.1f%%', startangle=140)
    plt.title(f'Transacciones de {dni}')
    plt.show()

def transaction_summary(dni):
    global df_transacciones
    transacciones = df_transacciones[df_transacciones['dni'] == dni]
    if transacciones.empty:
        print(f"No se encontraron transacciones para el DNI: {dni}")
        return
    resumen = transacciones.groupby('tipo')['monto'].sum()
    plt.figure(figsize=(8, 6))
    resumen.plot(kind='bar')
    plt.title(f'Resumen de Transacciones - DNI: {dni}')
    plt.xlabel('Tipo de Transacción')
    plt.ylabel('Monto Total (S/.)')
    plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()

def transactions_timeline(dni):
    global df_transacciones
    transacciones = df_transacciones[df_transacciones['dni'] == dni]
    if transacciones.empty:
        print(f"No se encontraron transacciones para el DNI: {dni}")
        return
    transacciones['fecha'] = pd.to_datetime(transacciones['fecha'])
    transacciones = transacciones.sort_values('fecha')
    plt.figure(figsize=(10, 6))
    for tipo in ['retiro', 'deposito']:
        datos = transacciones[transacciones['tipo'] == tipo]
        plt.plot(datos['monto'], datos['fecha'], 'o-', label=tipo.capitalize())
    plt.title(f'Evolución de Transacciones - DNI: {dni}')
    plt.xlabel('Fecha')
    plt.ylabel('Monto (S/.)')
    plt.legend()
    # plt.xticks(rotation=45)
    plt.tight_layout()
    plt.show()