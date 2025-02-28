import pandas as pd
import datetime as dt
df_libros = pd.read_csv('pandas/chatbot/libros.csv')
def consulta():
    print(df_libros.to_string(index=False, justify='center'))
def consultar_libro(titulo):
    if titulo in df_libros['titulo'].values:
        categoria = df_libros.loc[df_libros['titulo'] == titulo, 'categoria'].values[0]
        autor = df_libros.loc[df_libros['titulo'] == titulo, 'autor'].values[0]
        f_edicion = df_libros.loc[df_libros['titulo'] == titulo, 'f_edicion'].values[0]
        estado = df_libros.loc[df_libros['titulo'] == titulo, 'estado'].values[0]
        if estado == 'Prestado':
            prestado_a = df_libros.loc[df_libros['titulo'] == titulo, 'prestado_a'].values[0]
            f_prestamo = df_libros.loc[df_libros['titulo'] == titulo, 'f_prestamo'].values[0]
            f_devolucion = df_libros.loc[df_libros['titulo'] == titulo, 'f_devolucion'].values[0]
            print('📕 Título:', titulo)
            print('📑 Categoría:', categoria)
            print('✍️  Autor:', autor)
            print('📅 Fecha de edición:', f_edicion)
            print('📌 Estado:', estado)
            print('🎯 Prestado a:', prestado_a)
            print('📅 Fecha de préstamo:', f_prestamo)
            print('📅 Fecha de devolución:', f_devolucion)
        elif estado == 'Vendido':
            precio = df_libros.loc[df_libros['titulo'] == titulo, 'precio'].values[0]
            f_venta = df_libros.loc[df_libros['titulo'] == titulo, 'f_venta'].values[0]
            print('📕 Título:', titulo)
            print('📑 Categoría:', categoria)
            print('✍️  Autor:', autor)
            print('📅 Fecha de edición:', f_edicion)
            print('📌 Estado:', estado)
            print('💵 Precio:', precio)
            print('📅 Fecha de venta:', f_venta)
        else:
            print('📕 Título:', titulo)
            print('📑 Categoría:', categoria)
            print('✍️  Autor:', autor)
            print('📅 Fecha de edición:', f_edicion)
            print('📌 Estado:', estado)
    else:
        print('El libro no se encuentra en la biblioteca')
def prestar():
    print('\n=== 📖 Préstamo de Libro ===')
    titulo = input('📕 Ingrese el título del libro: ').upper()
    if titulo in df_libros['titulo'].values:
        estado = df_libros.loc[df_libros['titulo'] == titulo, 'estado'].values[0]
        if estado == 'Disponible':
            df_libros.loc[df_libros['titulo'] == titulo, 'estado'] = 'Prestado'
            df_libros.loc[df_libros['titulo'] == titulo, 'prestado_a'] = input('Ingrese su nombre: ').upper()
            df_libros.loc[df_libros['titulo'] == titulo, 'f_prestamo'] = dt.datetime.now().strftime('%d-%m-%Y')
            df_libros.loc[df_libros['titulo'] == titulo, 'f_devolucion'] = (dt.datetime.now() + dt.timedelta(days=7)).strftime('%d-%m-%Y')
            print('\n=== ✅ Préstamo Exitoso ===')
            print(f'📅 Fecha de préstamo: {dt.datetime.now().strftime('%d-%m-%Y')}')
            print(f'📅 Fecha de devolución: {(dt.datetime.now() + dt.timedelta(days=7)).strftime('%d-%m-%Y')}')
            print('⚠️  Recuerde devolver el libro a tiempo')
        else:
            print('❌ El libro no está disponible')
            return
    else:
        print('❌ El libro no se encuentra en la biblioteca')

def devolver():
    print('\n=== ↩️  Devolución de Libro ===')
    titulo = input('📕 Ingrese el título del libro: ').upper()
    if titulo in df_libros['titulo'].values:
        estado = df_libros.loc[df_libros['titulo'] == titulo, 'estado'].values[0]
        if estado == 'Prestado':
            nombre = input('Ingrese su nombre: ').upper()
            if nombre == df_libros.loc[df_libros['titulo'] == titulo, 'prestado_a'].values[0]:
                hoy = dt.datetime.now()
                f_devolucion = dt.datetime.strptime(df_libros.loc[df_libros['titulo'] == titulo, 'f_devolucion'].values[0], '%d-%m-%Y')
                f_prestamo = dt.datetime.strptime(df_libros.loc[df_libros['titulo'] == titulo, 'f_prestamo'].values[0], '%d-%m-%Y')
                if hoy > f_devolucion:
                    print('El libro está atrasado, debe pagar una multa')
                    return
                elif hoy.date() == f_prestamo.date():
                    print('El libro se devolvió el mismo día, que veloz')
                df_libros.loc[df_libros['titulo'] == titulo, 'estado'] = 'Disponible'
                df_libros.loc[df_libros['titulo'] == titulo, 'prestado_a'] = None
                df_libros.loc[df_libros['titulo'] == titulo, 'f_prestamo'] = None
                df_libros.loc[df_libros['titulo'] == titulo, 'f_devolucion'] = None
                print('\n=== ✅ Devolución Exitosa ===')
                print(f'📅 Fecha de devolución: {hoy.strftime('%d-%m-%Y, %H:%M')}')
            else:
                print('❌ El libro no está prestado a su nombre')
                return
        else:
            print('❌ El libro no está prestado')
            return
    else:
        print('❌ El libro no se encuentra en la biblioteca')

def comprar():
    print('\n=== 💰 Compra de Libro ===')
    titulo = input('📕 Ingrese el título del libro: ').upper()
    if titulo in df_libros['titulo'].values:
        estado = df_libros.loc[df_libros['titulo'] == titulo, 'estado'].values[0]
        if estado == 'Disponible':
            precio = df_libros.loc[df_libros['titulo'] == titulo, 'precio'].values[0]
            print(f'💵 Precio: S/. {precio:.2f}')
            dinero = float(input('💸 Ingrese el monto: '))
            if dinero < precio:
                print('❌ El monto es insuficiente')
                return
            elif dinero > precio:
                print(f'🔄 Su vuelto es: S/. {dinero - precio:.2f}')
            df_libros.loc[df_libros['titulo'] == titulo, 'estado'] = 'Vendido'
            df_libros.loc[df_libros['titulo'] == titulo, 'f_venta'] = dt.datetime.now().strftime('%d-%m-%Y')
            print('\n=== ✅ Compra Exitosa ===')
            print(f'📅 Fecha de compra: {dt.datetime.now().strftime("%d-%m-%Y")}')
        else:
            print('❌ El libro no está disponible')
            return
    else:
        print('❌ El libro no se encuentra en la biblioteca')
