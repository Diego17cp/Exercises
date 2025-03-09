import nltk
# nltk.download('punkt_tab')        # Para tokenización
# nltk.download('stopwords')    # Lista de palabras irrelevantes
# nltk.download('wordnet')      # Para lematización
# nltk.download('averaged_perceptron_tagger_eng')  # Etiquetado gramatical
# nltk.download('maxent_ne_chunker_tab')  # Para reconocimiento de entidades
# nltk.download('words') # Base para reconocimiento de entidades

# Para tokenización
from nltk.tokenize import word_tokenize, sent_tokenize
# Para stopwords
from nltk.corpus import stopwords
# Para lematización
from nltk.stem import WordNetLemmatizer
# Para etiquetado gramatical
from nltk import pos_tag
# Para reconocimiento de entidades
from nltk import ne_chunk

# Tokenización
texto = "Hola, ¿cómo estás? Espero que estés bien. ¡Nos vemos pronto!"
print('Texto:', texto)
tokens = sent_tokenize(texto)
print('Oraciones:', tokens)
palabras = word_tokenize(texto)
print("Palabras:", palabras)

print("\n", "-"*50, "\n")

# Stopwords
texto = "Este es un ejemplo de eliminación de palabras irrelevantes en español."
print("Texto original:", texto)
palabras = word_tokenize(texto)
stop_words = set(stopwords.words('spanish'))
palabras_filtradas = [word for word in palabras if word.lower() not in stop_words]
print("Texto filtrado:", palabras_filtradas)

print("\n", "-"*50, "\n")
# Solo en inglés de forma nativa 
# Lematización
lemmatizer = WordNetLemmatizer()

palabras = ["running", "flies", "better"]
for palabra in palabras:
    print(f"{palabra} → {lemmatizer.lemmatize(palabra, pos='v')}")

print("\n", "-"*50, "\n")

# Etiquetado gramatical
texto = "The quick brown fox jumps over the lazy dog"
print("Texto:", texto)
palabras = word_tokenize(texto)
print("Palabras:", palabras)
etiquetas = pos_tag(palabras)
print("Etiquetado gramatical:", etiquetas)

print("\n", "-"*50, "\n")

# Reconocimiento de entidades
texto = "Barack Obama was the president of the United States."
print("Texto:", texto)
palabras = word_tokenize(texto)
etiquetas = pos_tag(palabras)
entidades = ne_chunk(etiquetas)
print("Entidades:", entidades)