import re 
import random
from modulo_funcs import consulta, prestar, devolver, comprar, consultar_libro

def get_response(input_user):
    words = input_user.lower().split()
    if not words:
        return unknown()
    command = words[0]
    commands = {
        'consultar': consulta,
        'prestar': prestar,
        'devolver': devolver,
        'comprar': comprar,
        'info': consultar_libro
    }
    if command in commands:
        if command == 'info':
            if len(words) > 1:
                titulo = ' '.join(words[1:]).upper()
                consultar_libro(titulo)
            else:
                return 'Por favor, escribe "info" seguido del título del libro.\nEjemplo: info IT'
        else:
            commands[command]()
        return f'Comando {command} ejecutado correctamente'

    splited = re.split(r'\s|[,:;.?!-_@]\s*', input_user.lower())
    response = check_all_messages(splited)
    return response

def msg_probability(user_msg, recognized_words, single_response=False, required_words=[]):
    msg_certainty = 0
    has_required_words = True
    for word in user_msg:
        if word in recognized_words:
            msg_certainty += 1
    pergentage = float(msg_certainty) / float(len(user_msg))
    for word in required_words:
        if word not in user_msg:
            has_required_words = False
            break
    if has_required_words or single_response:
        return int(pergentage * 100)
    else:
        return 0

def check_all_messages(msg):
    highest_prob = {}

    def response(bot_responses, list_of_words, single_response=False, required_words=[]):
        nonlocal highest_prob
        responses = bot_responses if isinstance(bot_responses, list) else [bot_responses]
        highest_prob[tuple(responses)] = msg_probability(msg, list_of_words, single_response, required_words)
    response('''
        🤖 Comandos disponibles:
        📚 consultar - Ver todos los libros
        📖 prestar - Prestar un libro
        ↩️  devolver - Devolver un libro
        💰 comprar - Comprar un libro
        ℹ️  info (título) - Ver información de un libro
    ''', ['ayuda', 'comandos', 'opciones', 'help', 'ayudame'], single_response=True)
    response([
        '👋 ¡Hola! ¿Cómo puedo ayudarte?',
        '¡Hola! ¿En qué puedo servirte hoy? 😊',
        '¡Saludos! ¿Qué necesitas? 🌟',
        '¡Bienvenido! ¿En qué te puedo ayudar? 🤝',
        'Habla causa, ¿en qué estás? 🤔'
    ], ['hola', 'saludos', 'buenas'], single_response=True)
    response('📍 Estamos ubicados en Senati Chiclayo', ['donde', 'ubicados', 'direccion', 'ubicacion'], single_response=True)
    response([
        '😊 ¡Siempre a tus órdenes!',
        '¡No hay de qué! 🌟',
        '¡Es un placer ayudarte! 💫',
        '¡Para eso estamos! 🤝'
    ], ['gracias', 'agradezco', 'thanks'], single_response=True)
    response('Para ver los libros disponibles, escribe "consultar"', ['libros', 'consulta', 'ver', 'disponibles'], required_words=['consultar'])
    response('Para prestar un libro, escribe "prestar"', ['prestar', 'tomar', 'libro', 'prestado'], required_words=['prestar'])
    response('Para devolver un libro, escribe "devolver"', ['devolver', 'regresar', 'libro'], required_words=['devolver'])
    response('Para comprar un libro, escribe "comprar"', ['comprar', 'adquirir', 'libro'], required_words=['comprar'])
    response('Para ver la información de un libro, escribe "info (nombre del libro deseado)"', ['info', 'informacion', 'detalles', 'libro'], required_words=['info'])
    response([
        'Estoy bien, gracias'
        '¡Estoy genial! 😊',
        '¡Todo bien! ¿Y tú? 🌟',
        'Todo bacán, mano 🤝',
        'Chévere, mi king 👑'
    ], ['como', 'estas', 'te', 'vas', 'tal', 'que', 'onda', 'encuentras'], single_response=True)
    response('GAAAAAAAAA 👻', ['ga', 'gaaaa', 'bota tu ga'], single_response=True)
    response([
        'Go Left 👻',
        'Go leftsito 👻',
        'Sale su left 👻',
        'Left, mano 👻'
    ], ['left', 'lefas', 'go', 'L4D2', 'l4d2'], single_response=True)
    response('🤖 Soy un bot creado por Diego, como ejercicio en Senati', ['quien', 'eres', 'creador', 'bot'], single_response=True)
    response([
        'Yo también te quiero 😊',
        '¡Yo también te quiero, humano! 🌟',
        '¡Yo también te amo, mano! 🤝',
        'Yo también causa',
        '😳'
    ], ['te', 'quiero', 'amo'], single_response=True)
    response([
        'Por qué me dices eso, mi king 😢',
        '¡No me hables así! 😭',
        '¡Eso duele! 😢',
        '¡Perdóname por nacer! 😭',
        '😿'
    ], ['te', 'odio'], required_words=['odio'])
    

    best_match = max(highest_prob, key=highest_prob.get)
    if highest_prob[best_match] < 1:
        return unknown()
    return random.choice(list(best_match))

def unknown():
    responses = [
        '❓ ¿Puedes decirlo de nuevo?',
        '😕 No estoy seguro de lo que quieres decir',
        '🤔 No entiendo lo que dices',
        '🤨 ¿Podrías reformular tu pregunta?',
        '😅 No logro entender, ¿podrías ser más específico?'
    ]
    return random.choice(responses)

if __name__ == '__main__':
    while True:
        print('Bot: '+get_response(input('Tu: ')))